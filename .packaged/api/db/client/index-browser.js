
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
