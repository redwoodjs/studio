import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  // { include: { author: true } }
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
    // include: { author: true },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostRelationResolvers = {
  author: (_obj, { root }) => {
    // if (root.author) {
    //   return root.author
    // }

    return db.post.findUnique({ where: { id: root?.id } }).author()
  },
}
