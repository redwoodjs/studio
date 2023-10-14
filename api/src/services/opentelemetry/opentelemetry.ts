import { desc } from 'drizzle-orm'
import { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/drizzle/db'
import { otelTraceSpanTable } from 'src/lib/drizzle/schema'

// TODO: I don't know how to do this with drizzle-orm so I have to manually restructure the data
export const opentelemetrySpans: QueryResolvers['opentelemetrySpans'] =
  async () => {
    const data = await db.query.otelTraceSpanTable.findMany({
      orderBy: desc(otelTraceSpanTable.endTime),
      with: {
        spanToAttributes: {
          with: {
            attribute: true,
          },
        },
      },
    })

    const restructuredData: ReturnType<QueryResolvers['opentelemetrySpans']> =
      []

    for (let i = 0; i < data.length; i++) {
      restructuredData.push({
        ...data[i],
        events: [],
        attributes: data[i].spanToAttributes.map(
          (spanToAttribute) => spanToAttribute.attribute
        ),

        // @ts-expect-error This is removing fields which are not expected
        spanToAttributes: undefined,
        spanToEvents: undefined,
      })
      //
      // data[i].attributes = data[i].spanToAttributes.map((spanToAttribute) => ({
      //   ...spanToAttribute.attribute,
      //   id: spanToAttribute.attributeId,
      // }))
    }

    return restructuredData
  }
