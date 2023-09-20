import fs from 'node:fs'

import { getConfig as getConfigPrisma, getDMMF } from '@prisma/internals'

import { getUserProjectPaths } from './project'

export async function getPrismaDMMF() {
  return getDMMF({ datamodelPath: getUserProjectPaths().api.dbSchema })
}

export async function getPrismaConfig() {
  return getConfigPrisma({
    datamodel: fs.readFileSync(getUserProjectPaths().api.dbSchema).toString(),
  })
}
