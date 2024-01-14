import fs from 'node:fs'
import path from 'node:path'

import { getConfig, getConfigPath, getPaths } from '@redwoodjs/project-config'

import { importFresh } from './import'

// --- General wrappers around project config ---

export function getStudioConfig() {
  const configPath = getConfigPath(__dirname)
  return getConfig(configPath)
}

export function getStudioPaths() {
  const configPath = getConfigPath(__dirname)
  return getPaths(path.dirname(configPath))
}

function getUserProjectConfigPath() {
  let projectPath = process.env.RW_STUDIO_USER_PROJECT_PATH || ''

  const isWinFullPath = /^[A-Z]:\//.test(projectPath)

  // Support both ./relative/path/ and relative/path/ (and relative\path\ on
  // Windows)
  if (
    projectPath &&
    (projectPath[0] === '.' || (projectPath[0] !== '/' && !isWinFullPath))
  ) {
    projectPath = path.join(process.cwd(), projectPath)
  }

  return getConfigPath(projectPath || path.join(getStudioPaths().base, '..'))
}

export function getUserProjectConfig() {
  return getConfig(getUserProjectConfigPath())
}

export function getUserProjectPaths() {
  return getPaths(path.dirname(getUserProjectConfigPath()))
}

export function getStudioStatePath() {
  const statePath = path.join(getUserProjectPaths().generated.base, 'studio')
  if (!fs.existsSync(statePath)) {
    fs.mkdirSync(statePath)
  }
  return statePath
}

// --- More specific targets ---

export async function getUserProjectMailer(): Promise<unknown | null> {
  const distMailerPath = path.join(
    getUserProjectPaths().api.dist,
    'lib',
    'mailer.js'
  )
  if (!fs.existsSync(distMailerPath)) {
    return null
  }
  return (await importFresh(distMailerPath)).mailer
}

export function getFilesInDirectory(dir: string) {
  const files: string[] = []
  const dirFiles = fs.readdirSync(dir)
  for (const file of dirFiles) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      files.push(...getFilesInDirectory(path.join(dir, file)))
    } else {
      files.push(path.join(dir, file))
    }
  }
  return files
}
