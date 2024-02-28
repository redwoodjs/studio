import { z } from 'zod'

export const GenericValidation = z.object({
  ogTitle: z.string(),
  ogSite: z.string(),
})
