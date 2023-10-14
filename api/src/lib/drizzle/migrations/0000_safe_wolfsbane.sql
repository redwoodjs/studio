CREATE TABLE `mail_inbox_entry` (
	`id` text PRIMARY KEY NOT NULL,
	`source` text NOT NULL,
	`api` text,
	`text` text,
	`html` text,
	`smtp` text,
	`envelope` text,
	`created_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mail_renderer` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text NOT NULL,
	`is_default` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mail_template_component` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`template_id` text NOT NULL,
	`props_preview` text DEFAULT null,
	`created_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL,
	FOREIGN KEY (`template_id`) REFERENCES `mail_template`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `mail_template` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`path` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch('now','subsec') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `otel_trace_attribute` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	`type` text NOT NULL,
	`hash` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `otel_trace_resource_attribute` (
	`id` text PRIMARY KEY NOT NULL,
	`resource_id` text NOT NULL,
	`attribute_id` text NOT NULL,
	FOREIGN KEY (`resource_id`) REFERENCES `otel_trace_resource`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`attribute_id`) REFERENCES `otel_trace_attribute`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `otel_trace_resource` (
	`id` text PRIMARY KEY NOT NULL,
	`attribute_hash` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `otel_trace_span_attribute` (
	`id` text PRIMARY KEY NOT NULL,
	`span_id` text NOT NULL,
	`attribute_id` text NOT NULL,
	FOREIGN KEY (`span_id`) REFERENCES `otel_trace_span`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`attribute_id`) REFERENCES `otel_trace_attribute`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `otel_trace_span_event_attribute` (
	`id` text PRIMARY KEY NOT NULL,
	`event_id` text NOT NULL,
	`attribute_id` text NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `otel_trace_span_event`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`attribute_id`) REFERENCES `otel_trace_attribute`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `otel_trace_span_event` (
	`id` text PRIMARY KEY NOT NULL,
	`span_id` text NOT NULL,
	`time_unix_nano` text NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`span_id`) REFERENCES `otel_trace_span`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `otel_trace_span_scope` (
	`id` text PRIMARY KEY NOT NULL,
	`hash` text NOT NULL,
	`name` text NOT NULL,
	`version` text
);
--> statement-breakpoint
CREATE TABLE `otel_trace_span` (
	`id` text PRIMARY KEY NOT NULL,
	`resource_id` text NOT NULL,
	`scope_id` text NOT NULL,
	`trace_id` text NOT NULL,
	`span_id` text NOT NULL,
	`trace_state` text,
	`parent_span_id` text,
	`flags` text,
	`name` text NOT NULL,
	`kind` integer NOT NULL,
	`start_time_unix_nano` text NOT NULL,
	`end_time_unix_nano` text NOT NULL,
	`status_code` integer,
	`status_message` text
);
--> statement-breakpoint
CREATE INDEX `mail_inbox_entry_source_index` ON `mail_inbox_entry` (`source`);--> statement-breakpoint
CREATE INDEX `mail_inbox_entry_created_at_index` ON `mail_inbox_entry` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `mail_renderer_key_unique` ON `mail_renderer` (`key`);--> statement-breakpoint
CREATE INDEX `mail_renderer_created_at_index` ON `mail_renderer` (`created_at`);--> statement-breakpoint
CREATE INDEX `mail_template_component_created_at_index` ON `mail_template_component` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `mail_template_path_unique` ON `mail_template` (`path`);--> statement-breakpoint
CREATE INDEX `mail_template_created_at_index` ON `mail_template` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `otel_trace_attribute_hash_unique` ON `otel_trace_attribute` (`hash`);--> statement-breakpoint
CREATE INDEX `otel_trace_attribute_key_index` ON `otel_trace_attribute` (`key`);--> statement-breakpoint
CREATE INDEX `otel_trace_attribute_hash_index` ON `otel_trace_attribute` (`hash`);--> statement-breakpoint
CREATE UNIQUE INDEX `otel_trace_resource_attribute_hash_unique` ON `otel_trace_resource` (`attribute_hash`);--> statement-breakpoint
CREATE INDEX `otel_trace_resource_attributes_hash_index` ON `otel_trace_resource` (`attribute_hash`);--> statement-breakpoint
CREATE UNIQUE INDEX `otel_trace_span_scope_hash_unique` ON `otel_trace_span_scope` (`hash`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_scope_hash_index` ON `otel_trace_span_scope` (`hash`);--> statement-breakpoint
CREATE UNIQUE INDEX `otel_trace_span_span_id_unique` ON `otel_trace_span` (`span_id`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_trace_id_index` ON `otel_trace_span` (`trace_id`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_span_id_index` ON `otel_trace_span` (`span_id`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_parent_span_id_index` ON `otel_trace_span` (`parent_span_id`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_start_time_unix_nano_index` ON `otel_trace_span` (`start_time_unix_nano`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_end_time_unix_nano_index` ON `otel_trace_span` (`end_time_unix_nano`);--> statement-breakpoint
CREATE INDEX `otel_trace_span_status_code_index` ON `otel_trace_span` (`status_code`);