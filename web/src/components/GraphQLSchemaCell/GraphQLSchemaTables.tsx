import { Tab } from '@headlessui/react'
import {
  Bold,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Grid,
  Col,
  Title,
  Subtitle,
} from '@tremor/react'
import type { GraphQLSchema } from 'types/graphql'

export const GraphQLSchemaTables = ({ schema }: { schema: GraphQLSchema }) => {
  const definitions = JSON.parse(schema.definitions)

  return (
    <>
      <Grid numItems={2} className="my-4 gap-4">
        {definitions.map((definition, index: number) => {
          const name = definition.name?.value
          const kind = definition.kind
            .replace('TypeDefinition', '')
            .replace('Definition', '')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .split(' ')
            .join(' ')
          const description = definition.description?.value

          return (
            <Col key={`gql-table-${definition.name}-${index}`}>
              <Card className="space-y-4">
                <Title>{name}</Title>
                <Subtitle>{kind}</Subtitle>
                {description && <Subtitle>{description}</Subtitle>}
                {definition.fields && (
                  <Table className="mt-5">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell></TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Required</TableHeaderCell>
                        <TableHeaderCell>Directives</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {definition?.fields?.map((field, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Bold>{index + 1}</Bold>
                          </TableCell>
                          <TableCell>
                            <Bold>{field.name?.value}</Bold>
                          </TableCell>
                          <TableCell>
                            <Text>
                              {field.type?.type?.type?.type?.name?.value ||
                                field.type?.type?.type?.name?.value ||
                                field.type?.type?.name?.value ||
                                field.type?.name?.value}
                              <span>
                                {field.type?.type?.kind === 'ListType' && `[]`}
                              </span>
                            </Text>
                          </TableCell>
                          <TableCell>
                            <Text>
                              {field.type?.kind === 'NonNullType'
                                ? 'Yes'
                                : 'No'}
                            </Text>
                          </TableCell>
                          <TableCell>
                            <Text className="text-wrap">
                              {field.directives
                                ?.map((d) => d.name?.value)
                                .join(', ')}
                            </Text>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </Card>
            </Col>
          )
        })}
      </Grid>
    </>
  )
}
