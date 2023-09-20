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
	`type` text NOT NULL
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
	`attributes` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `mail_inbox_entry_source_index` ON `mail_inbox_entry` (`source`);--> statement-breakpoint
CREATE INDEX `mail_inbox_entry_created_at_index` ON `mail_inbox_entry` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `mail_renderer_key_unique` ON `mail_renderer` (`key`);--> statement-breakpoint
CREATE INDEX `mail_renderer_created_at_index` ON `mail_renderer` (`created_at`);--> statement-breakpoint
CREATE INDEX `mail_template_component_created_at_index` ON `mail_template_component` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `mail_template_path_unique` ON `mail_template` (`path`);--> statement-breakpoint
CREATE INDEX `mail_template_created_at_index` ON `mail_template` (`created_at`);--> statement-breakpoint
CREATE INDEX `otel_trace_attribute_key_index` ON `otel_trace_attribute` (`key`);--> statement-breakpoint
CREATE INDEX `otel_trace_resource_attributes_index` ON `otel_trace_resource` (`attributes`);