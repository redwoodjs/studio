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
  console.log(chalk.bold('Studio: Reset'))
  console.log()
  console.log('This script will reset the studio in the test-project fixture.')
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

  // Remove database
  if (!verbose) {
    spinner.start('Removing database...')
  }
  const testProjectPath = path.join(
    __dirname,
    '..',
    '__fixtures__',
    'test-project'
  )
  try {
    fs.rmSync(path.join(testProjectPath, '.redwood', 'studio'), {
      force: true,
      recursive: true,
    })
  } catch (error) {
    spinner.fail('Failed to remove database!')
    console.log(chalk.redBright(error))
    process.exit(1)
  }
  if (!verbose) {
    spinner.succeed('Database removed!')
  }
}

main().catch((err) => {
  console.error(chalk.red(err))
  process.exit(1)
})
