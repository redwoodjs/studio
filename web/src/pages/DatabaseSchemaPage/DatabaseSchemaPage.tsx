import { Title, Card, Subtitle } from '@tremor/react'

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

      <Card className="mt-6 h-full p-6">
        <PrismaSchemaCell />
      </Card>
    </>
  )
}

export default DatabaseSchemaPage
