import fs from 'node:fs'
import path from 'node:path'

import { getStudioPaths } from './project'

export function rewriteApiPortEnvVar(apiPort: number) {
  const webPath = getStudioPaths().web.dist
  const indexHtmlPath = path.join(webPath, 'index.html')
  const twoHundredHtmlPath = path.join(webPath, '200.html')

  // When running `yarn rw dev` web.dist is not used, and might not even exist
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs
      .readFileSync(indexHtmlPath, 'utf8')
      .replace('RW_STUDIO_API_PORT = 4319', `RW_STUDIO_API_PORT = ${apiPort}`)

    fs.writeFileSync(indexHtmlPath, indexHtml)
  }

  if (fs.existsSync(twoHundredHtmlPath)) {
    const twoHundredHtml = fs
      .readFileSync(twoHundredHtmlPath, 'utf8')
      .replace('RW_STUDIO_API_PORT = 4319', `RW_STUDIO_API_PORT = ${apiPort}`)

    fs.writeFileSync(twoHundredHtmlPath, twoHundredHtml)
  }
}
