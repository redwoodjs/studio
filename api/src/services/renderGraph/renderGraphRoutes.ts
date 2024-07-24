import { SyntaxError } from '@redwoodjs/graphql-server'
import { getProject } from '@redwoodjs/structure'
import type { RWRoute } from '@redwoodjs/structure/dist/model/RWRoute'

import { getUserProjectPaths as getPaths } from 'src/util/project'
import { getUserProjectConfig } from 'src/util/project'
const getRoutes = (): RWRoute[] => {
  const rwProject = getProject(getPaths().base)
  const routes = rwProject.getRouter().routes
  return routes
}

export const renderGraphRoutes = async () => {
  const config = await getUserProjectConfig()

  // short-cut in the case that RSC is disabled
  if (!config.experimental?.rsc?.enabled) {
    throw new SyntaxError('RSC is not enabled')
  }

  const routes = getRoutes()
    .filter((route) => route.name !== 'notFound')
    .filter((route) => route.name !== undefined)
    .map((route) => {
      return {
        id: route.name || 'none',
        name: route.name || 'none',
      }
    })

  return routes
}
