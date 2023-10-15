import { InferSelectModel, InferInsertModel, relations, sql } from 'drizzle-orm'
import { sqliteTable, integer, text, index } from 'drizzle-orm/sqlite-core'
import type { ParsedMail } from 'mailparser'
import { customAlphabet } from 'nanoid'
import type { SMTPServerEnvelope } from 'smtp-server'

// TODO: I gave all tables an `id` column which is an automatically generated nanoid
//       This may not be the best approach as you end up with some double id's like
//       span.id and span.spanId. That could be confusing when we lookup a span by
//       id and get confused about which id we're talking about.

// TODO: Can we have these `updatedAt` automatically updated when a row is updated?

// NOTE: The '-' character is not included because it can make copy-pasting the ID more difficult
const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
  24
)

const SQLITE_UNIX_MS = sql`(unixepoch('now','subsec') * 1000)`

// --- Mail Previews ---

export const mailRendererTable = sqliteTable(
  'mail_renderer',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    key: text('key').unique().notNull(),
    isDefault: integer('is_default', { mode: 'boolean' })
      .default(false)
      .notNull(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
  },
  (table) => {
    return {
      createdAtIndex: index('mail_renderer_created_at_index').on(
        table.createdAt
      ),
    }
  }
)
export type MailRenderer = InferSelectModel<typeof mailRendererTable>
export type InsertMailRenderer = InferInsertModel<typeof mailRendererTable>

export const mailTemplateTable = sqliteTable(
  'mail_template',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    name: text('name').notNull(),
    path: text('path').notNull().unique(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
  },
  (table) => {
    return {
      createdAtIndex: index('mail_template_created_at_index').on(
        table.createdAt
      ),
    }
  }
)
export type MailTemplate = InferSelectModel<typeof mailTemplateTable>
export type InsertMailTemplate = InferInsertModel<typeof mailTemplateTable>

export const mailTemplateRelations = relations(
  mailTemplateTable,
  ({ many }) => ({
    components: many(mailTemplateComponentTable),
  })
)

export const mailTemplateComponentTable = sqliteTable(
  'mail_template_component',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    name: text('name').notNull(),
    templateId: text('template_id')
      .notNull()
      .references(() => mailTemplateTable.id, { onDelete: 'cascade' }),
    propsPreview: text('props_preview').default(null),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
  },
  (table) => {
    return {
      createdAtIndex: index('mail_template_component_created_at_index').on(
        table.createdAt
      ),
    }
  }
)
export type MailTemplateComponent = InferSelectModel<
  typeof mailTemplateComponentTable
>
export type InsertMailTemplateComponent = InferInsertModel<
  typeof mailTemplateComponentTable
>

export const mailTemplateComponentRelations = relations(
  mailTemplateComponentTable,
  ({ one }) => ({
    template: one(mailTemplateTable, {
      fields: [mailTemplateComponentTable.templateId],
      references: [mailTemplateTable.id],
    }),
  })
)

// --- Mail Inbox ---

export const mailInboxEntryTable = sqliteTable(
  'mail_inbox_entry',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    source: text('source', { enum: ['SMTP', 'API'] }).notNull(),
    api: text('api', { mode: 'json' }),
    text: text('text'),
    html: text('html'),
    smtp: text('smtp', { mode: 'json' }).$type<ParsedMail>(),
    envelope: text('envelope', { mode: 'json' }).$type<SMTPServerEnvelope>(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(SQLITE_UNIX_MS)
      .notNull(),
  },
  (table) => {
    return {
      sourceIndex: index('mail_inbox_entry_source_index').on(table.source),
      createdAtIndex: index('mail_inbox_entry_created_at_index').on(
        table.createdAt
      ),
    }
  }
)
export type MailInboxEntry = InferSelectModel<typeof mailInboxEntryTable>
export type InsertMailInboxEntry = InferInsertModel<typeof mailInboxEntryTable>

// --- OpenTelemetry Trace Attributes ---

export const otelTraceAttributeTable = sqliteTable(
  'otel_trace_attribute',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    key: text('key').notNull(),
    value: text('value', { mode: 'json' }).notNull(),
    type: text('type', {
      enum: [
        'stringValue',
        'boolValue',
        'intValue',
        'doubleValue',
        'arrayValue',
        'kvlistValue',
        'bytesValue',
      ],
    }).notNull(),
    hash: text('hash').unique().notNull(),
  },
  (table) => {
    return {
      keyIndex: index('otel_trace_attribute_key_index').on(table.key),
      hashIndex: index('otel_trace_attribute_hash_index').on(table.hash),
    }
  }
)
export type OtelTraceAttribute = InferSelectModel<
  typeof otelTraceAttributeTable
