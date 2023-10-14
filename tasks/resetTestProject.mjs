#!/usr/bin/env node
/* eslint-env node, es6*/

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import chalk from 'chalk'
import fs from 'fs-extra'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  const testProjectDirectory = path.join(
    __dirname,
    '../__fixtures__/test-project'
  )
  const hr = chalk.green('~').repeat(process.stdout.columns)

  console.log(`${hr}\Resetting test project...\n${hr}`)

  const dbPath = path.join(
    testProjectDirectory,
    '.redwood/studio/prisma.sqlite'
  )
  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath)
    console.log(' - Removed SQLite database')
  }

  console.log(`${hr}\n`)
}
main()
