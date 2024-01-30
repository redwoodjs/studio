import { Title, Subtitle } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import PrismaSchemaCell from 'src/components/PrismaSchemaCell'

const DatabaseSchemaPage = () => {
  return (
    <>
      <MetaTags
        title="Database Schema"
        description="Explore your database schema."
      />

      <Title>Database Schema</Title>
      <Subtitle>Explore your database schema.</Subtitle>

      <PrismaSchemaCell />
    </>
  )
}

export default DatabaseSchemaPage
