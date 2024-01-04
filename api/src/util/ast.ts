import fs from 'node:fs'

import { parse as babelParse } from '@babel/parser'
import traverse, { NodePath } from '@babel/traverse'
import * as t from '@babel/types'
import { ExportNamedDeclaration } from '@babel/types'

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
      const name = extractExportNamedDeclarationName(path)
      // @ts-expect-error TODO: Fix this type issue
      const props = extractExportNamedDeclarationProps(path)
      components.push({ name, props })
    },

    // // @ts-expect-error TODO: Fix this type issue
    // if (t.isFunctionDeclaration(path.node.declaration)) {
    //   // extract the name
    //   const name = path.node.declaration.id.name
    //   // extract the props
    //   let props: string | null = null
    //   if (path.node.declaration.params.length > 0) {
    //     // We know we only care about the first param - the component props
    //     const propsParam = path.node.declaration.params[0]
    //     if (t.isIdentifier(propsParam)) {
    //       props = propsParam.name
    //     } else if (t.isObjectPattern(propsParam)) {
    //       // We want a { param: ?, param2: ? } style string
    //       const propsForJson = {}
    //       propsParam.properties.forEach((prop) => {
    //         if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
    //           propsForJson[prop.key.name] = '?'
    //         }
    //       })
    //       props = JSON.stringify(propsForJson, undefined, 2)
    //     } else if (
    //       t.isAssignmentPattern(propsParam) &&
    //       t.isObjectPattern(propsParam.left)
    //     ) {
    //       const propsForJson = {}
    //       propsParam.left.properties.forEach((prop) => {
    //         if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
    //           propsForJson[prop.key.name] = '?'
    //         }
    //       })
    //       props = JSON.stringify(propsForJson, undefined, 2)
    //     }
    //   }
    //   components.push({ name, props })
    // }
  })

  return components
}

function extractExportNamedDeclarationName(
  path: NodePath<ExportNamedDeclaration>
) {
  const declaration = path.node.declaration
  if (t.isFunctionDeclaration(declaration)) {
    return declaration.id.name
  } else if (
    t.isVariableDeclaration(declaration) &&
    t.isIdentifier(declaration.declarations[0].id)
  ) {
    return declaration.declarations[0].id.name
  }
  console.log({ declaration })
  return 'Unknown'
}

function extractExportNamedDeclarationProps(
  path: NodePath<ExportNamedDeclaration>
) {
  const declaration = path.node.declaration
  if (t.isFunctionDeclaration(declaration)) {
    const param = declaration.params[0]
    if (t.isAssignmentPattern(param)) {
      if (t.isObjectPattern(param.left)) {
        const propsForJson = {}
        param.left.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            propsForJson[prop.key.name] = '?'
          }
        })
        return JSON.stringify(propsForJson, undefined, 2)
      }
    } else if (t.isObjectPattern(param)) {
      const propsForJson = {}
      param.properties.forEach((prop) => {
        if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
          propsForJson[prop.key.name] = '?'
        }
      })
      return JSON.stringify(propsForJson, undefined, 2)
    } else if (t.isIdentifier(param)) {
      return JSON.stringify(param.name, undefined, 2)
    }
  } else if (t.isVariableDeclaration(declaration)) {
    const init = declaration.declarations[0].init
    if (t.isArrowFunctionExpression(init)) {
      const param = init.params[0]
      if (t.isIdentifier(param)) {
        return JSON.stringify(param.name, undefined, 2)
      } else if (t.isObjectPattern(param)) {
        const propsForJson = {}
        param.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            propsForJson[prop.key.name] = '?'
          }
        })
        return JSON.stringify(propsForJson, undefined, 2)
      }
    }
  }

  return ''
}
