import { db } from 'src/lib/db'

async function seed() {
  // Span types
  const defaultOTelTraceSpanTypes = [
    { name: 'GENERIC', colour: '999999' },
    { name: 'HTTP', colour: '1A8CFF' },
    { name: 'GRAPHQL', colour: 'E600E6' },
    { name: 'SQL', colour: 'FF1AC6' },
    { name: 'PRISMA', colour: '8000FF' },
    { name: 'REDWOOD_SERVICE', colour: 'FF6600' },
    { name: 'REDWOOD_FUNCTION', colour: '00B33C' },
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
          name: spanType.name,
          colour: spanType.colour,
        },
      })
    }
  }
}

seed()
