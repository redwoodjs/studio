#!/usr/bin/env node
/* eslint-env node, es6*/

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import chalk from 'chalk'
import execa from 'execa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  const studioDirectory = path.join(__dirname, '..')
  const hr = chalk.green('~').repeat(process.stdout.columns)

  console.log(`${hr}\nGenerating migration...\n${hr}`)
  await execa(
    'npx',
    [
      'prisma',
      'migrate',
      'dev',
      '--schema',
      './api/db/schema.prisma',
      '--skip-seed',
      '--name',
      '_',
    ],
    {
      cwd: studioDirectory,
      stdio: 'inherit',
      env: {
        RWSTUDIO_DATABASE_URL: 'file:./dummy.sqlite',
      },
    }
  )

  console.log(`${hr}\n`)
}
main()
