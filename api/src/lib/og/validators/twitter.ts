import { z } from 'zod'

import { GenericValidation } from './generic'

export const TwitterValidation = GenericValidation.extend({
  twitterTitle: z.string(),
  twitterDescription: z.string(),
  twitterCard: z.string(),
})
