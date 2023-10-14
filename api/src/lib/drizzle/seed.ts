import { db } from './db'
import { otelTraceSpanTypeTable } from './schema'

const SPAN_TYPES = [
  {
    name: 'GraphQL',
    colour: '#FF0000',
  },
  {
    name: 'Prisma',
    colour: '#FF0000',
  },
  {
    name: 'SQL',
    colour: '#FF0000',
  },
  {
    name: 'RedwoodJS Function',
    colour: '#FF0000',
  },
  {
    name: 'RedwoodJS Service',
    colour: '#FF0000',
  },
]

export async function seed() {
  for (let i = 0; i < SPAN_TYPES.length; i++) {
    db.insert(otelTraceSpanTypeTable)
      .values(SPAN_TYPES[i])
      .onConflictDoNothing()
      .execute()
  }
}