>
export type InsertOtelTraceAttribute = InferInsertModel<
  typeof otelTraceAttributeTable
>

export const otelTraceAttributeRelations = relations(
  otelTraceAttributeTable,
  ({ many }) => ({
    attributeToResources: many(otelTraceResourceAttributeTable),
    attributeToEvents: many(otelTraceSpanEventAttributeTable),
  })
)

// --- OpenTelemetry Trace Resources ---

export const otelTraceResourceTable = sqliteTable(
  'otel_trace_resource',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    attriubuteHash: text('attribute_hash').unique().notNull(),
  },
  (table) => {
    return {
      attributesHashIndex: index(
        'otel_trace_resource_attributes_hash_index'
      ).on(table.attriubuteHash),
    }
  }
)
export type OtelTraceResource = InferSelectModel<typeof otelTraceResourceTable>
export type InsertOtelTraceResource = InferInsertModel<
  typeof otelTraceResourceTable
>

export const otelTraceResourceRelations = relations(
  otelTraceResourceTable,
  ({ many }) => ({
    resourceToAttributes: many(otelTraceResourceAttributeTable),
  })
)

// --- OpenTelemetry Trace Resource-Attribute ---

export const otelTraceResourceAttributeTable = sqliteTable(
  'otel_trace_resource_attribute',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    resourceId: text('resource_id')
      .notNull()
      .references(() => otelTraceResourceTable.id, { onDelete: 'cascade' }),
    attributeId: text('attribute_id')
      .notNull()
      .references(() => otelTraceAttributeTable.id, { onDelete: 'cascade' }),
  }
)
export type OtelTraceResourceAttribute = InferSelectModel<
  typeof otelTraceResourceAttributeTable
>
export type InsertOtelTraceResourceAttribute = InferInsertModel<
  typeof otelTraceResourceAttributeTable
>

export const otelTraceResourceAttributeRelations = relations(
  otelTraceResourceAttributeTable,
  ({ one }) => ({
    resource: one(otelTraceResourceTable, {
      fields: [otelTraceResourceAttributeTable.resourceId],
      references: [otelTraceResourceTable.id],
    }),
    attribute: one(otelTraceAttributeTable, {
      fields: [otelTraceResourceAttributeTable.attributeId],
      references: [otelTraceAttributeTable.id],
    }),
  })
)

// --- OpenTelemetry Trace Span Scope ---

export const otelTraceSpanScopeTable = sqliteTable(
  'otel_trace_span_scope',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    hash: text('hash').unique().notNull(),
    name: text('name').notNull(),
    version: text('version'),
  },
  (table) => {
    return {
      hashIndex: index('otel_trace_span_scope_hash_index').on(table.hash),
    }
  }
)
export type OtelTraceSpanScope = InferSelectModel<
  typeof otelTraceSpanScopeTable
>
export type InsertOtelTraceSpanScope = InferInsertModel<
  typeof otelTraceSpanScopeTable
>

// --- OpenTelemetry Trace Span ---

export const otelTraceSpanTable = sqliteTable(
  'otel_trace_span',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    resourceId: text('resource_id').notNull(),
    scopeId: text('scope_id').notNull(),
    traceId: text('trace_id').notNull(),
    spanId: text('span_id').notNull().unique(),
    traceState: text('trace_state'), // ?
    parentSpanId: text('parent_span_id'),
    flags: text('flags'), // ?
    name: text('name').notNull(),
    kind: integer('kind', { mode: 'number' }).notNull(),
    startTime: text('start_time_unix_nano').notNull(),
    endTime: text('end_time_unix_nano').notNull(),
    statusCode: integer('status_code', { mode: 'number' }),
    statusMessage: text('status_message'),
    type: text('type')
      .notNull()
      .references(() => otelTraceSpanTypeTable.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      traceIdIndex: index('otel_trace_span_trace_id_index').on(table.traceId),
      spanIdIndex: index('otel_trace_span_span_id_index').on(table.spanId),
      parentSpanIdIndex: index('otel_trace_span_parent_span_id_index').on(
        table.parentSpanId
      ),
      startTimeIndex: index('otel_trace_span_start_time_unix_nano_index').on(
        table.startTime
      ),
      endTimeIndex: index('otel_trace_span_end_time_unix_nano_index').on(
        table.endTime
      ),
      statusCodeIndex: index('otel_trace_span_status_code_index').on(
        table.statusCode
      ),
      // TODO: Add index for name?
      // TODO: Add index for kind?
    }
  }
)
export type OtelTraceSpan = InferSelectModel<typeof otelTraceSpanTable>
export type InsertOtelTraceSpan = InferInsertModel<typeof otelTraceSpanTable>

