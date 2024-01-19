import { parseArgs } from 'node:util'

import { serve } from '../server'

// Parse server file args
const { values: args } = parseArgs({
  options: {
    // Run both web and api in the Fastify server
    ['enable-web']: {
      type: 'boolean',
      default: true,
    },
    // Open a browser window when starting the server
    open: {
      type: 'boolean',
      default: false,
    },
  },
})

const { ['enable-web']: enableWeb, open } = args

serve({ open, enableWeb })
