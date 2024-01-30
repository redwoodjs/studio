import {
  getUserProjectApiConfig,
  getUserProjectWebConfig,
  getUserProjectStudioConfig,
} from 'src/util/project'
// import type { ApiConfig, StudioConfig, WebConfig } from '../types'

export const apiConfig = async () => {
  return getUserProjectApiConfig()
}

export const webConfig = async () => {
  return getUserProjectWebConfig()
}

export const studioConfig = async () => {
  return getUserProjectStudioConfig()
}
