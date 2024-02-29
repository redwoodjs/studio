import { z } from 'zod'

export const GenericAuditor = z.object({
  ogTitle: z.string(),
  ogSite: z.string(),
})
