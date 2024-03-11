import { getProject } from '@redwoodjs/structure'
import type { RWRoute } from '@redwoodjs/structure/dist/model/RWRoute'

import { getUserProjectPaths as getPaths } from 'src/util/project'

const getRoutes = (): RWRoute[] => {
  const rwProject = getProject(getPaths().base)
  const routes = rwProject.getRouter().routes
  return routes
}

export const renderGraphRoutes = async () => {
  const routes = getRoutes()
    .filter((route) => route.name !== 'notFound')
    .filter((route) => route.name !== undefined)
    .map((route) => {
      return {
        id: route.name || 'none',
        name: route.name || 'none',
      }
    })
    .flat()

  console.log(routes)

  return routes
}
