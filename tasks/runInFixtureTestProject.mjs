#!/usr/bin/env node
/* eslint-env node, es6*/

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import chalk from 'chalk'
import execa from 'execa'
import fs from 'fs-extra'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  const studioDirectory = path.join(__dirname, '..')
  const hr = chalk.green('~').repeat(process.stdout.columns)

  console.log(`${hr}\nBuilding studio...\n${hr}`)
  await execa('yarn', ['rw', 'build'], {
    cwd: studioDirectory,
    stdio: 'inherit',
  })

  console.log(`${hr}\nPacking up studio files...\n${hr}`)
  const packagedDir = path.join(studioDirectory, '.packaged')
  if (fs.existsSync(packagedDir)) {
    fs.rmSync(packagedDir, { recursive: true, force: true })
  } else {
    fs.mkdirSync(packagedDir)
  }
  console.log(' - api dist')
  fs.copySync(
    path.join(studioDirectory, 'api', 'dist'),
    path.join(packagedDir, 'api', 'dist')
  )
  console.log(' - web dist')
  fs.copySync(
    path.join(studioDirectory, 'web', 'dist'),
    path.join(packagedDir, 'web', 'dist')
  )
  console.log(' - db')
  fs.copySync(
    path.join(studioDirectory, 'api', 'db'),
    path.join(packagedDir, 'api', 'db')
  )
  console.log(' - redwood.toml')
  fs.copySync(
    path.join(studioDirectory, 'redwood.toml'),
    path.join(packagedDir, 'redwood.toml')
  )
  console.log(' - package.json')
  const currentProjectRedwoodVersion = fs.readJSONSync(
    path.join(studioDirectory, '__fixtures__', 'test-project', 'package.json')
  ).devDependencies['@redwoodjs/core']
  const deps = {
    ...fs.readJSONSync(path.join(studioDirectory, 'api', 'package.json'))
      .dependencies,
  }
  for (const [dep, _] of Object.entries(deps)) {
    if (dep.startsWith('@redwoodjs')) {
      deps[dep] = currentProjectRedwoodVersion
    }
  }
  const devDeps = {
    ...fs.readJSONSync(path.join(studioDirectory, 'api', 'package.json'))
      .devDependencies,
    ...fs.readJSONSync(path.join(studioDirectory, 'web', 'package.json'))
      .dependencies,
    ...fs.readJSONSync(path.join(studioDirectory, 'web', 'package.json'))
      .devDependencies,
  }
  for (const [dep, _] of Object.entries(devDeps)) {
    if (dep.startsWith('@redwoodjs')) {
      devDeps[dep] = currentProjectRedwoodVersion
    }
  }
  fs.writeJSONSync(
    path.join(packagedDir, 'package.json'),
    {
      name: '@redwoodjs/studio',
      dependencies: deps,
      devDependencies: devDeps,
    },
    { spaces: 2 }
  )

  fs.removeSync(path.join(packagedDir, 'api', 'db', 'dummy.sqlite'))
  fs.removeSync(path.join(packagedDir, 'api', 'db', 'dummy.sqlite-journal'))

  console.log(`${hr}\nCopying files to test-project fixture...\n${hr}`)
  const outputDir = path.join(
    studioDirectory,
    '__fixtures__',
    'test-project',
    '.redwood-studio'
  )
  console.log(` - ${outputDir}`)
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true })
  }
  fs.ensureDirSync(outputDir)
  fs.copySync(packagedDir, outputDir)

  console.log(`${hr}\nUpdating package.json\n${hr}`)
  const pkgJsonPath = path.join(outputDir, '..', 'package.json')
  const pkgJson = fs.readJSONSync(pkgJsonPath)
  fs.writeJSONSync(
    pkgJsonPath,
    {
      ...pkgJson,
      devDependencies: {
        ...pkgJson.devDependencies,
        ...deps,
      },
    },
    { spaces: 2 }
  )
  console.log(' - Success')

  console.log(`${hr}\nRuning yarn\n${hr}`)
  await execa('yarn', [], {
    cwd: path.join(outputDir, '..'),
    stdio: 'inherit',
  })

  console.log(`${hr}\nRuning studio...\n${hr}`)
  await execa('yarn', ['start-studio'], {
    cwd: path.join(outputDir, '..'),
    stdio: 'inherit',
  })

  console.log(`${hr}\n`)
}
main()
