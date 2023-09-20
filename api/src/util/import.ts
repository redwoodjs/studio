import fs from "node:fs"
import path from "node:path"

import { getPaths } from "@redwoodjs/project-config";

export async function importFresh(originalPath: string){
  // I can't just use import() because it caches the result and I cannot invalidate that cache
  // I have also tried to use query strings hack, but that doesn't work either
  // So as a workaround, I'm just copying the file to a temporary file and importing that
  // This will likely cause increasing memory usage, as we'll keeping all imports in memory

  // Has to be copied to the same directory, otherwise all the imports would be broken
  const tempDir = path.dirname(originalPath)
  const prefixedBasename = `${Date.now()}_${path.basename(originalPath)}`
  const tempPath = path.join(tempDir, prefixedBasename)
  fs.copyFileSync(originalPath, tempPath)

  const imported = await import(tempPath)

  fs.unlinkSync(tempPath)

  return imported
}
