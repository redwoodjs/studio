import type { SMTPServerEnvelope } from 'smtp-server'
import type { ParsedMail } from 'mailparser'

import { InferSelectModel, InferInsertModel, relations, sql } from 'drizzle-orm'
import { sqliteTable, integer, text, index, unique, } from "drizzle-orm/sqlite-core"

import { customAlphabet } from 'nanoid'

// TODO: Can we have these `updatedAt` automatically updated when a row is updated?

// NOTE: The '-' character is not included because it can make copy-pasting the ID more difficult
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz', 24)

const SQLITE_UNIX_MS = sql`(unixepoch('now','subsec') * 1000)`

// --- Mail Previews ---

export const mailRendererTable = sqliteTable('mail_renderer', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  key: text('key').unique().notNull(),
  isDefault: integer('is_default', {mode: 'boolean'}).default(false).notNull(),
  createdAt: integer('created_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
  updatedAt: integer('updated_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
}, (table) => {
  return {
    createdAtIndex: index('mail_renderer_created_at_index').on(table.createdAt),
  }
})
export type MailRenderer = InferSelectModel<typeof mailRendererTable>
export type InsertMailRenderer = InferInsertModel<typeof mailRendererTable>

export const mailTemplateTable = sqliteTable('mail_template', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  name: text('name').notNull(),
  path: text('path').notNull().unique(),
  createdAt: integer('created_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
  updatedAt: integer('updated_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
}, (table) => {
  return {
    createdAtIndex: index('mail_template_created_at_index').on(table.createdAt),
  }
})
export type MailTemplate = InferSelectModel<typeof mailTemplateTable>
export type InsertMailTemplate = InferInsertModel<typeof mailTemplateTable>

export const mailTemplateRelations = relations(mailTemplateTable, ({ many }) => ({
	components: many(mailTemplateComponentTable),
}))

export const mailTemplateComponentTable = sqliteTable('mail_template_component', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  name: text('name').notNull(),
  templateId: text('template_id').notNull().references(() => mailTemplateTable.id, { onDelete: 'cascade' }),
  propsPreview: text('props_preview').default(null),
  createdAt: integer('created_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
  updatedAt: integer('updated_at', {mode: 'timestamp_ms'}).default(SQLITE_UNIX_MS).notNull(),
}, (table) => {
  return {
    createdAtIndex: index('mail_template_component_created_at_index').on(table.createdAt),
  }
})
export type MailTemplateComponent = InferSelectModel<typeof mailTemplateComponentTable>
export type InsertMailTemplateComponent = InferInsertModel<typeof mailTemplateComponentTable>

export const mailTemplateComponentRelations = relations(mailTemplateComponentTable, ({ one }) => ({
	template: one(mailTemplateTable, { fields: [mailTemplateComponentTable.templateId], references: [mailTemplateTable.id] }),
}))

// --- Mail Inbox ---

export const mailInboxEntryTable = sqliteTable('mail_inbox_entry', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  source: text('source', { enum: ['SMTP', 'API'] }).notNull(),
  api: text('api', { mode: 'json' }),
  text: text('text'),
  html: text('html'),
  smtp: text('smtp', { mode: 'json' }).$type<ParsedMail>(),
  envelope: text('envelope', { mode: 'json' }).$type<SMTPServerEnvelope>(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).default(SQLITE_UNIX_MS).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).default(SQLITE_UNIX_MS).notNull(),
}, (table) => {
  return {
    sourceIndex: index('mail_inbox_entry_source_index').on(table.source),
    createdAtIndex: index('mail_inbox_entry_created_at_index').on(table.createdAt),
  }
})
export type MailInboxEntry = InferSelectModel<typeof mailInboxEntryTable>
export type InsertMailInboxEntry = InferInsertModel<typeof mailInboxEntryTable>

// --- OpenTelemetry Trace Attributes ---

export const otelTraceAttributeTable = sqliteTable('otel_trace_attribute', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  key: text('key').notNull(),
  value: text('value', { mode: "json" }).notNull(),
  type: text('type', { enum: ['stringValue', 'boolValue', 'intValue', 'doubleValue', 'arrayValue', 'kvlistValue', 'bytesValue'] }).notNull(),
}, (table) => {
  return {
    keyIndex: index('otel_trace_attribute_key_index').on(table.key),
  }
})
export type OtelTraceAttribute = InferSelectModel<typeof otelTraceAttributeTable>
export type InsertOtelTraceAttribute = InferInsertModel<typeof otelTraceAttributeTable>

export const otelTraceAttributeRelations = relations(otelTraceAttributeTable, ({ many }) => ({
  attributeToResources: many(otelTraceResourceAttributeTable),
}))

// --- OpenTelemetry Trace Resources ---

export const otelTraceResourceTable = sqliteTable('otel_trace_resource', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  attributes: text('attributes', { mode: "json" }).notNull(),
}, (table) => {
  return {
    attributesIndex: index('otel_trace_resource_attributes_index').on(table.attributes),
  }
})
export type OtelTraceResource = InferSelectModel<typeof otelTraceResourceTable>
export type InsertOtelTraceResource = InferInsertModel<typeof otelTraceResourceTable>

export const otelTraceResourceRelations = relations(otelTraceResourceTable, ({ many }) => ({
  resourceToAttributes: many(otelTraceResourceAttributeTable),
}))

// --- OpenTelemetry Trace Resource-Attribute ---

export const otelTraceResourceAttributeTable = sqliteTable('otel_trace_resource_attribute', {
  id: text('id').primaryKey().$defaultFn(nanoid),
  resourceId: text('resource_id').notNull().references(() => otelTraceResourceTable.id, { onDelete: 'cascade' }),
  attributeId: text('attribute_id').notNull().references(() => otelTraceAttributeTable.id, { onDelete: 'cascade' }),
})
export type OtelTraceResourceAttribute = InferSelectModel<typeof otelTraceResourceAttributeTable>
export type InsertOtelTraceResourceAttribute = InferInsertModel<typeof otelTraceResourceAttributeTable>

export const otelTraceResourceAttributeRelations = relations(otelTraceResourceAttributeTable, ({ one }) => ({
  resource: one(otelTraceResourceTable, { fields: [otelTraceResourceAttributeTable.resourceId], references: [otelTraceResourceTable.id] }),
  attribute: one(otelTraceAttributeTable, { fields: [otelTraceResourceAttributeTable.attributeId], references: [otelTraceAttributeTable.id] }),
}))
