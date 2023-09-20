import path from "node:path"
import fs from "node:fs"

import { getConfig, getConfigPath, getPaths } from "@redwoodjs/project-config"

import { importFresh } from "./import"

// --- General wrappers around project config ---

export function getStudioConfig(){
  return getConfig(getConfigPath(__dirname))
}

export function getStudioPaths(){
  return getPaths(path.dirname(getConfigPath(__dirname)))
}

export function getUserProjectConfig(){
  return getConfig(getConfigPath(path.join(getStudioPaths().base, '..')))
}

export function getUserProjectPaths(){
  return getPaths(path.dirname(getConfigPath(path.join(getStudioPaths().base, '..'))))
}

export function getStudioStatePath(){
  const statePath = path.join(getUserProjectPaths().generated.base, 'studio')
  if(!fs.existsSync(statePath)){
    fs.mkdirSync(statePath)
  }
  return statePath
}

// --- More specific targets ---

export async function getUserProjectMailer(): Promise<any | null>{
  const distMailerPath = path.join(getUserProjectPaths().api.dist, 'lib', 'mailer.js')
  if(!fs.existsSync(distMailerPath)){
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
