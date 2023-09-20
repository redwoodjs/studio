import { Title, Grid, Col, Card, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import PrismaSchemaCell from 'src/components/PrismaSchemaCell'

const PrismaPage = () => {
  return (
    <>
      <MetaTags title="PrismaPage" description="PrismaPage page" />

      <Title>Prisma Schema</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* Timeline */}
        <Col numColSpanLg={6}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>

        {/* Schema visualisation */}
        <Col numColSpanLg={4}>
          <Card className="-p-6 h-full">
            <PrismaSchemaCell />
          </Card>
        </Col>

        {/* Linting sidebar */}
        <Col numColSpanLg={2}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default PrismaPage
