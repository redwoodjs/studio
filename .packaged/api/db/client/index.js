
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ConnectionStatusScalarFieldEnum = {
  id: 'id',
  developmentServer: 'developmentServer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MailRendererScalarFieldEnum = {
  id: 'id',
  key: 'key',
  isDefault: 'isDefault',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MailTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MailTemplateComponentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  mailTemplateId: 'mailTemplateId',
  propsTemplate: 'propsTemplate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MailSMTPInboxEntryScalarFieldEnum = {
  id: 'id',
  plaintext: 'plaintext',
  html: 'html',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MailAPIInboxEntryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceAttributeScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  key: 'key',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceResourceScalarFieldEnum = {
  id: 'id',
  attributesHash: 'attributesHash',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceSpanScalarFieldEnum = {
  id: 'id',
  traceId: 'traceId',
  traceState: 'traceState',
  spanId: 'spanId',
  parentId: 'parentId',
  name: 'name',
  flags: 'flags',
  kind: 'kind',
  startTimeNano: 'startTimeNano',
  endTimeNano: 'endTimeNano',
  statusMessage: 'statusMessage',
  statusCode: 'statusCode',
  scopeId: 'scopeId',
  resourceId: 'resourceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceEventScalarFieldEnum = {
  id: 'id',
  startTimeNano: 'startTimeNano',
  name: 'name',
  spanId: 'spanId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceLinkScalarFieldEnum = {
  id: 'id',
  traceId: 'traceId',
  spanId: 'spanId',
  traceState: 'traceState',
  flags: 'flags',
  linkedSpanId: 'linkedSpanId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OTelTraceScopeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  version: 'version',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  ConnectionStatus: 'ConnectionStatus',
  MailRenderer: 'MailRenderer',
  MailTemplate: 'MailTemplate',
  MailTemplateComponent: 'MailTemplateComponent',
  MailSMTPInboxEntry: 'MailSMTPInboxEntry',
  MailAPIInboxEntry: 'MailAPIInboxEntry',
  OTelTraceAttribute: 'OTelTraceAttribute',
  OTelTraceResource: 'OTelTraceResource',
  OTelTraceSpan: 'OTelTraceSpan',
  OTelTraceEvent: 'OTelTraceEvent',
  OTelTraceLink: 'OTelTraceLink',
  OTelTraceScope: 'OTelTraceScope'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/dthyresson/Dropbox/Code/redwoodjs/studio/api/db/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "RWSTUDIO_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gTm90ZXM6Ci8vICAtIEkgd2lzaCB3ZSBjb3VsZCBjdXN0b21pc2UgdGhlIG5hbm9pZCBhbHBoYWJldDogaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzLzE3Mjk0Ci8vICAtIEkgUkVBTExZIHdpc2gganNvbiB3YXMgZGlyZWN0bHkgc3VwcG9ydGVkOiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXMvMzc4NgoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gZW52KCJSV1NUVURJT19EQVRBQkFTRV9VUkwiKQp9CgpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgYmluYXJ5VGFyZ2V0cyA9ICJuYXRpdmUiCiAgb3V0cHV0ICAgICAgICA9ICIuL2NsaWVudCIKfQoKbW9kZWwgQ29ubmVjdGlvblN0YXR1cyB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkZXZlbG9wbWVudFNlcnZlciBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZSBAdXBkYXRlZEF0Cn0KCm1vZGVsIE1haWxSZW5kZXJlciB7CiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChuYW5vaWQoMjQpKQogIGtleSAgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgaXNEZWZhdWx0IEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAp9Cgptb2RlbCBNYWlsVGVtcGxhdGUgewogIGlkICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KG5hbm9pZCgyNCkpCiAgbmFtZSAgICAgICBTdHJpbmcKICBwYXRoICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBjb21wb25lbnRzIE1haWxUZW1wbGF0ZUNvbXBvbmVudFtdCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgIERhdGVUaW1lICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQKfQoKbW9kZWwgTWFpbFRlbXBsYXRlQ29tcG9uZW50IHsKICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KG5hbm9pZCgyNCkpCiAgbmFtZSAgICAgICAgICAgU3RyaW5nICAgICAgIEB1bmlxdWUKICBtYWlsVGVtcGxhdGVJZCBTdHJpbmcKICB0ZW1wbGF0ZSAgICAgICBNYWlsVGVtcGxhdGUgQHJlbGF0aW9uKGZpZWxkczogW21haWxUZW1wbGF0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9wc1RlbXBsYXRlICBTdHJpbmcgICAgICAgQGRlZmF1bHQoIiIpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lICAgICBAdXBkYXRlZEF0CgogIEBAaW5kZXgoW21haWxUZW1wbGF0ZUlkXSkKfQoKbW9kZWwgTWFpbFNNVFBJbmJveEVudHJ5IHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQobmFub2lkKDI0KSkKICBwbGFpbnRleHQgU3RyaW5nPwogIGh0bWwgICAgICBTdHJpbmc/CiAgc210cCAgICAgIFVuc3VwcG9ydGVkKCJKU09OIikKICBlbnZlbG9wZSAgVW5zdXBwb3J0ZWQoIkpTT04iKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgICAgICAgICAgIEB1cGRhdGVkQXQKfQoKbW9kZWwgTWFpbEFQSUluYm94RW50cnkgewogIGlkICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChuYW5vaWQoMjQpKQogIGFwaSAgICAgICBVbnN1cHBvcnRlZCgiSlNPTiIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lICAgICAgICAgICAgQHVwZGF0ZWRBdAp9Cgptb2RlbCBPVGVsVHJhY2VBdHRyaWJ1dGUgewogIGlkICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChuYW5vaWQoMjQpKQogIGhhc2ggICAgICBTdHJpbmcgICAgICAgICAgICAgIEB1bmlxdWUKICBrZXkgICAgICAgU3RyaW5nCiAgdHlwZSAgICAgIFN0cmluZwogIHZhbHVlICAgICBVbnN1cHBvcnRlZCgiSlNPTiIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lICAgICAgICAgICAgQHVwZGF0ZWRBdAogIHJlc291cmNlcyBPVGVsVHJhY2VSZXNvdXJjZVtdCiAgc3BhbnMgICAgIE9UZWxUcmFjZVNwYW5bXQogIGV2ZW50cyAgICBPVGVsVHJhY2VFdmVudFtdCiAgbGlua3MgICAgIE9UZWxUcmFjZUxpbmtbXQogIHNjb3BlcyAgICBPVGVsVHJhY2VTY29wZVtdCgogIEBAaW5kZXgoW2hhc2hdKQogIEBAaW5kZXgoW2tleV0pCn0KCm1vZGVsIE9UZWxUcmFjZVJlc291cmNlIHsKICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQobmFub2lkKDI0KSkKICBhdHRyaWJ1dGVzSGFzaCBTdHJpbmcgICAgICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgQHVwZGF0ZWRBdAogIGF0dHJpYnV0ZXMgICAgIE9UZWxUcmFjZUF0dHJpYnV0ZVtdCiAgc3BhbnMgICAgICAgICAgT1RlbFRyYWNlU3BhbltdCgogIEBAaW5kZXgoW2F0dHJpYnV0ZXNIYXNoXSkKfQoKbW9kZWwgT1RlbFRyYWNlU3BhbiB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQobmFub2lkKDI0KSkKICB0cmFjZUlkICAgICAgIFN0cmluZwogIHRyYWNlU3RhdGUgICAgU3RyaW5nPwogIHNwYW5JZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQHVuaXF1ZQogIHBhcmVudElkICAgICAgU3RyaW5nPwogIG5hbWUgICAgICAgICAgU3RyaW5nCiAgZmxhZ3MgICAgICAgICBJbnQ/CiAga2luZCAgICAgICAgICBJbnQKICBzdGFydFRpbWVOYW5vIEJpZ0ludAogIGVuZFRpbWVOYW5vICAgQmlnSW50CiAgYXR0cmlidXRlcyAgICBPVGVsVHJhY2VBdHRyaWJ1dGVbXQogIGV2ZW50cyAgICAgICAgT1RlbFRyYWNlRXZlbnRbXQogIGxpbmtzICAgICAgICAgT1RlbFRyYWNlTGlua1tdCiAgc3RhdHVzTWVzc2FnZSBTdHJpbmc/CiAgc3RhdHVzQ29kZSAgICBJbnQ/CiAgc2NvcGVJZCAgICAgICBTdHJpbmcKICBzY29wZSAgICAgICAgIE9UZWxUcmFjZVNjb3BlICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzY29wZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZXNvdXJjZUlkICAgIFN0cmluZwogIHJlc291cmNlICAgICAgT1RlbFRyYWNlUmVzb3VyY2UgICAgQHJlbGF0aW9uKGZpZWxkczogW3Jlc291cmNlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgICAgICBAdXBkYXRlZEF0CgogIEBAaW5kZXgoW3RyYWNlSWRdKQogIEBAaW5kZXgoW3NwYW5JZF0pCiAgQEBpbmRleChbcGFyZW50SWRdKQogIEBAaW5kZXgoW3N0YXR1c0NvZGVdKQogIEBAaW5kZXgoW3Njb3BlSWRdKQogIEBAaW5kZXgoW3Jlc291cmNlSWRdKQp9Cgptb2RlbCBPVGVsVHJhY2VFdmVudCB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQobmFub2lkKDI0KSkKICBzdGFydFRpbWVOYW5vIEJpZ0ludAogIG5hbWUgICAgICAgICAgU3RyaW5nCiAgYXR0cmlidXRlcyAgICBPVGVsVHJhY2VBdHRyaWJ1dGVbXQogIHNwYW5JZCAgICAgICAgU3RyaW5nCiAgc3BhbiAgICAgICAgICBPVGVsVHJhY2VTcGFuICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3BhbklkXSwgcmVmZXJlbmNlczogW3NwYW5JZF0pCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbc3BhbklkXSkKfQoKbW9kZWwgT1RlbFRyYWNlTGluayB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChuYW5vaWQoMjQpKQogIHRyYWNlSWQgICAgICBTdHJpbmcKICBzcGFuSWQgICAgICAgU3RyaW5nCiAgdHJhY2VTdGF0ZSAgIFN0cmluZz8KICBhdHRyaWJ1dGVzICAgT1RlbFRyYWNlQXR0cmlidXRlW10KICBmbGFncyAgICAgICAgSW50PwogIGxpbmtlZFNwYW5JZCBTdHJpbmcKICBzcGFuICAgICAgICAgT1RlbFRyYWNlU3BhbiAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2xpbmtlZFNwYW5JZF0sIHJlZmVyZW5jZXM6IFtzcGFuSWRdKQogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgICAgICAgICAgICAgQHVwZGF0ZWRBdAoKICBAQGluZGV4KFt0cmFjZUlkXSkKICBAQGluZGV4KFtzcGFuSWRdKQogIEBAaW5kZXgoW2xpbmtlZFNwYW5JZF0pCn0KCm1vZGVsIE9UZWxUcmFjZVNjb3BlIHsKICBpZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChuYW5vaWQoMjQpKQogIG5hbWUgICAgICAgU3RyaW5nCiAgdmVyc2lvbiAgICBTdHJpbmc/CiAgc3BhbnMgICAgICBPVGVsVHJhY2VTcGFuW10KICBhdHRyaWJ1dGVzIE9UZWxUcmFjZUF0dHJpYnV0ZVtdCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQKCiAgQEB1bmlxdWUoW25hbWUsIHZlcnNpb25dKQp9Cg==",
  "inlineSchemaHash": "5e674b251285075826deebe6461868c84554921e34f61436ec18e67f013b6a22",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "db/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"ConnectionStatus\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"developmentServer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailRenderer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailTemplate\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"components\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MailTemplateComponent\",\"relationName\":\"MailTemplateToMailTemplateComponent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailTemplateComponent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mailTemplateId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MailTemplate\",\"relationName\":\"MailTemplateToMailTemplateComponent\",\"relationFromFields\":[\"mailTemplateId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propsTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailSMTPInboxEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plaintext\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"html\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailAPIInboxEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceAttribute\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"resources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceResource\",\"relationName\":\"OTelTraceAttributeToOTelTraceResource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spans\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceSpan\",\"relationName\":\"OTelTraceAttributeToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceEvent\",\"relationName\":\"OTelTraceAttributeToOTelTraceEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"links\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceLink\",\"relationName\":\"OTelTraceAttributeToOTelTraceLink\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scopes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceScope\",\"relationName\":\"OTelTraceAttributeToOTelTraceScope\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceResource\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributesHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceAttribute\",\"relationName\":\"OTelTraceAttributeToOTelTraceResource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spans\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceSpan\",\"relationName\":\"OTelTraceResourceToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceSpan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"traceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"traceState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kind\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTimeNano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTimeNano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceAttribute\",\"relationName\":\"OTelTraceAttributeToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceEvent\",\"relationName\":\"OTelTraceEventToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"links\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceLink\",\"relationName\":\"OTelTraceLinkToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusMessage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scopeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceScope\",\"relationName\":\"OTelTraceScopeToOTelTraceSpan\",\"relationFromFields\":[\"scopeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceResource\",\"relationName\":\"OTelTraceResourceToOTelTraceSpan\",\"relationFromFields\":[\"resourceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTimeNano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceAttribute\",\"relationName\":\"OTelTraceAttributeToOTelTraceEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"span\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceSpan\",\"relationName\":\"OTelTraceEventToOTelTraceSpan\",\"relationFromFields\":[\"spanId\"],\"relationToFields\":[\"spanId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceLink\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"traceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"traceState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceAttribute\",\"relationName\":\"OTelTraceAttributeToOTelTraceLink\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedSpanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"span\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceSpan\",\"relationName\":\"OTelTraceLinkToOTelTraceSpan\",\"relationFromFields\":[\"linkedSpanId\"],\"relationToFields\":[\"spanId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTelTraceScope\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"nanoid(24)\",\"args\":[24]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spans\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceSpan\",\"relationName\":\"OTelTraceScopeToOTelTraceSpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTelTraceAttribute\",\"relationName\":\"OTelTraceAttributeToOTelTraceScope\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"version\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"version\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "db/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "db/client/schema.prisma")