export const otelTraceSpanRelations = relations(
  otelTraceSpanTable,
  ({ many }) => ({
    spanToAttributes: many(otelTraceSpanAttributeTable),
    spanToEvents: many(otelTraceSpanEventTable),
  })
)

// --- OpenTelemetry Trace Span Event ---

export const otelTraceSpanEventTable = sqliteTable('otel_trace_span_event', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  spanId: text('span_id')
    .notNull()
    .references(() => otelTraceSpanTable.id, {
      onDelete: 'cascade',
    }),
  time: text('time_unix_nano').notNull(),
  name: text('name').notNull(),
})
export type OtelTraceSpanEvent = InferSelectModel<
  typeof otelTraceSpanEventTable
>
export type InsertOtelTraceSpanEvent = InferInsertModel<
  typeof otelTraceSpanEventTable
>

export const otelTraceSpanEventRelations = relations(
  otelTraceSpanEventTable,
  ({ many }) => ({
    eventToAttributes: many(otelTraceSpanEventAttributeTable),
  })
)

// --- OpenTelemetry Trace Event-Attribute ---

export const otelTraceSpanEventAttributeTable = sqliteTable(
  'otel_trace_span_event_attribute',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    eventId: text('event_id')
      .notNull()
      .references(() => otelTraceSpanEventTable.id, { onDelete: 'cascade' }),
    attributeId: text('attribute_id')
      .notNull()
      .references(() => otelTraceAttributeTable.id, { onDelete: 'cascade' }),
  }
)
export type OtelTraceSpanEventAttribute = InferSelectModel<
  typeof otelTraceSpanEventAttributeTable
>
export type InsertOtelTraceSpanEventAttribute = InferInsertModel<
  typeof otelTraceSpanEventAttributeTable
>

export const otelTraceSpanEventAttributeRelations = relations(
  otelTraceSpanEventAttributeTable,
  ({ one }) => ({
    event: one(otelTraceSpanEventTable, {
      fields: [otelTraceSpanEventAttributeTable.eventId],
      references: [otelTraceSpanEventTable.id],
    }),
    attribute: one(otelTraceAttributeTable, {
      fields: [otelTraceSpanEventAttributeTable.attributeId],
      references: [otelTraceAttributeTable.id],
    }),
  })
)

// --- OpenTelemetry Trace Span-Attribute ---

export const otelTraceSpanAttributeTable = sqliteTable(
  'otel_trace_span_attribute',
  {
    id: text('id').primaryKey().$defaultFn(nanoid),
    spanId: text('span_id')
      .notNull()
      .references(() => otelTraceSpanTable.id, { onDelete: 'cascade' }),
    attributeId: text('attribute_id')
      .notNull()
      .references(() => otelTraceAttributeTable.id, { onDelete: 'cascade' }),
  }
)
export type OtelTraceSpanAttribute = InferSelectModel<
  typeof otelTraceSpanAttributeTable
>
export type InsertOtelTraceSpanAttribute = InferInsertModel<
  typeof otelTraceSpanAttributeTable
>

export const otelTraceSpanAttributeRelations = relations(
  otelTraceSpanAttributeTable,
  ({ one }) => ({
    span: one(otelTraceSpanTable, {
      fields: [otelTraceSpanAttributeTable.spanId],
      references: [otelTraceSpanTable.id],
    }),
    attribute: one(otelTraceAttributeTable, {
      fields: [otelTraceSpanAttributeTable.attributeId],
      references: [otelTraceAttributeTable.id],
    }),
  })
)

// --- OpenTelemetry Trace Span Type ---

export const otelTraceSpanTypeTable = sqliteTable('otel_trace_span_type', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  name: text('name').notNull().unique(),
  colour: text('colour').notNull(),
})
export type OtelTraceSpanType = InferSelectModel<typeof otelTraceSpanTypeTable>
export type InsertOtelTraceSpanType = InferInsertModel<
  typeof otelTraceSpanTypeTable
>
