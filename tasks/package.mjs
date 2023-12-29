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
    },
  })

  return {
    verbose: values.verbose,
  }
}

async function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  // Intro
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log(chalk.bold('Studio: Package'))
  console.log()
  console.log('This script will build and package up studio.')
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log()

  // Parse options
  let options
  try {
    options = await parseArgs()
  } catch (e) {
    console.error(e.message)
    process.exitCode = 1
    return
  }

  const { verbose } = options
  $.verbose = verbose

  const spinner = ora()

  // Build the project
  if (!verbose) {
    spinner.start('Building project...')
  }
  const { stderr, exitCode } = await $`yarn rw build`
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
  const studioDir = path.join(__dirname, '..')
  if (!verbose) {
    spinner.start('Copying over API files...')
  }
  fs.copySync(
    path.join(studioDir, 'api', 'dist'),
    path.join(packagedDir, 'api', 'dist')
  )
  if (!verbose) {
    spinner.succeed('API files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over web files...')
  }
  fs.copySync(
    path.join(studioDir, 'web', 'dist'),
    path.join(packagedDir, 'web', 'dist')
  )
  if (!verbose) {
    spinner.succeed('Web files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over db files...')
  }
  fs.copySync(
    path.join(studioDir, 'api', 'db'),
    path.join(packagedDir, 'api', 'db')
  )
  if (!verbose) {
    spinner.succeed('DB files copied!')
  }

  if (!verbose) {
    spinner.start('Copying over misc files...')
  }
  fs.copySync(
    path.join(studioDir, 'redwood.toml'),
    path.join(packagedDir, 'redwood.toml')
  )
  if (!verbose) {
    spinner.succeed('Misc files copied!')
  }

  // Set dependencies
  if (!verbose) {
    spinner.start('Setting dependencies...')
  }
  const apiDependencies = fs.readJSONSync(
    path.join(studioDir, 'api', 'package.json')
  ).dependencies
  fs.writeJSONSync(
    path.join(packagedDir, 'package.json'),
    {
      name: '@redwoodjs/studio',
      bin: {
        'rw-studio': './api/dist/server.js',
      },
      dependencies: {
        ...apiDependencies,
      },
      prisma: {
        seed: './api/dist/lib/seed.js',
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
}

main().catch((err) => {
  console.error(chalk.red(err))
  process.exit(1)
})
