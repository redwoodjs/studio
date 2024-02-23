import fs from 'node:fs'
import path from 'node:path'

import { getConfig, getConfigPath, getPaths } from '@redwoodjs/project-config'

import { importFresh } from './import'

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

// There are two types of projects: the Redwood project itself, and Studio
// Sometimes we need the Studio configuration and other times we need the
// user's project configuration

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

export function getUserProjectAPIHost() {
  let host = process.env.REDWOOD_API_HOST
  host ??= getUserProjectConfig().api.host
  host ??= process.env.NODE_ENV === 'production' ? '0.0.0.0' : '[::]'
  return host
}

export function getUserProjectApiPort() {
  return getUserProjectConfig().api.port
}

export function getUserProjectWebHost() {
  let host = getUserProjectConfig().web.host
  host ??= process.env.NODE_ENV === 'production' ? '0.0.0.0' : '[::]'
  return host
}

export function getUserProjectWebPort() {
  return getUserProjectConfig().web.port
}

export function getUserProjectGraphQlEndpoint() {
  const webConfig = getUserProjectConfig().web

  return (
    webConfig.apiGraphQLUrl ??
    `http://${getUserProjectWebHost()}:${getUserProjectWebPort()}${
      webConfig.apiUrl
    }/graphql`
  )
}

export function getStudioConfig() {
  const configPath = getConfigPath(__dirname)
  return getConfig(configPath)
}

export function getStudioPaths() {
  const configPath = getConfigPath(__dirname)
  return getPaths(path.dirname(configPath))
}

export function getStudioStatePath() {
  const statePath = path.join(getUserProjectPaths().generated.base, 'studio')

  if (!fs.existsSync(statePath)) {
    fs.mkdirSync(statePath)
  }

  return statePath
}
