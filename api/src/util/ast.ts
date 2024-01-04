import fs from 'node:fs'

import { parse as babelParse } from '@babel/parser'
import traverse from '@babel/traverse'
import * as t from '@babel/types'

export function extractMailComponents(
  filepath: string
): { name: string; props: string }[] {
  const plugins = []
  if (filepath.endsWith('.tsx')) {
    plugins.push('typescript')
    plugins.push('jsx')
  } else if (filepath.endsWith('.jsx')) {
    plugins.push('jsx')
  }
  const templateAST = babelParse(fs.readFileSync(filepath, 'utf8'), {
    plugins,
    sourceType: 'unambiguous',
  })

  const components: { name: string; props: string }[] = []

  traverse(templateAST, {
    ExportNamedDeclaration(path) {
      // @ts-expect-error TODO: Fix this type issue
      if (t.isFunctionDeclaration(path.node.declaration)) {
        // extract the name
        const name = path.node.declaration.id.name
        // extract the props
        let props: string | null = null
        if (path.node.declaration.params.length > 0) {
          // We know we only care about the first param - the component props
          const propsParam = path.node.declaration.params[0]
          if (t.isIdentifier(propsParam)) {
            props = propsParam.name
          } else if (t.isObjectPattern(propsParam)) {
            // We want a { param: ?, param2: ? } style string
            const propsForJson = {}
            propsParam.properties.forEach((prop) => {
              if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
                propsForJson[prop.key.name] = '?'
              }
            })
            props = JSON.stringify(propsForJson, undefined, 2)
          } else if (
            t.isAssignmentPattern(propsParam) &&
            t.isObjectPattern(propsParam.left)
          ) {
            const propsForJson = {}
            propsParam.left.properties.forEach((prop) => {
              if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
                propsForJson[prop.key.name] = '?'
              }
            })
            props = JSON.stringify(propsForJson, undefined, 2)
          }
        }
        components.push({ name, props })
      }
    },
  })

  return components
}
