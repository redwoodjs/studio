import fs from 'node:fs'
import path from 'node:path'

import { v4 as uuidv4 } from 'uuid'

import { getUserProjectConfig, getUserProjectPaths } from 'src/util/project'

const isNumeric = (id: string) => {
  return /^\d+$/.test(id)
}

export const getDBAuthHeader = async (userId?: string) => {
  if (!userId) {
    throw new Error('Require a unique id to generate session cookie')
  }

  if (!process.env.SESSION_SECRET) {
    throw new Error(
      'dbAuth requires a SESSION_SECRET environment variable that is used ' +
        'to encrypt session cookies. Use `yarn rw g secret` to create one, ' +
        'then add to your `.env` file. DO NOT check this variable in to ' +
        'your version control system!!'
    )
  }

  const {
    default: { encryptSession },
  } = await import('@redwoodjs/auth-dbauth-api')

  const id = isNumeric(userId) ? parseInt(userId) : userId
  const cookieName = await getCookieName()
  const cookieValue = encryptSession(JSON.stringify({ id }) + ';' + uuidv4())

  return {
    authProvider: 'dbAuth',
    cookie: `${cookieName}=${cookieValue}`,
    authorization: `Bearer ${userId}`,
  }
}

// Note that we can't use the `cookieName` function that's exported from
// `@redwoodjs/auth-dbauth-api` because it would read the cookie name from the
// Studio project. We need to read it from the user's project
async function getCookieName() {
  const distAuthPath = path.join(
    getUserProjectPaths().api.dist,
    'lib',
    'auth.js'
  )

  if (!fs.existsSync(distAuthPath)) {
    throw new Error(
      "No auth.js file found in api/dist/lib in the user's project"
    )
  }

  // Opted to use `import` instead of `importFresh` here because of the memory
  // (and perf) implications of importFresh.
  // This does mean Studio might not pick up on a new cookie name. But it's
  // unlikely the user will change that very often, so in this case I think
  // this is the right tradeoff
  const projectCookieName: string | undefined = (await import(distAuthPath))
    ?.cookieName
  const projectApiPort = getUserProjectConfig().api.port

  const cookieName =
    projectCookieName?.replace('%port%', '' + projectApiPort) ?? 'session'

  return cookieName
}
