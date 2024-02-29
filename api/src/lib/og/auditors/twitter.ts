import { z } from 'zod'

import { GenericAuditor } from './generic'

export const TwitterAuditor = GenericAuditor.extend({
  twitterTitle: z.string(),
  twitterDescription: z.string(),
  twitterCard: z.string(),
})
