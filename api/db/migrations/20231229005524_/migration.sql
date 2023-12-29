/*
  Warnings:

  - You are about to alter the column `envelope` on the `MailSMTPInboxEntry` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("json")` to `Unsupported("JSON")`.
  - You are about to alter the column `smtp` on the `MailSMTPInboxEntry` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("json")` to `Unsupported("JSON")`.
  - You are about to alter the column `api` on the `MailAPIInboxEntry` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("json")` to `Unsupported("JSON")`.
  - You are about to alter the column `value` on the `OTelTraceAttribute` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("json")` to `Unsupported("JSON")`.
  - Added the required column `colour` to the `OTelTraceSpanType` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MailSMTPInboxEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "plaintext" TEXT,
    "html" TEXT,
    "smtp" JSON NOT NULL,
    "envelope" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_MailSMTPInboxEntry" ("createdAt", "envelope", "html", "id", "plaintext", "smtp", "updatedAt") SELECT "createdAt", "envelope", "html", "id", "plaintext", "smtp", "updatedAt" FROM "MailSMTPInboxEntry";
DROP TABLE "MailSMTPInboxEntry";
ALTER TABLE "new_MailSMTPInboxEntry" RENAME TO "MailSMTPInboxEntry";
CREATE TABLE "new_MailAPIInboxEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "api" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_MailAPIInboxEntry" ("api", "createdAt", "id", "updatedAt") SELECT "api", "createdAt", "id", "updatedAt" FROM "MailAPIInboxEntry";
DROP TABLE "MailAPIInboxEntry";
ALTER TABLE "new_MailAPIInboxEntry" RENAME TO "MailAPIInboxEntry";
CREATE TABLE "new_OTelTraceSpanType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_OTelTraceSpanType" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "OTelTraceSpanType";
DROP TABLE "OTelTraceSpanType";
ALTER TABLE "new_OTelTraceSpanType" RENAME TO "OTelTraceSpanType";
CREATE UNIQUE INDEX "OTelTraceSpanType_name_key" ON "OTelTraceSpanType"("name");
CREATE UNIQUE INDEX "OTelTraceSpanType_colour_key" ON "OTelTraceSpanType"("colour");
CREATE TABLE "new_OTelTraceAttribute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_OTelTraceAttribute" ("createdAt", "hash", "id", "key", "type", "updatedAt", "value") SELECT "createdAt", "hash", "id", "key", "type", "updatedAt", "value" FROM "OTelTraceAttribute";
DROP TABLE "OTelTraceAttribute";
ALTER TABLE "new_OTelTraceAttribute" RENAME TO "OTelTraceAttribute";
CREATE UNIQUE INDEX "OTelTraceAttribute_hash_key" ON "OTelTraceAttribute"("hash");
CREATE INDEX "OTelTraceAttribute_hash_idx" ON "OTelTraceAttribute"("hash");
CREATE INDEX "OTelTraceAttribute_key_idx" ON "OTelTraceAttribute"("key");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
