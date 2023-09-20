export const schema = gql`
  type PrismaSchema {
    id: ID!
    schema: JSON!
  }

  type Query {
    prismaSchema: PrismaSchema! @skipAuth
  }
`
