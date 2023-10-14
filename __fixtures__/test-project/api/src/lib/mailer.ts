import { Mailer } from '@redwoodjs/mailer-core'
import { StudioMailHandler } from '@redwoodjs/mailer-handler-studio'
import { ReactEmailRenderer } from '@redwoodjs/mailer-renderer-react-email'

import { logger } from './logger'

export const mailer = new Mailer({
  handling: {
    handlers: {
      studio: new StudioMailHandler(),
    },
    default: 'studio',
  },

  rendering: {
    renderers: {
      reactEmail: new ReactEmailRenderer(),
    },
    default: 'reactEmail',
  },

  development: {
    handler: 'studio',
  },

  logger,
})
