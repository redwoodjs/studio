import fs from 'node:fs'
import path from 'node:path'

import { getStudioPaths } from './project'

export function rewriteBasePortEnvVar(basePort: number) {
  const webPath = getStudioPaths().web.dist
  const indexHtmlPath = path.join(webPath, 'index.html')
  const twoHundredHtmlPath = path.join(webPath, '200.html')

  const indexHtml = fs
    .readFileSync(indexHtmlPath, 'utf8')
    .replace('RW_STUDIO_BASE_PORT = 4318', `RW_STUDIO_BASE_PORT = ${basePort}`)

  fs.writeFileSync(indexHtmlPath, indexHtml)

  if (fs.existsSync(twoHundredHtmlPath)) {
    const twoHundredHtml = fs
      .readFileSync(twoHundredHtmlPath, 'utf8')
      .replace(
        'RW_STUDIO_BASE_PORT = 4318',
        `RW_STUDIO_BASE_PORT = ${basePort}`
      )

    fs.writeFileSync(twoHundredHtmlPath, twoHundredHtml)
  }
}
