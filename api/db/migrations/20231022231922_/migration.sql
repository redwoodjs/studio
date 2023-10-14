-- CreateTable
CREATE TABLE "ConnectionStatus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "developmentServer" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MailRenderer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MailTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MailTemplateComponent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mailTemplateId" TEXT NOT NULL,
    "propsTemplate" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MailTemplateComponent_mailTemplateId_fkey" FOREIGN KEY ("mailTemplateId") REFERENCES "MailTemplate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MailSMTPInboxEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "plaintext" TEXT,
    "html" TEXT,
    "smtp" JSON NOT NULL,
    "envelope" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MailAPIInboxEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "api" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OTelTraceAttribute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" JSON NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OTelTraceResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "attributesHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OTelTraceSpan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "traceId" TEXT NOT NULL,
    "traceState" TEXT,
    "spanId" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT NOT NULL,
    "flags" INTEGER,
    "kind" INTEGER NOT NULL,
    "startTimeNano" BIGINT NOT NULL,
    "endTimeNano" BIGINT NOT NULL,
    "statusMessage" TEXT,
    "statusCode" INTEGER,
    "scopeId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "OTelTraceSpan_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "OTelTraceScope" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OTelTraceSpan_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "OTelTraceResource" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OTelTraceEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startTimeNano" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "spanId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "OTelTraceEvent_spanId_fkey" FOREIGN KEY ("spanId") REFERENCES "OTelTraceSpan" ("spanId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OTelTraceLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "traceId" TEXT NOT NULL,
    "spanId" TEXT NOT NULL,
    "traceState" TEXT,
    "flags" INTEGER,
    "linkedSpanId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "OTelTraceLink_linkedSpanId_fkey" FOREIGN KEY ("linkedSpanId") REFERENCES "OTelTraceSpan" ("spanId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OTelTraceScope" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "version" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_OTelTraceAttributeToOTelTraceResource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceResource_A_fkey" FOREIGN KEY ("A") REFERENCES "OTelTraceAttribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceResource_B_fkey" FOREIGN KEY ("B") REFERENCES "OTelTraceResource" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_OTelTraceAttributeToOTelTraceSpan" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceSpan_A_fkey" FOREIGN KEY ("A") REFERENCES "OTelTraceAttribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceSpan_B_fkey" FOREIGN KEY ("B") REFERENCES "OTelTraceSpan" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_OTelTraceAttributeToOTelTraceEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "OTelTraceAttribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "OTelTraceEvent" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_OTelTraceAttributeToOTelTraceLink" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceLink_A_fkey" FOREIGN KEY ("A") REFERENCES "OTelTraceAttribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceLink_B_fkey" FOREIGN KEY ("B") REFERENCES "OTelTraceLink" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_OTelTraceAttributeToOTelTraceScope" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceScope_A_fkey" FOREIGN KEY ("A") REFERENCES "OTelTraceAttribute" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OTelTraceAttributeToOTelTraceScope_B_fkey" FOREIGN KEY ("B") REFERENCES "OTelTraceScope" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "MailRenderer_key_key" ON "MailRenderer"("key");

-- CreateIndex
CREATE UNIQUE INDEX "MailTemplate_path_key" ON "MailTemplate"("path");

-- CreateIndex
CREATE UNIQUE INDEX "MailTemplateComponent_name_key" ON "MailTemplateComponent"("name");

-- CreateIndex
CREATE INDEX "MailTemplateComponent_mailTemplateId_idx" ON "MailTemplateComponent"("mailTemplateId");

-- CreateIndex
CREATE UNIQUE INDEX "OTelTraceAttribute_hash_key" ON "OTelTraceAttribute"("hash");

-- CreateIndex
CREATE INDEX "OTelTraceAttribute_hash_idx" ON "OTelTraceAttribute"("hash");

-- CreateIndex
CREATE INDEX "OTelTraceAttribute_key_idx" ON "OTelTraceAttribute"("key");

-- CreateIndex
CREATE UNIQUE INDEX "OTelTraceResource_attributesHash_key" ON "OTelTraceResource"("attributesHash");

-- CreateIndex
CREATE INDEX "OTelTraceResource_attributesHash_idx" ON "OTelTraceResource"("attributesHash");

-- CreateIndex
CREATE UNIQUE INDEX "OTelTraceSpan_spanId_key" ON "OTelTraceSpan"("spanId");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_traceId_idx" ON "OTelTraceSpan"("traceId");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_spanId_idx" ON "OTelTraceSpan"("spanId");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_parentId_idx" ON "OTelTraceSpan"("parentId");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_statusCode_idx" ON "OTelTraceSpan"("statusCode");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_scopeId_idx" ON "OTelTraceSpan"("scopeId");

-- CreateIndex
CREATE INDEX "OTelTraceSpan_resourceId_idx" ON "OTelTraceSpan"("resourceId");

-- CreateIndex
CREATE INDEX "OTelTraceEvent_spanId_idx" ON "OTelTraceEvent"("spanId");

-- CreateIndex
CREATE INDEX "OTelTraceLink_traceId_idx" ON "OTelTraceLink"("traceId");

-- CreateIndex
CREATE INDEX "OTelTraceLink_spanId_idx" ON "OTelTraceLink"("spanId");

-- CreateIndex
CREATE INDEX "OTelTraceLink_linkedSpanId_idx" ON "OTelTraceLink"("linkedSpanId");

-- CreateIndex
CREATE UNIQUE INDEX "OTelTraceScope_name_version_key" ON "OTelTraceScope"("name", "version");

-- CreateIndex
CREATE UNIQUE INDEX "_OTelTraceAttributeToOTelTraceResource_AB_unique" ON "_OTelTraceAttributeToOTelTraceResource"("A", "B");

-- CreateIndex
CREATE INDEX "_OTelTraceAttributeToOTelTraceResource_B_index" ON "_OTelTraceAttributeToOTelTraceResource"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OTelTraceAttributeToOTelTraceSpan_AB_unique" ON "_OTelTraceAttributeToOTelTraceSpan"("A", "B");

-- CreateIndex
CREATE INDEX "_OTelTraceAttributeToOTelTraceSpan_B_index" ON "_OTelTraceAttributeToOTelTraceSpan"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OTelTraceAttributeToOTelTraceEvent_AB_unique" ON "_OTelTraceAttributeToOTelTraceEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_OTelTraceAttributeToOTelTraceEvent_B_index" ON "_OTelTraceAttributeToOTelTraceEvent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OTelTraceAttributeToOTelTraceLink_AB_unique" ON "_OTelTraceAttributeToOTelTraceLink"("A", "B");

-- CreateIndex
CREATE INDEX "_OTelTraceAttributeToOTelTraceLink_B_index" ON "_OTelTraceAttributeToOTelTraceLink"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OTelTraceAttributeToOTelTraceScope_AB_unique" ON "_OTelTraceAttributeToOTelTraceScope"("A", "B");

-- CreateIndex
CREATE INDEX "_OTelTraceAttributeToOTelTraceScope_B_index" ON "_OTelTraceAttributeToOTelTraceScope"("B");
