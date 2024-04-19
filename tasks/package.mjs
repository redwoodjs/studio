#!/usr/bin/env node
/* eslint-env node */

import { fileURLToPath } from 'node:url'
import { parseArgs as nodeUtilParseArgs } from 'node:util'

import ora from 'ora'
import { chalk, fs, path, $ } from 'zx'

async function parseArgs() {
  const { values } = nodeUtilParseArgs({
    allowPositionals: false,
    options: {
      verbose: {
        type: 'boolean',
        default: false,
        short: 'v',
      },
      release: {
        type: 'boolean',
        default: false,
        short: 'r',
      },
    },
  })

  return {
    verbose: values.verbose,
    release: values.release,
  }
}

async function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  // Parse options
  let options
  try {
    options = await parseArgs()
  } catch (e) {
    console.error(e.message)
    process.exitCode = 1
    return
  }

  const { verbose, release } = options
  $.verbose = verbose
  const studioPath = path.join(__dirname, '..')
  const rootPackageJson = fs.readJSONSync(path.join(studioPath, 'package.json'))
  const studioRwVersion = rootPackageJson.devDependencies['@redwoodjs/core']
  const testProjectPath = path.join(
    __dirname,
    '..',
    '__fixtures__',
    'test-project'
  )

  const spinner = ora()

  // Intro
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log(
    chalk.bold('Studio: Package for ' + (release ? 'Release' : 'Development'))
  )
  console.log()
  console.log('This script will build and package up studio.')
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log()

  if (!release) {
    spinner.start('Asserting matching RW versions...')
    // exits on mismatched versions
    assertMatchingRwVersions(testProjectPath, studioPath, studioRwVersion)
    spinner.succeed('Matching RW versions!')
  }

  // Build the project
  if (!verbose) {
    spinner.start('Building project...')
  }
  const { stderr, exitCode } = await $`yarn rw build --no-prerender`
  if (exitCode !== 0) {
    spinner.fail('Project build failed!')
    console.log(chalk.redBright(stderr))
    process.exit(exitCode)
  }
  if (!verbose) {
    spinner.succeed('Project built successfully!')
  }

  // Clear existing packaged directory
  if (!verbose) {
    spinner.start('Clearing packaged directory...')
  }
  const packagedDir = path.join(__dirname, '..', 'packaged')
  if (fs.existsSync(packagedDir)) {
    fs.rmSync(packagedDir, { recursive: true, force: true })
  } else {
    fs.mkdirSync(packagedDir)
  }
  if (!verbose) {
    spinner.succeed('Packaged directory cleared!')
  }

  // Copy over files
  if (!verbose) {
    spinner.start('Copying over API files...')
  }
  fs.copySync(
    path.join(studioPath, 'api', 'dist'),
    path.join(packagedDir, 'api', 'dist')
  )
  if (!verbose) {
    spinner.succeed('API files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over web files...')
  }
  fs.copySync(
    path.join(studioPath, 'web', 'dist'),
    path.join(packagedDir, 'web', 'dist')
  )

  const indexHTMLPath = path.join(packagedDir, 'web', 'dist', 'index.html')
  const original = fs.readFileSync(indexHTMLPath, {
    encoding: 'utf8',
    flag: 'r',
  })
  const modified = original.replaceAll(
    '__RW_STUDIO_VERSION__',
    'v' + rootPackageJson.version
  )
  fs.writeFileSync(indexHTMLPath, modified)

  const twoHundredHtmlPath = path.join(packagedDir, 'web', 'dist', '200.html')
  if (fs.existsSync(twoHundredHtmlPath)) {
    const original200 = fs.readFileSync(twoHundredHtmlPath, {
      encoding: 'utf8',
      flag: 'r',
    })
    const modified200 = original200.replaceAll(
      '__RW_STUDIO_VERSION__',
      'v' + rootPackageJson.version
    )
    fs.writeFileSync(twoHundredHtmlPath, modified200)
  }

  if (!verbose) {
    spinner.succeed('Web files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over db files...')
  }
  fs.mkdirSync(path.join(packagedDir, 'api', 'db'), { recursive: true })
  fs.copySync(
    path.join(studioPath, 'api', 'db', 'schema.prisma'),
    path.join(packagedDir, 'api', 'db', 'schema.prisma')
  )
  fs.copySync(
    path.join(studioPath, 'api', 'db', 'migrations'),
    path.join(packagedDir, 'api', 'db', 'migrations')
  )
  if (!verbose) {
    spinner.succeed('DB files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over misc files...')
  }
  fs.copySync(
    path.join(studioPath, 'redwood.toml'),
    path.join(packagedDir, 'redwood.toml')
  )
  if (!verbose) {
    spinner.succeed('Misc files copied!')
  }

  // Set dependencies
  if (!verbose) {
    spinner.start('Setting dependencies...')
  }

  const apiPackageJson = fs.readJSONSync(
    path.join(studioPath, 'api', 'package.json')
  )

  // Note that we're not adding any @redwoodjs packages to the list of
  // dependencies in the package.json file. We want to reuse the version of RW
  // the user already has, not install another version nested inside the
  // node_modules folder of Studio in the user's project.
  //
  // We don't expect users to manually install Studio using their package
  // manager. Instead, we expect them to just run it using `yarn rw studio`,
  // and that script will install it on the first run. So we'll make sure
  // that script also installs any additional @redwoodjs packages that are
  // needed, using the same version as other RW pages already installed.
  fs.writeJSONSync(
    path.join(packagedDir, 'package.json'),
    {
      name: '@redwoodjs/studio',
      version: rootPackageJson.version,
      description: "Redwood's development studio",
      repository: {
        type: 'git',
        url: 'git+https://github.com/redwoodjs/studio.git',
      },
      license: 'MIT',
      main: 'api/dist/server.js',
      files: ['api', 'web', 'redwood.toml'],
      bin: {
        'rw-studio': 'api/dist/bin/rw-studio.js',
      },
      dependencies: {
        // Filter out @redwoodjs packages
        ...Object.entries(apiPackageJson.dependencies).reduce(
          (dependencies, [packageName, version]) => {
            if (!packageName.startsWith('@redwoodjs/')) {
              dependencies[packageName] = version
            }

            return dependencies
          },
          {}
        ),
      },
    },
    { spaces: 2 }
  )
  fs.writeFileSync(path.join(packagedDir, 'yarn.lock'), '')
  if (!verbose) {
    spinner.succeed('Set dependencies!')
  }

  // Create archive
  const archivePath = path.join(__dirname, '..', 'packaged.tgz')
  if (!verbose) {
    spinner.start('Creating archive...')
  }
  if (fs.existsSync(archivePath)) {
    fs.rmSync(archivePath)
  }
  $.cwd = packagedDir
  await $`yarn pack -o ${archivePath}`
  $.cwd = undefined
  if (!verbose) {
    spinner.succeed('Archive created!')
  }

  if (release) {
    // The rest of the steps in this file are only needed for local dev, not
    // for doing a release
    return
  }

  // Yarn install in the test-project
  $.cwd = testProjectPath

  if (!verbose) {
    spinner.start('Running yarn...')
  }
  // There needs to be a yarn.lock file in the root of the fixture
  // test-project, otherwise yarn will walk up the directory tree and find the
  // yarn.lock file in the root of the Studio project and get confused
  await $`touch yarn.lock`
  await $`yarn`
  if (!verbose) {
    spinner.succeed("Yarn'd!")
  }

  // Studio needs @redwoodjs/realtime. The test project doesn't use it itself,
  // so we manually install it. Normally this is handled by `yarn rw studio`
  if (!verbose) {
    spinner.start("Adding @redwoodjs/realtime, as it's used by Studio...")
  }
  await $`yarn add @redwoodjs/realtime@${studioRwVersion}`
  if (!verbose) {
    spinner.succeed(`@redwoodjs/realtime@${studioRwVersion} added!`)
  }

  $.cwd = undefined
}

main().catch((err) => {
  console.error(chalk.red(err))
  process.exit(1)
})

function assertMatchingRwVersions(
  testProjectPath,
  studioPath,
  studioRwVersion
) {
  const testProjectRootPackageJSON = fs.readJSONSync(
    path.join(testProjectPath, 'package.json')
  )

  if (
    testProjectRootPackageJSON.devDependencies['@redwoodjs/core'] !==
    studioRwVersion
  ) {
    console.log(chalk.redBright('RedwoodJS version mismatch!'))
    console.log()
    console.log(
      `RedwoodJS version in ${chalk.bold('package.json')} in ${chalk.bold(
        testProjectPath
      )} is ${chalk.bold(
        testProjectRootPackageJSON.devDependencies['@redwoodjs/core']
      )}, but the version in ${chalk.bold('package.json')} in ${chalk.bold(
        studioPath
      )} is ${chalk.bold(studioRwVersion)}.`
    )
    console.log()
    console.log(
      `Please update the RedwoodJS version in ${chalk.bold(
        'package.json'
      )} in ${chalk.bold(testProjectPath)} to match the version in ${chalk.bold(
        'package.json'
      )} in ${chalk.bold(studioPath)}`
    )
    console.log()
    process.exit(1)
  }
}
