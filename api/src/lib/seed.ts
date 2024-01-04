import { db } from 'src/lib/db'

async function seed() {
  // Span types
  const defaultOTelTraceSpanTypes = [
    { name: 'Generic', colour: '999999' },
    { name: 'HTTP', colour: '1A8CFF' },
    { name: 'GraphQL', colour: 'E600E6' },
    { name: 'SQL', colour: 'FF1AC6' },
    { name: 'Prisma', colour: '8000FF' },
    { name: 'Redwood Service', colour: 'FF6600' },
    { name: 'Redwood Function', colour: '00B33C' },
  ]
  for (const spanType of defaultOTelTraceSpanTypes) {
    const spanTypeExists = await db.oTelTraceSpanType.findUnique({
      where: {
        name: spanType.name,
      },
    })
    if (!spanTypeExists) {
      await db.oTelTraceSpanType.create({
        data: {
          id: spanType.name.toUpperCase().replace(/ /g, '_'),
          name: spanType.name,
          colour: spanType.colour,
        },
      })
    }
  }
}

seed()
