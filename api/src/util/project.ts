import fs from 'node:fs'
import path from 'node:path'

import { getConfig, getConfigPath, getPaths } from '@redwoodjs/project-config'

import { importFresh } from './import'

// --- General wrappers around project config ---

export const getStudioConfig = () => {
  const configPath = getConfigPath(__dirname)
  return getConfig(configPath)
}

export const getStudioPaths = () => {
  const configPath = getConfigPath(__dirname)
  return getPaths(path.dirname(configPath))
}

const getUserProjectConfigPath = () => {
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

export const getUserProjectConfig = () => {
  return getConfig(getUserProjectConfigPath())
}

export const getUserProjectApiConfig = () => {
  return getUserProjectConfig().api
}

export const getUserProjectWebConfig = () => {
  return getUserProjectConfig().web
}

export const getUserProjectStudioConfig = () => {
  return getUserProjectConfig().studio
}

export const getUserProjectBrowserConfig = () => {
  return getUserProjectConfig().browser
}

export const getUserProjectPaths = () => {
  return getPaths(path.dirname(getUserProjectConfigPath()))
}

export const getStudioStatePath = () => {
  const statePath = path.join(getUserProjectPaths().generated.base, 'studio')
  if (!fs.existsSync(statePath)) {
    fs.mkdirSync(statePath)
  }
  return statePath
}

// --- More specific targets ---

export const getUserProjectMailer = async (): Promise<unknown | null> => {
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

export const getFilesInDirectory = (dir: string) => {
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
