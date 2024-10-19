import fs from 'fs'
import crypto from 'node:crypto'
import path from 'path'
import { basename, normalize } from 'path'

import { SyntaxError, ValidationError } from '@redwoodjs/graphql-server'
import {
  //getPaths,
  resolveFile,
} from '@redwoodjs/project-config'
import { getProject } from '@redwoodjs/structure'
import type { RWLayout } from '@redwoodjs/structure/dist/model/RWLayout'
import type { RWPage } from '@redwoodjs/structure/dist/model/RWPage'
import type { RWRoute } from '@redwoodjs/structure/dist/model/RWRoute'

import { getUserProjectConfig } from 'src/util/project'
import { getUserProjectPaths as getPaths } from 'src/util/project'
type ComponentType = 'Page' | 'Layout' | 'Route' | 'Cell' | 'Component'
type RenderContext = 'client' | 'server' | 'shared'

interface Position {
  x: number
  y: number
}

interface Node {
  id: string
  data: ComponentData
  position: Position
}

interface Edge {
  id: string
  source: string
  target: string
  label: string
  type: string
  data: {
    source: string
    target: string
  }
}

interface ComponentData {
  id: string
  label: string
  componentType: ComponentType
  filePath: string
  renderContext: RenderContext
}

export const renderGraph = async ({ routeName }) => {
  const config = await getUserProjectConfig()

  // short-cut in the case that RSC is disabled
  if (!config.experimental?.rsc?.enabled) {
    throw new SyntaxError('RSC is not enabled')
  }

  const parser = require('@babel/parser')
  const traverse = require('@babel/traverse').default

  const generateId = (value: string): string => {
    return crypto.createHash('md5').update(value).digest('hex')
  }

  const getRoutes = (): RWRoute[] => {
    const rwProject = getProject(getPaths().base)
    const routes = rwProject.getRouter().routes
    return routes
  }

  const getPages = (routes?: RWRoute[]): RWPage[] => {
    const pages = (routes || getRoutes()).map((route) => route.page)
    return pages
  }

  const getLayouts = (pages?: RWPage[]): RWLayout[] => {
    const layouts = new Set<RWLayout>()
    const pagesWithLayout = pages || getPages()

    pagesWithLayout.forEach((page) => {
      page.parent.layouts.forEach((layout) => {
        layouts.add(layout)
      })
    })

    return Array.from(layouts)
  }

  const getRouteComponentData = (route: RWRoute): ComponentData => {
    return {
      id: generateId(route.name || route.page_identifier_str),
      label: `/${route.name}` || route.page_identifier_str,
      componentType: 'Route',
      filePath: route.parent.filePath,
      renderContext: 'client',
    }
  }

  const getPageComponentData = (page: RWPage): ComponentData => {
    return {
      id: generateId(page.path),
      label: page.basenameNoExt,
      componentType: 'Page',
      filePath: page.path,
      renderContext: 'server',
    }
  }

  const getLayoutComponentData = (layout: RWLayout): ComponentData => {
    return {
      id: generateId(layout.filePath),
      label: layout.basenameNoExt,
      componentType: 'Layout',
      filePath: layout.filePath,
      renderContext: 'client',
    }
  }

  const isInternalComponent = (importStatementPath: string) => {
    return (
      (importStatementPath.startsWith('.') ||
        importStatementPath.startsWith('src/')) &&
      !importStatementPath.endsWith('.css')
    )
  }

  const isValidComponentSpecifier = (specifier: string) => {
    // Not a valid component name if it's all uppercase
    // (i.e. it's a constant like QUERY)
    if (specifier.toUpperCase() === specifier) {
      return false
    }

    // PascalCase ?
    return /^[A-Z][a-zA-Z0-9]*$/.test(specifier)
  }

  const expandPath = (value: string, filename: string): string | null => {
    const dirname = path.dirname(value)
    const basename = path.basename(value)

    // We try to resolve `index.[js*|ts*]` modules first,
    // since that's the desired default behavior
    const indexImportPath = [dirname, basename, 'index'].join('/')
    if (resolveFile(path.resolve(path.dirname(filename), indexImportPath))) {
      return indexImportPath
    } else {
      // No index file found, so try to import the directory-named-module instead
      const dirnameImportPath = [dirname, basename, basename].join('/')
      if (
        resolveFile(path.resolve(path.dirname(filename), dirnameImportPath))
      ) {
        return dirnameImportPath
      }
    }
    return null
  }

  const resolveFileAndImportPaths = (
    filePath: string,
    importStatementPath: string
  ) => {
    return (
      resolveFile(path.resolve(path.dirname(filePath), importStatementPath)) ||
      resolveFile(path.resolve(getPaths().web.base, importStatementPath)) ||
      resolveFile(
        expandPath(
          path.join(getPaths().web.base, importStatementPath),
          importStatementPath
        )
      )
    )
  }

  const basenameNoExt = (path: string): string => {
    path = normalize(path)
    const parts = basename(path).split('.')
    if (parts.length > 1) {
      parts.pop()
    }
    return parts.join('.')
  }

  const isPage = (filePath: string) => {
    return getPages().find((page) => page.filePath === filePath)
  }

  const isLayout = (filePath: string) => {
    return getLayouts().find((layout) => layout.filePath === filePath)
  }

  const isRoute = (path: string) => {
    return getRoutes().find((route) => route.path === path)
  }

  const isCell = (filePath: string) => {
    return basenameNoExt(filePath).endsWith('Cell')
  }

  // route to page edges
  const buildRouteToPageEdges = (routes: RWRoute[], edges: Edge[]) => {
    routes.forEach((route) => {
      edges.push({
        id: generateId(`${route.page.filePath}-${route.name}`),
        source: generateId(route.name || route.page_identifier_str),
        target: generateId(route.page.filePath),
        label: `${route.name} routes to ${route.page.basenameNoExt} page`,
        type: 'step',
        data: {
          source: route.page.filePath,
          target: route.name,
        },
      })
    })
  }

  // layout to page edges
  const buildLayoutToPageEdges = (pages: RWPage[], edges: Edge[]) => {
    pages.forEach((page) => {
      page.parent.layouts.forEach((layout) => {
        edges.push({
          id: generateId(`${page.filePath}-${layout.filePath}`),
          source: generateId(layout.filePath),
          target: generateId(page.filePath),
          label: `layout ${layout.basenameNoExt} wraps ${page.basenameNoExt} page`,
          type: 'step',
          data: {
            source: page.filePath,
            target: layout.filePath,
          },
        })
      })
    })
  }

  const buildNodes = (routeNodes, pageNodes, layoutNodes): Node[] => {
    return [...routeNodes, ...pageNodes, ...layoutNodes].map((data) => {
      return {
        id: data.id,
        data: data,
        position: {
          x: 0,
          y: 0,
        },
      }
    }) as Node[]
  }

  // To track processed files and avoid duplicates
  const processedFiles = new Set()

  // Function to process a file and extract its dependencies
  function processComponentFilePathForGraph(
    nodes: Node[],
    edges: Edge[],
    filePath: string
  ) {
    let renderContext: RenderContext = 'shared'
    // Avoid processing the same file more than once
    if (processedFiles.has(filePath)) return
    processedFiles.add(filePath)

    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8')

    // Parse the file content to AST
    const ast = parser.parse(content, {
      sourceType: 'module',
      plugins: ['js', 'jsx', 'typescript'],
    })

    // Use Babel's traverse to walk through the AST
    traverse(ast, {
      // here we determine the "default" render context
      // based on the presence of a "use client" or "use server" directive
      // Note: the renderContext will change based on the context of the parent(s)
      Program: function ({ node }) {
        node.directives.forEach((directive) => {
          if (directive.value.value === 'use client') {
            renderContext = 'client'
          }
          if (directive.value.value === 'use server') {
            renderContext = 'server'
          }
        })
      },
      // here we build the dependency graph of the components
      // by processing the import statements and creating nodes and edges
      ImportDeclaration: function ({ node }) {
        const relativeImportPath = node.source.value
        const importPath = resolveFileAndImportPaths(
          filePath,
          relativeImportPath
        )

        const specifiers = node.specifiers

        // we only care about internal components
        if (isInternalComponent(relativeImportPath)) {
          if (specifiers.length) {
            specifiers.forEach((specifier) => {
              const name = specifier.local.name

              // we assume that valid components are PascalCase
              if (isValidComponentSpecifier(name)) {
                // Create a unique identifier for the import
                const importId = generateId(
                  `${path.basename(filePath)} -> ${relativeImportPath}`
                )

                let sourceType = 'Component'
                let sourceId: string | null = null
                let targetType = 'Component'
                let targetId: string | null = null

                // source
                if (isRoute(filePath)) {
                  sourceId = generateId(filePath)
                  sourceType = 'Route'
                } else if (isPage(filePath)) {
                  sourceId = generateId(filePath)
                  sourceType = 'Page'
                } else if (isLayout(filePath)) {
                  sourceId = generateId(filePath)
                  sourceType = 'Layout'
                } else if (isCell(filePath)) {
                  sourceType = 'Cell'
                  sourceId = filePath
                } else {
                  sourceType = 'Component'
                  if (basenameNoExt(importPath) === name) {
                    sourceId = generateId(filePath)
                  } else {
                    sourceId = generateId(`${filePath}-${name}`)
                  }
                }

                // target
                if (isPage(importPath)) {
                  targetId = generateId(importPath)
                  targetType = 'Page'
                } else if (isLayout(importPath)) {
                  targetId = generateId(importPath)
                  targetType = 'Layout'
                } else if (isCell(importPath)) {
                  targetType = 'Cell'
                  targetId = filePath
                } else {
                  targetType = 'Component'
                  if (basenameNoExt(importPath) === name) {
                    targetId = generateId(importPath)
                  } else {
                    targetId = generateId(`${importPath}-${name}`)
                  }
                }

                // make a component node
                const targetNode = {
                  id: targetId,
                  data: {
                    id: targetId,
                    label: name,
                    componentType: targetType as ComponentType,
                    filePath: importPath as string,
                    renderContext: renderContext,
                  },
                  position: {
                    x: 0,
                    y: 0,
                  },
                }
                nodes.push(targetNode)

                // make an edge from the source id to the component node id
                const edge = {
                  id: importId,
                  source: sourceId,
                  target: targetId,
                  label: `${name} component imported from ${basenameNoExt(
                    filePath
                  )}`,
                  type: 'step',
                  data: {
                    source: sourceId,
                    sourceType: sourceType,
                    target: targetId,
                    targetType: targetType,
                  },
                }

                // Don't push me 'cuz I'm close to the edge
                edges.push(edge)

                // Recursively process the target file
                if (importPath) {
                  processComponentFilePathForGraph(nodes, edges, importPath)
                }
              }
            })
          }
        }
      },
    })
  }

  function findAllAncestors(nodes, edges, targetNodeId) {
    const ancestors = []

    // A recursive function to find all ancestors of a given node
    function findAncestors(nodeId) {
      // Find edges where the target is the current node
      const incomingEdges = edges.filter((edge) => edge.target === nodeId)

      for (const edge of incomingEdges) {
        // Avoid adding duplicate ancestors
        if (!ancestors.includes(edge.source)) {
          ancestors.push(edge.source)
          // Recursively find ancestors of the current ancestor
          findAncestors(edge.source)
        }
      }
    }

    // Start the search with the target node
    findAncestors(targetNodeId)

    // Map ancestor IDs to node objects (optional, depending on your needs)
    const ancestorNodes = ancestors.map((ancestorId) =>
      nodes.find(
        (node) => node.id === ancestorId // && node.data.componentType === "Route"
      )
    )

    return ancestorNodes
  }

  function findAllDescendants(nodes, edges, targetNodeId) {
    const descendants = []

    // A recursive function to find all descendants of a given node
    function findDescendants(nodeId) {
      // Find edges where the source is the current node

      const outgoingEdges = edges.filter((edge) => edge.source === nodeId)

      for (const edge of outgoingEdges) {
        // Avoid adding duplicate descendants
        if (!descendants.includes(edge.target)) {
          descendants.push(edge.target)
          // Recursively find descendants of the current descendant
          findDescendants(edge.target)
        }
      }
    }

    // Start the search with the target node
    findDescendants(targetNodeId)

    // Map descendant IDs to node objects (optional, depending on your needs)
    const descendantNodes = descendants.map((descendantId) =>
      nodes.find(
        (node) => node.id === descendantId // && node.data.componentType === "Route"
      )
    )

    return descendantNodes
  }

  const determineRenderContext = (nodes, edges, node) => {
    console.log('Determining render context for', node.renderContext)
    if (node.renderContext === 'client') {
      console.log(
        'All descendants of',
        node.data.label,
        'are client render context'
      )
    }

    const ancestors = findAllAncestors(nodes, edges, node.id)

    // does any ancestor as 'client' render context?
    ancestors.forEach((ancestor) => {
      if (ancestor) {
        if (
          ancestor.data.componentType === 'Route' ||
          ancestor.data.componentType === 'Layout' ||
          ancestor.data.componentType === 'Page'
        ) {
          console.warn(
            `Skipping ${ancestor.data.label} as it is a ${ancestor.data.componentType} and its ancestor ${ancestor.data.label} is a ${ancestor.data.componentType}`
          )
          return
        }

        if (ancestor.data.renderContext === 'client') {
          // if so then, the descendants are 'client' render context
          const descendants = findAllDescendants(nodes, edges, node.id)

          descendants.forEach((descendant) => {
            if (descendant) {
              descendant.style = {
                ...descendant.style,
                backgroundColor: 'red',
                color: 'white',
              }
              descendant.data.renderContext = 'client'
            }
          })
        }
      }
    })
  }

  const routes = routeName
    ? getRoutes().filter((route) => route.name === routeName)
    : getRoutes()

  if (routes.length === 0) {
    throw new ValidationError(
      `No route found for ${routeName}. Try: ${getRoutes()
        .map((route) => route.name)
        .join(', ')}`
    )
  }

  const routeNodes = routes.map((route) => getRouteComponentData(route))
  const pages = getPages(routes)
  const pageFilePath = pages[0].filePath
  const pageNodes = pages.map((page) => getPageComponentData(page))
  const layouts = getLayouts(pages)
  const layoutFilePath = layouts[0].filePath
  const layoutNodes = layouts.map((layout) => getLayoutComponentData(layout))

  const nodes = buildNodes(routeNodes, pageNodes, layoutNodes)
  const edges = []
  buildRouteToPageEdges(routes, edges)
  buildLayoutToPageEdges(pages, edges)

  processComponentFilePathForGraph(nodes, edges, pageFilePath)
  processComponentFilePathForGraph(nodes, edges, layoutFilePath)

  determineRenderContext(nodes, edges, pageNodes[0])

  const idData = {
    id: generateId(routeName),
    route: { id: generateId(routeName), name: routeName },
    initialNodes: nodes,
    initialEdges: edges,
  }
  return {
    id: generateId(JSON.stringify(idData)),
    route: { id: generateId(routeName), name: routeName },
    initialNodes: nodes,
    initialEdges: edges,
  }
}
