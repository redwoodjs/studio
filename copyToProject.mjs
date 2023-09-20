import fs from 'fs-extra'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import execa from 'execa'

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main(){
  const cwd = __dirname
  const hr = '~'.repeat(process.stdout.columns)

  console.log(`${hr}\nBuilding project...\n${hr}`)
  await execa('yarn', ['rw', 'build'], {
    cwd,
    stdio: 'inherit',
  })

  console.log(`${hr}\nPacking up files...\n${hr}`)
  const packagedDir = path.join(cwd, '.packaged')
  if (fs.existsSync(packagedDir)) {
    fs.rmSync(packagedDir, { recursive: true, force: true })
  }else{
    fs.mkdirSync(packagedDir)
  }
  console.log(' - api dist')
  fs.copySync(path.join(cwd, 'api', 'dist'), path.join(packagedDir, 'api', 'dist'))
  console.log(' - web dist')
  fs.copySync(path.join(cwd, 'web', 'dist'), path.join(packagedDir, 'web', 'dist'))
  console.log(' - db')
  fs.copySync(path.join(cwd, 'api', 'db'), path.join(packagedDir, 'api', 'db'))
  console.log(' - redwood.toml')
  fs.copySync(path.join(cwd, 'redwood.toml'), path.join(packagedDir, 'redwood.toml'))
  console.log(' - api dist/lib/drizzle/migrations')
  fs.copySync(path.join(cwd, 'api', 'src', 'lib', 'drizzle', 'migrations'), path.join(packagedDir, 'api', 'dist', 'lib', 'drizzle', 'migrations'))

  console.log(' - package.json')
  const currentProjectRedwoodVersion = fs.readJSONSync(path.join(cwd, '..', 'rw-test-studio', 'package.json')).devDependencies['@redwoodjs/core']
  const deps = {
    ...fs.readJSONSync(path.join(cwd, 'api', 'package.json')).dependencies,
  }
  for (const [dep, _] of Object.entries(deps)) {
    if (dep.startsWith('@redwoodjs')) {
      deps[dep] = currentProjectRedwoodVersion
    }
  }
  const devDeps = {
    ...fs.readJSONSync(path.join(cwd, 'api', 'package.json')).devDependencies,
    ...fs.readJSONSync(path.join(cwd, 'web', 'package.json')).dependencies,
    ...fs.readJSONSync(path.join(cwd, 'web', 'package.json')).devDependencies,
  }
  for (const [dep, _] of Object.entries(devDeps)) {
    if (dep.startsWith('@redwoodjs')) {
      devDeps[dep] = currentProjectRedwoodVersion
    }
  }
  fs.writeJSONSync(path.join(packagedDir, 'package.json'), {
    name: '@redwoodjs/studio',
    dependencies: deps,
    devDependencies: devDeps,
  }, { spaces: 2 })

  console.log(`${hr}\nCopying files to project...\n${hr}`)
  const outputDir = path.join(cwd, '..', 'rw-test-studio', '.redwood-studio')
  console.log(` - ${outputDir}`)
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true })
  }
  fs.ensureDirSync(outputDir)
  fs.copySync(packagedDir, outputDir)

  console.log(`${hr}\nUpdating package.json\n${hr}`)
  const pkgJsonPath = path.join(cwd, '..', 'rw-test-studio', 'package.json')
  const pkgJson = fs.readJSONSync(pkgJsonPath)
  fs.writeJSONSync(pkgJsonPath, {
    ...pkgJson,
    devDependencies: {
      ...pkgJson.devDependencies,
      ...deps,
    },
  }, { spaces: 2 })

  console.log(`${hr}\nRuning yarn\n${hr}`)
  await execa('yarn', [], {
    cwd: path.join(cwd, '..', 'rw-test-studio'),
    stdio: 'inherit',
  })

  console.log(`${hr}\n\n\n`)
}
main()
