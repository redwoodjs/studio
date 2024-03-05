import { z } from 'zod'
/**
 * Basic Metdaata
 * @see: https://ogp.me/#metadata
 * The four required properties for every page are:
 *
 * og:title - The title of your object as it should appear within the graph, e.g., "The Rock".
 * og:type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
 * og:image - An image URL which should represent your object within the graph.
 * og:url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
 */
export const BasicMetadataAuditor = z.object({
  ogTitle: z.string(),
  ogType: z.string(),
  ogUrl: z.string(),
  ogDescription: z.string().optional(),
  ogSiteName: z.string().optional(),
})

export const ArticleAuditor = BasicMetadataAuditor.extend({
  articleAuthor: z.string().optional(),
  articlePublisher: z.string().optional(),
  articlePublishedDate: z.string().optional(),
  articlePublishedTime: z.string().optional(),
})

export const GenericAuditor = ArticleAuditor.extend({})
