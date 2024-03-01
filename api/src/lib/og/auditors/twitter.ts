import { z } from 'zod'

import { GenericAuditor } from './generic'

const TwitterImageSchema = z.object({
  url: z.string(),
  alt: z.string().optional(),
})

export const TwitterAuditor = GenericAuditor.extend({
  twitterTitle: z.string(),
  twitterCard: z.string(),
  twitterImage: z.array(TwitterImageSchema),
  twitterSite: z.string().optional(),
  twitterUrl: z.string().optional(),
  twitterDescription: z.string().optional(),
})
