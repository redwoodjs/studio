import {
  getUserProjectApiConfig,
  getUserProjectWebConfig,
  getUserProjectStudioConfig,
} from 'src/util/project'

export const apiConfig = async () => {
  return getUserProjectApiConfig()
}

export const webConfig = async () => {
  return getUserProjectWebConfig()
}

export const studioConfig = async () => {
  return getUserProjectStudioConfig()
}
