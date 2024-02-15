import type {
  FindBlogPostQuery,
  FindBlogPostQueryVariables,
} from 'types/graphql'

import { Metadata } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query FindBlogPostQuery($id: Int!) {
    blogPost: post(id: $id) {
      id
      title
      body
      author {
        email
        fullName
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBlogPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  blogPost,
}: CellSuccessProps<FindBlogPostQuery, FindBlogPostQueryVariables>) => (
  <>
    <Metadata
      title={blogPost.title}
      og={{
        image:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-03.jpg',
        title: `${blogPost.title} | RedwoodJS Blog`,
        description: blogPost.body,
      }}
      article={{
        author: blogPost.author.fullName,
        published_time: blogPost.createdAt,
      }}
      profile={{
        username: blogPost.author.fullName,
      }}
      twitter={{
        card: 'summary_large_image',
        site: '@redwoodjs',
        creator: `@${blogPost.author.fullName}`,
        title: `${blogPost.title} | RedwoodJS Blog`,
        image:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-04.jpg',
        'image:alt': 'this is a description of image',
      }}
    />
    <BlogPost blogPost={blogPost} />
  </>
)
