#!/usr/bin/env node
/* eslint-env node */

import { fileURLToPath } from 'node:url'

import { chalk, path, $ } from 'zx'

async function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  // Intro
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log(chalk.bold('Studio: Migrate'))
  console.log()
  console.log(
    'This script will generate primsa migrations for studio using `yarn rw prisma migrate dev`.'
  )
  console.log(chalk.blue('~'.repeat(process.stdout.columns)))
  console.log()

  // Build the project
  $.env.RWSTUDIO_DATABASE_URL =
    'file://' + path.join(__dirname, '..', 'api', 'db', 'dummy.sqlite')
  const { stderr, exitCode } =
    await $`yarn rw prisma migrate dev --skip-seed --create-only`
  if (exitCode !== 0) {
    console.log(chalk.redBright(stderr))
    process.exit(exitCode)
  }
}

main().catch((err) => {
  console.error(chalk.red(err))
  process.exit(1)
})
