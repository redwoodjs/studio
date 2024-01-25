import { Title, Card, Subtitle } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import PrismaSchemaCell from 'src/components/PrismaSchemaCell'

const DatabaseErdPage = () => {
  return (
    <>
      <MetaTags
        title="Database Entity Relationship Diagram"
        description="ER diagram of the database schema"
      />

      <Title>Database Schema</Title>
      <Subtitle>Explore your database schema.</Subtitle>

      <Card className="mt-6 h-full p-6">
        <PrismaSchemaCell />
      </Card>
    </>
  )
}

export default DatabaseErdPage
