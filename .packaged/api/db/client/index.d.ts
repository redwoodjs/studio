
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ConnectionStatus
 * 
 */
export type ConnectionStatus = $Result.DefaultSelection<Prisma.$ConnectionStatusPayload>
/**
 * Model MailRenderer
 * 
 */
export type MailRenderer = $Result.DefaultSelection<Prisma.$MailRendererPayload>
/**
 * Model MailTemplate
 * 
 */
export type MailTemplate = $Result.DefaultSelection<Prisma.$MailTemplatePayload>
/**
 * Model MailTemplateComponent
 * 
 */
export type MailTemplateComponent = $Result.DefaultSelection<Prisma.$MailTemplateComponentPayload>
/**
 * Model MailSMTPInboxEntry
 * 
 */
export type MailSMTPInboxEntry = $Result.DefaultSelection<Prisma.$MailSMTPInboxEntryPayload>
/**
 * Model MailAPIInboxEntry
 * 
 */
export type MailAPIInboxEntry = $Result.DefaultSelection<Prisma.$MailAPIInboxEntryPayload>
/**
 * Model OTelTraceAttribute
 * 
 */
export type OTelTraceAttribute = $Result.DefaultSelection<Prisma.$OTelTraceAttributePayload>
/**
 * Model OTelTraceResource
 * 
 */
export type OTelTraceResource = $Result.DefaultSelection<Prisma.$OTelTraceResourcePayload>
/**
 * Model OTelTraceSpan
 * 
 */
export type OTelTraceSpan = $Result.DefaultSelection<Prisma.$OTelTraceSpanPayload>
/**
 * Model OTelTraceEvent
 * 
 */
export type OTelTraceEvent = $Result.DefaultSelection<Prisma.$OTelTraceEventPayload>
/**
 * Model OTelTraceLink
 * 
 */
export type OTelTraceLink = $Result.DefaultSelection<Prisma.$OTelTraceLinkPayload>
/**
 * Model OTelTraceScope
 * 
 */
export type OTelTraceScope = $Result.DefaultSelection<Prisma.$OTelTraceScopePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ConnectionStatuses
 * const connectionStatuses = await prisma.connectionStatus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ConnectionStatuses
   * const connectionStatuses = await prisma.connectionStatus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.connectionStatus`: Exposes CRUD operations for the **ConnectionStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectionStatuses
    * const connectionStatuses = await prisma.connectionStatus.findMany()
    * ```
    */
  get connectionStatus(): Prisma.ConnectionStatusDelegate<ExtArgs>;

  /**
   * `prisma.mailRenderer`: Exposes CRUD operations for the **MailRenderer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailRenderers
    * const mailRenderers = await prisma.mailRenderer.findMany()
    * ```
    */
  get mailRenderer(): Prisma.MailRendererDelegate<ExtArgs>;

  /**
   * `prisma.mailTemplate`: Exposes CRUD operations for the **MailTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailTemplates
    * const mailTemplates = await prisma.mailTemplate.findMany()
    * ```
    */
  get mailTemplate(): Prisma.MailTemplateDelegate<ExtArgs>;

  /**
   * `prisma.mailTemplateComponent`: Exposes CRUD operations for the **MailTemplateComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailTemplateComponents
    * const mailTemplateComponents = await prisma.mailTemplateComponent.findMany()
    * ```
    */
  get mailTemplateComponent(): Prisma.MailTemplateComponentDelegate<ExtArgs>;

  /**
   * `prisma.mailSMTPInboxEntry`: Exposes CRUD operations for the **MailSMTPInboxEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailSMTPInboxEntries
    * const mailSMTPInboxEntries = await prisma.mailSMTPInboxEntry.findMany()
    * ```
    */
  get mailSMTPInboxEntry(): Prisma.MailSMTPInboxEntryDelegate<ExtArgs>;

  /**
   * `prisma.mailAPIInboxEntry`: Exposes CRUD operations for the **MailAPIInboxEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailAPIInboxEntries
    * const mailAPIInboxEntries = await prisma.mailAPIInboxEntry.findMany()
    * ```
    */
  get mailAPIInboxEntry(): Prisma.MailAPIInboxEntryDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceAttribute`: Exposes CRUD operations for the **OTelTraceAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceAttributes
    * const oTelTraceAttributes = await prisma.oTelTraceAttribute.findMany()
    * ```
    */
  get oTelTraceAttribute(): Prisma.OTelTraceAttributeDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceResource`: Exposes CRUD operations for the **OTelTraceResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceResources
    * const oTelTraceResources = await prisma.oTelTraceResource.findMany()
    * ```
    */
  get oTelTraceResource(): Prisma.OTelTraceResourceDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceSpan`: Exposes CRUD operations for the **OTelTraceSpan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceSpans
    * const oTelTraceSpans = await prisma.oTelTraceSpan.findMany()
    * ```
    */
  get oTelTraceSpan(): Prisma.OTelTraceSpanDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceEvent`: Exposes CRUD operations for the **OTelTraceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceEvents
    * const oTelTraceEvents = await prisma.oTelTraceEvent.findMany()
    * ```
    */
  get oTelTraceEvent(): Prisma.OTelTraceEventDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceLink`: Exposes CRUD operations for the **OTelTraceLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceLinks
    * const oTelTraceLinks = await prisma.oTelTraceLink.findMany()
    * ```
    */
  get oTelTraceLink(): Prisma.OTelTraceLinkDelegate<ExtArgs>;

  /**
   * `prisma.oTelTraceScope`: Exposes CRUD operations for the **OTelTraceScope** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTelTraceScopes
    * const oTelTraceScopes = await prisma.oTelTraceScope.findMany()
    * ```
    */
  get oTelTraceScope(): Prisma.OTelTraceScopeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'connectionStatus' | 'mailRenderer' | 'mailTemplate' | 'mailTemplateComponent' | 'mailSMTPInboxEntry' | 'mailAPIInboxEntry' | 'oTelTraceAttribute' | 'oTelTraceResource' | 'oTelTraceSpan' | 'oTelTraceEvent' | 'oTelTraceLink' | 'oTelTraceScope'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      ConnectionStatus: {
        payload: Prisma.$ConnectionStatusPayload<ExtArgs>
        fields: Prisma.ConnectionStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionStatusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionStatusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          findFirst: {
            args: Prisma.ConnectionStatusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionStatusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          findMany: {
            args: Prisma.ConnectionStatusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>[]
          }
          create: {
            args: Prisma.ConnectionStatusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          delete: {
            args: Prisma.ConnectionStatusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          update: {
            args: Prisma.ConnectionStatusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionStatusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionStatusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConnectionStatusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConnectionStatusPayload>
          }
          aggregate: {
            args: Prisma.ConnectionStatusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConnectionStatus>
          }
          groupBy: {
            args: Prisma.ConnectionStatusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConnectionStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionStatusCountArgs<ExtArgs>,
            result: $Utils.Optional<ConnectionStatusCountAggregateOutputType> | number
          }
        }
      }
      MailRenderer: {
        payload: Prisma.$MailRendererPayload<ExtArgs>
        fields: Prisma.MailRendererFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailRendererFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailRendererFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          findFirst: {
            args: Prisma.MailRendererFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailRendererFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          findMany: {
            args: Prisma.MailRendererFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>[]
          }
          create: {
            args: Prisma.MailRendererCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          delete: {
            args: Prisma.MailRendererDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          update: {
            args: Prisma.MailRendererUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          deleteMany: {
            args: Prisma.MailRendererDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MailRendererUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MailRendererUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailRendererPayload>
          }
          aggregate: {
            args: Prisma.MailRendererAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMailRenderer>
          }
          groupBy: {
            args: Prisma.MailRendererGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailRendererGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailRendererCountArgs<ExtArgs>,
            result: $Utils.Optional<MailRendererCountAggregateOutputType> | number
          }
        }
      }
      MailTemplate: {
        payload: Prisma.$MailTemplatePayload<ExtArgs>
        fields: Prisma.MailTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailTemplateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailTemplateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          findFirst: {
            args: Prisma.MailTemplateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailTemplateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          findMany: {
            args: Prisma.MailTemplateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>[]
          }
          create: {
            args: Prisma.MailTemplateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          delete: {
            args: Prisma.MailTemplateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          update: {
            args: Prisma.MailTemplateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MailTemplateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MailTemplateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MailTemplateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplatePayload>
          }
          aggregate: {
            args: Prisma.MailTemplateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMailTemplate>
          }
          groupBy: {
            args: Prisma.MailTemplateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailTemplateCountArgs<ExtArgs>,
            result: $Utils.Optional<MailTemplateCountAggregateOutputType> | number
          }
        }
      }
      MailTemplateComponent: {
        payload: Prisma.$MailTemplateComponentPayload<ExtArgs>
        fields: Prisma.MailTemplateComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailTemplateComponentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailTemplateComponentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          findFirst: {
            args: Prisma.MailTemplateComponentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailTemplateComponentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          findMany: {
            args: Prisma.MailTemplateComponentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>[]
          }
          create: {
            args: Prisma.MailTemplateComponentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          delete: {
            args: Prisma.MailTemplateComponentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          update: {
            args: Prisma.MailTemplateComponentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          deleteMany: {
            args: Prisma.MailTemplateComponentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MailTemplateComponentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MailTemplateComponentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailTemplateComponentPayload>
          }
          aggregate: {
            args: Prisma.MailTemplateComponentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMailTemplateComponent>
          }
          groupBy: {
            args: Prisma.MailTemplateComponentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailTemplateComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailTemplateComponentCountArgs<ExtArgs>,
            result: $Utils.Optional<MailTemplateComponentCountAggregateOutputType> | number
          }
        }
      }
      MailSMTPInboxEntry: {
        payload: Prisma.$MailSMTPInboxEntryPayload<ExtArgs>
        fields: Prisma.MailSMTPInboxEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailSMTPInboxEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailSMTPInboxEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload>
          }
          findFirst: {
            args: Prisma.MailSMTPInboxEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailSMTPInboxEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload>
          }
          findMany: {
            args: Prisma.MailSMTPInboxEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload>[]
          }
          delete: {
            args: Prisma.MailSMTPInboxEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload>
          }
          update: {
            args: Prisma.MailSMTPInboxEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailSMTPInboxEntryPayload>
          }
          deleteMany: {
            args: Prisma.MailSMTPInboxEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MailSMTPInboxEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          aggregate: {
            args: Prisma.MailSMTPInboxEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMailSMTPInboxEntry>
          }
          groupBy: {
            args: Prisma.MailSMTPInboxEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailSMTPInboxEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailSMTPInboxEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<MailSMTPInboxEntryCountAggregateOutputType> | number
          }
        }
      }
      MailAPIInboxEntry: {
        payload: Prisma.$MailAPIInboxEntryPayload<ExtArgs>
        fields: Prisma.MailAPIInboxEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailAPIInboxEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailAPIInboxEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload>
          }
          findFirst: {
            args: Prisma.MailAPIInboxEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailAPIInboxEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload>
          }
          findMany: {
            args: Prisma.MailAPIInboxEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload>[]
          }
          delete: {
            args: Prisma.MailAPIInboxEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload>
          }
          update: {
            args: Prisma.MailAPIInboxEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MailAPIInboxEntryPayload>
          }
          deleteMany: {
            args: Prisma.MailAPIInboxEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MailAPIInboxEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          aggregate: {
            args: Prisma.MailAPIInboxEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMailAPIInboxEntry>
          }
          groupBy: {
            args: Prisma.MailAPIInboxEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MailAPIInboxEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailAPIInboxEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<MailAPIInboxEntryCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceAttribute: {
        payload: Prisma.$OTelTraceAttributePayload<ExtArgs>
        fields: Prisma.OTelTraceAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceAttributeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceAttributeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload>
          }
          findFirst: {
            args: Prisma.OTelTraceAttributeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceAttributeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload>
          }
          findMany: {
            args: Prisma.OTelTraceAttributeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload>[]
          }
          delete: {
            args: Prisma.OTelTraceAttributeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload>
          }
          update: {
            args: Prisma.OTelTraceAttributeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceAttributePayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceAttributeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceAttributeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          aggregate: {
            args: Prisma.OTelTraceAttributeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceAttribute>
          }
          groupBy: {
            args: Prisma.OTelTraceAttributeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceAttributeCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceAttributeCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceResource: {
        payload: Prisma.$OTelTraceResourcePayload<ExtArgs>
        fields: Prisma.OTelTraceResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceResourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceResourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          findFirst: {
            args: Prisma.OTelTraceResourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceResourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          findMany: {
            args: Prisma.OTelTraceResourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>[]
          }
          create: {
            args: Prisma.OTelTraceResourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          delete: {
            args: Prisma.OTelTraceResourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          update: {
            args: Prisma.OTelTraceResourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceResourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceResourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OTelTraceResourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceResourcePayload>
          }
          aggregate: {
            args: Prisma.OTelTraceResourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceResource>
          }
          groupBy: {
            args: Prisma.OTelTraceResourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceResourceCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceResourceCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceSpan: {
        payload: Prisma.$OTelTraceSpanPayload<ExtArgs>
        fields: Prisma.OTelTraceSpanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceSpanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceSpanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          findFirst: {
            args: Prisma.OTelTraceSpanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceSpanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          findMany: {
            args: Prisma.OTelTraceSpanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>[]
          }
          create: {
            args: Prisma.OTelTraceSpanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          delete: {
            args: Prisma.OTelTraceSpanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          update: {
            args: Prisma.OTelTraceSpanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceSpanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceSpanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OTelTraceSpanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceSpanPayload>
          }
          aggregate: {
            args: Prisma.OTelTraceSpanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceSpan>
          }
          groupBy: {
            args: Prisma.OTelTraceSpanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceSpanGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceSpanCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceSpanCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceEvent: {
        payload: Prisma.$OTelTraceEventPayload<ExtArgs>
        fields: Prisma.OTelTraceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          findFirst: {
            args: Prisma.OTelTraceEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          findMany: {
            args: Prisma.OTelTraceEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>[]
          }
          create: {
            args: Prisma.OTelTraceEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          delete: {
            args: Prisma.OTelTraceEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          update: {
            args: Prisma.OTelTraceEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OTelTraceEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceEventPayload>
          }
          aggregate: {
            args: Prisma.OTelTraceEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceEvent>
          }
          groupBy: {
            args: Prisma.OTelTraceEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceEventCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceEventCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceLink: {
        payload: Prisma.$OTelTraceLinkPayload<ExtArgs>
        fields: Prisma.OTelTraceLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceLinkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceLinkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          findFirst: {
            args: Prisma.OTelTraceLinkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceLinkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          findMany: {
            args: Prisma.OTelTraceLinkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>[]
          }
          create: {
            args: Prisma.OTelTraceLinkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          delete: {
            args: Prisma.OTelTraceLinkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          update: {
            args: Prisma.OTelTraceLinkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceLinkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceLinkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OTelTraceLinkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceLinkPayload>
          }
          aggregate: {
            args: Prisma.OTelTraceLinkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceLink>
          }
          groupBy: {
            args: Prisma.OTelTraceLinkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceLinkCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceLinkCountAggregateOutputType> | number
          }
        }
      }
      OTelTraceScope: {
        payload: Prisma.$OTelTraceScopePayload<ExtArgs>
        fields: Prisma.OTelTraceScopeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTelTraceScopeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTelTraceScopeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          findFirst: {
            args: Prisma.OTelTraceScopeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTelTraceScopeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          findMany: {
            args: Prisma.OTelTraceScopeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>[]
          }
          create: {
            args: Prisma.OTelTraceScopeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          delete: {
            args: Prisma.OTelTraceScopeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          update: {
            args: Prisma.OTelTraceScopeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          deleteMany: {
            args: Prisma.OTelTraceScopeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OTelTraceScopeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OTelTraceScopeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OTelTraceScopePayload>
          }
          aggregate: {
            args: Prisma.OTelTraceScopeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOTelTraceScope>
          }
          groupBy: {
            args: Prisma.OTelTraceScopeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceScopeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTelTraceScopeCountArgs<ExtArgs>,
            result: $Utils.Optional<OTelTraceScopeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MailTemplateCountOutputType
   */

  export type MailTemplateCountOutputType = {
    components: number
  }

  export type MailTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | MailTemplateCountOutputTypeCountComponentsArgs
  }

  // Custom InputTypes

  /**
   * MailTemplateCountOutputType without action
   */
  export type MailTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateCountOutputType
     */
    select?: MailTemplateCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MailTemplateCountOutputType without action
   */
  export type MailTemplateCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailTemplateComponentWhereInput
  }



  /**
   * Count Type OTelTraceAttributeCountOutputType
   */

  export type OTelTraceAttributeCountOutputType = {
    resources: number
    spans: number
    events: number
    links: number
    scopes: number
  }

  export type OTelTraceAttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | OTelTraceAttributeCountOutputTypeCountResourcesArgs
    spans?: boolean | OTelTraceAttributeCountOutputTypeCountSpansArgs
    events?: boolean | OTelTraceAttributeCountOutputTypeCountEventsArgs
    links?: boolean | OTelTraceAttributeCountOutputTypeCountLinksArgs
    scopes?: boolean | OTelTraceAttributeCountOutputTypeCountScopesArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttributeCountOutputType
     */
    select?: OTelTraceAttributeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceResourceWhereInput
  }


  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeCountSpansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceSpanWhereInput
  }


  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceEventWhereInput
  }


  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceLinkWhereInput
  }


  /**
   * OTelTraceAttributeCountOutputType without action
   */
  export type OTelTraceAttributeCountOutputTypeCountScopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceScopeWhereInput
  }



  /**
   * Count Type OTelTraceResourceCountOutputType
   */

  export type OTelTraceResourceCountOutputType = {
    attributes: number
    spans: number
  }

  export type OTelTraceResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceResourceCountOutputTypeCountAttributesArgs
    spans?: boolean | OTelTraceResourceCountOutputTypeCountSpansArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceResourceCountOutputType without action
   */
  export type OTelTraceResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResourceCountOutputType
     */
    select?: OTelTraceResourceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceResourceCountOutputType without action
   */
  export type OTelTraceResourceCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
  }


  /**
   * OTelTraceResourceCountOutputType without action
   */
  export type OTelTraceResourceCountOutputTypeCountSpansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceSpanWhereInput
  }



  /**
   * Count Type OTelTraceSpanCountOutputType
   */

  export type OTelTraceSpanCountOutputType = {
    attributes: number
    events: number
    links: number
  }

  export type OTelTraceSpanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceSpanCountOutputTypeCountAttributesArgs
    events?: boolean | OTelTraceSpanCountOutputTypeCountEventsArgs
    links?: boolean | OTelTraceSpanCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceSpanCountOutputType without action
   */
  export type OTelTraceSpanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpanCountOutputType
     */
    select?: OTelTraceSpanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceSpanCountOutputType without action
   */
  export type OTelTraceSpanCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
  }


  /**
   * OTelTraceSpanCountOutputType without action
   */
  export type OTelTraceSpanCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceEventWhereInput
  }


  /**
   * OTelTraceSpanCountOutputType without action
   */
  export type OTelTraceSpanCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceLinkWhereInput
  }



  /**
   * Count Type OTelTraceEventCountOutputType
   */

  export type OTelTraceEventCountOutputType = {
    attributes: number
  }

  export type OTelTraceEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceEventCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceEventCountOutputType without action
   */
  export type OTelTraceEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEventCountOutputType
     */
    select?: OTelTraceEventCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceEventCountOutputType without action
   */
  export type OTelTraceEventCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
  }



  /**
   * Count Type OTelTraceLinkCountOutputType
   */

  export type OTelTraceLinkCountOutputType = {
    attributes: number
  }

  export type OTelTraceLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceLinkCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceLinkCountOutputType without action
   */
  export type OTelTraceLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLinkCountOutputType
     */
    select?: OTelTraceLinkCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceLinkCountOutputType without action
   */
  export type OTelTraceLinkCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
  }



  /**
   * Count Type OTelTraceScopeCountOutputType
   */

  export type OTelTraceScopeCountOutputType = {
    spans: number
    attributes: number
  }

  export type OTelTraceScopeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spans?: boolean | OTelTraceScopeCountOutputTypeCountSpansArgs
    attributes?: boolean | OTelTraceScopeCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes

  /**
   * OTelTraceScopeCountOutputType without action
   */
  export type OTelTraceScopeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScopeCountOutputType
     */
    select?: OTelTraceScopeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OTelTraceScopeCountOutputType without action
   */
  export type OTelTraceScopeCountOutputTypeCountSpansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceSpanWhereInput
  }


  /**
   * OTelTraceScopeCountOutputType without action
   */
  export type OTelTraceScopeCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model ConnectionStatus
   */

  export type AggregateConnectionStatus = {
    _count: ConnectionStatusCountAggregateOutputType | null
    _avg: ConnectionStatusAvgAggregateOutputType | null
    _sum: ConnectionStatusSumAggregateOutputType | null
    _min: ConnectionStatusMinAggregateOutputType | null
    _max: ConnectionStatusMaxAggregateOutputType | null
  }

  export type ConnectionStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type ConnectionStatusSumAggregateOutputType = {
    id: number | null
  }

  export type ConnectionStatusMinAggregateOutputType = {
    id: number | null
    developmentServer: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionStatusMaxAggregateOutputType = {
    id: number | null
    developmentServer: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionStatusCountAggregateOutputType = {
    id: number
    developmentServer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectionStatusAvgAggregateInputType = {
    id?: true
  }

  export type ConnectionStatusSumAggregateInputType = {
    id?: true
  }

  export type ConnectionStatusMinAggregateInputType = {
    id?: true
    developmentServer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionStatusMaxAggregateInputType = {
    id?: true
    developmentServer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionStatusCountAggregateInputType = {
    id?: true
    developmentServer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectionStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionStatus to aggregate.
     */
    where?: ConnectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionStatuses to fetch.
     */
    orderBy?: ConnectionStatusOrderByWithRelationInput | ConnectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectionStatuses
    **/
    _count?: true | ConnectionStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionStatusMaxAggregateInputType
  }

  export type GetConnectionStatusAggregateType<T extends ConnectionStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectionStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectionStatus[P]>
      : GetScalarType<T[P], AggregateConnectionStatus[P]>
  }




  export type ConnectionStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionStatusWhereInput
    orderBy?: ConnectionStatusOrderByWithAggregationInput | ConnectionStatusOrderByWithAggregationInput[]
    by: ConnectionStatusScalarFieldEnum[] | ConnectionStatusScalarFieldEnum
    having?: ConnectionStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionStatusCountAggregateInputType | true
    _avg?: ConnectionStatusAvgAggregateInputType
    _sum?: ConnectionStatusSumAggregateInputType
    _min?: ConnectionStatusMinAggregateInputType
    _max?: ConnectionStatusMaxAggregateInputType
  }

  export type ConnectionStatusGroupByOutputType = {
    id: number
    developmentServer: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConnectionStatusCountAggregateOutputType | null
    _avg: ConnectionStatusAvgAggregateOutputType | null
    _sum: ConnectionStatusSumAggregateOutputType | null
    _min: ConnectionStatusMinAggregateOutputType | null
    _max: ConnectionStatusMaxAggregateOutputType | null
  }

  type GetConnectionStatusGroupByPayload<T extends ConnectionStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionStatusGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    developmentServer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["connectionStatus"]>

  export type ConnectionStatusSelectScalar = {
    id?: boolean
    developmentServer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ConnectionStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectionStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      developmentServer: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connectionStatus"]>
    composites: {}
  }


  type ConnectionStatusGetPayload<S extends boolean | null | undefined | ConnectionStatusDefaultArgs> = $Result.GetResult<Prisma.$ConnectionStatusPayload, S>

  type ConnectionStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConnectionStatusFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ConnectionStatusCountAggregateInputType | true
    }

  export interface ConnectionStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectionStatus'], meta: { name: 'ConnectionStatus' } }
    /**
     * Find zero or one ConnectionStatus that matches the filter.
     * @param {ConnectionStatusFindUniqueArgs} args - Arguments to find a ConnectionStatus
     * @example
     * // Get one ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConnectionStatusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusFindUniqueArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConnectionStatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConnectionStatusFindUniqueOrThrowArgs} args - Arguments to find a ConnectionStatus
     * @example
     * // Get one ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConnectionStatusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConnectionStatusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConnectionStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusFindFirstArgs} args - Arguments to find a ConnectionStatus
     * @example
     * // Get one ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConnectionStatusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConnectionStatusFindFirstArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConnectionStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusFindFirstOrThrowArgs} args - Arguments to find a ConnectionStatus
     * @example
     * // Get one ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConnectionStatusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConnectionStatusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConnectionStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectionStatuses
     * const connectionStatuses = await prisma.connectionStatus.findMany()
     * 
     * // Get first 10 ConnectionStatuses
     * const connectionStatuses = await prisma.connectionStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionStatusWithIdOnly = await prisma.connectionStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConnectionStatusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConnectionStatusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConnectionStatus.
     * @param {ConnectionStatusCreateArgs} args - Arguments to create a ConnectionStatus.
     * @example
     * // Create one ConnectionStatus
     * const ConnectionStatus = await prisma.connectionStatus.create({
     *   data: {
     *     // ... data to create a ConnectionStatus
     *   }
     * })
     * 
    **/
    create<T extends ConnectionStatusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusCreateArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ConnectionStatus.
     * @param {ConnectionStatusDeleteArgs} args - Arguments to delete one ConnectionStatus.
     * @example
     * // Delete one ConnectionStatus
     * const ConnectionStatus = await prisma.connectionStatus.delete({
     *   where: {
     *     // ... filter to delete one ConnectionStatus
     *   }
     * })
     * 
    **/
    delete<T extends ConnectionStatusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusDeleteArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConnectionStatus.
     * @param {ConnectionStatusUpdateArgs} args - Arguments to update one ConnectionStatus.
     * @example
     * // Update one ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConnectionStatusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusUpdateArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConnectionStatuses.
     * @param {ConnectionStatusDeleteManyArgs} args - Arguments to filter ConnectionStatuses to delete.
     * @example
     * // Delete a few ConnectionStatuses
     * const { count } = await prisma.connectionStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConnectionStatusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConnectionStatusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectionStatuses
     * const connectionStatus = await prisma.connectionStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConnectionStatusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConnectionStatus.
     * @param {ConnectionStatusUpsertArgs} args - Arguments to update or create a ConnectionStatus.
     * @example
     * // Update or create a ConnectionStatus
     * const connectionStatus = await prisma.connectionStatus.upsert({
     *   create: {
     *     // ... data to create a ConnectionStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectionStatus we want to update
     *   }
     * })
    **/
    upsert<T extends ConnectionStatusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConnectionStatusUpsertArgs<ExtArgs>>
    ): Prisma__ConnectionStatusClient<$Result.GetResult<Prisma.$ConnectionStatusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConnectionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusCountArgs} args - Arguments to filter ConnectionStatuses to count.
     * @example
     * // Count the number of ConnectionStatuses
     * const count = await prisma.connectionStatus.count({
     *   where: {
     *     // ... the filter for the ConnectionStatuses we want to count
     *   }
     * })
    **/
    count<T extends ConnectionStatusCountArgs>(
      args?: Subset<T, ConnectionStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionStatusAggregateArgs>(args: Subset<T, ConnectionStatusAggregateArgs>): Prisma.PrismaPromise<GetConnectionStatusAggregateType<T>>

    /**
     * Group by ConnectionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionStatusGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectionStatus model
   */
  readonly fields: ConnectionStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectionStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConnectionStatus model
   */ 
  interface ConnectionStatusFieldRefs {
    readonly id: FieldRef<"ConnectionStatus", 'Int'>
    readonly developmentServer: FieldRef<"ConnectionStatus", 'Boolean'>
    readonly createdAt: FieldRef<"ConnectionStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"ConnectionStatus", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ConnectionStatus findUnique
   */
  export type ConnectionStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter, which ConnectionStatus to fetch.
     */
    where: ConnectionStatusWhereUniqueInput
  }


  /**
   * ConnectionStatus findUniqueOrThrow
   */
  export type ConnectionStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter, which ConnectionStatus to fetch.
     */
    where: ConnectionStatusWhereUniqueInput
  }


  /**
   * ConnectionStatus findFirst
   */
  export type ConnectionStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter, which ConnectionStatus to fetch.
     */
    where?: ConnectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionStatuses to fetch.
     */
    orderBy?: ConnectionStatusOrderByWithRelationInput | ConnectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionStatuses.
     */
    cursor?: ConnectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionStatuses.
     */
    distinct?: ConnectionStatusScalarFieldEnum | ConnectionStatusScalarFieldEnum[]
  }


  /**
   * ConnectionStatus findFirstOrThrow
   */
  export type ConnectionStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter, which ConnectionStatus to fetch.
     */
    where?: ConnectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionStatuses to fetch.
     */
    orderBy?: ConnectionStatusOrderByWithRelationInput | ConnectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionStatuses.
     */
    cursor?: ConnectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionStatuses.
     */
    distinct?: ConnectionStatusScalarFieldEnum | ConnectionStatusScalarFieldEnum[]
  }


  /**
   * ConnectionStatus findMany
   */
  export type ConnectionStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter, which ConnectionStatuses to fetch.
     */
    where?: ConnectionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionStatuses to fetch.
     */
    orderBy?: ConnectionStatusOrderByWithRelationInput | ConnectionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectionStatuses.
     */
    cursor?: ConnectionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionStatuses.
     */
    skip?: number
    distinct?: ConnectionStatusScalarFieldEnum | ConnectionStatusScalarFieldEnum[]
  }


  /**
   * ConnectionStatus create
   */
  export type ConnectionStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * The data needed to create a ConnectionStatus.
     */
    data: XOR<ConnectionStatusCreateInput, ConnectionStatusUncheckedCreateInput>
  }


  /**
   * ConnectionStatus update
   */
  export type ConnectionStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * The data needed to update a ConnectionStatus.
     */
    data: XOR<ConnectionStatusUpdateInput, ConnectionStatusUncheckedUpdateInput>
    /**
     * Choose, which ConnectionStatus to update.
     */
    where: ConnectionStatusWhereUniqueInput
  }


  /**
   * ConnectionStatus updateMany
   */
  export type ConnectionStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectionStatuses.
     */
    data: XOR<ConnectionStatusUpdateManyMutationInput, ConnectionStatusUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionStatuses to update
     */
    where?: ConnectionStatusWhereInput
  }


  /**
   * ConnectionStatus upsert
   */
  export type ConnectionStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * The filter to search for the ConnectionStatus to update in case it exists.
     */
    where: ConnectionStatusWhereUniqueInput
    /**
     * In case the ConnectionStatus found by the `where` argument doesn't exist, create a new ConnectionStatus with this data.
     */
    create: XOR<ConnectionStatusCreateInput, ConnectionStatusUncheckedCreateInput>
    /**
     * In case the ConnectionStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionStatusUpdateInput, ConnectionStatusUncheckedUpdateInput>
  }


  /**
   * ConnectionStatus delete
   */
  export type ConnectionStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
    /**
     * Filter which ConnectionStatus to delete.
     */
    where: ConnectionStatusWhereUniqueInput
  }


  /**
   * ConnectionStatus deleteMany
   */
  export type ConnectionStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionStatuses to delete
     */
    where?: ConnectionStatusWhereInput
  }


  /**
   * ConnectionStatus without action
   */
  export type ConnectionStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
  }



  /**
   * Model MailRenderer
   */

  export type AggregateMailRenderer = {
    _count: MailRendererCountAggregateOutputType | null
    _min: MailRendererMinAggregateOutputType | null
    _max: MailRendererMaxAggregateOutputType | null
  }

  export type MailRendererMinAggregateOutputType = {
    id: string | null
    key: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailRendererMaxAggregateOutputType = {
    id: string | null
    key: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailRendererCountAggregateOutputType = {
    id: number
    key: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MailRendererMinAggregateInputType = {
    id?: true
    key?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailRendererMaxAggregateInputType = {
    id?: true
    key?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailRendererCountAggregateInputType = {
    id?: true
    key?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MailRendererAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailRenderer to aggregate.
     */
    where?: MailRendererWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailRenderers to fetch.
     */
    orderBy?: MailRendererOrderByWithRelationInput | MailRendererOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailRendererWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailRenderers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailRenderers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailRenderers
    **/
    _count?: true | MailRendererCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailRendererMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailRendererMaxAggregateInputType
  }

  export type GetMailRendererAggregateType<T extends MailRendererAggregateArgs> = {
        [P in keyof T & keyof AggregateMailRenderer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailRenderer[P]>
      : GetScalarType<T[P], AggregateMailRenderer[P]>
  }




  export type MailRendererGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailRendererWhereInput
    orderBy?: MailRendererOrderByWithAggregationInput | MailRendererOrderByWithAggregationInput[]
    by: MailRendererScalarFieldEnum[] | MailRendererScalarFieldEnum
    having?: MailRendererScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailRendererCountAggregateInputType | true
    _min?: MailRendererMinAggregateInputType
    _max?: MailRendererMaxAggregateInputType
  }

  export type MailRendererGroupByOutputType = {
    id: string
    key: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: MailRendererCountAggregateOutputType | null
    _min: MailRendererMinAggregateOutputType | null
    _max: MailRendererMaxAggregateOutputType | null
  }

  type GetMailRendererGroupByPayload<T extends MailRendererGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailRendererGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailRendererGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailRendererGroupByOutputType[P]>
            : GetScalarType<T[P], MailRendererGroupByOutputType[P]>
        }
      >
    >


  export type MailRendererSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mailRenderer"]>

  export type MailRendererSelectScalar = {
    id?: boolean
    key?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MailRendererPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailRenderer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mailRenderer"]>
    composites: {}
  }


  type MailRendererGetPayload<S extends boolean | null | undefined | MailRendererDefaultArgs> = $Result.GetResult<Prisma.$MailRendererPayload, S>

  type MailRendererCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MailRendererFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailRendererCountAggregateInputType | true
    }

  export interface MailRendererDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailRenderer'], meta: { name: 'MailRenderer' } }
    /**
     * Find zero or one MailRenderer that matches the filter.
     * @param {MailRendererFindUniqueArgs} args - Arguments to find a MailRenderer
     * @example
     * // Get one MailRenderer
     * const mailRenderer = await prisma.mailRenderer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailRendererFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererFindUniqueArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MailRenderer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailRendererFindUniqueOrThrowArgs} args - Arguments to find a MailRenderer
     * @example
     * // Get one MailRenderer
     * const mailRenderer = await prisma.mailRenderer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailRendererFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailRendererFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MailRenderer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererFindFirstArgs} args - Arguments to find a MailRenderer
     * @example
     * // Get one MailRenderer
     * const mailRenderer = await prisma.mailRenderer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailRendererFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MailRendererFindFirstArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MailRenderer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererFindFirstOrThrowArgs} args - Arguments to find a MailRenderer
     * @example
     * // Get one MailRenderer
     * const mailRenderer = await prisma.mailRenderer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailRendererFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailRendererFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MailRenderers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailRenderers
     * const mailRenderers = await prisma.mailRenderer.findMany()
     * 
     * // Get first 10 MailRenderers
     * const mailRenderers = await prisma.mailRenderer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailRendererWithIdOnly = await prisma.mailRenderer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailRendererFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailRendererFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MailRenderer.
     * @param {MailRendererCreateArgs} args - Arguments to create a MailRenderer.
     * @example
     * // Create one MailRenderer
     * const MailRenderer = await prisma.mailRenderer.create({
     *   data: {
     *     // ... data to create a MailRenderer
     *   }
     * })
     * 
    **/
    create<T extends MailRendererCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererCreateArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MailRenderer.
     * @param {MailRendererDeleteArgs} args - Arguments to delete one MailRenderer.
     * @example
     * // Delete one MailRenderer
     * const MailRenderer = await prisma.mailRenderer.delete({
     *   where: {
     *     // ... filter to delete one MailRenderer
     *   }
     * })
     * 
    **/
    delete<T extends MailRendererDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererDeleteArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MailRenderer.
     * @param {MailRendererUpdateArgs} args - Arguments to update one MailRenderer.
     * @example
     * // Update one MailRenderer
     * const mailRenderer = await prisma.mailRenderer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailRendererUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererUpdateArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MailRenderers.
     * @param {MailRendererDeleteManyArgs} args - Arguments to filter MailRenderers to delete.
     * @example
     * // Delete a few MailRenderers
     * const { count } = await prisma.mailRenderer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailRendererDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailRendererDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailRenderers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailRenderers
     * const mailRenderer = await prisma.mailRenderer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailRendererUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MailRenderer.
     * @param {MailRendererUpsertArgs} args - Arguments to update or create a MailRenderer.
     * @example
     * // Update or create a MailRenderer
     * const mailRenderer = await prisma.mailRenderer.upsert({
     *   create: {
     *     // ... data to create a MailRenderer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailRenderer we want to update
     *   }
     * })
    **/
    upsert<T extends MailRendererUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MailRendererUpsertArgs<ExtArgs>>
    ): Prisma__MailRendererClient<$Result.GetResult<Prisma.$MailRendererPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MailRenderers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererCountArgs} args - Arguments to filter MailRenderers to count.
     * @example
     * // Count the number of MailRenderers
     * const count = await prisma.mailRenderer.count({
     *   where: {
     *     // ... the filter for the MailRenderers we want to count
     *   }
     * })
    **/
    count<T extends MailRendererCountArgs>(
      args?: Subset<T, MailRendererCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailRendererCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailRenderer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailRendererAggregateArgs>(args: Subset<T, MailRendererAggregateArgs>): Prisma.PrismaPromise<GetMailRendererAggregateType<T>>

    /**
     * Group by MailRenderer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailRendererGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailRendererGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailRendererGroupByArgs['orderBy'] }
        : { orderBy?: MailRendererGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailRendererGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailRendererGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailRenderer model
   */
  readonly fields: MailRendererFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailRenderer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailRendererClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MailRenderer model
   */ 
  interface MailRendererFieldRefs {
    readonly id: FieldRef<"MailRenderer", 'String'>
    readonly key: FieldRef<"MailRenderer", 'String'>
    readonly isDefault: FieldRef<"MailRenderer", 'Boolean'>
    readonly createdAt: FieldRef<"MailRenderer", 'DateTime'>
    readonly updatedAt: FieldRef<"MailRenderer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MailRenderer findUnique
   */
  export type MailRendererFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter, which MailRenderer to fetch.
     */
    where: MailRendererWhereUniqueInput
  }


  /**
   * MailRenderer findUniqueOrThrow
   */
  export type MailRendererFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter, which MailRenderer to fetch.
     */
    where: MailRendererWhereUniqueInput
  }


  /**
   * MailRenderer findFirst
   */
  export type MailRendererFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter, which MailRenderer to fetch.
     */
    where?: MailRendererWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailRenderers to fetch.
     */
    orderBy?: MailRendererOrderByWithRelationInput | MailRendererOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailRenderers.
     */
    cursor?: MailRendererWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailRenderers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailRenderers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailRenderers.
     */
    distinct?: MailRendererScalarFieldEnum | MailRendererScalarFieldEnum[]
  }


  /**
   * MailRenderer findFirstOrThrow
   */
  export type MailRendererFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter, which MailRenderer to fetch.
     */
    where?: MailRendererWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailRenderers to fetch.
     */
    orderBy?: MailRendererOrderByWithRelationInput | MailRendererOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailRenderers.
     */
    cursor?: MailRendererWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailRenderers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailRenderers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailRenderers.
     */
    distinct?: MailRendererScalarFieldEnum | MailRendererScalarFieldEnum[]
  }


  /**
   * MailRenderer findMany
   */
  export type MailRendererFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter, which MailRenderers to fetch.
     */
    where?: MailRendererWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailRenderers to fetch.
     */
    orderBy?: MailRendererOrderByWithRelationInput | MailRendererOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailRenderers.
     */
    cursor?: MailRendererWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailRenderers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailRenderers.
     */
    skip?: number
    distinct?: MailRendererScalarFieldEnum | MailRendererScalarFieldEnum[]
  }


  /**
   * MailRenderer create
   */
  export type MailRendererCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * The data needed to create a MailRenderer.
     */
    data: XOR<MailRendererCreateInput, MailRendererUncheckedCreateInput>
  }


  /**
   * MailRenderer update
   */
  export type MailRendererUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * The data needed to update a MailRenderer.
     */
    data: XOR<MailRendererUpdateInput, MailRendererUncheckedUpdateInput>
    /**
     * Choose, which MailRenderer to update.
     */
    where: MailRendererWhereUniqueInput
  }


  /**
   * MailRenderer updateMany
   */
  export type MailRendererUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailRenderers.
     */
    data: XOR<MailRendererUpdateManyMutationInput, MailRendererUncheckedUpdateManyInput>
    /**
     * Filter which MailRenderers to update
     */
    where?: MailRendererWhereInput
  }


  /**
   * MailRenderer upsert
   */
  export type MailRendererUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * The filter to search for the MailRenderer to update in case it exists.
     */
    where: MailRendererWhereUniqueInput
    /**
     * In case the MailRenderer found by the `where` argument doesn't exist, create a new MailRenderer with this data.
     */
    create: XOR<MailRendererCreateInput, MailRendererUncheckedCreateInput>
    /**
     * In case the MailRenderer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailRendererUpdateInput, MailRendererUncheckedUpdateInput>
  }


  /**
   * MailRenderer delete
   */
  export type MailRendererDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
    /**
     * Filter which MailRenderer to delete.
     */
    where: MailRendererWhereUniqueInput
  }


  /**
   * MailRenderer deleteMany
   */
  export type MailRendererDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailRenderers to delete
     */
    where?: MailRendererWhereInput
  }


  /**
   * MailRenderer without action
   */
  export type MailRendererDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailRenderer
     */
    select?: MailRendererSelect<ExtArgs> | null
  }



  /**
   * Model MailTemplate
   */

  export type AggregateMailTemplate = {
    _count: MailTemplateCountAggregateOutputType | null
    _min: MailTemplateMinAggregateOutputType | null
    _max: MailTemplateMaxAggregateOutputType | null
  }

  export type MailTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailTemplateCountAggregateOutputType = {
    id: number
    name: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MailTemplateMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailTemplateCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MailTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailTemplate to aggregate.
     */
    where?: MailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplates to fetch.
     */
    orderBy?: MailTemplateOrderByWithRelationInput | MailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailTemplates
    **/
    _count?: true | MailTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailTemplateMaxAggregateInputType
  }

  export type GetMailTemplateAggregateType<T extends MailTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMailTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailTemplate[P]>
      : GetScalarType<T[P], AggregateMailTemplate[P]>
  }




  export type MailTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailTemplateWhereInput
    orderBy?: MailTemplateOrderByWithAggregationInput | MailTemplateOrderByWithAggregationInput[]
    by: MailTemplateScalarFieldEnum[] | MailTemplateScalarFieldEnum
    having?: MailTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailTemplateCountAggregateInputType | true
    _min?: MailTemplateMinAggregateInputType
    _max?: MailTemplateMaxAggregateInputType
  }

  export type MailTemplateGroupByOutputType = {
    id: string
    name: string
    path: string
    createdAt: Date
    updatedAt: Date
    _count: MailTemplateCountAggregateOutputType | null
    _min: MailTemplateMinAggregateOutputType | null
    _max: MailTemplateMaxAggregateOutputType | null
  }

  type GetMailTemplateGroupByPayload<T extends MailTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MailTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MailTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    components?: boolean | MailTemplate$componentsArgs<ExtArgs>
    _count?: boolean | MailTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mailTemplate"]>

  export type MailTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MailTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | MailTemplate$componentsArgs<ExtArgs>
    _count?: boolean | MailTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MailTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailTemplate"
    objects: {
      components: Prisma.$MailTemplateComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      path: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mailTemplate"]>
    composites: {}
  }


  type MailTemplateGetPayload<S extends boolean | null | undefined | MailTemplateDefaultArgs> = $Result.GetResult<Prisma.$MailTemplatePayload, S>

  type MailTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MailTemplateFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailTemplateCountAggregateInputType | true
    }

  export interface MailTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailTemplate'], meta: { name: 'MailTemplate' } }
    /**
     * Find zero or one MailTemplate that matches the filter.
     * @param {MailTemplateFindUniqueArgs} args - Arguments to find a MailTemplate
     * @example
     * // Get one MailTemplate
     * const mailTemplate = await prisma.mailTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailTemplateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateFindUniqueArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MailTemplate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailTemplateFindUniqueOrThrowArgs} args - Arguments to find a MailTemplate
     * @example
     * // Get one MailTemplate
     * const mailTemplate = await prisma.mailTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailTemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MailTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateFindFirstArgs} args - Arguments to find a MailTemplate
     * @example
     * // Get one MailTemplate
     * const mailTemplate = await prisma.mailTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailTemplateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateFindFirstArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MailTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateFindFirstOrThrowArgs} args - Arguments to find a MailTemplate
     * @example
     * // Get one MailTemplate
     * const mailTemplate = await prisma.mailTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailTemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MailTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailTemplates
     * const mailTemplates = await prisma.mailTemplate.findMany()
     * 
     * // Get first 10 MailTemplates
     * const mailTemplates = await prisma.mailTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailTemplateWithIdOnly = await prisma.mailTemplate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailTemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MailTemplate.
     * @param {MailTemplateCreateArgs} args - Arguments to create a MailTemplate.
     * @example
     * // Create one MailTemplate
     * const MailTemplate = await prisma.mailTemplate.create({
     *   data: {
     *     // ... data to create a MailTemplate
     *   }
     * })
     * 
    **/
    create<T extends MailTemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateCreateArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MailTemplate.
     * @param {MailTemplateDeleteArgs} args - Arguments to delete one MailTemplate.
     * @example
     * // Delete one MailTemplate
     * const MailTemplate = await prisma.mailTemplate.delete({
     *   where: {
     *     // ... filter to delete one MailTemplate
     *   }
     * })
     * 
    **/
    delete<T extends MailTemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateDeleteArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MailTemplate.
     * @param {MailTemplateUpdateArgs} args - Arguments to update one MailTemplate.
     * @example
     * // Update one MailTemplate
     * const mailTemplate = await prisma.mailTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailTemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateUpdateArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MailTemplates.
     * @param {MailTemplateDeleteManyArgs} args - Arguments to filter MailTemplates to delete.
     * @example
     * // Delete a few MailTemplates
     * const { count } = await prisma.mailTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailTemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailTemplates
     * const mailTemplate = await prisma.mailTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailTemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MailTemplate.
     * @param {MailTemplateUpsertArgs} args - Arguments to update or create a MailTemplate.
     * @example
     * // Update or create a MailTemplate
     * const mailTemplate = await prisma.mailTemplate.upsert({
     *   create: {
     *     // ... data to create a MailTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailTemplate we want to update
     *   }
     * })
    **/
    upsert<T extends MailTemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateUpsertArgs<ExtArgs>>
    ): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateCountArgs} args - Arguments to filter MailTemplates to count.
     * @example
     * // Count the number of MailTemplates
     * const count = await prisma.mailTemplate.count({
     *   where: {
     *     // ... the filter for the MailTemplates we want to count
     *   }
     * })
    **/
    count<T extends MailTemplateCountArgs>(
      args?: Subset<T, MailTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailTemplateAggregateArgs>(args: Subset<T, MailTemplateAggregateArgs>): Prisma.PrismaPromise<GetMailTemplateAggregateType<T>>

    /**
     * Group by MailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MailTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailTemplate model
   */
  readonly fields: MailTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    components<T extends MailTemplate$componentsArgs<ExtArgs> = {}>(args?: Subset<T, MailTemplate$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MailTemplate model
   */ 
  interface MailTemplateFieldRefs {
    readonly id: FieldRef<"MailTemplate", 'String'>
    readonly name: FieldRef<"MailTemplate", 'String'>
    readonly path: FieldRef<"MailTemplate", 'String'>
    readonly createdAt: FieldRef<"MailTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"MailTemplate", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MailTemplate findUnique
   */
  export type MailTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplate to fetch.
     */
    where: MailTemplateWhereUniqueInput
  }


  /**
   * MailTemplate findUniqueOrThrow
   */
  export type MailTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplate to fetch.
     */
    where: MailTemplateWhereUniqueInput
  }


  /**
   * MailTemplate findFirst
   */
  export type MailTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplate to fetch.
     */
    where?: MailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplates to fetch.
     */
    orderBy?: MailTemplateOrderByWithRelationInput | MailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailTemplates.
     */
    cursor?: MailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailTemplates.
     */
    distinct?: MailTemplateScalarFieldEnum | MailTemplateScalarFieldEnum[]
  }


  /**
   * MailTemplate findFirstOrThrow
   */
  export type MailTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplate to fetch.
     */
    where?: MailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplates to fetch.
     */
    orderBy?: MailTemplateOrderByWithRelationInput | MailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailTemplates.
     */
    cursor?: MailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailTemplates.
     */
    distinct?: MailTemplateScalarFieldEnum | MailTemplateScalarFieldEnum[]
  }


  /**
   * MailTemplate findMany
   */
  export type MailTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplates to fetch.
     */
    where?: MailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplates to fetch.
     */
    orderBy?: MailTemplateOrderByWithRelationInput | MailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailTemplates.
     */
    cursor?: MailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplates.
     */
    skip?: number
    distinct?: MailTemplateScalarFieldEnum | MailTemplateScalarFieldEnum[]
  }


  /**
   * MailTemplate create
   */
  export type MailTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a MailTemplate.
     */
    data: XOR<MailTemplateCreateInput, MailTemplateUncheckedCreateInput>
  }


  /**
   * MailTemplate update
   */
  export type MailTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a MailTemplate.
     */
    data: XOR<MailTemplateUpdateInput, MailTemplateUncheckedUpdateInput>
    /**
     * Choose, which MailTemplate to update.
     */
    where: MailTemplateWhereUniqueInput
  }


  /**
   * MailTemplate updateMany
   */
  export type MailTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailTemplates.
     */
    data: XOR<MailTemplateUpdateManyMutationInput, MailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MailTemplates to update
     */
    where?: MailTemplateWhereInput
  }


  /**
   * MailTemplate upsert
   */
  export type MailTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the MailTemplate to update in case it exists.
     */
    where: MailTemplateWhereUniqueInput
    /**
     * In case the MailTemplate found by the `where` argument doesn't exist, create a new MailTemplate with this data.
     */
    create: XOR<MailTemplateCreateInput, MailTemplateUncheckedCreateInput>
    /**
     * In case the MailTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailTemplateUpdateInput, MailTemplateUncheckedUpdateInput>
  }


  /**
   * MailTemplate delete
   */
  export type MailTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
    /**
     * Filter which MailTemplate to delete.
     */
    where: MailTemplateWhereUniqueInput
  }


  /**
   * MailTemplate deleteMany
   */
  export type MailTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailTemplates to delete
     */
    where?: MailTemplateWhereInput
  }


  /**
   * MailTemplate.components
   */
  export type MailTemplate$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    where?: MailTemplateComponentWhereInput
    orderBy?: MailTemplateComponentOrderByWithRelationInput | MailTemplateComponentOrderByWithRelationInput[]
    cursor?: MailTemplateComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailTemplateComponentScalarFieldEnum | MailTemplateComponentScalarFieldEnum[]
  }


  /**
   * MailTemplate without action
   */
  export type MailTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplate
     */
    select?: MailTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateInclude<ExtArgs> | null
  }



  /**
   * Model MailTemplateComponent
   */

  export type AggregateMailTemplateComponent = {
    _count: MailTemplateComponentCountAggregateOutputType | null
    _min: MailTemplateComponentMinAggregateOutputType | null
    _max: MailTemplateComponentMaxAggregateOutputType | null
  }

  export type MailTemplateComponentMinAggregateOutputType = {
    id: string | null
    name: string | null
    mailTemplateId: string | null
    propsTemplate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailTemplateComponentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mailTemplateId: string | null
    propsTemplate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailTemplateComponentCountAggregateOutputType = {
    id: number
    name: number
    mailTemplateId: number
    propsTemplate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MailTemplateComponentMinAggregateInputType = {
    id?: true
    name?: true
    mailTemplateId?: true
    propsTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailTemplateComponentMaxAggregateInputType = {
    id?: true
    name?: true
    mailTemplateId?: true
    propsTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailTemplateComponentCountAggregateInputType = {
    id?: true
    name?: true
    mailTemplateId?: true
    propsTemplate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MailTemplateComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailTemplateComponent to aggregate.
     */
    where?: MailTemplateComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplateComponents to fetch.
     */
    orderBy?: MailTemplateComponentOrderByWithRelationInput | MailTemplateComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailTemplateComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplateComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplateComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailTemplateComponents
    **/
    _count?: true | MailTemplateComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailTemplateComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailTemplateComponentMaxAggregateInputType
  }

  export type GetMailTemplateComponentAggregateType<T extends MailTemplateComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateMailTemplateComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailTemplateComponent[P]>
      : GetScalarType<T[P], AggregateMailTemplateComponent[P]>
  }




  export type MailTemplateComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailTemplateComponentWhereInput
    orderBy?: MailTemplateComponentOrderByWithAggregationInput | MailTemplateComponentOrderByWithAggregationInput[]
    by: MailTemplateComponentScalarFieldEnum[] | MailTemplateComponentScalarFieldEnum
    having?: MailTemplateComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailTemplateComponentCountAggregateInputType | true
    _min?: MailTemplateComponentMinAggregateInputType
    _max?: MailTemplateComponentMaxAggregateInputType
  }

  export type MailTemplateComponentGroupByOutputType = {
    id: string
    name: string
    mailTemplateId: string
    propsTemplate: string
    createdAt: Date
    updatedAt: Date
    _count: MailTemplateComponentCountAggregateOutputType | null
    _min: MailTemplateComponentMinAggregateOutputType | null
    _max: MailTemplateComponentMaxAggregateOutputType | null
  }

  type GetMailTemplateComponentGroupByPayload<T extends MailTemplateComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailTemplateComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailTemplateComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailTemplateComponentGroupByOutputType[P]>
            : GetScalarType<T[P], MailTemplateComponentGroupByOutputType[P]>
        }
      >
    >


  export type MailTemplateComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mailTemplateId?: boolean
    propsTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | MailTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mailTemplateComponent"]>

  export type MailTemplateComponentSelectScalar = {
    id?: boolean
    name?: boolean
    mailTemplateId?: boolean
    propsTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MailTemplateComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | MailTemplateDefaultArgs<ExtArgs>
  }


  export type $MailTemplateComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailTemplateComponent"
    objects: {
      template: Prisma.$MailTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mailTemplateId: string
      propsTemplate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mailTemplateComponent"]>
    composites: {}
  }


  type MailTemplateComponentGetPayload<S extends boolean | null | undefined | MailTemplateComponentDefaultArgs> = $Result.GetResult<Prisma.$MailTemplateComponentPayload, S>

  type MailTemplateComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MailTemplateComponentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailTemplateComponentCountAggregateInputType | true
    }

  export interface MailTemplateComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailTemplateComponent'], meta: { name: 'MailTemplateComponent' } }
    /**
     * Find zero or one MailTemplateComponent that matches the filter.
     * @param {MailTemplateComponentFindUniqueArgs} args - Arguments to find a MailTemplateComponent
     * @example
     * // Get one MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailTemplateComponentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentFindUniqueArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MailTemplateComponent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailTemplateComponentFindUniqueOrThrowArgs} args - Arguments to find a MailTemplateComponent
     * @example
     * // Get one MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailTemplateComponentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateComponentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MailTemplateComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentFindFirstArgs} args - Arguments to find a MailTemplateComponent
     * @example
     * // Get one MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailTemplateComponentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateComponentFindFirstArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MailTemplateComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentFindFirstOrThrowArgs} args - Arguments to find a MailTemplateComponent
     * @example
     * // Get one MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailTemplateComponentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateComponentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MailTemplateComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailTemplateComponents
     * const mailTemplateComponents = await prisma.mailTemplateComponent.findMany()
     * 
     * // Get first 10 MailTemplateComponents
     * const mailTemplateComponents = await prisma.mailTemplateComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailTemplateComponentWithIdOnly = await prisma.mailTemplateComponent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailTemplateComponentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateComponentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MailTemplateComponent.
     * @param {MailTemplateComponentCreateArgs} args - Arguments to create a MailTemplateComponent.
     * @example
     * // Create one MailTemplateComponent
     * const MailTemplateComponent = await prisma.mailTemplateComponent.create({
     *   data: {
     *     // ... data to create a MailTemplateComponent
     *   }
     * })
     * 
    **/
    create<T extends MailTemplateComponentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentCreateArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MailTemplateComponent.
     * @param {MailTemplateComponentDeleteArgs} args - Arguments to delete one MailTemplateComponent.
     * @example
     * // Delete one MailTemplateComponent
     * const MailTemplateComponent = await prisma.mailTemplateComponent.delete({
     *   where: {
     *     // ... filter to delete one MailTemplateComponent
     *   }
     * })
     * 
    **/
    delete<T extends MailTemplateComponentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentDeleteArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MailTemplateComponent.
     * @param {MailTemplateComponentUpdateArgs} args - Arguments to update one MailTemplateComponent.
     * @example
     * // Update one MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailTemplateComponentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentUpdateArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MailTemplateComponents.
     * @param {MailTemplateComponentDeleteManyArgs} args - Arguments to filter MailTemplateComponents to delete.
     * @example
     * // Delete a few MailTemplateComponents
     * const { count } = await prisma.mailTemplateComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailTemplateComponentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailTemplateComponentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailTemplateComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailTemplateComponents
     * const mailTemplateComponent = await prisma.mailTemplateComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailTemplateComponentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MailTemplateComponent.
     * @param {MailTemplateComponentUpsertArgs} args - Arguments to update or create a MailTemplateComponent.
     * @example
     * // Update or create a MailTemplateComponent
     * const mailTemplateComponent = await prisma.mailTemplateComponent.upsert({
     *   create: {
     *     // ... data to create a MailTemplateComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailTemplateComponent we want to update
     *   }
     * })
    **/
    upsert<T extends MailTemplateComponentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MailTemplateComponentUpsertArgs<ExtArgs>>
    ): Prisma__MailTemplateComponentClient<$Result.GetResult<Prisma.$MailTemplateComponentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MailTemplateComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentCountArgs} args - Arguments to filter MailTemplateComponents to count.
     * @example
     * // Count the number of MailTemplateComponents
     * const count = await prisma.mailTemplateComponent.count({
     *   where: {
     *     // ... the filter for the MailTemplateComponents we want to count
     *   }
     * })
    **/
    count<T extends MailTemplateComponentCountArgs>(
      args?: Subset<T, MailTemplateComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailTemplateComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailTemplateComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailTemplateComponentAggregateArgs>(args: Subset<T, MailTemplateComponentAggregateArgs>): Prisma.PrismaPromise<GetMailTemplateComponentAggregateType<T>>

    /**
     * Group by MailTemplateComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailTemplateComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailTemplateComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailTemplateComponentGroupByArgs['orderBy'] }
        : { orderBy?: MailTemplateComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailTemplateComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailTemplateComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailTemplateComponent model
   */
  readonly fields: MailTemplateComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailTemplateComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailTemplateComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    template<T extends MailTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MailTemplateDefaultArgs<ExtArgs>>): Prisma__MailTemplateClient<$Result.GetResult<Prisma.$MailTemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MailTemplateComponent model
   */ 
  interface MailTemplateComponentFieldRefs {
    readonly id: FieldRef<"MailTemplateComponent", 'String'>
    readonly name: FieldRef<"MailTemplateComponent", 'String'>
    readonly mailTemplateId: FieldRef<"MailTemplateComponent", 'String'>
    readonly propsTemplate: FieldRef<"MailTemplateComponent", 'String'>
    readonly createdAt: FieldRef<"MailTemplateComponent", 'DateTime'>
    readonly updatedAt: FieldRef<"MailTemplateComponent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MailTemplateComponent findUnique
   */
  export type MailTemplateComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplateComponent to fetch.
     */
    where: MailTemplateComponentWhereUniqueInput
  }


  /**
   * MailTemplateComponent findUniqueOrThrow
   */
  export type MailTemplateComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplateComponent to fetch.
     */
    where: MailTemplateComponentWhereUniqueInput
  }


  /**
   * MailTemplateComponent findFirst
   */
  export type MailTemplateComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplateComponent to fetch.
     */
    where?: MailTemplateComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplateComponents to fetch.
     */
    orderBy?: MailTemplateComponentOrderByWithRelationInput | MailTemplateComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailTemplateComponents.
     */
    cursor?: MailTemplateComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplateComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplateComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailTemplateComponents.
     */
    distinct?: MailTemplateComponentScalarFieldEnum | MailTemplateComponentScalarFieldEnum[]
  }


  /**
   * MailTemplateComponent findFirstOrThrow
   */
  export type MailTemplateComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplateComponent to fetch.
     */
    where?: MailTemplateComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplateComponents to fetch.
     */
    orderBy?: MailTemplateComponentOrderByWithRelationInput | MailTemplateComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailTemplateComponents.
     */
    cursor?: MailTemplateComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplateComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplateComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailTemplateComponents.
     */
    distinct?: MailTemplateComponentScalarFieldEnum | MailTemplateComponentScalarFieldEnum[]
  }


  /**
   * MailTemplateComponent findMany
   */
  export type MailTemplateComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter, which MailTemplateComponents to fetch.
     */
    where?: MailTemplateComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailTemplateComponents to fetch.
     */
    orderBy?: MailTemplateComponentOrderByWithRelationInput | MailTemplateComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailTemplateComponents.
     */
    cursor?: MailTemplateComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailTemplateComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailTemplateComponents.
     */
    skip?: number
    distinct?: MailTemplateComponentScalarFieldEnum | MailTemplateComponentScalarFieldEnum[]
  }


  /**
   * MailTemplateComponent create
   */
  export type MailTemplateComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a MailTemplateComponent.
     */
    data: XOR<MailTemplateComponentCreateInput, MailTemplateComponentUncheckedCreateInput>
  }


  /**
   * MailTemplateComponent update
   */
  export type MailTemplateComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a MailTemplateComponent.
     */
    data: XOR<MailTemplateComponentUpdateInput, MailTemplateComponentUncheckedUpdateInput>
    /**
     * Choose, which MailTemplateComponent to update.
     */
    where: MailTemplateComponentWhereUniqueInput
  }


  /**
   * MailTemplateComponent updateMany
   */
  export type MailTemplateComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailTemplateComponents.
     */
    data: XOR<MailTemplateComponentUpdateManyMutationInput, MailTemplateComponentUncheckedUpdateManyInput>
    /**
     * Filter which MailTemplateComponents to update
     */
    where?: MailTemplateComponentWhereInput
  }


  /**
   * MailTemplateComponent upsert
   */
  export type MailTemplateComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the MailTemplateComponent to update in case it exists.
     */
    where: MailTemplateComponentWhereUniqueInput
    /**
     * In case the MailTemplateComponent found by the `where` argument doesn't exist, create a new MailTemplateComponent with this data.
     */
    create: XOR<MailTemplateComponentCreateInput, MailTemplateComponentUncheckedCreateInput>
    /**
     * In case the MailTemplateComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailTemplateComponentUpdateInput, MailTemplateComponentUncheckedUpdateInput>
  }


  /**
   * MailTemplateComponent delete
   */
  export type MailTemplateComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
    /**
     * Filter which MailTemplateComponent to delete.
     */
    where: MailTemplateComponentWhereUniqueInput
  }


  /**
   * MailTemplateComponent deleteMany
   */
  export type MailTemplateComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailTemplateComponents to delete
     */
    where?: MailTemplateComponentWhereInput
  }


  /**
   * MailTemplateComponent without action
   */
  export type MailTemplateComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailTemplateComponent
     */
    select?: MailTemplateComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailTemplateComponentInclude<ExtArgs> | null
  }



  /**
   * Model MailSMTPInboxEntry
   */

  export type AggregateMailSMTPInboxEntry = {
    _count: MailSMTPInboxEntryCountAggregateOutputType | null
    _min: MailSMTPInboxEntryMinAggregateOutputType | null
    _max: MailSMTPInboxEntryMaxAggregateOutputType | null
  }

  export type MailSMTPInboxEntryMinAggregateOutputType = {
    id: string | null
    plaintext: string | null
    html: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailSMTPInboxEntryMaxAggregateOutputType = {
    id: string | null
    plaintext: string | null
    html: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailSMTPInboxEntryCountAggregateOutputType = {
    id: number
    plaintext: number
    html: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MailSMTPInboxEntryMinAggregateInputType = {
    id?: true
    plaintext?: true
    html?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailSMTPInboxEntryMaxAggregateInputType = {
    id?: true
    plaintext?: true
    html?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailSMTPInboxEntryCountAggregateInputType = {
    id?: true
    plaintext?: true
    html?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MailSMTPInboxEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailSMTPInboxEntry to aggregate.
     */
    where?: MailSMTPInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailSMTPInboxEntries to fetch.
     */
    orderBy?: MailSMTPInboxEntryOrderByWithRelationInput | MailSMTPInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailSMTPInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailSMTPInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailSMTPInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailSMTPInboxEntries
    **/
    _count?: true | MailSMTPInboxEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailSMTPInboxEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailSMTPInboxEntryMaxAggregateInputType
  }

  export type GetMailSMTPInboxEntryAggregateType<T extends MailSMTPInboxEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMailSMTPInboxEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailSMTPInboxEntry[P]>
      : GetScalarType<T[P], AggregateMailSMTPInboxEntry[P]>
  }




  export type MailSMTPInboxEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailSMTPInboxEntryWhereInput
    orderBy?: MailSMTPInboxEntryOrderByWithAggregationInput | MailSMTPInboxEntryOrderByWithAggregationInput[]
    by: MailSMTPInboxEntryScalarFieldEnum[] | MailSMTPInboxEntryScalarFieldEnum
    having?: MailSMTPInboxEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailSMTPInboxEntryCountAggregateInputType | true
    _min?: MailSMTPInboxEntryMinAggregateInputType
    _max?: MailSMTPInboxEntryMaxAggregateInputType
  }

  export type MailSMTPInboxEntryGroupByOutputType = {
    id: string
    plaintext: string | null
    html: string | null
    createdAt: Date
    updatedAt: Date
    _count: MailSMTPInboxEntryCountAggregateOutputType | null
    _min: MailSMTPInboxEntryMinAggregateOutputType | null
    _max: MailSMTPInboxEntryMaxAggregateOutputType | null
  }

  type GetMailSMTPInboxEntryGroupByPayload<T extends MailSMTPInboxEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailSMTPInboxEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailSMTPInboxEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailSMTPInboxEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MailSMTPInboxEntryGroupByOutputType[P]>
        }
      >
    >


  export type MailSMTPInboxEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plaintext?: boolean
    html?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mailSMTPInboxEntry"]>

  export type MailSMTPInboxEntrySelectScalar = {
    id?: boolean
    plaintext?: boolean
    html?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MailSMTPInboxEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailSMTPInboxEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plaintext: string | null
      html: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mailSMTPInboxEntry"]>
    composites: {}
  }


  type MailSMTPInboxEntryGetPayload<S extends boolean | null | undefined | MailSMTPInboxEntryDefaultArgs> = $Result.GetResult<Prisma.$MailSMTPInboxEntryPayload, S>

  type MailSMTPInboxEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MailSMTPInboxEntryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailSMTPInboxEntryCountAggregateInputType | true
    }

  export interface MailSMTPInboxEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailSMTPInboxEntry'], meta: { name: 'MailSMTPInboxEntry' } }
    /**
     * Find zero or one MailSMTPInboxEntry that matches the filter.
     * @param {MailSMTPInboxEntryFindUniqueArgs} args - Arguments to find a MailSMTPInboxEntry
     * @example
     * // Get one MailSMTPInboxEntry
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailSMTPInboxEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MailSMTPInboxEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MailSMTPInboxEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailSMTPInboxEntryFindUniqueOrThrowArgs} args - Arguments to find a MailSMTPInboxEntry
     * @example
     * // Get one MailSMTPInboxEntry
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailSMTPInboxEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailSMTPInboxEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MailSMTPInboxEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryFindFirstArgs} args - Arguments to find a MailSMTPInboxEntry
     * @example
     * // Get one MailSMTPInboxEntry
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailSMTPInboxEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MailSMTPInboxEntryFindFirstArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MailSMTPInboxEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryFindFirstOrThrowArgs} args - Arguments to find a MailSMTPInboxEntry
     * @example
     * // Get one MailSMTPInboxEntry
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailSMTPInboxEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailSMTPInboxEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MailSMTPInboxEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailSMTPInboxEntries
     * const mailSMTPInboxEntries = await prisma.mailSMTPInboxEntry.findMany()
     * 
     * // Get first 10 MailSMTPInboxEntries
     * const mailSMTPInboxEntries = await prisma.mailSMTPInboxEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailSMTPInboxEntryWithIdOnly = await prisma.mailSMTPInboxEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailSMTPInboxEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailSMTPInboxEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Delete a MailSMTPInboxEntry.
     * @param {MailSMTPInboxEntryDeleteArgs} args - Arguments to delete one MailSMTPInboxEntry.
     * @example
     * // Delete one MailSMTPInboxEntry
     * const MailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.delete({
     *   where: {
     *     // ... filter to delete one MailSMTPInboxEntry
     *   }
     * })
     * 
    **/
    delete<T extends MailSMTPInboxEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MailSMTPInboxEntryDeleteArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MailSMTPInboxEntry.
     * @param {MailSMTPInboxEntryUpdateArgs} args - Arguments to update one MailSMTPInboxEntry.
     * @example
     * // Update one MailSMTPInboxEntry
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailSMTPInboxEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MailSMTPInboxEntryUpdateArgs<ExtArgs>>
    ): Prisma__MailSMTPInboxEntryClient<$Result.GetResult<Prisma.$MailSMTPInboxEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MailSMTPInboxEntries.
     * @param {MailSMTPInboxEntryDeleteManyArgs} args - Arguments to filter MailSMTPInboxEntries to delete.
     * @example
     * // Delete a few MailSMTPInboxEntries
     * const { count } = await prisma.mailSMTPInboxEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailSMTPInboxEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailSMTPInboxEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailSMTPInboxEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailSMTPInboxEntries
     * const mailSMTPInboxEntry = await prisma.mailSMTPInboxEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailSMTPInboxEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MailSMTPInboxEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Count the number of MailSMTPInboxEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryCountArgs} args - Arguments to filter MailSMTPInboxEntries to count.
     * @example
     * // Count the number of MailSMTPInboxEntries
     * const count = await prisma.mailSMTPInboxEntry.count({
     *   where: {
     *     // ... the filter for the MailSMTPInboxEntries we want to count
     *   }
     * })
    **/
    count<T extends MailSMTPInboxEntryCountArgs>(
      args?: Subset<T, MailSMTPInboxEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailSMTPInboxEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailSMTPInboxEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailSMTPInboxEntryAggregateArgs>(args: Subset<T, MailSMTPInboxEntryAggregateArgs>): Prisma.PrismaPromise<GetMailSMTPInboxEntryAggregateType<T>>

    /**
     * Group by MailSMTPInboxEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailSMTPInboxEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailSMTPInboxEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailSMTPInboxEntryGroupByArgs['orderBy'] }
        : { orderBy?: MailSMTPInboxEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailSMTPInboxEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailSMTPInboxEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailSMTPInboxEntry model
   */
  readonly fields: MailSMTPInboxEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailSMTPInboxEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailSMTPInboxEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MailSMTPInboxEntry model
   */ 
  interface MailSMTPInboxEntryFieldRefs {
    readonly id: FieldRef<"MailSMTPInboxEntry", 'String'>
    readonly plaintext: FieldRef<"MailSMTPInboxEntry", 'String'>
    readonly html: FieldRef<"MailSMTPInboxEntry", 'String'>
    readonly createdAt: FieldRef<"MailSMTPInboxEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"MailSMTPInboxEntry", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MailSMTPInboxEntry findUnique
   */
  export type MailSMTPInboxEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailSMTPInboxEntry to fetch.
     */
    where: MailSMTPInboxEntryWhereUniqueInput
  }


  /**
   * MailSMTPInboxEntry findUniqueOrThrow
   */
  export type MailSMTPInboxEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailSMTPInboxEntry to fetch.
     */
    where: MailSMTPInboxEntryWhereUniqueInput
  }


  /**
   * MailSMTPInboxEntry findFirst
   */
  export type MailSMTPInboxEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailSMTPInboxEntry to fetch.
     */
    where?: MailSMTPInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailSMTPInboxEntries to fetch.
     */
    orderBy?: MailSMTPInboxEntryOrderByWithRelationInput | MailSMTPInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailSMTPInboxEntries.
     */
    cursor?: MailSMTPInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailSMTPInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailSMTPInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailSMTPInboxEntries.
     */
    distinct?: MailSMTPInboxEntryScalarFieldEnum | MailSMTPInboxEntryScalarFieldEnum[]
  }


  /**
   * MailSMTPInboxEntry findFirstOrThrow
   */
  export type MailSMTPInboxEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailSMTPInboxEntry to fetch.
     */
    where?: MailSMTPInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailSMTPInboxEntries to fetch.
     */
    orderBy?: MailSMTPInboxEntryOrderByWithRelationInput | MailSMTPInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailSMTPInboxEntries.
     */
    cursor?: MailSMTPInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailSMTPInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailSMTPInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailSMTPInboxEntries.
     */
    distinct?: MailSMTPInboxEntryScalarFieldEnum | MailSMTPInboxEntryScalarFieldEnum[]
  }


  /**
   * MailSMTPInboxEntry findMany
   */
  export type MailSMTPInboxEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailSMTPInboxEntries to fetch.
     */
    where?: MailSMTPInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailSMTPInboxEntries to fetch.
     */
    orderBy?: MailSMTPInboxEntryOrderByWithRelationInput | MailSMTPInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailSMTPInboxEntries.
     */
    cursor?: MailSMTPInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailSMTPInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailSMTPInboxEntries.
     */
    skip?: number
    distinct?: MailSMTPInboxEntryScalarFieldEnum | MailSMTPInboxEntryScalarFieldEnum[]
  }


  /**
   * MailSMTPInboxEntry update
   */
  export type MailSMTPInboxEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * The data needed to update a MailSMTPInboxEntry.
     */
    data: XOR<MailSMTPInboxEntryUpdateInput, MailSMTPInboxEntryUncheckedUpdateInput>
    /**
     * Choose, which MailSMTPInboxEntry to update.
     */
    where: MailSMTPInboxEntryWhereUniqueInput
  }


  /**
   * MailSMTPInboxEntry updateMany
   */
  export type MailSMTPInboxEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailSMTPInboxEntries.
     */
    data: XOR<MailSMTPInboxEntryUpdateManyMutationInput, MailSMTPInboxEntryUncheckedUpdateManyInput>
    /**
     * Filter which MailSMTPInboxEntries to update
     */
    where?: MailSMTPInboxEntryWhereInput
  }


  /**
   * MailSMTPInboxEntry delete
   */
  export type MailSMTPInboxEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
    /**
     * Filter which MailSMTPInboxEntry to delete.
     */
    where: MailSMTPInboxEntryWhereUniqueInput
  }


  /**
   * MailSMTPInboxEntry deleteMany
   */
  export type MailSMTPInboxEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailSMTPInboxEntries to delete
     */
    where?: MailSMTPInboxEntryWhereInput
  }


  /**
   * MailSMTPInboxEntry without action
   */
  export type MailSMTPInboxEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailSMTPInboxEntry
     */
    select?: MailSMTPInboxEntrySelect<ExtArgs> | null
  }



  /**
   * Model MailAPIInboxEntry
   */

  export type AggregateMailAPIInboxEntry = {
    _count: MailAPIInboxEntryCountAggregateOutputType | null
    _min: MailAPIInboxEntryMinAggregateOutputType | null
    _max: MailAPIInboxEntryMaxAggregateOutputType | null
  }

  export type MailAPIInboxEntryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailAPIInboxEntryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MailAPIInboxEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MailAPIInboxEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailAPIInboxEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MailAPIInboxEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MailAPIInboxEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailAPIInboxEntry to aggregate.
     */
    where?: MailAPIInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailAPIInboxEntries to fetch.
     */
    orderBy?: MailAPIInboxEntryOrderByWithRelationInput | MailAPIInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailAPIInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailAPIInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailAPIInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailAPIInboxEntries
    **/
    _count?: true | MailAPIInboxEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailAPIInboxEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailAPIInboxEntryMaxAggregateInputType
  }

  export type GetMailAPIInboxEntryAggregateType<T extends MailAPIInboxEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMailAPIInboxEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailAPIInboxEntry[P]>
      : GetScalarType<T[P], AggregateMailAPIInboxEntry[P]>
  }




  export type MailAPIInboxEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailAPIInboxEntryWhereInput
    orderBy?: MailAPIInboxEntryOrderByWithAggregationInput | MailAPIInboxEntryOrderByWithAggregationInput[]
    by: MailAPIInboxEntryScalarFieldEnum[] | MailAPIInboxEntryScalarFieldEnum
    having?: MailAPIInboxEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailAPIInboxEntryCountAggregateInputType | true
    _min?: MailAPIInboxEntryMinAggregateInputType
    _max?: MailAPIInboxEntryMaxAggregateInputType
  }

  export type MailAPIInboxEntryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: MailAPIInboxEntryCountAggregateOutputType | null
    _min: MailAPIInboxEntryMinAggregateOutputType | null
    _max: MailAPIInboxEntryMaxAggregateOutputType | null
  }

  type GetMailAPIInboxEntryGroupByPayload<T extends MailAPIInboxEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailAPIInboxEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailAPIInboxEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailAPIInboxEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MailAPIInboxEntryGroupByOutputType[P]>
        }
      >
    >


  export type MailAPIInboxEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mailAPIInboxEntry"]>

  export type MailAPIInboxEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MailAPIInboxEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailAPIInboxEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mailAPIInboxEntry"]>
    composites: {}
  }


  type MailAPIInboxEntryGetPayload<S extends boolean | null | undefined | MailAPIInboxEntryDefaultArgs> = $Result.GetResult<Prisma.$MailAPIInboxEntryPayload, S>

  type MailAPIInboxEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MailAPIInboxEntryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MailAPIInboxEntryCountAggregateInputType | true
    }

  export interface MailAPIInboxEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailAPIInboxEntry'], meta: { name: 'MailAPIInboxEntry' } }
    /**
     * Find zero or one MailAPIInboxEntry that matches the filter.
     * @param {MailAPIInboxEntryFindUniqueArgs} args - Arguments to find a MailAPIInboxEntry
     * @example
     * // Get one MailAPIInboxEntry
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailAPIInboxEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MailAPIInboxEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MailAPIInboxEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailAPIInboxEntryFindUniqueOrThrowArgs} args - Arguments to find a MailAPIInboxEntry
     * @example
     * // Get one MailAPIInboxEntry
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailAPIInboxEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailAPIInboxEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MailAPIInboxEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryFindFirstArgs} args - Arguments to find a MailAPIInboxEntry
     * @example
     * // Get one MailAPIInboxEntry
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailAPIInboxEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MailAPIInboxEntryFindFirstArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MailAPIInboxEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryFindFirstOrThrowArgs} args - Arguments to find a MailAPIInboxEntry
     * @example
     * // Get one MailAPIInboxEntry
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailAPIInboxEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MailAPIInboxEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MailAPIInboxEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailAPIInboxEntries
     * const mailAPIInboxEntries = await prisma.mailAPIInboxEntry.findMany()
     * 
     * // Get first 10 MailAPIInboxEntries
     * const mailAPIInboxEntries = await prisma.mailAPIInboxEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailAPIInboxEntryWithIdOnly = await prisma.mailAPIInboxEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailAPIInboxEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailAPIInboxEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Delete a MailAPIInboxEntry.
     * @param {MailAPIInboxEntryDeleteArgs} args - Arguments to delete one MailAPIInboxEntry.
     * @example
     * // Delete one MailAPIInboxEntry
     * const MailAPIInboxEntry = await prisma.mailAPIInboxEntry.delete({
     *   where: {
     *     // ... filter to delete one MailAPIInboxEntry
     *   }
     * })
     * 
    **/
    delete<T extends MailAPIInboxEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MailAPIInboxEntryDeleteArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MailAPIInboxEntry.
     * @param {MailAPIInboxEntryUpdateArgs} args - Arguments to update one MailAPIInboxEntry.
     * @example
     * // Update one MailAPIInboxEntry
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailAPIInboxEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MailAPIInboxEntryUpdateArgs<ExtArgs>>
    ): Prisma__MailAPIInboxEntryClient<$Result.GetResult<Prisma.$MailAPIInboxEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MailAPIInboxEntries.
     * @param {MailAPIInboxEntryDeleteManyArgs} args - Arguments to filter MailAPIInboxEntries to delete.
     * @example
     * // Delete a few MailAPIInboxEntries
     * const { count } = await prisma.mailAPIInboxEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailAPIInboxEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MailAPIInboxEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailAPIInboxEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailAPIInboxEntries
     * const mailAPIInboxEntry = await prisma.mailAPIInboxEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailAPIInboxEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MailAPIInboxEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Count the number of MailAPIInboxEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryCountArgs} args - Arguments to filter MailAPIInboxEntries to count.
     * @example
     * // Count the number of MailAPIInboxEntries
     * const count = await prisma.mailAPIInboxEntry.count({
     *   where: {
     *     // ... the filter for the MailAPIInboxEntries we want to count
     *   }
     * })
    **/
    count<T extends MailAPIInboxEntryCountArgs>(
      args?: Subset<T, MailAPIInboxEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailAPIInboxEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailAPIInboxEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailAPIInboxEntryAggregateArgs>(args: Subset<T, MailAPIInboxEntryAggregateArgs>): Prisma.PrismaPromise<GetMailAPIInboxEntryAggregateType<T>>

    /**
     * Group by MailAPIInboxEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAPIInboxEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailAPIInboxEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailAPIInboxEntryGroupByArgs['orderBy'] }
        : { orderBy?: MailAPIInboxEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailAPIInboxEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailAPIInboxEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailAPIInboxEntry model
   */
  readonly fields: MailAPIInboxEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailAPIInboxEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailAPIInboxEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MailAPIInboxEntry model
   */ 
  interface MailAPIInboxEntryFieldRefs {
    readonly id: FieldRef<"MailAPIInboxEntry", 'String'>
    readonly createdAt: FieldRef<"MailAPIInboxEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"MailAPIInboxEntry", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MailAPIInboxEntry findUnique
   */
  export type MailAPIInboxEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailAPIInboxEntry to fetch.
     */
    where: MailAPIInboxEntryWhereUniqueInput
  }


  /**
   * MailAPIInboxEntry findUniqueOrThrow
   */
  export type MailAPIInboxEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailAPIInboxEntry to fetch.
     */
    where: MailAPIInboxEntryWhereUniqueInput
  }


  /**
   * MailAPIInboxEntry findFirst
   */
  export type MailAPIInboxEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailAPIInboxEntry to fetch.
     */
    where?: MailAPIInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailAPIInboxEntries to fetch.
     */
    orderBy?: MailAPIInboxEntryOrderByWithRelationInput | MailAPIInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailAPIInboxEntries.
     */
    cursor?: MailAPIInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailAPIInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailAPIInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailAPIInboxEntries.
     */
    distinct?: MailAPIInboxEntryScalarFieldEnum | MailAPIInboxEntryScalarFieldEnum[]
  }


  /**
   * MailAPIInboxEntry findFirstOrThrow
   */
  export type MailAPIInboxEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailAPIInboxEntry to fetch.
     */
    where?: MailAPIInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailAPIInboxEntries to fetch.
     */
    orderBy?: MailAPIInboxEntryOrderByWithRelationInput | MailAPIInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailAPIInboxEntries.
     */
    cursor?: MailAPIInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailAPIInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailAPIInboxEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailAPIInboxEntries.
     */
    distinct?: MailAPIInboxEntryScalarFieldEnum | MailAPIInboxEntryScalarFieldEnum[]
  }


  /**
   * MailAPIInboxEntry findMany
   */
  export type MailAPIInboxEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter, which MailAPIInboxEntries to fetch.
     */
    where?: MailAPIInboxEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailAPIInboxEntries to fetch.
     */
    orderBy?: MailAPIInboxEntryOrderByWithRelationInput | MailAPIInboxEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailAPIInboxEntries.
     */
    cursor?: MailAPIInboxEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailAPIInboxEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailAPIInboxEntries.
     */
    skip?: number
    distinct?: MailAPIInboxEntryScalarFieldEnum | MailAPIInboxEntryScalarFieldEnum[]
  }


  /**
   * MailAPIInboxEntry update
   */
  export type MailAPIInboxEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * The data needed to update a MailAPIInboxEntry.
     */
    data: XOR<MailAPIInboxEntryUpdateInput, MailAPIInboxEntryUncheckedUpdateInput>
    /**
     * Choose, which MailAPIInboxEntry to update.
     */
    where: MailAPIInboxEntryWhereUniqueInput
  }


  /**
   * MailAPIInboxEntry updateMany
   */
  export type MailAPIInboxEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailAPIInboxEntries.
     */
    data: XOR<MailAPIInboxEntryUpdateManyMutationInput, MailAPIInboxEntryUncheckedUpdateManyInput>
    /**
     * Filter which MailAPIInboxEntries to update
     */
    where?: MailAPIInboxEntryWhereInput
  }


  /**
   * MailAPIInboxEntry delete
   */
  export type MailAPIInboxEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
    /**
     * Filter which MailAPIInboxEntry to delete.
     */
    where: MailAPIInboxEntryWhereUniqueInput
  }


  /**
   * MailAPIInboxEntry deleteMany
   */
  export type MailAPIInboxEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailAPIInboxEntries to delete
     */
    where?: MailAPIInboxEntryWhereInput
  }


  /**
   * MailAPIInboxEntry without action
   */
  export type MailAPIInboxEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailAPIInboxEntry
     */
    select?: MailAPIInboxEntrySelect<ExtArgs> | null
  }



  /**
   * Model OTelTraceAttribute
   */

  export type AggregateOTelTraceAttribute = {
    _count: OTelTraceAttributeCountAggregateOutputType | null
    _min: OTelTraceAttributeMinAggregateOutputType | null
    _max: OTelTraceAttributeMaxAggregateOutputType | null
  }

  export type OTelTraceAttributeMinAggregateOutputType = {
    id: string | null
    hash: string | null
    key: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceAttributeMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    key: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceAttributeCountAggregateOutputType = {
    id: number
    hash: number
    key: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceAttributeMinAggregateInputType = {
    id?: true
    hash?: true
    key?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceAttributeMaxAggregateInputType = {
    id?: true
    hash?: true
    key?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceAttributeCountAggregateInputType = {
    id?: true
    hash?: true
    key?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceAttribute to aggregate.
     */
    where?: OTelTraceAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceAttributes to fetch.
     */
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceAttributes
    **/
    _count?: true | OTelTraceAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceAttributeMaxAggregateInputType
  }

  export type GetOTelTraceAttributeAggregateType<T extends OTelTraceAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceAttribute[P]>
      : GetScalarType<T[P], AggregateOTelTraceAttribute[P]>
  }




  export type OTelTraceAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithAggregationInput | OTelTraceAttributeOrderByWithAggregationInput[]
    by: OTelTraceAttributeScalarFieldEnum[] | OTelTraceAttributeScalarFieldEnum
    having?: OTelTraceAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceAttributeCountAggregateInputType | true
    _min?: OTelTraceAttributeMinAggregateInputType
    _max?: OTelTraceAttributeMaxAggregateInputType
  }

  export type OTelTraceAttributeGroupByOutputType = {
    id: string
    hash: string
    key: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceAttributeCountAggregateOutputType | null
    _min: OTelTraceAttributeMinAggregateOutputType | null
    _max: OTelTraceAttributeMaxAggregateOutputType | null
  }

  type GetOTelTraceAttributeGroupByPayload<T extends OTelTraceAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceAttributeGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    key?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resources?: boolean | OTelTraceAttribute$resourcesArgs<ExtArgs>
    spans?: boolean | OTelTraceAttribute$spansArgs<ExtArgs>
    events?: boolean | OTelTraceAttribute$eventsArgs<ExtArgs>
    links?: boolean | OTelTraceAttribute$linksArgs<ExtArgs>
    scopes?: boolean | OTelTraceAttribute$scopesArgs<ExtArgs>
    _count?: boolean | OTelTraceAttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceAttribute"]>

  export type OTelTraceAttributeSelectScalar = {
    id?: boolean
    hash?: boolean
    key?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | OTelTraceAttribute$resourcesArgs<ExtArgs>
    spans?: boolean | OTelTraceAttribute$spansArgs<ExtArgs>
    events?: boolean | OTelTraceAttribute$eventsArgs<ExtArgs>
    links?: boolean | OTelTraceAttribute$linksArgs<ExtArgs>
    scopes?: boolean | OTelTraceAttribute$scopesArgs<ExtArgs>
    _count?: boolean | OTelTraceAttributeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceAttribute"
    objects: {
      resources: Prisma.$OTelTraceResourcePayload<ExtArgs>[]
      spans: Prisma.$OTelTraceSpanPayload<ExtArgs>[]
      events: Prisma.$OTelTraceEventPayload<ExtArgs>[]
      links: Prisma.$OTelTraceLinkPayload<ExtArgs>[]
      scopes: Prisma.$OTelTraceScopePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hash: string
      key: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceAttribute"]>
    composites: {}
  }


  type OTelTraceAttributeGetPayload<S extends boolean | null | undefined | OTelTraceAttributeDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceAttributePayload, S>

  type OTelTraceAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceAttributeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceAttributeCountAggregateInputType | true
    }

  export interface OTelTraceAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceAttribute'], meta: { name: 'OTelTraceAttribute' } }
    /**
     * Find zero or one OTelTraceAttribute that matches the filter.
     * @param {OTelTraceAttributeFindUniqueArgs} args - Arguments to find a OTelTraceAttribute
     * @example
     * // Get one OTelTraceAttribute
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceAttributeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceAttributeFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceAttribute that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceAttributeFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceAttribute
     * @example
     * // Get one OTelTraceAttribute
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceAttributeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceAttributeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeFindFirstArgs} args - Arguments to find a OTelTraceAttribute
     * @example
     * // Get one OTelTraceAttribute
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceAttributeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceAttributeFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeFindFirstOrThrowArgs} args - Arguments to find a OTelTraceAttribute
     * @example
     * // Get one OTelTraceAttribute
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceAttributeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceAttributeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceAttributes
     * const oTelTraceAttributes = await prisma.oTelTraceAttribute.findMany()
     * 
     * // Get first 10 OTelTraceAttributes
     * const oTelTraceAttributes = await prisma.oTelTraceAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceAttributeWithIdOnly = await prisma.oTelTraceAttribute.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceAttributeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceAttributeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Delete a OTelTraceAttribute.
     * @param {OTelTraceAttributeDeleteArgs} args - Arguments to delete one OTelTraceAttribute.
     * @example
     * // Delete one OTelTraceAttribute
     * const OTelTraceAttribute = await prisma.oTelTraceAttribute.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceAttribute
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceAttributeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceAttributeDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceAttribute.
     * @param {OTelTraceAttributeUpdateArgs} args - Arguments to update one OTelTraceAttribute.
     * @example
     * // Update one OTelTraceAttribute
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceAttributeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceAttributeUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceAttributeClient<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceAttributes.
     * @param {OTelTraceAttributeDeleteManyArgs} args - Arguments to filter OTelTraceAttributes to delete.
     * @example
     * // Delete a few OTelTraceAttributes
     * const { count } = await prisma.oTelTraceAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceAttributeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceAttributeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceAttributes
     * const oTelTraceAttribute = await prisma.oTelTraceAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceAttributeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceAttributeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Count the number of OTelTraceAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeCountArgs} args - Arguments to filter OTelTraceAttributes to count.
     * @example
     * // Count the number of OTelTraceAttributes
     * const count = await prisma.oTelTraceAttribute.count({
     *   where: {
     *     // ... the filter for the OTelTraceAttributes we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceAttributeCountArgs>(
      args?: Subset<T, OTelTraceAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceAttributeAggregateArgs>(args: Subset<T, OTelTraceAttributeAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceAttributeAggregateType<T>>

    /**
     * Group by OTelTraceAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceAttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceAttributeGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceAttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceAttribute model
   */
  readonly fields: OTelTraceAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resources<T extends OTelTraceAttribute$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceAttribute$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    spans<T extends OTelTraceAttribute$spansArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceAttribute$spansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends OTelTraceAttribute$eventsArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceAttribute$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    links<T extends OTelTraceAttribute$linksArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceAttribute$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findMany'> | Null>;

    scopes<T extends OTelTraceAttribute$scopesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceAttribute$scopesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceAttribute model
   */ 
  interface OTelTraceAttributeFieldRefs {
    readonly id: FieldRef<"OTelTraceAttribute", 'String'>
    readonly hash: FieldRef<"OTelTraceAttribute", 'String'>
    readonly key: FieldRef<"OTelTraceAttribute", 'String'>
    readonly type: FieldRef<"OTelTraceAttribute", 'String'>
    readonly createdAt: FieldRef<"OTelTraceAttribute", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceAttribute", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceAttribute findUnique
   */
  export type OTelTraceAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceAttribute to fetch.
     */
    where: OTelTraceAttributeWhereUniqueInput
  }


  /**
   * OTelTraceAttribute findUniqueOrThrow
   */
  export type OTelTraceAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceAttribute to fetch.
     */
    where: OTelTraceAttributeWhereUniqueInput
  }


  /**
   * OTelTraceAttribute findFirst
   */
  export type OTelTraceAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceAttribute to fetch.
     */
    where?: OTelTraceAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceAttributes to fetch.
     */
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceAttributes.
     */
    cursor?: OTelTraceAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceAttributes.
     */
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute findFirstOrThrow
   */
  export type OTelTraceAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceAttribute to fetch.
     */
    where?: OTelTraceAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceAttributes to fetch.
     */
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceAttributes.
     */
    cursor?: OTelTraceAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceAttributes.
     */
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute findMany
   */
  export type OTelTraceAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceAttributes to fetch.
     */
    where?: OTelTraceAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceAttributes to fetch.
     */
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceAttributes.
     */
    cursor?: OTelTraceAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceAttributes.
     */
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute update
   */
  export type OTelTraceAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceAttribute.
     */
    data: XOR<OTelTraceAttributeUpdateInput, OTelTraceAttributeUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceAttribute to update.
     */
    where: OTelTraceAttributeWhereUniqueInput
  }


  /**
   * OTelTraceAttribute updateMany
   */
  export type OTelTraceAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceAttributes.
     */
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceAttributes to update
     */
    where?: OTelTraceAttributeWhereInput
  }


  /**
   * OTelTraceAttribute delete
   */
  export type OTelTraceAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceAttribute to delete.
     */
    where: OTelTraceAttributeWhereUniqueInput
  }


  /**
   * OTelTraceAttribute deleteMany
   */
  export type OTelTraceAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceAttributes to delete
     */
    where?: OTelTraceAttributeWhereInput
  }


  /**
   * OTelTraceAttribute.resources
   */
  export type OTelTraceAttribute$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    where?: OTelTraceResourceWhereInput
    orderBy?: OTelTraceResourceOrderByWithRelationInput | OTelTraceResourceOrderByWithRelationInput[]
    cursor?: OTelTraceResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceResourceScalarFieldEnum | OTelTraceResourceScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute.spans
   */
  export type OTelTraceAttribute$spansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    where?: OTelTraceSpanWhereInput
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    cursor?: OTelTraceSpanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute.events
   */
  export type OTelTraceAttribute$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    where?: OTelTraceEventWhereInput
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    cursor?: OTelTraceEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceEventScalarFieldEnum | OTelTraceEventScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute.links
   */
  export type OTelTraceAttribute$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    where?: OTelTraceLinkWhereInput
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    cursor?: OTelTraceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceLinkScalarFieldEnum | OTelTraceLinkScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute.scopes
   */
  export type OTelTraceAttribute$scopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    where?: OTelTraceScopeWhereInput
    orderBy?: OTelTraceScopeOrderByWithRelationInput | OTelTraceScopeOrderByWithRelationInput[]
    cursor?: OTelTraceScopeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceScopeScalarFieldEnum | OTelTraceScopeScalarFieldEnum[]
  }


  /**
   * OTelTraceAttribute without action
   */
  export type OTelTraceAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
  }



  /**
   * Model OTelTraceResource
   */

  export type AggregateOTelTraceResource = {
    _count: OTelTraceResourceCountAggregateOutputType | null
    _min: OTelTraceResourceMinAggregateOutputType | null
    _max: OTelTraceResourceMaxAggregateOutputType | null
  }

  export type OTelTraceResourceMinAggregateOutputType = {
    id: string | null
    attributesHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceResourceMaxAggregateOutputType = {
    id: string | null
    attributesHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceResourceCountAggregateOutputType = {
    id: number
    attributesHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceResourceMinAggregateInputType = {
    id?: true
    attributesHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceResourceMaxAggregateInputType = {
    id?: true
    attributesHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceResourceCountAggregateInputType = {
    id?: true
    attributesHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceResource to aggregate.
     */
    where?: OTelTraceResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceResources to fetch.
     */
    orderBy?: OTelTraceResourceOrderByWithRelationInput | OTelTraceResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceResources
    **/
    _count?: true | OTelTraceResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceResourceMaxAggregateInputType
  }

  export type GetOTelTraceResourceAggregateType<T extends OTelTraceResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceResource[P]>
      : GetScalarType<T[P], AggregateOTelTraceResource[P]>
  }




  export type OTelTraceResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceResourceWhereInput
    orderBy?: OTelTraceResourceOrderByWithAggregationInput | OTelTraceResourceOrderByWithAggregationInput[]
    by: OTelTraceResourceScalarFieldEnum[] | OTelTraceResourceScalarFieldEnum
    having?: OTelTraceResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceResourceCountAggregateInputType | true
    _min?: OTelTraceResourceMinAggregateInputType
    _max?: OTelTraceResourceMaxAggregateInputType
  }

  export type OTelTraceResourceGroupByOutputType = {
    id: string
    attributesHash: string
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceResourceCountAggregateOutputType | null
    _min: OTelTraceResourceMinAggregateOutputType | null
    _max: OTelTraceResourceMaxAggregateOutputType | null
  }

  type GetOTelTraceResourceGroupByPayload<T extends OTelTraceResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceResourceGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceResourceGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributesHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | OTelTraceResource$attributesArgs<ExtArgs>
    spans?: boolean | OTelTraceResource$spansArgs<ExtArgs>
    _count?: boolean | OTelTraceResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceResource"]>

  export type OTelTraceResourceSelectScalar = {
    id?: boolean
    attributesHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceResource$attributesArgs<ExtArgs>
    spans?: boolean | OTelTraceResource$spansArgs<ExtArgs>
    _count?: boolean | OTelTraceResourceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceResource"
    objects: {
      attributes: Prisma.$OTelTraceAttributePayload<ExtArgs>[]
      spans: Prisma.$OTelTraceSpanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attributesHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceResource"]>
    composites: {}
  }


  type OTelTraceResourceGetPayload<S extends boolean | null | undefined | OTelTraceResourceDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceResourcePayload, S>

  type OTelTraceResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceResourceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceResourceCountAggregateInputType | true
    }

  export interface OTelTraceResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceResource'], meta: { name: 'OTelTraceResource' } }
    /**
     * Find zero or one OTelTraceResource that matches the filter.
     * @param {OTelTraceResourceFindUniqueArgs} args - Arguments to find a OTelTraceResource
     * @example
     * // Get one OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceResourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceResource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceResourceFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceResource
     * @example
     * // Get one OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceResourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceResourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceFindFirstArgs} args - Arguments to find a OTelTraceResource
     * @example
     * // Get one OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceResourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceResourceFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceFindFirstOrThrowArgs} args - Arguments to find a OTelTraceResource
     * @example
     * // Get one OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceResourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceResourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceResources
     * const oTelTraceResources = await prisma.oTelTraceResource.findMany()
     * 
     * // Get first 10 OTelTraceResources
     * const oTelTraceResources = await prisma.oTelTraceResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceResourceWithIdOnly = await prisma.oTelTraceResource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceResourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceResourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OTelTraceResource.
     * @param {OTelTraceResourceCreateArgs} args - Arguments to create a OTelTraceResource.
     * @example
     * // Create one OTelTraceResource
     * const OTelTraceResource = await prisma.oTelTraceResource.create({
     *   data: {
     *     // ... data to create a OTelTraceResource
     *   }
     * })
     * 
    **/
    create<T extends OTelTraceResourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceCreateArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OTelTraceResource.
     * @param {OTelTraceResourceDeleteArgs} args - Arguments to delete one OTelTraceResource.
     * @example
     * // Delete one OTelTraceResource
     * const OTelTraceResource = await prisma.oTelTraceResource.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceResource
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceResourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceResource.
     * @param {OTelTraceResourceUpdateArgs} args - Arguments to update one OTelTraceResource.
     * @example
     * // Update one OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceResourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceResources.
     * @param {OTelTraceResourceDeleteManyArgs} args - Arguments to filter OTelTraceResources to delete.
     * @example
     * // Delete a few OTelTraceResources
     * const { count } = await prisma.oTelTraceResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceResourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceResourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceResources
     * const oTelTraceResource = await prisma.oTelTraceResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceResourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTelTraceResource.
     * @param {OTelTraceResourceUpsertArgs} args - Arguments to update or create a OTelTraceResource.
     * @example
     * // Update or create a OTelTraceResource
     * const oTelTraceResource = await prisma.oTelTraceResource.upsert({
     *   create: {
     *     // ... data to create a OTelTraceResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTelTraceResource we want to update
     *   }
     * })
    **/
    upsert<T extends OTelTraceResourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceResourceUpsertArgs<ExtArgs>>
    ): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OTelTraceResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceCountArgs} args - Arguments to filter OTelTraceResources to count.
     * @example
     * // Count the number of OTelTraceResources
     * const count = await prisma.oTelTraceResource.count({
     *   where: {
     *     // ... the filter for the OTelTraceResources we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceResourceCountArgs>(
      args?: Subset<T, OTelTraceResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceResourceAggregateArgs>(args: Subset<T, OTelTraceResourceAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceResourceAggregateType<T>>

    /**
     * Group by OTelTraceResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceResourceGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceResource model
   */
  readonly fields: OTelTraceResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributes<T extends OTelTraceResource$attributesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceResource$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    spans<T extends OTelTraceResource$spansArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceResource$spansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceResource model
   */ 
  interface OTelTraceResourceFieldRefs {
    readonly id: FieldRef<"OTelTraceResource", 'String'>
    readonly attributesHash: FieldRef<"OTelTraceResource", 'String'>
    readonly createdAt: FieldRef<"OTelTraceResource", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceResource", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceResource findUnique
   */
  export type OTelTraceResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceResource to fetch.
     */
    where: OTelTraceResourceWhereUniqueInput
  }


  /**
   * OTelTraceResource findUniqueOrThrow
   */
  export type OTelTraceResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceResource to fetch.
     */
    where: OTelTraceResourceWhereUniqueInput
  }


  /**
   * OTelTraceResource findFirst
   */
  export type OTelTraceResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceResource to fetch.
     */
    where?: OTelTraceResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceResources to fetch.
     */
    orderBy?: OTelTraceResourceOrderByWithRelationInput | OTelTraceResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceResources.
     */
    cursor?: OTelTraceResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceResources.
     */
    distinct?: OTelTraceResourceScalarFieldEnum | OTelTraceResourceScalarFieldEnum[]
  }


  /**
   * OTelTraceResource findFirstOrThrow
   */
  export type OTelTraceResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceResource to fetch.
     */
    where?: OTelTraceResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceResources to fetch.
     */
    orderBy?: OTelTraceResourceOrderByWithRelationInput | OTelTraceResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceResources.
     */
    cursor?: OTelTraceResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceResources.
     */
    distinct?: OTelTraceResourceScalarFieldEnum | OTelTraceResourceScalarFieldEnum[]
  }


  /**
   * OTelTraceResource findMany
   */
  export type OTelTraceResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceResources to fetch.
     */
    where?: OTelTraceResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceResources to fetch.
     */
    orderBy?: OTelTraceResourceOrderByWithRelationInput | OTelTraceResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceResources.
     */
    cursor?: OTelTraceResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceResources.
     */
    skip?: number
    distinct?: OTelTraceResourceScalarFieldEnum | OTelTraceResourceScalarFieldEnum[]
  }


  /**
   * OTelTraceResource create
   */
  export type OTelTraceResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a OTelTraceResource.
     */
    data: XOR<OTelTraceResourceCreateInput, OTelTraceResourceUncheckedCreateInput>
  }


  /**
   * OTelTraceResource update
   */
  export type OTelTraceResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceResource.
     */
    data: XOR<OTelTraceResourceUpdateInput, OTelTraceResourceUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceResource to update.
     */
    where: OTelTraceResourceWhereUniqueInput
  }


  /**
   * OTelTraceResource updateMany
   */
  export type OTelTraceResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceResources.
     */
    data: XOR<OTelTraceResourceUpdateManyMutationInput, OTelTraceResourceUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceResources to update
     */
    where?: OTelTraceResourceWhereInput
  }


  /**
   * OTelTraceResource upsert
   */
  export type OTelTraceResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the OTelTraceResource to update in case it exists.
     */
    where: OTelTraceResourceWhereUniqueInput
    /**
     * In case the OTelTraceResource found by the `where` argument doesn't exist, create a new OTelTraceResource with this data.
     */
    create: XOR<OTelTraceResourceCreateInput, OTelTraceResourceUncheckedCreateInput>
    /**
     * In case the OTelTraceResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTelTraceResourceUpdateInput, OTelTraceResourceUncheckedUpdateInput>
  }


  /**
   * OTelTraceResource delete
   */
  export type OTelTraceResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceResource to delete.
     */
    where: OTelTraceResourceWhereUniqueInput
  }


  /**
   * OTelTraceResource deleteMany
   */
  export type OTelTraceResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceResources to delete
     */
    where?: OTelTraceResourceWhereInput
  }


  /**
   * OTelTraceResource.attributes
   */
  export type OTelTraceResource$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    cursor?: OTelTraceAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceResource.spans
   */
  export type OTelTraceResource$spansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    where?: OTelTraceSpanWhereInput
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    cursor?: OTelTraceSpanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceResource without action
   */
  export type OTelTraceResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceResource
     */
    select?: OTelTraceResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceResourceInclude<ExtArgs> | null
  }



  /**
   * Model OTelTraceSpan
   */

  export type AggregateOTelTraceSpan = {
    _count: OTelTraceSpanCountAggregateOutputType | null
    _avg: OTelTraceSpanAvgAggregateOutputType | null
    _sum: OTelTraceSpanSumAggregateOutputType | null
    _min: OTelTraceSpanMinAggregateOutputType | null
    _max: OTelTraceSpanMaxAggregateOutputType | null
  }

  export type OTelTraceSpanAvgAggregateOutputType = {
    flags: number | null
    kind: number | null
    startTimeNano: number | null
    endTimeNano: number | null
    statusCode: number | null
  }

  export type OTelTraceSpanSumAggregateOutputType = {
    flags: number | null
    kind: number | null
    startTimeNano: bigint | null
    endTimeNano: bigint | null
    statusCode: number | null
  }

  export type OTelTraceSpanMinAggregateOutputType = {
    id: string | null
    traceId: string | null
    traceState: string | null
    spanId: string | null
    parentId: string | null
    name: string | null
    flags: number | null
    kind: number | null
    startTimeNano: bigint | null
    endTimeNano: bigint | null
    statusMessage: string | null
    statusCode: number | null
    scopeId: string | null
    resourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceSpanMaxAggregateOutputType = {
    id: string | null
    traceId: string | null
    traceState: string | null
    spanId: string | null
    parentId: string | null
    name: string | null
    flags: number | null
    kind: number | null
    startTimeNano: bigint | null
    endTimeNano: bigint | null
    statusMessage: string | null
    statusCode: number | null
    scopeId: string | null
    resourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceSpanCountAggregateOutputType = {
    id: number
    traceId: number
    traceState: number
    spanId: number
    parentId: number
    name: number
    flags: number
    kind: number
    startTimeNano: number
    endTimeNano: number
    statusMessage: number
    statusCode: number
    scopeId: number
    resourceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceSpanAvgAggregateInputType = {
    flags?: true
    kind?: true
    startTimeNano?: true
    endTimeNano?: true
    statusCode?: true
  }

  export type OTelTraceSpanSumAggregateInputType = {
    flags?: true
    kind?: true
    startTimeNano?: true
    endTimeNano?: true
    statusCode?: true
  }

  export type OTelTraceSpanMinAggregateInputType = {
    id?: true
    traceId?: true
    traceState?: true
    spanId?: true
    parentId?: true
    name?: true
    flags?: true
    kind?: true
    startTimeNano?: true
    endTimeNano?: true
    statusMessage?: true
    statusCode?: true
    scopeId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceSpanMaxAggregateInputType = {
    id?: true
    traceId?: true
    traceState?: true
    spanId?: true
    parentId?: true
    name?: true
    flags?: true
    kind?: true
    startTimeNano?: true
    endTimeNano?: true
    statusMessage?: true
    statusCode?: true
    scopeId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceSpanCountAggregateInputType = {
    id?: true
    traceId?: true
    traceState?: true
    spanId?: true
    parentId?: true
    name?: true
    flags?: true
    kind?: true
    startTimeNano?: true
    endTimeNano?: true
    statusMessage?: true
    statusCode?: true
    scopeId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceSpanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceSpan to aggregate.
     */
    where?: OTelTraceSpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceSpans to fetch.
     */
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceSpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceSpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceSpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceSpans
    **/
    _count?: true | OTelTraceSpanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTelTraceSpanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTelTraceSpanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceSpanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceSpanMaxAggregateInputType
  }

  export type GetOTelTraceSpanAggregateType<T extends OTelTraceSpanAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceSpan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceSpan[P]>
      : GetScalarType<T[P], AggregateOTelTraceSpan[P]>
  }




  export type OTelTraceSpanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceSpanWhereInput
    orderBy?: OTelTraceSpanOrderByWithAggregationInput | OTelTraceSpanOrderByWithAggregationInput[]
    by: OTelTraceSpanScalarFieldEnum[] | OTelTraceSpanScalarFieldEnum
    having?: OTelTraceSpanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceSpanCountAggregateInputType | true
    _avg?: OTelTraceSpanAvgAggregateInputType
    _sum?: OTelTraceSpanSumAggregateInputType
    _min?: OTelTraceSpanMinAggregateInputType
    _max?: OTelTraceSpanMaxAggregateInputType
  }

  export type OTelTraceSpanGroupByOutputType = {
    id: string
    traceId: string
    traceState: string | null
    spanId: string
    parentId: string | null
    name: string
    flags: number | null
    kind: number
    startTimeNano: bigint
    endTimeNano: bigint
    statusMessage: string | null
    statusCode: number | null
    scopeId: string
    resourceId: string
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceSpanCountAggregateOutputType | null
    _avg: OTelTraceSpanAvgAggregateOutputType | null
    _sum: OTelTraceSpanSumAggregateOutputType | null
    _min: OTelTraceSpanMinAggregateOutputType | null
    _max: OTelTraceSpanMaxAggregateOutputType | null
  }

  type GetOTelTraceSpanGroupByPayload<T extends OTelTraceSpanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceSpanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceSpanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceSpanGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceSpanGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceSpanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    traceId?: boolean
    traceState?: boolean
    spanId?: boolean
    parentId?: boolean
    name?: boolean
    flags?: boolean
    kind?: boolean
    startTimeNano?: boolean
    endTimeNano?: boolean
    statusMessage?: boolean
    statusCode?: boolean
    scopeId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | OTelTraceSpan$attributesArgs<ExtArgs>
    events?: boolean | OTelTraceSpan$eventsArgs<ExtArgs>
    links?: boolean | OTelTraceSpan$linksArgs<ExtArgs>
    scope?: boolean | OTelTraceScopeDefaultArgs<ExtArgs>
    resource?: boolean | OTelTraceResourceDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceSpanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceSpan"]>

  export type OTelTraceSpanSelectScalar = {
    id?: boolean
    traceId?: boolean
    traceState?: boolean
    spanId?: boolean
    parentId?: boolean
    name?: boolean
    flags?: boolean
    kind?: boolean
    startTimeNano?: boolean
    endTimeNano?: boolean
    statusMessage?: boolean
    statusCode?: boolean
    scopeId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceSpanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceSpan$attributesArgs<ExtArgs>
    events?: boolean | OTelTraceSpan$eventsArgs<ExtArgs>
    links?: boolean | OTelTraceSpan$linksArgs<ExtArgs>
    scope?: boolean | OTelTraceScopeDefaultArgs<ExtArgs>
    resource?: boolean | OTelTraceResourceDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceSpanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceSpanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceSpan"
    objects: {
      attributes: Prisma.$OTelTraceAttributePayload<ExtArgs>[]
      events: Prisma.$OTelTraceEventPayload<ExtArgs>[]
      links: Prisma.$OTelTraceLinkPayload<ExtArgs>[]
      scope: Prisma.$OTelTraceScopePayload<ExtArgs>
      resource: Prisma.$OTelTraceResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      traceId: string
      traceState: string | null
      spanId: string
      parentId: string | null
      name: string
      flags: number | null
      kind: number
      startTimeNano: bigint
      endTimeNano: bigint
      statusMessage: string | null
      statusCode: number | null
      scopeId: string
      resourceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceSpan"]>
    composites: {}
  }


  type OTelTraceSpanGetPayload<S extends boolean | null | undefined | OTelTraceSpanDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceSpanPayload, S>

  type OTelTraceSpanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceSpanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceSpanCountAggregateInputType | true
    }

  export interface OTelTraceSpanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceSpan'], meta: { name: 'OTelTraceSpan' } }
    /**
     * Find zero or one OTelTraceSpan that matches the filter.
     * @param {OTelTraceSpanFindUniqueArgs} args - Arguments to find a OTelTraceSpan
     * @example
     * // Get one OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceSpanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceSpan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceSpanFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceSpan
     * @example
     * // Get one OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceSpanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceSpanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceSpan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanFindFirstArgs} args - Arguments to find a OTelTraceSpan
     * @example
     * // Get one OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceSpanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceSpanFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceSpan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanFindFirstOrThrowArgs} args - Arguments to find a OTelTraceSpan
     * @example
     * // Get one OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceSpanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceSpanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceSpans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceSpans
     * const oTelTraceSpans = await prisma.oTelTraceSpan.findMany()
     * 
     * // Get first 10 OTelTraceSpans
     * const oTelTraceSpans = await prisma.oTelTraceSpan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceSpanWithIdOnly = await prisma.oTelTraceSpan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceSpanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceSpanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OTelTraceSpan.
     * @param {OTelTraceSpanCreateArgs} args - Arguments to create a OTelTraceSpan.
     * @example
     * // Create one OTelTraceSpan
     * const OTelTraceSpan = await prisma.oTelTraceSpan.create({
     *   data: {
     *     // ... data to create a OTelTraceSpan
     *   }
     * })
     * 
    **/
    create<T extends OTelTraceSpanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanCreateArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OTelTraceSpan.
     * @param {OTelTraceSpanDeleteArgs} args - Arguments to delete one OTelTraceSpan.
     * @example
     * // Delete one OTelTraceSpan
     * const OTelTraceSpan = await prisma.oTelTraceSpan.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceSpan
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceSpanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceSpan.
     * @param {OTelTraceSpanUpdateArgs} args - Arguments to update one OTelTraceSpan.
     * @example
     * // Update one OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceSpanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceSpans.
     * @param {OTelTraceSpanDeleteManyArgs} args - Arguments to filter OTelTraceSpans to delete.
     * @example
     * // Delete a few OTelTraceSpans
     * const { count } = await prisma.oTelTraceSpan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceSpanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceSpanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceSpans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceSpans
     * const oTelTraceSpan = await prisma.oTelTraceSpan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceSpanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTelTraceSpan.
     * @param {OTelTraceSpanUpsertArgs} args - Arguments to update or create a OTelTraceSpan.
     * @example
     * // Update or create a OTelTraceSpan
     * const oTelTraceSpan = await prisma.oTelTraceSpan.upsert({
     *   create: {
     *     // ... data to create a OTelTraceSpan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTelTraceSpan we want to update
     *   }
     * })
    **/
    upsert<T extends OTelTraceSpanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceSpanUpsertArgs<ExtArgs>>
    ): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OTelTraceSpans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanCountArgs} args - Arguments to filter OTelTraceSpans to count.
     * @example
     * // Count the number of OTelTraceSpans
     * const count = await prisma.oTelTraceSpan.count({
     *   where: {
     *     // ... the filter for the OTelTraceSpans we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceSpanCountArgs>(
      args?: Subset<T, OTelTraceSpanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceSpanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceSpan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceSpanAggregateArgs>(args: Subset<T, OTelTraceSpanAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceSpanAggregateType<T>>

    /**
     * Group by OTelTraceSpan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceSpanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceSpanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceSpanGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceSpanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceSpanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceSpanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceSpan model
   */
  readonly fields: OTelTraceSpanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceSpan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceSpanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributes<T extends OTelTraceSpan$attributesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceSpan$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends OTelTraceSpan$eventsArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceSpan$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    links<T extends OTelTraceSpan$linksArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceSpan$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findMany'> | Null>;

    scope<T extends OTelTraceScopeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceScopeDefaultArgs<ExtArgs>>): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    resource<T extends OTelTraceResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceResourceDefaultArgs<ExtArgs>>): Prisma__OTelTraceResourceClient<$Result.GetResult<Prisma.$OTelTraceResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceSpan model
   */ 
  interface OTelTraceSpanFieldRefs {
    readonly id: FieldRef<"OTelTraceSpan", 'String'>
    readonly traceId: FieldRef<"OTelTraceSpan", 'String'>
    readonly traceState: FieldRef<"OTelTraceSpan", 'String'>
    readonly spanId: FieldRef<"OTelTraceSpan", 'String'>
    readonly parentId: FieldRef<"OTelTraceSpan", 'String'>
    readonly name: FieldRef<"OTelTraceSpan", 'String'>
    readonly flags: FieldRef<"OTelTraceSpan", 'Int'>
    readonly kind: FieldRef<"OTelTraceSpan", 'Int'>
    readonly startTimeNano: FieldRef<"OTelTraceSpan", 'BigInt'>
    readonly endTimeNano: FieldRef<"OTelTraceSpan", 'BigInt'>
    readonly statusMessage: FieldRef<"OTelTraceSpan", 'String'>
    readonly statusCode: FieldRef<"OTelTraceSpan", 'Int'>
    readonly scopeId: FieldRef<"OTelTraceSpan", 'String'>
    readonly resourceId: FieldRef<"OTelTraceSpan", 'String'>
    readonly createdAt: FieldRef<"OTelTraceSpan", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceSpan", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceSpan findUnique
   */
  export type OTelTraceSpanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceSpan to fetch.
     */
    where: OTelTraceSpanWhereUniqueInput
  }


  /**
   * OTelTraceSpan findUniqueOrThrow
   */
  export type OTelTraceSpanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceSpan to fetch.
     */
    where: OTelTraceSpanWhereUniqueInput
  }


  /**
   * OTelTraceSpan findFirst
   */
  export type OTelTraceSpanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceSpan to fetch.
     */
    where?: OTelTraceSpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceSpans to fetch.
     */
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceSpans.
     */
    cursor?: OTelTraceSpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceSpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceSpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceSpans.
     */
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan findFirstOrThrow
   */
  export type OTelTraceSpanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceSpan to fetch.
     */
    where?: OTelTraceSpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceSpans to fetch.
     */
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceSpans.
     */
    cursor?: OTelTraceSpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceSpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceSpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceSpans.
     */
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan findMany
   */
  export type OTelTraceSpanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceSpans to fetch.
     */
    where?: OTelTraceSpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceSpans to fetch.
     */
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceSpans.
     */
    cursor?: OTelTraceSpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceSpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceSpans.
     */
    skip?: number
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan create
   */
  export type OTelTraceSpanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * The data needed to create a OTelTraceSpan.
     */
    data: XOR<OTelTraceSpanCreateInput, OTelTraceSpanUncheckedCreateInput>
  }


  /**
   * OTelTraceSpan update
   */
  export type OTelTraceSpanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceSpan.
     */
    data: XOR<OTelTraceSpanUpdateInput, OTelTraceSpanUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceSpan to update.
     */
    where: OTelTraceSpanWhereUniqueInput
  }


  /**
   * OTelTraceSpan updateMany
   */
  export type OTelTraceSpanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceSpans.
     */
    data: XOR<OTelTraceSpanUpdateManyMutationInput, OTelTraceSpanUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceSpans to update
     */
    where?: OTelTraceSpanWhereInput
  }


  /**
   * OTelTraceSpan upsert
   */
  export type OTelTraceSpanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * The filter to search for the OTelTraceSpan to update in case it exists.
     */
    where: OTelTraceSpanWhereUniqueInput
    /**
     * In case the OTelTraceSpan found by the `where` argument doesn't exist, create a new OTelTraceSpan with this data.
     */
    create: XOR<OTelTraceSpanCreateInput, OTelTraceSpanUncheckedCreateInput>
    /**
     * In case the OTelTraceSpan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTelTraceSpanUpdateInput, OTelTraceSpanUncheckedUpdateInput>
  }


  /**
   * OTelTraceSpan delete
   */
  export type OTelTraceSpanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceSpan to delete.
     */
    where: OTelTraceSpanWhereUniqueInput
  }


  /**
   * OTelTraceSpan deleteMany
   */
  export type OTelTraceSpanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceSpans to delete
     */
    where?: OTelTraceSpanWhereInput
  }


  /**
   * OTelTraceSpan.attributes
   */
  export type OTelTraceSpan$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    cursor?: OTelTraceAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan.events
   */
  export type OTelTraceSpan$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    where?: OTelTraceEventWhereInput
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    cursor?: OTelTraceEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceEventScalarFieldEnum | OTelTraceEventScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan.links
   */
  export type OTelTraceSpan$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    where?: OTelTraceLinkWhereInput
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    cursor?: OTelTraceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceLinkScalarFieldEnum | OTelTraceLinkScalarFieldEnum[]
  }


  /**
   * OTelTraceSpan without action
   */
  export type OTelTraceSpanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
  }



  /**
   * Model OTelTraceEvent
   */

  export type AggregateOTelTraceEvent = {
    _count: OTelTraceEventCountAggregateOutputType | null
    _avg: OTelTraceEventAvgAggregateOutputType | null
    _sum: OTelTraceEventSumAggregateOutputType | null
    _min: OTelTraceEventMinAggregateOutputType | null
    _max: OTelTraceEventMaxAggregateOutputType | null
  }

  export type OTelTraceEventAvgAggregateOutputType = {
    startTimeNano: number | null
  }

  export type OTelTraceEventSumAggregateOutputType = {
    startTimeNano: bigint | null
  }

  export type OTelTraceEventMinAggregateOutputType = {
    id: string | null
    startTimeNano: bigint | null
    name: string | null
    spanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceEventMaxAggregateOutputType = {
    id: string | null
    startTimeNano: bigint | null
    name: string | null
    spanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceEventCountAggregateOutputType = {
    id: number
    startTimeNano: number
    name: number
    spanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceEventAvgAggregateInputType = {
    startTimeNano?: true
  }

  export type OTelTraceEventSumAggregateInputType = {
    startTimeNano?: true
  }

  export type OTelTraceEventMinAggregateInputType = {
    id?: true
    startTimeNano?: true
    name?: true
    spanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceEventMaxAggregateInputType = {
    id?: true
    startTimeNano?: true
    name?: true
    spanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceEventCountAggregateInputType = {
    id?: true
    startTimeNano?: true
    name?: true
    spanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceEvent to aggregate.
     */
    where?: OTelTraceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceEvents to fetch.
     */
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceEvents
    **/
    _count?: true | OTelTraceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTelTraceEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTelTraceEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceEventMaxAggregateInputType
  }

  export type GetOTelTraceEventAggregateType<T extends OTelTraceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceEvent[P]>
      : GetScalarType<T[P], AggregateOTelTraceEvent[P]>
  }




  export type OTelTraceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceEventWhereInput
    orderBy?: OTelTraceEventOrderByWithAggregationInput | OTelTraceEventOrderByWithAggregationInput[]
    by: OTelTraceEventScalarFieldEnum[] | OTelTraceEventScalarFieldEnum
    having?: OTelTraceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceEventCountAggregateInputType | true
    _avg?: OTelTraceEventAvgAggregateInputType
    _sum?: OTelTraceEventSumAggregateInputType
    _min?: OTelTraceEventMinAggregateInputType
    _max?: OTelTraceEventMaxAggregateInputType
  }

  export type OTelTraceEventGroupByOutputType = {
    id: string
    startTimeNano: bigint
    name: string
    spanId: string
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceEventCountAggregateOutputType | null
    _avg: OTelTraceEventAvgAggregateOutputType | null
    _sum: OTelTraceEventSumAggregateOutputType | null
    _min: OTelTraceEventMinAggregateOutputType | null
    _max: OTelTraceEventMaxAggregateOutputType | null
  }

  type GetOTelTraceEventGroupByPayload<T extends OTelTraceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceEventGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceEventGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTimeNano?: boolean
    name?: boolean
    spanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | OTelTraceEvent$attributesArgs<ExtArgs>
    span?: boolean | OTelTraceSpanDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceEvent"]>

  export type OTelTraceEventSelectScalar = {
    id?: boolean
    startTimeNano?: boolean
    name?: boolean
    spanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceEvent$attributesArgs<ExtArgs>
    span?: boolean | OTelTraceSpanDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceEventCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceEvent"
    objects: {
      attributes: Prisma.$OTelTraceAttributePayload<ExtArgs>[]
      span: Prisma.$OTelTraceSpanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTimeNano: bigint
      name: string
      spanId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceEvent"]>
    composites: {}
  }


  type OTelTraceEventGetPayload<S extends boolean | null | undefined | OTelTraceEventDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceEventPayload, S>

  type OTelTraceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceEventFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceEventCountAggregateInputType | true
    }

  export interface OTelTraceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceEvent'], meta: { name: 'OTelTraceEvent' } }
    /**
     * Find zero or one OTelTraceEvent that matches the filter.
     * @param {OTelTraceEventFindUniqueArgs} args - Arguments to find a OTelTraceEvent
     * @example
     * // Get one OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceEventFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceEvent
     * @example
     * // Get one OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventFindFirstArgs} args - Arguments to find a OTelTraceEvent
     * @example
     * // Get one OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceEventFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventFindFirstOrThrowArgs} args - Arguments to find a OTelTraceEvent
     * @example
     * // Get one OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceEvents
     * const oTelTraceEvents = await prisma.oTelTraceEvent.findMany()
     * 
     * // Get first 10 OTelTraceEvents
     * const oTelTraceEvents = await prisma.oTelTraceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceEventWithIdOnly = await prisma.oTelTraceEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OTelTraceEvent.
     * @param {OTelTraceEventCreateArgs} args - Arguments to create a OTelTraceEvent.
     * @example
     * // Create one OTelTraceEvent
     * const OTelTraceEvent = await prisma.oTelTraceEvent.create({
     *   data: {
     *     // ... data to create a OTelTraceEvent
     *   }
     * })
     * 
    **/
    create<T extends OTelTraceEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventCreateArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OTelTraceEvent.
     * @param {OTelTraceEventDeleteArgs} args - Arguments to delete one OTelTraceEvent.
     * @example
     * // Delete one OTelTraceEvent
     * const OTelTraceEvent = await prisma.oTelTraceEvent.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceEvent
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceEvent.
     * @param {OTelTraceEventUpdateArgs} args - Arguments to update one OTelTraceEvent.
     * @example
     * // Update one OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceEvents.
     * @param {OTelTraceEventDeleteManyArgs} args - Arguments to filter OTelTraceEvents to delete.
     * @example
     * // Delete a few OTelTraceEvents
     * const { count } = await prisma.oTelTraceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceEvents
     * const oTelTraceEvent = await prisma.oTelTraceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTelTraceEvent.
     * @param {OTelTraceEventUpsertArgs} args - Arguments to update or create a OTelTraceEvent.
     * @example
     * // Update or create a OTelTraceEvent
     * const oTelTraceEvent = await prisma.oTelTraceEvent.upsert({
     *   create: {
     *     // ... data to create a OTelTraceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTelTraceEvent we want to update
     *   }
     * })
    **/
    upsert<T extends OTelTraceEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceEventUpsertArgs<ExtArgs>>
    ): Prisma__OTelTraceEventClient<$Result.GetResult<Prisma.$OTelTraceEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OTelTraceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventCountArgs} args - Arguments to filter OTelTraceEvents to count.
     * @example
     * // Count the number of OTelTraceEvents
     * const count = await prisma.oTelTraceEvent.count({
     *   where: {
     *     // ... the filter for the OTelTraceEvents we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceEventCountArgs>(
      args?: Subset<T, OTelTraceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceEventAggregateArgs>(args: Subset<T, OTelTraceEventAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceEventAggregateType<T>>

    /**
     * Group by OTelTraceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceEventGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceEvent model
   */
  readonly fields: OTelTraceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributes<T extends OTelTraceEvent$attributesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceEvent$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    span<T extends OTelTraceSpanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceSpanDefaultArgs<ExtArgs>>): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceEvent model
   */ 
  interface OTelTraceEventFieldRefs {
    readonly id: FieldRef<"OTelTraceEvent", 'String'>
    readonly startTimeNano: FieldRef<"OTelTraceEvent", 'BigInt'>
    readonly name: FieldRef<"OTelTraceEvent", 'String'>
    readonly spanId: FieldRef<"OTelTraceEvent", 'String'>
    readonly createdAt: FieldRef<"OTelTraceEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceEvent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceEvent findUnique
   */
  export type OTelTraceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceEvent to fetch.
     */
    where: OTelTraceEventWhereUniqueInput
  }


  /**
   * OTelTraceEvent findUniqueOrThrow
   */
  export type OTelTraceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceEvent to fetch.
     */
    where: OTelTraceEventWhereUniqueInput
  }


  /**
   * OTelTraceEvent findFirst
   */
  export type OTelTraceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceEvent to fetch.
     */
    where?: OTelTraceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceEvents to fetch.
     */
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceEvents.
     */
    cursor?: OTelTraceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceEvents.
     */
    distinct?: OTelTraceEventScalarFieldEnum | OTelTraceEventScalarFieldEnum[]
  }


  /**
   * OTelTraceEvent findFirstOrThrow
   */
  export type OTelTraceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceEvent to fetch.
     */
    where?: OTelTraceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceEvents to fetch.
     */
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceEvents.
     */
    cursor?: OTelTraceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceEvents.
     */
    distinct?: OTelTraceEventScalarFieldEnum | OTelTraceEventScalarFieldEnum[]
  }


  /**
   * OTelTraceEvent findMany
   */
  export type OTelTraceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceEvents to fetch.
     */
    where?: OTelTraceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceEvents to fetch.
     */
    orderBy?: OTelTraceEventOrderByWithRelationInput | OTelTraceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceEvents.
     */
    cursor?: OTelTraceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceEvents.
     */
    skip?: number
    distinct?: OTelTraceEventScalarFieldEnum | OTelTraceEventScalarFieldEnum[]
  }


  /**
   * OTelTraceEvent create
   */
  export type OTelTraceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * The data needed to create a OTelTraceEvent.
     */
    data: XOR<OTelTraceEventCreateInput, OTelTraceEventUncheckedCreateInput>
  }


  /**
   * OTelTraceEvent update
   */
  export type OTelTraceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceEvent.
     */
    data: XOR<OTelTraceEventUpdateInput, OTelTraceEventUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceEvent to update.
     */
    where: OTelTraceEventWhereUniqueInput
  }


  /**
   * OTelTraceEvent updateMany
   */
  export type OTelTraceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceEvents.
     */
    data: XOR<OTelTraceEventUpdateManyMutationInput, OTelTraceEventUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceEvents to update
     */
    where?: OTelTraceEventWhereInput
  }


  /**
   * OTelTraceEvent upsert
   */
  export type OTelTraceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * The filter to search for the OTelTraceEvent to update in case it exists.
     */
    where: OTelTraceEventWhereUniqueInput
    /**
     * In case the OTelTraceEvent found by the `where` argument doesn't exist, create a new OTelTraceEvent with this data.
     */
    create: XOR<OTelTraceEventCreateInput, OTelTraceEventUncheckedCreateInput>
    /**
     * In case the OTelTraceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTelTraceEventUpdateInput, OTelTraceEventUncheckedUpdateInput>
  }


  /**
   * OTelTraceEvent delete
   */
  export type OTelTraceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceEvent to delete.
     */
    where: OTelTraceEventWhereUniqueInput
  }


  /**
   * OTelTraceEvent deleteMany
   */
  export type OTelTraceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceEvents to delete
     */
    where?: OTelTraceEventWhereInput
  }


  /**
   * OTelTraceEvent.attributes
   */
  export type OTelTraceEvent$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    cursor?: OTelTraceAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceEvent without action
   */
  export type OTelTraceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceEvent
     */
    select?: OTelTraceEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceEventInclude<ExtArgs> | null
  }



  /**
   * Model OTelTraceLink
   */

  export type AggregateOTelTraceLink = {
    _count: OTelTraceLinkCountAggregateOutputType | null
    _avg: OTelTraceLinkAvgAggregateOutputType | null
    _sum: OTelTraceLinkSumAggregateOutputType | null
    _min: OTelTraceLinkMinAggregateOutputType | null
    _max: OTelTraceLinkMaxAggregateOutputType | null
  }

  export type OTelTraceLinkAvgAggregateOutputType = {
    flags: number | null
  }

  export type OTelTraceLinkSumAggregateOutputType = {
    flags: number | null
  }

  export type OTelTraceLinkMinAggregateOutputType = {
    id: string | null
    traceId: string | null
    spanId: string | null
    traceState: string | null
    flags: number | null
    linkedSpanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceLinkMaxAggregateOutputType = {
    id: string | null
    traceId: string | null
    spanId: string | null
    traceState: string | null
    flags: number | null
    linkedSpanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceLinkCountAggregateOutputType = {
    id: number
    traceId: number
    spanId: number
    traceState: number
    flags: number
    linkedSpanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceLinkAvgAggregateInputType = {
    flags?: true
  }

  export type OTelTraceLinkSumAggregateInputType = {
    flags?: true
  }

  export type OTelTraceLinkMinAggregateInputType = {
    id?: true
    traceId?: true
    spanId?: true
    traceState?: true
    flags?: true
    linkedSpanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceLinkMaxAggregateInputType = {
    id?: true
    traceId?: true
    spanId?: true
    traceState?: true
    flags?: true
    linkedSpanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceLinkCountAggregateInputType = {
    id?: true
    traceId?: true
    spanId?: true
    traceState?: true
    flags?: true
    linkedSpanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceLink to aggregate.
     */
    where?: OTelTraceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceLinks to fetch.
     */
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceLinks
    **/
    _count?: true | OTelTraceLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTelTraceLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTelTraceLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceLinkMaxAggregateInputType
  }

  export type GetOTelTraceLinkAggregateType<T extends OTelTraceLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceLink[P]>
      : GetScalarType<T[P], AggregateOTelTraceLink[P]>
  }




  export type OTelTraceLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceLinkWhereInput
    orderBy?: OTelTraceLinkOrderByWithAggregationInput | OTelTraceLinkOrderByWithAggregationInput[]
    by: OTelTraceLinkScalarFieldEnum[] | OTelTraceLinkScalarFieldEnum
    having?: OTelTraceLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceLinkCountAggregateInputType | true
    _avg?: OTelTraceLinkAvgAggregateInputType
    _sum?: OTelTraceLinkSumAggregateInputType
    _min?: OTelTraceLinkMinAggregateInputType
    _max?: OTelTraceLinkMaxAggregateInputType
  }

  export type OTelTraceLinkGroupByOutputType = {
    id: string
    traceId: string
    spanId: string
    traceState: string | null
    flags: number | null
    linkedSpanId: string
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceLinkCountAggregateOutputType | null
    _avg: OTelTraceLinkAvgAggregateOutputType | null
    _sum: OTelTraceLinkSumAggregateOutputType | null
    _min: OTelTraceLinkMinAggregateOutputType | null
    _max: OTelTraceLinkMaxAggregateOutputType | null
  }

  type GetOTelTraceLinkGroupByPayload<T extends OTelTraceLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceLinkGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceLinkGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    traceId?: boolean
    spanId?: boolean
    traceState?: boolean
    flags?: boolean
    linkedSpanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | OTelTraceLink$attributesArgs<ExtArgs>
    span?: boolean | OTelTraceSpanDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceLink"]>

  export type OTelTraceLinkSelectScalar = {
    id?: boolean
    traceId?: boolean
    spanId?: boolean
    traceState?: boolean
    flags?: boolean
    linkedSpanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | OTelTraceLink$attributesArgs<ExtArgs>
    span?: boolean | OTelTraceSpanDefaultArgs<ExtArgs>
    _count?: boolean | OTelTraceLinkCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceLink"
    objects: {
      attributes: Prisma.$OTelTraceAttributePayload<ExtArgs>[]
      span: Prisma.$OTelTraceSpanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      traceId: string
      spanId: string
      traceState: string | null
      flags: number | null
      linkedSpanId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceLink"]>
    composites: {}
  }


  type OTelTraceLinkGetPayload<S extends boolean | null | undefined | OTelTraceLinkDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceLinkPayload, S>

  type OTelTraceLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceLinkFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceLinkCountAggregateInputType | true
    }

  export interface OTelTraceLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceLink'], meta: { name: 'OTelTraceLink' } }
    /**
     * Find zero or one OTelTraceLink that matches the filter.
     * @param {OTelTraceLinkFindUniqueArgs} args - Arguments to find a OTelTraceLink
     * @example
     * // Get one OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceLinkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceLink that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceLinkFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceLink
     * @example
     * // Get one OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceLinkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceLinkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkFindFirstArgs} args - Arguments to find a OTelTraceLink
     * @example
     * // Get one OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceLinkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceLinkFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkFindFirstOrThrowArgs} args - Arguments to find a OTelTraceLink
     * @example
     * // Get one OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceLinkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceLinkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceLinks
     * const oTelTraceLinks = await prisma.oTelTraceLink.findMany()
     * 
     * // Get first 10 OTelTraceLinks
     * const oTelTraceLinks = await prisma.oTelTraceLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceLinkWithIdOnly = await prisma.oTelTraceLink.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceLinkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceLinkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OTelTraceLink.
     * @param {OTelTraceLinkCreateArgs} args - Arguments to create a OTelTraceLink.
     * @example
     * // Create one OTelTraceLink
     * const OTelTraceLink = await prisma.oTelTraceLink.create({
     *   data: {
     *     // ... data to create a OTelTraceLink
     *   }
     * })
     * 
    **/
    create<T extends OTelTraceLinkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkCreateArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OTelTraceLink.
     * @param {OTelTraceLinkDeleteArgs} args - Arguments to delete one OTelTraceLink.
     * @example
     * // Delete one OTelTraceLink
     * const OTelTraceLink = await prisma.oTelTraceLink.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceLink
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceLinkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceLink.
     * @param {OTelTraceLinkUpdateArgs} args - Arguments to update one OTelTraceLink.
     * @example
     * // Update one OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceLinkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceLinks.
     * @param {OTelTraceLinkDeleteManyArgs} args - Arguments to filter OTelTraceLinks to delete.
     * @example
     * // Delete a few OTelTraceLinks
     * const { count } = await prisma.oTelTraceLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceLinkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceLinkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceLinks
     * const oTelTraceLink = await prisma.oTelTraceLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceLinkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTelTraceLink.
     * @param {OTelTraceLinkUpsertArgs} args - Arguments to update or create a OTelTraceLink.
     * @example
     * // Update or create a OTelTraceLink
     * const oTelTraceLink = await prisma.oTelTraceLink.upsert({
     *   create: {
     *     // ... data to create a OTelTraceLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTelTraceLink we want to update
     *   }
     * })
    **/
    upsert<T extends OTelTraceLinkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceLinkUpsertArgs<ExtArgs>>
    ): Prisma__OTelTraceLinkClient<$Result.GetResult<Prisma.$OTelTraceLinkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OTelTraceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkCountArgs} args - Arguments to filter OTelTraceLinks to count.
     * @example
     * // Count the number of OTelTraceLinks
     * const count = await prisma.oTelTraceLink.count({
     *   where: {
     *     // ... the filter for the OTelTraceLinks we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceLinkCountArgs>(
      args?: Subset<T, OTelTraceLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceLinkAggregateArgs>(args: Subset<T, OTelTraceLinkAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceLinkAggregateType<T>>

    /**
     * Group by OTelTraceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceLinkGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceLink model
   */
  readonly fields: OTelTraceLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributes<T extends OTelTraceLink$attributesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceLink$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    span<T extends OTelTraceSpanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceSpanDefaultArgs<ExtArgs>>): Prisma__OTelTraceSpanClient<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceLink model
   */ 
  interface OTelTraceLinkFieldRefs {
    readonly id: FieldRef<"OTelTraceLink", 'String'>
    readonly traceId: FieldRef<"OTelTraceLink", 'String'>
    readonly spanId: FieldRef<"OTelTraceLink", 'String'>
    readonly traceState: FieldRef<"OTelTraceLink", 'String'>
    readonly flags: FieldRef<"OTelTraceLink", 'Int'>
    readonly linkedSpanId: FieldRef<"OTelTraceLink", 'String'>
    readonly createdAt: FieldRef<"OTelTraceLink", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceLink", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceLink findUnique
   */
  export type OTelTraceLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceLink to fetch.
     */
    where: OTelTraceLinkWhereUniqueInput
  }


  /**
   * OTelTraceLink findUniqueOrThrow
   */
  export type OTelTraceLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceLink to fetch.
     */
    where: OTelTraceLinkWhereUniqueInput
  }


  /**
   * OTelTraceLink findFirst
   */
  export type OTelTraceLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceLink to fetch.
     */
    where?: OTelTraceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceLinks to fetch.
     */
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceLinks.
     */
    cursor?: OTelTraceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceLinks.
     */
    distinct?: OTelTraceLinkScalarFieldEnum | OTelTraceLinkScalarFieldEnum[]
  }


  /**
   * OTelTraceLink findFirstOrThrow
   */
  export type OTelTraceLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceLink to fetch.
     */
    where?: OTelTraceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceLinks to fetch.
     */
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceLinks.
     */
    cursor?: OTelTraceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceLinks.
     */
    distinct?: OTelTraceLinkScalarFieldEnum | OTelTraceLinkScalarFieldEnum[]
  }


  /**
   * OTelTraceLink findMany
   */
  export type OTelTraceLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceLinks to fetch.
     */
    where?: OTelTraceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceLinks to fetch.
     */
    orderBy?: OTelTraceLinkOrderByWithRelationInput | OTelTraceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceLinks.
     */
    cursor?: OTelTraceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceLinks.
     */
    skip?: number
    distinct?: OTelTraceLinkScalarFieldEnum | OTelTraceLinkScalarFieldEnum[]
  }


  /**
   * OTelTraceLink create
   */
  export type OTelTraceLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a OTelTraceLink.
     */
    data: XOR<OTelTraceLinkCreateInput, OTelTraceLinkUncheckedCreateInput>
  }


  /**
   * OTelTraceLink update
   */
  export type OTelTraceLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceLink.
     */
    data: XOR<OTelTraceLinkUpdateInput, OTelTraceLinkUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceLink to update.
     */
    where: OTelTraceLinkWhereUniqueInput
  }


  /**
   * OTelTraceLink updateMany
   */
  export type OTelTraceLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceLinks.
     */
    data: XOR<OTelTraceLinkUpdateManyMutationInput, OTelTraceLinkUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceLinks to update
     */
    where?: OTelTraceLinkWhereInput
  }


  /**
   * OTelTraceLink upsert
   */
  export type OTelTraceLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the OTelTraceLink to update in case it exists.
     */
    where: OTelTraceLinkWhereUniqueInput
    /**
     * In case the OTelTraceLink found by the `where` argument doesn't exist, create a new OTelTraceLink with this data.
     */
    create: XOR<OTelTraceLinkCreateInput, OTelTraceLinkUncheckedCreateInput>
    /**
     * In case the OTelTraceLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTelTraceLinkUpdateInput, OTelTraceLinkUncheckedUpdateInput>
  }


  /**
   * OTelTraceLink delete
   */
  export type OTelTraceLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceLink to delete.
     */
    where: OTelTraceLinkWhereUniqueInput
  }


  /**
   * OTelTraceLink deleteMany
   */
  export type OTelTraceLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceLinks to delete
     */
    where?: OTelTraceLinkWhereInput
  }


  /**
   * OTelTraceLink.attributes
   */
  export type OTelTraceLink$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    cursor?: OTelTraceAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceLink without action
   */
  export type OTelTraceLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceLink
     */
    select?: OTelTraceLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceLinkInclude<ExtArgs> | null
  }



  /**
   * Model OTelTraceScope
   */

  export type AggregateOTelTraceScope = {
    _count: OTelTraceScopeCountAggregateOutputType | null
    _min: OTelTraceScopeMinAggregateOutputType | null
    _max: OTelTraceScopeMaxAggregateOutputType | null
  }

  export type OTelTraceScopeMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceScopeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTelTraceScopeCountAggregateOutputType = {
    id: number
    name: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTelTraceScopeMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceScopeMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTelTraceScopeCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OTelTraceScopeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceScope to aggregate.
     */
    where?: OTelTraceScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceScopes to fetch.
     */
    orderBy?: OTelTraceScopeOrderByWithRelationInput | OTelTraceScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTelTraceScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTelTraceScopes
    **/
    _count?: true | OTelTraceScopeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTelTraceScopeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTelTraceScopeMaxAggregateInputType
  }

  export type GetOTelTraceScopeAggregateType<T extends OTelTraceScopeAggregateArgs> = {
        [P in keyof T & keyof AggregateOTelTraceScope]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTelTraceScope[P]>
      : GetScalarType<T[P], AggregateOTelTraceScope[P]>
  }




  export type OTelTraceScopeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTelTraceScopeWhereInput
    orderBy?: OTelTraceScopeOrderByWithAggregationInput | OTelTraceScopeOrderByWithAggregationInput[]
    by: OTelTraceScopeScalarFieldEnum[] | OTelTraceScopeScalarFieldEnum
    having?: OTelTraceScopeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTelTraceScopeCountAggregateInputType | true
    _min?: OTelTraceScopeMinAggregateInputType
    _max?: OTelTraceScopeMaxAggregateInputType
  }

  export type OTelTraceScopeGroupByOutputType = {
    id: string
    name: string
    version: string | null
    createdAt: Date
    updatedAt: Date
    _count: OTelTraceScopeCountAggregateOutputType | null
    _min: OTelTraceScopeMinAggregateOutputType | null
    _max: OTelTraceScopeMaxAggregateOutputType | null
  }

  type GetOTelTraceScopeGroupByPayload<T extends OTelTraceScopeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTelTraceScopeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTelTraceScopeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTelTraceScopeGroupByOutputType[P]>
            : GetScalarType<T[P], OTelTraceScopeGroupByOutputType[P]>
        }
      >
    >


  export type OTelTraceScopeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spans?: boolean | OTelTraceScope$spansArgs<ExtArgs>
    attributes?: boolean | OTelTraceScope$attributesArgs<ExtArgs>
    _count?: boolean | OTelTraceScopeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTelTraceScope"]>

  export type OTelTraceScopeSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTelTraceScopeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spans?: boolean | OTelTraceScope$spansArgs<ExtArgs>
    attributes?: boolean | OTelTraceScope$attributesArgs<ExtArgs>
    _count?: boolean | OTelTraceScopeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OTelTraceScopePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTelTraceScope"
    objects: {
      spans: Prisma.$OTelTraceSpanPayload<ExtArgs>[]
      attributes: Prisma.$OTelTraceAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oTelTraceScope"]>
    composites: {}
  }


  type OTelTraceScopeGetPayload<S extends boolean | null | undefined | OTelTraceScopeDefaultArgs> = $Result.GetResult<Prisma.$OTelTraceScopePayload, S>

  type OTelTraceScopeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTelTraceScopeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OTelTraceScopeCountAggregateInputType | true
    }

  export interface OTelTraceScopeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTelTraceScope'], meta: { name: 'OTelTraceScope' } }
    /**
     * Find zero or one OTelTraceScope that matches the filter.
     * @param {OTelTraceScopeFindUniqueArgs} args - Arguments to find a OTelTraceScope
     * @example
     * // Get one OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OTelTraceScopeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeFindUniqueArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OTelTraceScope that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OTelTraceScopeFindUniqueOrThrowArgs} args - Arguments to find a OTelTraceScope
     * @example
     * // Get one OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OTelTraceScopeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceScopeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OTelTraceScope that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeFindFirstArgs} args - Arguments to find a OTelTraceScope
     * @example
     * // Get one OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OTelTraceScopeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceScopeFindFirstArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OTelTraceScope that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeFindFirstOrThrowArgs} args - Arguments to find a OTelTraceScope
     * @example
     * // Get one OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OTelTraceScopeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceScopeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OTelTraceScopes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTelTraceScopes
     * const oTelTraceScopes = await prisma.oTelTraceScope.findMany()
     * 
     * // Get first 10 OTelTraceScopes
     * const oTelTraceScopes = await prisma.oTelTraceScope.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTelTraceScopeWithIdOnly = await prisma.oTelTraceScope.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OTelTraceScopeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceScopeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OTelTraceScope.
     * @param {OTelTraceScopeCreateArgs} args - Arguments to create a OTelTraceScope.
     * @example
     * // Create one OTelTraceScope
     * const OTelTraceScope = await prisma.oTelTraceScope.create({
     *   data: {
     *     // ... data to create a OTelTraceScope
     *   }
     * })
     * 
    **/
    create<T extends OTelTraceScopeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeCreateArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a OTelTraceScope.
     * @param {OTelTraceScopeDeleteArgs} args - Arguments to delete one OTelTraceScope.
     * @example
     * // Delete one OTelTraceScope
     * const OTelTraceScope = await prisma.oTelTraceScope.delete({
     *   where: {
     *     // ... filter to delete one OTelTraceScope
     *   }
     * })
     * 
    **/
    delete<T extends OTelTraceScopeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeDeleteArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OTelTraceScope.
     * @param {OTelTraceScopeUpdateArgs} args - Arguments to update one OTelTraceScope.
     * @example
     * // Update one OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OTelTraceScopeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeUpdateArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OTelTraceScopes.
     * @param {OTelTraceScopeDeleteManyArgs} args - Arguments to filter OTelTraceScopes to delete.
     * @example
     * // Delete a few OTelTraceScopes
     * const { count } = await prisma.oTelTraceScope.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OTelTraceScopeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OTelTraceScopeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTelTraceScopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTelTraceScopes
     * const oTelTraceScope = await prisma.oTelTraceScope.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OTelTraceScopeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTelTraceScope.
     * @param {OTelTraceScopeUpsertArgs} args - Arguments to update or create a OTelTraceScope.
     * @example
     * // Update or create a OTelTraceScope
     * const oTelTraceScope = await prisma.oTelTraceScope.upsert({
     *   create: {
     *     // ... data to create a OTelTraceScope
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTelTraceScope we want to update
     *   }
     * })
    **/
    upsert<T extends OTelTraceScopeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OTelTraceScopeUpsertArgs<ExtArgs>>
    ): Prisma__OTelTraceScopeClient<$Result.GetResult<Prisma.$OTelTraceScopePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OTelTraceScopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeCountArgs} args - Arguments to filter OTelTraceScopes to count.
     * @example
     * // Count the number of OTelTraceScopes
     * const count = await prisma.oTelTraceScope.count({
     *   where: {
     *     // ... the filter for the OTelTraceScopes we want to count
     *   }
     * })
    **/
    count<T extends OTelTraceScopeCountArgs>(
      args?: Subset<T, OTelTraceScopeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTelTraceScopeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTelTraceScope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTelTraceScopeAggregateArgs>(args: Subset<T, OTelTraceScopeAggregateArgs>): Prisma.PrismaPromise<GetOTelTraceScopeAggregateType<T>>

    /**
     * Group by OTelTraceScope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTelTraceScopeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTelTraceScopeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTelTraceScopeGroupByArgs['orderBy'] }
        : { orderBy?: OTelTraceScopeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTelTraceScopeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTelTraceScopeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTelTraceScope model
   */
  readonly fields: OTelTraceScopeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTelTraceScope.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTelTraceScopeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    spans<T extends OTelTraceScope$spansArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceScope$spansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceSpanPayload<ExtArgs>, T, 'findMany'> | Null>;

    attributes<T extends OTelTraceScope$attributesArgs<ExtArgs> = {}>(args?: Subset<T, OTelTraceScope$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTelTraceAttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OTelTraceScope model
   */ 
  interface OTelTraceScopeFieldRefs {
    readonly id: FieldRef<"OTelTraceScope", 'String'>
    readonly name: FieldRef<"OTelTraceScope", 'String'>
    readonly version: FieldRef<"OTelTraceScope", 'String'>
    readonly createdAt: FieldRef<"OTelTraceScope", 'DateTime'>
    readonly updatedAt: FieldRef<"OTelTraceScope", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OTelTraceScope findUnique
   */
  export type OTelTraceScopeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceScope to fetch.
     */
    where: OTelTraceScopeWhereUniqueInput
  }


  /**
   * OTelTraceScope findUniqueOrThrow
   */
  export type OTelTraceScopeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceScope to fetch.
     */
    where: OTelTraceScopeWhereUniqueInput
  }


  /**
   * OTelTraceScope findFirst
   */
  export type OTelTraceScopeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceScope to fetch.
     */
    where?: OTelTraceScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceScopes to fetch.
     */
    orderBy?: OTelTraceScopeOrderByWithRelationInput | OTelTraceScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceScopes.
     */
    cursor?: OTelTraceScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceScopes.
     */
    distinct?: OTelTraceScopeScalarFieldEnum | OTelTraceScopeScalarFieldEnum[]
  }


  /**
   * OTelTraceScope findFirstOrThrow
   */
  export type OTelTraceScopeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceScope to fetch.
     */
    where?: OTelTraceScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceScopes to fetch.
     */
    orderBy?: OTelTraceScopeOrderByWithRelationInput | OTelTraceScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTelTraceScopes.
     */
    cursor?: OTelTraceScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTelTraceScopes.
     */
    distinct?: OTelTraceScopeScalarFieldEnum | OTelTraceScopeScalarFieldEnum[]
  }


  /**
   * OTelTraceScope findMany
   */
  export type OTelTraceScopeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter, which OTelTraceScopes to fetch.
     */
    where?: OTelTraceScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTelTraceScopes to fetch.
     */
    orderBy?: OTelTraceScopeOrderByWithRelationInput | OTelTraceScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTelTraceScopes.
     */
    cursor?: OTelTraceScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTelTraceScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTelTraceScopes.
     */
    skip?: number
    distinct?: OTelTraceScopeScalarFieldEnum | OTelTraceScopeScalarFieldEnum[]
  }


  /**
   * OTelTraceScope create
   */
  export type OTelTraceScopeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * The data needed to create a OTelTraceScope.
     */
    data: XOR<OTelTraceScopeCreateInput, OTelTraceScopeUncheckedCreateInput>
  }


  /**
   * OTelTraceScope update
   */
  export type OTelTraceScopeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * The data needed to update a OTelTraceScope.
     */
    data: XOR<OTelTraceScopeUpdateInput, OTelTraceScopeUncheckedUpdateInput>
    /**
     * Choose, which OTelTraceScope to update.
     */
    where: OTelTraceScopeWhereUniqueInput
  }


  /**
   * OTelTraceScope updateMany
   */
  export type OTelTraceScopeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTelTraceScopes.
     */
    data: XOR<OTelTraceScopeUpdateManyMutationInput, OTelTraceScopeUncheckedUpdateManyInput>
    /**
     * Filter which OTelTraceScopes to update
     */
    where?: OTelTraceScopeWhereInput
  }


  /**
   * OTelTraceScope upsert
   */
  export type OTelTraceScopeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * The filter to search for the OTelTraceScope to update in case it exists.
     */
    where: OTelTraceScopeWhereUniqueInput
    /**
     * In case the OTelTraceScope found by the `where` argument doesn't exist, create a new OTelTraceScope with this data.
     */
    create: XOR<OTelTraceScopeCreateInput, OTelTraceScopeUncheckedCreateInput>
    /**
     * In case the OTelTraceScope was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTelTraceScopeUpdateInput, OTelTraceScopeUncheckedUpdateInput>
  }


  /**
   * OTelTraceScope delete
   */
  export type OTelTraceScopeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
    /**
     * Filter which OTelTraceScope to delete.
     */
    where: OTelTraceScopeWhereUniqueInput
  }


  /**
   * OTelTraceScope deleteMany
   */
  export type OTelTraceScopeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTelTraceScopes to delete
     */
    where?: OTelTraceScopeWhereInput
  }


  /**
   * OTelTraceScope.spans
   */
  export type OTelTraceScope$spansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceSpan
     */
    select?: OTelTraceSpanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceSpanInclude<ExtArgs> | null
    where?: OTelTraceSpanWhereInput
    orderBy?: OTelTraceSpanOrderByWithRelationInput | OTelTraceSpanOrderByWithRelationInput[]
    cursor?: OTelTraceSpanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceSpanScalarFieldEnum | OTelTraceSpanScalarFieldEnum[]
  }


  /**
   * OTelTraceScope.attributes
   */
  export type OTelTraceScope$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceAttribute
     */
    select?: OTelTraceAttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceAttributeInclude<ExtArgs> | null
    where?: OTelTraceAttributeWhereInput
    orderBy?: OTelTraceAttributeOrderByWithRelationInput | OTelTraceAttributeOrderByWithRelationInput[]
    cursor?: OTelTraceAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTelTraceAttributeScalarFieldEnum | OTelTraceAttributeScalarFieldEnum[]
  }


  /**
   * OTelTraceScope without action
   */
  export type OTelTraceScopeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTelTraceScope
     */
    select?: OTelTraceScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OTelTraceScopeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConnectionStatusScalarFieldEnum: {
    id: 'id',
    developmentServer: 'developmentServer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectionStatusScalarFieldEnum = (typeof ConnectionStatusScalarFieldEnum)[keyof typeof ConnectionStatusScalarFieldEnum]


  export const MailRendererScalarFieldEnum: {
    id: 'id',
    key: 'key',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MailRendererScalarFieldEnum = (typeof MailRendererScalarFieldEnum)[keyof typeof MailRendererScalarFieldEnum]


  export const MailTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MailTemplateScalarFieldEnum = (typeof MailTemplateScalarFieldEnum)[keyof typeof MailTemplateScalarFieldEnum]


  export const MailTemplateComponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mailTemplateId: 'mailTemplateId',
    propsTemplate: 'propsTemplate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MailTemplateComponentScalarFieldEnum = (typeof MailTemplateComponentScalarFieldEnum)[keyof typeof MailTemplateComponentScalarFieldEnum]


  export const MailSMTPInboxEntryScalarFieldEnum: {
    id: 'id',
    plaintext: 'plaintext',
    html: 'html',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MailSMTPInboxEntryScalarFieldEnum = (typeof MailSMTPInboxEntryScalarFieldEnum)[keyof typeof MailSMTPInboxEntryScalarFieldEnum]


  export const MailAPIInboxEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MailAPIInboxEntryScalarFieldEnum = (typeof MailAPIInboxEntryScalarFieldEnum)[keyof typeof MailAPIInboxEntryScalarFieldEnum]


  export const OTelTraceAttributeScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    key: 'key',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTelTraceAttributeScalarFieldEnum = (typeof OTelTraceAttributeScalarFieldEnum)[keyof typeof OTelTraceAttributeScalarFieldEnum]


  export const OTelTraceResourceScalarFieldEnum: {
    id: 'id',
    attributesHash: 'attributesHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTelTraceResourceScalarFieldEnum = (typeof OTelTraceResourceScalarFieldEnum)[keyof typeof OTelTraceResourceScalarFieldEnum]


  export const OTelTraceSpanScalarFieldEnum: {
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

  export type OTelTraceSpanScalarFieldEnum = (typeof OTelTraceSpanScalarFieldEnum)[keyof typeof OTelTraceSpanScalarFieldEnum]


  export const OTelTraceEventScalarFieldEnum: {
    id: 'id',
    startTimeNano: 'startTimeNano',
    name: 'name',
    spanId: 'spanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTelTraceEventScalarFieldEnum = (typeof OTelTraceEventScalarFieldEnum)[keyof typeof OTelTraceEventScalarFieldEnum]


  export const OTelTraceLinkScalarFieldEnum: {
    id: 'id',
    traceId: 'traceId',
    spanId: 'spanId',
    traceState: 'traceState',
    flags: 'flags',
    linkedSpanId: 'linkedSpanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTelTraceLinkScalarFieldEnum = (typeof OTelTraceLinkScalarFieldEnum)[keyof typeof OTelTraceLinkScalarFieldEnum]


  export const OTelTraceScopeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTelTraceScopeScalarFieldEnum = (typeof OTelTraceScopeScalarFieldEnum)[keyof typeof OTelTraceScopeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ConnectionStatusWhereInput = {
    AND?: ConnectionStatusWhereInput | ConnectionStatusWhereInput[]
    OR?: ConnectionStatusWhereInput[]
    NOT?: ConnectionStatusWhereInput | ConnectionStatusWhereInput[]
    id?: IntFilter<"ConnectionStatus"> | number
    developmentServer?: BoolFilter<"ConnectionStatus"> | boolean
    createdAt?: DateTimeFilter<"ConnectionStatus"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectionStatus"> | Date | string
  }

  export type ConnectionStatusOrderByWithRelationInput = {
    id?: SortOrder
    developmentServer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConnectionStatusWhereInput | ConnectionStatusWhereInput[]
    OR?: ConnectionStatusWhereInput[]
    NOT?: ConnectionStatusWhereInput | ConnectionStatusWhereInput[]
    developmentServer?: BoolFilter<"ConnectionStatus"> | boolean
    createdAt?: DateTimeFilter<"ConnectionStatus"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectionStatus"> | Date | string
  }, "id">

  export type ConnectionStatusOrderByWithAggregationInput = {
    id?: SortOrder
    developmentServer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectionStatusCountOrderByAggregateInput
    _avg?: ConnectionStatusAvgOrderByAggregateInput
    _max?: ConnectionStatusMaxOrderByAggregateInput
    _min?: ConnectionStatusMinOrderByAggregateInput
    _sum?: ConnectionStatusSumOrderByAggregateInput
  }

  export type ConnectionStatusScalarWhereWithAggregatesInput = {
    AND?: ConnectionStatusScalarWhereWithAggregatesInput | ConnectionStatusScalarWhereWithAggregatesInput[]
    OR?: ConnectionStatusScalarWhereWithAggregatesInput[]
    NOT?: ConnectionStatusScalarWhereWithAggregatesInput | ConnectionStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConnectionStatus"> | number
    developmentServer?: BoolWithAggregatesFilter<"ConnectionStatus"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ConnectionStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConnectionStatus"> | Date | string
  }

  export type MailRendererWhereInput = {
    AND?: MailRendererWhereInput | MailRendererWhereInput[]
    OR?: MailRendererWhereInput[]
    NOT?: MailRendererWhereInput | MailRendererWhereInput[]
    id?: StringFilter<"MailRenderer"> | string
    key?: StringFilter<"MailRenderer"> | string
    isDefault?: BoolFilter<"MailRenderer"> | boolean
    createdAt?: DateTimeFilter<"MailRenderer"> | Date | string
    updatedAt?: DateTimeFilter<"MailRenderer"> | Date | string
  }

  export type MailRendererOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailRendererWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: MailRendererWhereInput | MailRendererWhereInput[]
    OR?: MailRendererWhereInput[]
    NOT?: MailRendererWhereInput | MailRendererWhereInput[]
    isDefault?: BoolFilter<"MailRenderer"> | boolean
    createdAt?: DateTimeFilter<"MailRenderer"> | Date | string
    updatedAt?: DateTimeFilter<"MailRenderer"> | Date | string
  }, "id" | "key">

  export type MailRendererOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MailRendererCountOrderByAggregateInput
    _max?: MailRendererMaxOrderByAggregateInput
    _min?: MailRendererMinOrderByAggregateInput
  }

  export type MailRendererScalarWhereWithAggregatesInput = {
    AND?: MailRendererScalarWhereWithAggregatesInput | MailRendererScalarWhereWithAggregatesInput[]
    OR?: MailRendererScalarWhereWithAggregatesInput[]
    NOT?: MailRendererScalarWhereWithAggregatesInput | MailRendererScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailRenderer"> | string
    key?: StringWithAggregatesFilter<"MailRenderer"> | string
    isDefault?: BoolWithAggregatesFilter<"MailRenderer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MailRenderer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailRenderer"> | Date | string
  }

  export type MailTemplateWhereInput = {
    AND?: MailTemplateWhereInput | MailTemplateWhereInput[]
    OR?: MailTemplateWhereInput[]
    NOT?: MailTemplateWhereInput | MailTemplateWhereInput[]
    id?: StringFilter<"MailTemplate"> | string
    name?: StringFilter<"MailTemplate"> | string
    path?: StringFilter<"MailTemplate"> | string
    createdAt?: DateTimeFilter<"MailTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MailTemplate"> | Date | string
    components?: MailTemplateComponentListRelationFilter
  }

  export type MailTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    components?: MailTemplateComponentOrderByRelationAggregateInput
  }

  export type MailTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: MailTemplateWhereInput | MailTemplateWhereInput[]
    OR?: MailTemplateWhereInput[]
    NOT?: MailTemplateWhereInput | MailTemplateWhereInput[]
    name?: StringFilter<"MailTemplate"> | string
    createdAt?: DateTimeFilter<"MailTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MailTemplate"> | Date | string
    components?: MailTemplateComponentListRelationFilter
  }, "id" | "path">

  export type MailTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MailTemplateCountOrderByAggregateInput
    _max?: MailTemplateMaxOrderByAggregateInput
    _min?: MailTemplateMinOrderByAggregateInput
  }

  export type MailTemplateScalarWhereWithAggregatesInput = {
    AND?: MailTemplateScalarWhereWithAggregatesInput | MailTemplateScalarWhereWithAggregatesInput[]
    OR?: MailTemplateScalarWhereWithAggregatesInput[]
    NOT?: MailTemplateScalarWhereWithAggregatesInput | MailTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailTemplate"> | string
    name?: StringWithAggregatesFilter<"MailTemplate"> | string
    path?: StringWithAggregatesFilter<"MailTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MailTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailTemplate"> | Date | string
  }

  export type MailTemplateComponentWhereInput = {
    AND?: MailTemplateComponentWhereInput | MailTemplateComponentWhereInput[]
    OR?: MailTemplateComponentWhereInput[]
    NOT?: MailTemplateComponentWhereInput | MailTemplateComponentWhereInput[]
    id?: StringFilter<"MailTemplateComponent"> | string
    name?: StringFilter<"MailTemplateComponent"> | string
    mailTemplateId?: StringFilter<"MailTemplateComponent"> | string
    propsTemplate?: StringFilter<"MailTemplateComponent"> | string
    createdAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
    updatedAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
    template?: XOR<MailTemplateRelationFilter, MailTemplateWhereInput>
  }

  export type MailTemplateComponentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mailTemplateId?: SortOrder
    propsTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: MailTemplateOrderByWithRelationInput
  }

  export type MailTemplateComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MailTemplateComponentWhereInput | MailTemplateComponentWhereInput[]
    OR?: MailTemplateComponentWhereInput[]
    NOT?: MailTemplateComponentWhereInput | MailTemplateComponentWhereInput[]
    mailTemplateId?: StringFilter<"MailTemplateComponent"> | string
    propsTemplate?: StringFilter<"MailTemplateComponent"> | string
    createdAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
    updatedAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
    template?: XOR<MailTemplateRelationFilter, MailTemplateWhereInput>
  }, "id" | "name">

  export type MailTemplateComponentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mailTemplateId?: SortOrder
    propsTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MailTemplateComponentCountOrderByAggregateInput
    _max?: MailTemplateComponentMaxOrderByAggregateInput
    _min?: MailTemplateComponentMinOrderByAggregateInput
  }

  export type MailTemplateComponentScalarWhereWithAggregatesInput = {
    AND?: MailTemplateComponentScalarWhereWithAggregatesInput | MailTemplateComponentScalarWhereWithAggregatesInput[]
    OR?: MailTemplateComponentScalarWhereWithAggregatesInput[]
    NOT?: MailTemplateComponentScalarWhereWithAggregatesInput | MailTemplateComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailTemplateComponent"> | string
    name?: StringWithAggregatesFilter<"MailTemplateComponent"> | string
    mailTemplateId?: StringWithAggregatesFilter<"MailTemplateComponent"> | string
    propsTemplate?: StringWithAggregatesFilter<"MailTemplateComponent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MailTemplateComponent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailTemplateComponent"> | Date | string
  }

  export type MailSMTPInboxEntryWhereInput = {
    AND?: MailSMTPInboxEntryWhereInput | MailSMTPInboxEntryWhereInput[]
    OR?: MailSMTPInboxEntryWhereInput[]
    NOT?: MailSMTPInboxEntryWhereInput | MailSMTPInboxEntryWhereInput[]
    id?: StringFilter<"MailSMTPInboxEntry"> | string
    plaintext?: StringNullableFilter<"MailSMTPInboxEntry"> | string | null
    html?: StringNullableFilter<"MailSMTPInboxEntry"> | string | null
    createdAt?: DateTimeFilter<"MailSMTPInboxEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MailSMTPInboxEntry"> | Date | string
  }

  export type MailSMTPInboxEntryOrderByWithRelationInput = {
    id?: SortOrder
    plaintext?: SortOrderInput | SortOrder
    html?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailSMTPInboxEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MailSMTPInboxEntryWhereInput | MailSMTPInboxEntryWhereInput[]
    OR?: MailSMTPInboxEntryWhereInput[]
    NOT?: MailSMTPInboxEntryWhereInput | MailSMTPInboxEntryWhereInput[]
    plaintext?: StringNullableFilter<"MailSMTPInboxEntry"> | string | null
    html?: StringNullableFilter<"MailSMTPInboxEntry"> | string | null
    createdAt?: DateTimeFilter<"MailSMTPInboxEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MailSMTPInboxEntry"> | Date | string
  }, "id">

  export type MailSMTPInboxEntryOrderByWithAggregationInput = {
    id?: SortOrder
    plaintext?: SortOrderInput | SortOrder
    html?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MailSMTPInboxEntryCountOrderByAggregateInput
    _max?: MailSMTPInboxEntryMaxOrderByAggregateInput
    _min?: MailSMTPInboxEntryMinOrderByAggregateInput
  }

  export type MailSMTPInboxEntryScalarWhereWithAggregatesInput = {
    AND?: MailSMTPInboxEntryScalarWhereWithAggregatesInput | MailSMTPInboxEntryScalarWhereWithAggregatesInput[]
    OR?: MailSMTPInboxEntryScalarWhereWithAggregatesInput[]
    NOT?: MailSMTPInboxEntryScalarWhereWithAggregatesInput | MailSMTPInboxEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailSMTPInboxEntry"> | string
    plaintext?: StringNullableWithAggregatesFilter<"MailSMTPInboxEntry"> | string | null
    html?: StringNullableWithAggregatesFilter<"MailSMTPInboxEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MailSMTPInboxEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailSMTPInboxEntry"> | Date | string
  }

  export type MailAPIInboxEntryWhereInput = {
    AND?: MailAPIInboxEntryWhereInput | MailAPIInboxEntryWhereInput[]
    OR?: MailAPIInboxEntryWhereInput[]
    NOT?: MailAPIInboxEntryWhereInput | MailAPIInboxEntryWhereInput[]
    id?: StringFilter<"MailAPIInboxEntry"> | string
    createdAt?: DateTimeFilter<"MailAPIInboxEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MailAPIInboxEntry"> | Date | string
  }

  export type MailAPIInboxEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailAPIInboxEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MailAPIInboxEntryWhereInput | MailAPIInboxEntryWhereInput[]
    OR?: MailAPIInboxEntryWhereInput[]
    NOT?: MailAPIInboxEntryWhereInput | MailAPIInboxEntryWhereInput[]
    createdAt?: DateTimeFilter<"MailAPIInboxEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MailAPIInboxEntry"> | Date | string
  }, "id">

  export type MailAPIInboxEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MailAPIInboxEntryCountOrderByAggregateInput
    _max?: MailAPIInboxEntryMaxOrderByAggregateInput
    _min?: MailAPIInboxEntryMinOrderByAggregateInput
  }

  export type MailAPIInboxEntryScalarWhereWithAggregatesInput = {
    AND?: MailAPIInboxEntryScalarWhereWithAggregatesInput | MailAPIInboxEntryScalarWhereWithAggregatesInput[]
    OR?: MailAPIInboxEntryScalarWhereWithAggregatesInput[]
    NOT?: MailAPIInboxEntryScalarWhereWithAggregatesInput | MailAPIInboxEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailAPIInboxEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MailAPIInboxEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailAPIInboxEntry"> | Date | string
  }

  export type OTelTraceAttributeWhereInput = {
    AND?: OTelTraceAttributeWhereInput | OTelTraceAttributeWhereInput[]
    OR?: OTelTraceAttributeWhereInput[]
    NOT?: OTelTraceAttributeWhereInput | OTelTraceAttributeWhereInput[]
    id?: StringFilter<"OTelTraceAttribute"> | string
    hash?: StringFilter<"OTelTraceAttribute"> | string
    key?: StringFilter<"OTelTraceAttribute"> | string
    type?: StringFilter<"OTelTraceAttribute"> | string
    createdAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
    resources?: OTelTraceResourceListRelationFilter
    spans?: OTelTraceSpanListRelationFilter
    events?: OTelTraceEventListRelationFilter
    links?: OTelTraceLinkListRelationFilter
    scopes?: OTelTraceScopeListRelationFilter
  }

  export type OTelTraceAttributeOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    key?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resources?: OTelTraceResourceOrderByRelationAggregateInput
    spans?: OTelTraceSpanOrderByRelationAggregateInput
    events?: OTelTraceEventOrderByRelationAggregateInput
    links?: OTelTraceLinkOrderByRelationAggregateInput
    scopes?: OTelTraceScopeOrderByRelationAggregateInput
  }

  export type OTelTraceAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hash?: string
    AND?: OTelTraceAttributeWhereInput | OTelTraceAttributeWhereInput[]
    OR?: OTelTraceAttributeWhereInput[]
    NOT?: OTelTraceAttributeWhereInput | OTelTraceAttributeWhereInput[]
    key?: StringFilter<"OTelTraceAttribute"> | string
    type?: StringFilter<"OTelTraceAttribute"> | string
    createdAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
    resources?: OTelTraceResourceListRelationFilter
    spans?: OTelTraceSpanListRelationFilter
    events?: OTelTraceEventListRelationFilter
    links?: OTelTraceLinkListRelationFilter
    scopes?: OTelTraceScopeListRelationFilter
  }, "id" | "hash">

  export type OTelTraceAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    key?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceAttributeCountOrderByAggregateInput
    _max?: OTelTraceAttributeMaxOrderByAggregateInput
    _min?: OTelTraceAttributeMinOrderByAggregateInput
  }

  export type OTelTraceAttributeScalarWhereWithAggregatesInput = {
    AND?: OTelTraceAttributeScalarWhereWithAggregatesInput | OTelTraceAttributeScalarWhereWithAggregatesInput[]
    OR?: OTelTraceAttributeScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceAttributeScalarWhereWithAggregatesInput | OTelTraceAttributeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceAttribute"> | string
    hash?: StringWithAggregatesFilter<"OTelTraceAttribute"> | string
    key?: StringWithAggregatesFilter<"OTelTraceAttribute"> | string
    type?: StringWithAggregatesFilter<"OTelTraceAttribute"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceAttribute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceAttribute"> | Date | string
  }

  export type OTelTraceResourceWhereInput = {
    AND?: OTelTraceResourceWhereInput | OTelTraceResourceWhereInput[]
    OR?: OTelTraceResourceWhereInput[]
    NOT?: OTelTraceResourceWhereInput | OTelTraceResourceWhereInput[]
    id?: StringFilter<"OTelTraceResource"> | string
    attributesHash?: StringFilter<"OTelTraceResource"> | string
    createdAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    spans?: OTelTraceSpanListRelationFilter
  }

  export type OTelTraceResourceOrderByWithRelationInput = {
    id?: SortOrder
    attributesHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: OTelTraceAttributeOrderByRelationAggregateInput
    spans?: OTelTraceSpanOrderByRelationAggregateInput
  }

  export type OTelTraceResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attributesHash?: string
    AND?: OTelTraceResourceWhereInput | OTelTraceResourceWhereInput[]
    OR?: OTelTraceResourceWhereInput[]
    NOT?: OTelTraceResourceWhereInput | OTelTraceResourceWhereInput[]
    createdAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    spans?: OTelTraceSpanListRelationFilter
  }, "id" | "attributesHash">

  export type OTelTraceResourceOrderByWithAggregationInput = {
    id?: SortOrder
    attributesHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceResourceCountOrderByAggregateInput
    _max?: OTelTraceResourceMaxOrderByAggregateInput
    _min?: OTelTraceResourceMinOrderByAggregateInput
  }

  export type OTelTraceResourceScalarWhereWithAggregatesInput = {
    AND?: OTelTraceResourceScalarWhereWithAggregatesInput | OTelTraceResourceScalarWhereWithAggregatesInput[]
    OR?: OTelTraceResourceScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceResourceScalarWhereWithAggregatesInput | OTelTraceResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceResource"> | string
    attributesHash?: StringWithAggregatesFilter<"OTelTraceResource"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceResource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceResource"> | Date | string
  }

  export type OTelTraceSpanWhereInput = {
    AND?: OTelTraceSpanWhereInput | OTelTraceSpanWhereInput[]
    OR?: OTelTraceSpanWhereInput[]
    NOT?: OTelTraceSpanWhereInput | OTelTraceSpanWhereInput[]
    id?: StringFilter<"OTelTraceSpan"> | string
    traceId?: StringFilter<"OTelTraceSpan"> | string
    traceState?: StringNullableFilter<"OTelTraceSpan"> | string | null
    spanId?: StringFilter<"OTelTraceSpan"> | string
    parentId?: StringNullableFilter<"OTelTraceSpan"> | string | null
    name?: StringFilter<"OTelTraceSpan"> | string
    flags?: IntNullableFilter<"OTelTraceSpan"> | number | null
    kind?: IntFilter<"OTelTraceSpan"> | number
    startTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    endTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    statusMessage?: StringNullableFilter<"OTelTraceSpan"> | string | null
    statusCode?: IntNullableFilter<"OTelTraceSpan"> | number | null
    scopeId?: StringFilter<"OTelTraceSpan"> | string
    resourceId?: StringFilter<"OTelTraceSpan"> | string
    createdAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    events?: OTelTraceEventListRelationFilter
    links?: OTelTraceLinkListRelationFilter
    scope?: XOR<OTelTraceScopeRelationFilter, OTelTraceScopeWhereInput>
    resource?: XOR<OTelTraceResourceRelationFilter, OTelTraceResourceWhereInput>
  }

  export type OTelTraceSpanOrderByWithRelationInput = {
    id?: SortOrder
    traceId?: SortOrder
    traceState?: SortOrderInput | SortOrder
    spanId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    name?: SortOrder
    flags?: SortOrderInput | SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusMessage?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    scopeId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: OTelTraceAttributeOrderByRelationAggregateInput
    events?: OTelTraceEventOrderByRelationAggregateInput
    links?: OTelTraceLinkOrderByRelationAggregateInput
    scope?: OTelTraceScopeOrderByWithRelationInput
    resource?: OTelTraceResourceOrderByWithRelationInput
  }

  export type OTelTraceSpanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spanId?: string
    AND?: OTelTraceSpanWhereInput | OTelTraceSpanWhereInput[]
    OR?: OTelTraceSpanWhereInput[]
    NOT?: OTelTraceSpanWhereInput | OTelTraceSpanWhereInput[]
    traceId?: StringFilter<"OTelTraceSpan"> | string
    traceState?: StringNullableFilter<"OTelTraceSpan"> | string | null
    parentId?: StringNullableFilter<"OTelTraceSpan"> | string | null
    name?: StringFilter<"OTelTraceSpan"> | string
    flags?: IntNullableFilter<"OTelTraceSpan"> | number | null
    kind?: IntFilter<"OTelTraceSpan"> | number
    startTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    endTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    statusMessage?: StringNullableFilter<"OTelTraceSpan"> | string | null
    statusCode?: IntNullableFilter<"OTelTraceSpan"> | number | null
    scopeId?: StringFilter<"OTelTraceSpan"> | string
    resourceId?: StringFilter<"OTelTraceSpan"> | string
    createdAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    events?: OTelTraceEventListRelationFilter
    links?: OTelTraceLinkListRelationFilter
    scope?: XOR<OTelTraceScopeRelationFilter, OTelTraceScopeWhereInput>
    resource?: XOR<OTelTraceResourceRelationFilter, OTelTraceResourceWhereInput>
  }, "id" | "spanId">

  export type OTelTraceSpanOrderByWithAggregationInput = {
    id?: SortOrder
    traceId?: SortOrder
    traceState?: SortOrderInput | SortOrder
    spanId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    name?: SortOrder
    flags?: SortOrderInput | SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusMessage?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    scopeId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceSpanCountOrderByAggregateInput
    _avg?: OTelTraceSpanAvgOrderByAggregateInput
    _max?: OTelTraceSpanMaxOrderByAggregateInput
    _min?: OTelTraceSpanMinOrderByAggregateInput
    _sum?: OTelTraceSpanSumOrderByAggregateInput
  }

  export type OTelTraceSpanScalarWhereWithAggregatesInput = {
    AND?: OTelTraceSpanScalarWhereWithAggregatesInput | OTelTraceSpanScalarWhereWithAggregatesInput[]
    OR?: OTelTraceSpanScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceSpanScalarWhereWithAggregatesInput | OTelTraceSpanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    traceId?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    traceState?: StringNullableWithAggregatesFilter<"OTelTraceSpan"> | string | null
    spanId?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    parentId?: StringNullableWithAggregatesFilter<"OTelTraceSpan"> | string | null
    name?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    flags?: IntNullableWithAggregatesFilter<"OTelTraceSpan"> | number | null
    kind?: IntWithAggregatesFilter<"OTelTraceSpan"> | number
    startTimeNano?: BigIntWithAggregatesFilter<"OTelTraceSpan"> | bigint | number
    endTimeNano?: BigIntWithAggregatesFilter<"OTelTraceSpan"> | bigint | number
    statusMessage?: StringNullableWithAggregatesFilter<"OTelTraceSpan"> | string | null
    statusCode?: IntNullableWithAggregatesFilter<"OTelTraceSpan"> | number | null
    scopeId?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    resourceId?: StringWithAggregatesFilter<"OTelTraceSpan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceSpan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceSpan"> | Date | string
  }

  export type OTelTraceEventWhereInput = {
    AND?: OTelTraceEventWhereInput | OTelTraceEventWhereInput[]
    OR?: OTelTraceEventWhereInput[]
    NOT?: OTelTraceEventWhereInput | OTelTraceEventWhereInput[]
    id?: StringFilter<"OTelTraceEvent"> | string
    startTimeNano?: BigIntFilter<"OTelTraceEvent"> | bigint | number
    name?: StringFilter<"OTelTraceEvent"> | string
    spanId?: StringFilter<"OTelTraceEvent"> | string
    createdAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    span?: XOR<OTelTraceSpanRelationFilter, OTelTraceSpanWhereInput>
  }

  export type OTelTraceEventOrderByWithRelationInput = {
    id?: SortOrder
    startTimeNano?: SortOrder
    name?: SortOrder
    spanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: OTelTraceAttributeOrderByRelationAggregateInput
    span?: OTelTraceSpanOrderByWithRelationInput
  }

  export type OTelTraceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTelTraceEventWhereInput | OTelTraceEventWhereInput[]
    OR?: OTelTraceEventWhereInput[]
    NOT?: OTelTraceEventWhereInput | OTelTraceEventWhereInput[]
    startTimeNano?: BigIntFilter<"OTelTraceEvent"> | bigint | number
    name?: StringFilter<"OTelTraceEvent"> | string
    spanId?: StringFilter<"OTelTraceEvent"> | string
    createdAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    span?: XOR<OTelTraceSpanRelationFilter, OTelTraceSpanWhereInput>
  }, "id">

  export type OTelTraceEventOrderByWithAggregationInput = {
    id?: SortOrder
    startTimeNano?: SortOrder
    name?: SortOrder
    spanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceEventCountOrderByAggregateInput
    _avg?: OTelTraceEventAvgOrderByAggregateInput
    _max?: OTelTraceEventMaxOrderByAggregateInput
    _min?: OTelTraceEventMinOrderByAggregateInput
    _sum?: OTelTraceEventSumOrderByAggregateInput
  }

  export type OTelTraceEventScalarWhereWithAggregatesInput = {
    AND?: OTelTraceEventScalarWhereWithAggregatesInput | OTelTraceEventScalarWhereWithAggregatesInput[]
    OR?: OTelTraceEventScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceEventScalarWhereWithAggregatesInput | OTelTraceEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceEvent"> | string
    startTimeNano?: BigIntWithAggregatesFilter<"OTelTraceEvent"> | bigint | number
    name?: StringWithAggregatesFilter<"OTelTraceEvent"> | string
    spanId?: StringWithAggregatesFilter<"OTelTraceEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceEvent"> | Date | string
  }

  export type OTelTraceLinkWhereInput = {
    AND?: OTelTraceLinkWhereInput | OTelTraceLinkWhereInput[]
    OR?: OTelTraceLinkWhereInput[]
    NOT?: OTelTraceLinkWhereInput | OTelTraceLinkWhereInput[]
    id?: StringFilter<"OTelTraceLink"> | string
    traceId?: StringFilter<"OTelTraceLink"> | string
    spanId?: StringFilter<"OTelTraceLink"> | string
    traceState?: StringNullableFilter<"OTelTraceLink"> | string | null
    flags?: IntNullableFilter<"OTelTraceLink"> | number | null
    linkedSpanId?: StringFilter<"OTelTraceLink"> | string
    createdAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    span?: XOR<OTelTraceSpanRelationFilter, OTelTraceSpanWhereInput>
  }

  export type OTelTraceLinkOrderByWithRelationInput = {
    id?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    traceState?: SortOrderInput | SortOrder
    flags?: SortOrderInput | SortOrder
    linkedSpanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: OTelTraceAttributeOrderByRelationAggregateInput
    span?: OTelTraceSpanOrderByWithRelationInput
  }

  export type OTelTraceLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTelTraceLinkWhereInput | OTelTraceLinkWhereInput[]
    OR?: OTelTraceLinkWhereInput[]
    NOT?: OTelTraceLinkWhereInput | OTelTraceLinkWhereInput[]
    traceId?: StringFilter<"OTelTraceLink"> | string
    spanId?: StringFilter<"OTelTraceLink"> | string
    traceState?: StringNullableFilter<"OTelTraceLink"> | string | null
    flags?: IntNullableFilter<"OTelTraceLink"> | number | null
    linkedSpanId?: StringFilter<"OTelTraceLink"> | string
    createdAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
    attributes?: OTelTraceAttributeListRelationFilter
    span?: XOR<OTelTraceSpanRelationFilter, OTelTraceSpanWhereInput>
  }, "id">

  export type OTelTraceLinkOrderByWithAggregationInput = {
    id?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    traceState?: SortOrderInput | SortOrder
    flags?: SortOrderInput | SortOrder
    linkedSpanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceLinkCountOrderByAggregateInput
    _avg?: OTelTraceLinkAvgOrderByAggregateInput
    _max?: OTelTraceLinkMaxOrderByAggregateInput
    _min?: OTelTraceLinkMinOrderByAggregateInput
    _sum?: OTelTraceLinkSumOrderByAggregateInput
  }

  export type OTelTraceLinkScalarWhereWithAggregatesInput = {
    AND?: OTelTraceLinkScalarWhereWithAggregatesInput | OTelTraceLinkScalarWhereWithAggregatesInput[]
    OR?: OTelTraceLinkScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceLinkScalarWhereWithAggregatesInput | OTelTraceLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceLink"> | string
    traceId?: StringWithAggregatesFilter<"OTelTraceLink"> | string
    spanId?: StringWithAggregatesFilter<"OTelTraceLink"> | string
    traceState?: StringNullableWithAggregatesFilter<"OTelTraceLink"> | string | null
    flags?: IntNullableWithAggregatesFilter<"OTelTraceLink"> | number | null
    linkedSpanId?: StringWithAggregatesFilter<"OTelTraceLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceLink"> | Date | string
  }

  export type OTelTraceScopeWhereInput = {
    AND?: OTelTraceScopeWhereInput | OTelTraceScopeWhereInput[]
    OR?: OTelTraceScopeWhereInput[]
    NOT?: OTelTraceScopeWhereInput | OTelTraceScopeWhereInput[]
    id?: StringFilter<"OTelTraceScope"> | string
    name?: StringFilter<"OTelTraceScope"> | string
    version?: StringNullableFilter<"OTelTraceScope"> | string | null
    createdAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
    spans?: OTelTraceSpanListRelationFilter
    attributes?: OTelTraceAttributeListRelationFilter
  }

  export type OTelTraceScopeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spans?: OTelTraceSpanOrderByRelationAggregateInput
    attributes?: OTelTraceAttributeOrderByRelationAggregateInput
  }

  export type OTelTraceScopeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_version?: OTelTraceScopeNameVersionCompoundUniqueInput
    AND?: OTelTraceScopeWhereInput | OTelTraceScopeWhereInput[]
    OR?: OTelTraceScopeWhereInput[]
    NOT?: OTelTraceScopeWhereInput | OTelTraceScopeWhereInput[]
    name?: StringFilter<"OTelTraceScope"> | string
    version?: StringNullableFilter<"OTelTraceScope"> | string | null
    createdAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
    spans?: OTelTraceSpanListRelationFilter
    attributes?: OTelTraceAttributeListRelationFilter
  }, "id" | "name_version">

  export type OTelTraceScopeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTelTraceScopeCountOrderByAggregateInput
    _max?: OTelTraceScopeMaxOrderByAggregateInput
    _min?: OTelTraceScopeMinOrderByAggregateInput
  }

  export type OTelTraceScopeScalarWhereWithAggregatesInput = {
    AND?: OTelTraceScopeScalarWhereWithAggregatesInput | OTelTraceScopeScalarWhereWithAggregatesInput[]
    OR?: OTelTraceScopeScalarWhereWithAggregatesInput[]
    NOT?: OTelTraceScopeScalarWhereWithAggregatesInput | OTelTraceScopeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTelTraceScope"> | string
    name?: StringWithAggregatesFilter<"OTelTraceScope"> | string
    version?: StringNullableWithAggregatesFilter<"OTelTraceScope"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OTelTraceScope"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTelTraceScope"> | Date | string
  }

  export type ConnectionStatusCreateInput = {
    developmentServer?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionStatusUncheckedCreateInput = {
    id?: number
    developmentServer?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionStatusUpdateInput = {
    developmentServer?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    developmentServer?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionStatusUpdateManyMutationInput = {
    developmentServer?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    developmentServer?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailRendererCreateInput = {
    id?: string
    key: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailRendererUncheckedCreateInput = {
    id?: string
    key: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailRendererUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailRendererUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailRendererUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailRendererUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateCreateInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: MailTemplateComponentCreateNestedManyWithoutTemplateInput
  }

  export type MailTemplateUncheckedCreateInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: MailTemplateComponentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type MailTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: MailTemplateComponentUpdateManyWithoutTemplateNestedInput
  }

  export type MailTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: MailTemplateComponentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type MailTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateComponentCreateInput = {
    id?: string
    name: string
    propsTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    template: MailTemplateCreateNestedOneWithoutComponentsInput
  }

  export type MailTemplateComponentUncheckedCreateInput = {
    id?: string
    name: string
    mailTemplateId: string
    propsTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailTemplateComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: MailTemplateUpdateOneRequiredWithoutComponentsNestedInput
  }

  export type MailTemplateComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mailTemplateId?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mailTemplateId?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailSMTPInboxEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaintext?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailSMTPInboxEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaintext?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailSMTPInboxEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaintext?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailSMTPInboxEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaintext?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailAPIInboxEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailAPIInboxEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailAPIInboxEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailAPIInboxEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceResourceCreateInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutResourcesInput
    spans?: OTelTraceSpanCreateNestedManyWithoutResourceInput
  }

  export type OTelTraceResourceUncheckedCreateInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutResourcesInput
    spans?: OTelTraceSpanUncheckedCreateNestedManyWithoutResourceInput
  }

  export type OTelTraceResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutResourcesNestedInput
    spans?: OTelTraceSpanUpdateManyWithoutResourceNestedInput
  }

  export type OTelTraceResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutResourcesNestedInput
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type OTelTraceResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceSpanCreateInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkCreateNestedManyWithoutSpanInput
    scope: OTelTraceScopeCreateNestedOneWithoutSpansInput
    resource: OTelTraceResourceCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    scopeId: string
    resourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUpdateManyWithoutSpanNestedInput
    scope?: OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput
    resource?: OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceSpanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceEventCreateInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutEventsInput
    span: OTelTraceSpanCreateNestedOneWithoutEventsInput
  }

  export type OTelTraceEventUncheckedCreateInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    spanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutEventsInput
  }

  export type OTelTraceEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutEventsNestedInput
    span?: OTelTraceSpanUpdateOneRequiredWithoutEventsNestedInput
  }

  export type OTelTraceEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type OTelTraceEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceLinkCreateInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutLinksInput
    span: OTelTraceSpanCreateNestedOneWithoutLinksInput
  }

  export type OTelTraceLinkUncheckedCreateInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    linkedSpanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutLinksInput
  }

  export type OTelTraceLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutLinksNestedInput
    span?: OTelTraceSpanUpdateOneRequiredWithoutLinksNestedInput
  }

  export type OTelTraceLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    linkedSpanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutLinksNestedInput
  }

  export type OTelTraceLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    linkedSpanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceScopeCreateInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanCreateNestedManyWithoutScopeInput
    attributes?: OTelTraceAttributeCreateNestedManyWithoutScopesInput
  }

  export type OTelTraceScopeUncheckedCreateInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanUncheckedCreateNestedManyWithoutScopeInput
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutScopesInput
  }

  export type OTelTraceScopeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUpdateManyWithoutScopeNestedInput
    attributes?: OTelTraceAttributeUpdateManyWithoutScopesNestedInput
  }

  export type OTelTraceScopeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutScopeNestedInput
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutScopesNestedInput
  }

  export type OTelTraceScopeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceScopeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConnectionStatusCountOrderByAggregateInput = {
    id?: SortOrder
    developmentServer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConnectionStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    developmentServer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionStatusMinOrderByAggregateInput = {
    id?: SortOrder
    developmentServer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MailRendererCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailRendererMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailRendererMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MailTemplateComponentListRelationFilter = {
    every?: MailTemplateComponentWhereInput
    some?: MailTemplateComponentWhereInput
    none?: MailTemplateComponentWhereInput
  }

  export type MailTemplateComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MailTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailTemplateRelationFilter = {
    is?: MailTemplateWhereInput
    isNot?: MailTemplateWhereInput
  }

  export type MailTemplateComponentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mailTemplateId?: SortOrder
    propsTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailTemplateComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mailTemplateId?: SortOrder
    propsTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailTemplateComponentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mailTemplateId?: SortOrder
    propsTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MailSMTPInboxEntryCountOrderByAggregateInput = {
    id?: SortOrder
    plaintext?: SortOrder
    html?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailSMTPInboxEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    plaintext?: SortOrder
    html?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailSMTPInboxEntryMinOrderByAggregateInput = {
    id?: SortOrder
    plaintext?: SortOrder
    html?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MailAPIInboxEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailAPIInboxEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailAPIInboxEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceResourceListRelationFilter = {
    every?: OTelTraceResourceWhereInput
    some?: OTelTraceResourceWhereInput
    none?: OTelTraceResourceWhereInput
  }

  export type OTelTraceSpanListRelationFilter = {
    every?: OTelTraceSpanWhereInput
    some?: OTelTraceSpanWhereInput
    none?: OTelTraceSpanWhereInput
  }

  export type OTelTraceEventListRelationFilter = {
    every?: OTelTraceEventWhereInput
    some?: OTelTraceEventWhereInput
    none?: OTelTraceEventWhereInput
  }

  export type OTelTraceLinkListRelationFilter = {
    every?: OTelTraceLinkWhereInput
    some?: OTelTraceLinkWhereInput
    none?: OTelTraceLinkWhereInput
  }

  export type OTelTraceScopeListRelationFilter = {
    every?: OTelTraceScopeWhereInput
    some?: OTelTraceScopeWhereInput
    none?: OTelTraceScopeWhereInput
  }

  export type OTelTraceResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceSpanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceScopeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    key?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    key?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    key?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceAttributeListRelationFilter = {
    every?: OTelTraceAttributeWhereInput
    some?: OTelTraceAttributeWhereInput
    none?: OTelTraceAttributeWhereInput
  }

  export type OTelTraceAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTelTraceResourceCountOrderByAggregateInput = {
    id?: SortOrder
    attributesHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    attributesHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceResourceMinOrderByAggregateInput = {
    id?: SortOrder
    attributesHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type OTelTraceScopeRelationFilter = {
    is?: OTelTraceScopeWhereInput
    isNot?: OTelTraceScopeWhereInput
  }

  export type OTelTraceResourceRelationFilter = {
    is?: OTelTraceResourceWhereInput
    isNot?: OTelTraceResourceWhereInput
  }

  export type OTelTraceSpanCountOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    traceState?: SortOrder
    spanId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    flags?: SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusMessage?: SortOrder
    statusCode?: SortOrder
    scopeId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceSpanAvgOrderByAggregateInput = {
    flags?: SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusCode?: SortOrder
  }

  export type OTelTraceSpanMaxOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    traceState?: SortOrder
    spanId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    flags?: SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusMessage?: SortOrder
    statusCode?: SortOrder
    scopeId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceSpanMinOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    traceState?: SortOrder
    spanId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    flags?: SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusMessage?: SortOrder
    statusCode?: SortOrder
    scopeId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceSpanSumOrderByAggregateInput = {
    flags?: SortOrder
    kind?: SortOrder
    startTimeNano?: SortOrder
    endTimeNano?: SortOrder
    statusCode?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type OTelTraceSpanRelationFilter = {
    is?: OTelTraceSpanWhereInput
    isNot?: OTelTraceSpanWhereInput
  }

  export type OTelTraceEventCountOrderByAggregateInput = {
    id?: SortOrder
    startTimeNano?: SortOrder
    name?: SortOrder
    spanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceEventAvgOrderByAggregateInput = {
    startTimeNano?: SortOrder
  }

  export type OTelTraceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    startTimeNano?: SortOrder
    name?: SortOrder
    spanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceEventMinOrderByAggregateInput = {
    id?: SortOrder
    startTimeNano?: SortOrder
    name?: SortOrder
    spanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceEventSumOrderByAggregateInput = {
    startTimeNano?: SortOrder
  }

  export type OTelTraceLinkCountOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    traceState?: SortOrder
    flags?: SortOrder
    linkedSpanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceLinkAvgOrderByAggregateInput = {
    flags?: SortOrder
  }

  export type OTelTraceLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    traceState?: SortOrder
    flags?: SortOrder
    linkedSpanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceLinkMinOrderByAggregateInput = {
    id?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    traceState?: SortOrder
    flags?: SortOrder
    linkedSpanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceLinkSumOrderByAggregateInput = {
    flags?: SortOrder
  }

  export type OTelTraceScopeNameVersionCompoundUniqueInput = {
    name: string
    version: string
  }

  export type OTelTraceScopeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceScopeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTelTraceScopeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MailTemplateComponentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput> | MailTemplateComponentCreateWithoutTemplateInput[] | MailTemplateComponentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MailTemplateComponentCreateOrConnectWithoutTemplateInput | MailTemplateComponentCreateOrConnectWithoutTemplateInput[]
    connect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
  }

  export type MailTemplateComponentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput> | MailTemplateComponentCreateWithoutTemplateInput[] | MailTemplateComponentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MailTemplateComponentCreateOrConnectWithoutTemplateInput | MailTemplateComponentCreateOrConnectWithoutTemplateInput[]
    connect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
  }

  export type MailTemplateComponentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput> | MailTemplateComponentCreateWithoutTemplateInput[] | MailTemplateComponentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MailTemplateComponentCreateOrConnectWithoutTemplateInput | MailTemplateComponentCreateOrConnectWithoutTemplateInput[]
    upsert?: MailTemplateComponentUpsertWithWhereUniqueWithoutTemplateInput | MailTemplateComponentUpsertWithWhereUniqueWithoutTemplateInput[]
    set?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    disconnect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    delete?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    connect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    update?: MailTemplateComponentUpdateWithWhereUniqueWithoutTemplateInput | MailTemplateComponentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MailTemplateComponentUpdateManyWithWhereWithoutTemplateInput | MailTemplateComponentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MailTemplateComponentScalarWhereInput | MailTemplateComponentScalarWhereInput[]
  }

  export type MailTemplateComponentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput> | MailTemplateComponentCreateWithoutTemplateInput[] | MailTemplateComponentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MailTemplateComponentCreateOrConnectWithoutTemplateInput | MailTemplateComponentCreateOrConnectWithoutTemplateInput[]
    upsert?: MailTemplateComponentUpsertWithWhereUniqueWithoutTemplateInput | MailTemplateComponentUpsertWithWhereUniqueWithoutTemplateInput[]
    set?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    disconnect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    delete?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    connect?: MailTemplateComponentWhereUniqueInput | MailTemplateComponentWhereUniqueInput[]
    update?: MailTemplateComponentUpdateWithWhereUniqueWithoutTemplateInput | MailTemplateComponentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MailTemplateComponentUpdateManyWithWhereWithoutTemplateInput | MailTemplateComponentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MailTemplateComponentScalarWhereInput | MailTemplateComponentScalarWhereInput[]
  }

  export type MailTemplateCreateNestedOneWithoutComponentsInput = {
    create?: XOR<MailTemplateCreateWithoutComponentsInput, MailTemplateUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: MailTemplateCreateOrConnectWithoutComponentsInput
    connect?: MailTemplateWhereUniqueInput
  }

  export type MailTemplateUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: XOR<MailTemplateCreateWithoutComponentsInput, MailTemplateUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: MailTemplateCreateOrConnectWithoutComponentsInput
    upsert?: MailTemplateUpsertWithoutComponentsInput
    connect?: MailTemplateWhereUniqueInput
    update?: XOR<XOR<MailTemplateUpdateToOneWithWhereWithoutComponentsInput, MailTemplateUpdateWithoutComponentsInput>, MailTemplateUncheckedUpdateWithoutComponentsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OTelTraceResourceUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceResourceCreateWithoutAttributesInput, OTelTraceResourceUncheckedCreateWithoutAttributesInput> | OTelTraceResourceCreateWithoutAttributesInput[] | OTelTraceResourceUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceResourceCreateOrConnectWithoutAttributesInput | OTelTraceResourceCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceResourceUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceResourceUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    disconnect?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    delete?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    connect?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    update?: OTelTraceResourceUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceResourceUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceResourceUpdateManyWithWhereWithoutAttributesInput | OTelTraceResourceUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceResourceScalarWhereInput | OTelTraceResourceScalarWhereInput[]
  }

  export type OTelTraceSpanUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutAttributesInput, OTelTraceSpanUncheckedCreateWithoutAttributesInput> | OTelTraceSpanCreateWithoutAttributesInput[] | OTelTraceSpanUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutAttributesInput | OTelTraceSpanCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceSpanUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceSpanUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutAttributesInput | OTelTraceSpanUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceEventUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceEventCreateWithoutAttributesInput, OTelTraceEventUncheckedCreateWithoutAttributesInput> | OTelTraceEventCreateWithoutAttributesInput[] | OTelTraceEventUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutAttributesInput | OTelTraceEventCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceEventUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceEventUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    disconnect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    delete?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    update?: OTelTraceEventUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceEventUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceEventUpdateManyWithWhereWithoutAttributesInput | OTelTraceEventUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
  }

  export type OTelTraceLinkUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceLinkCreateWithoutAttributesInput, OTelTraceLinkUncheckedCreateWithoutAttributesInput> | OTelTraceLinkCreateWithoutAttributesInput[] | OTelTraceLinkUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutAttributesInput | OTelTraceLinkCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceLinkUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceLinkUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    disconnect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    delete?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    update?: OTelTraceLinkUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceLinkUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceLinkUpdateManyWithWhereWithoutAttributesInput | OTelTraceLinkUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
  }

  export type OTelTraceScopeUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceScopeCreateWithoutAttributesInput, OTelTraceScopeUncheckedCreateWithoutAttributesInput> | OTelTraceScopeCreateWithoutAttributesInput[] | OTelTraceScopeUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceScopeCreateOrConnectWithoutAttributesInput | OTelTraceScopeCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceScopeUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceScopeUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    disconnect?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    delete?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    connect?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    update?: OTelTraceScopeUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceScopeUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceScopeUpdateManyWithWhereWithoutAttributesInput | OTelTraceScopeUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceScopeScalarWhereInput | OTelTraceScopeScalarWhereInput[]
  }

  export type OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceResourceCreateWithoutAttributesInput, OTelTraceResourceUncheckedCreateWithoutAttributesInput> | OTelTraceResourceCreateWithoutAttributesInput[] | OTelTraceResourceUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceResourceCreateOrConnectWithoutAttributesInput | OTelTraceResourceCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceResourceUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceResourceUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    disconnect?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    delete?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    connect?: OTelTraceResourceWhereUniqueInput | OTelTraceResourceWhereUniqueInput[]
    update?: OTelTraceResourceUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceResourceUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceResourceUpdateManyWithWhereWithoutAttributesInput | OTelTraceResourceUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceResourceScalarWhereInput | OTelTraceResourceScalarWhereInput[]
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutAttributesInput, OTelTraceSpanUncheckedCreateWithoutAttributesInput> | OTelTraceSpanCreateWithoutAttributesInput[] | OTelTraceSpanUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutAttributesInput | OTelTraceSpanCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceSpanUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceSpanUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutAttributesInput | OTelTraceSpanUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceEventCreateWithoutAttributesInput, OTelTraceEventUncheckedCreateWithoutAttributesInput> | OTelTraceEventCreateWithoutAttributesInput[] | OTelTraceEventUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutAttributesInput | OTelTraceEventCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceEventUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceEventUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    disconnect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    delete?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    update?: OTelTraceEventUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceEventUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceEventUpdateManyWithWhereWithoutAttributesInput | OTelTraceEventUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
  }

  export type OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceLinkCreateWithoutAttributesInput, OTelTraceLinkUncheckedCreateWithoutAttributesInput> | OTelTraceLinkCreateWithoutAttributesInput[] | OTelTraceLinkUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutAttributesInput | OTelTraceLinkCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceLinkUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceLinkUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    disconnect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    delete?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    update?: OTelTraceLinkUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceLinkUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceLinkUpdateManyWithWhereWithoutAttributesInput | OTelTraceLinkUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
  }

  export type OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<OTelTraceScopeCreateWithoutAttributesInput, OTelTraceScopeUncheckedCreateWithoutAttributesInput> | OTelTraceScopeCreateWithoutAttributesInput[] | OTelTraceScopeUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: OTelTraceScopeCreateOrConnectWithoutAttributesInput | OTelTraceScopeCreateOrConnectWithoutAttributesInput[]
    upsert?: OTelTraceScopeUpsertWithWhereUniqueWithoutAttributesInput | OTelTraceScopeUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    disconnect?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    delete?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    connect?: OTelTraceScopeWhereUniqueInput | OTelTraceScopeWhereUniqueInput[]
    update?: OTelTraceScopeUpdateWithWhereUniqueWithoutAttributesInput | OTelTraceScopeUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: OTelTraceScopeUpdateManyWithWhereWithoutAttributesInput | OTelTraceScopeUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: OTelTraceScopeScalarWhereInput | OTelTraceScopeScalarWhereInput[]
  }

  export type OTelTraceAttributeCreateNestedManyWithoutResourcesInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanCreateNestedManyWithoutResourceInput = {
    create?: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput> | OTelTraceSpanCreateWithoutResourceInput[] | OTelTraceSpanUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutResourceInput | OTelTraceSpanCreateOrConnectWithoutResourceInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
  }

  export type OTelTraceAttributeUncheckedCreateNestedManyWithoutResourcesInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput> | OTelTraceSpanCreateWithoutResourceInput[] | OTelTraceSpanUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutResourceInput | OTelTraceSpanCreateOrConnectWithoutResourceInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
  }

  export type OTelTraceAttributeUpdateManyWithoutResourcesNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutResourcesInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutResourcesInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutResourcesInput | OTelTraceAttributeUpdateManyWithWhereWithoutResourcesInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanUpdateManyWithoutResourceNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput> | OTelTraceSpanCreateWithoutResourceInput[] | OTelTraceSpanUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutResourceInput | OTelTraceSpanCreateOrConnectWithoutResourceInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutResourceInput | OTelTraceSpanUpsertWithWhereUniqueWithoutResourceInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutResourceInput | OTelTraceSpanUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutResourceInput | OTelTraceSpanUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutResourcesNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutResourcesInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutResourcesInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutResourcesInput | OTelTraceAttributeUpdateManyWithWhereWithoutResourcesInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput> | OTelTraceSpanCreateWithoutResourceInput[] | OTelTraceSpanUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutResourceInput | OTelTraceSpanCreateOrConnectWithoutResourceInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutResourceInput | OTelTraceSpanUpsertWithWhereUniqueWithoutResourceInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutResourceInput | OTelTraceSpanUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutResourceInput | OTelTraceSpanUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceAttributeCreateNestedManyWithoutSpansInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceEventCreateNestedManyWithoutSpanInput = {
    create?: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput> | OTelTraceEventCreateWithoutSpanInput[] | OTelTraceEventUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutSpanInput | OTelTraceEventCreateOrConnectWithoutSpanInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
  }

  export type OTelTraceLinkCreateNestedManyWithoutSpanInput = {
    create?: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput> | OTelTraceLinkCreateWithoutSpanInput[] | OTelTraceLinkUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutSpanInput | OTelTraceLinkCreateOrConnectWithoutSpanInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
  }

  export type OTelTraceScopeCreateNestedOneWithoutSpansInput = {
    create?: XOR<OTelTraceScopeCreateWithoutSpansInput, OTelTraceScopeUncheckedCreateWithoutSpansInput>
    connectOrCreate?: OTelTraceScopeCreateOrConnectWithoutSpansInput
    connect?: OTelTraceScopeWhereUniqueInput
  }

  export type OTelTraceResourceCreateNestedOneWithoutSpansInput = {
    create?: XOR<OTelTraceResourceCreateWithoutSpansInput, OTelTraceResourceUncheckedCreateWithoutSpansInput>
    connectOrCreate?: OTelTraceResourceCreateOrConnectWithoutSpansInput
    connect?: OTelTraceResourceWhereUniqueInput
  }

  export type OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput = {
    create?: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput> | OTelTraceEventCreateWithoutSpanInput[] | OTelTraceEventUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutSpanInput | OTelTraceEventCreateOrConnectWithoutSpanInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
  }

  export type OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput = {
    create?: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput> | OTelTraceLinkCreateWithoutSpanInput[] | OTelTraceLinkUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutSpanInput | OTelTraceLinkCreateOrConnectWithoutSpanInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type OTelTraceAttributeUpdateManyWithoutSpansNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutSpansInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutSpansInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutSpansInput | OTelTraceAttributeUpdateManyWithWhereWithoutSpansInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceEventUpdateManyWithoutSpanNestedInput = {
    create?: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput> | OTelTraceEventCreateWithoutSpanInput[] | OTelTraceEventUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutSpanInput | OTelTraceEventCreateOrConnectWithoutSpanInput[]
    upsert?: OTelTraceEventUpsertWithWhereUniqueWithoutSpanInput | OTelTraceEventUpsertWithWhereUniqueWithoutSpanInput[]
    set?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    disconnect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    delete?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    update?: OTelTraceEventUpdateWithWhereUniqueWithoutSpanInput | OTelTraceEventUpdateWithWhereUniqueWithoutSpanInput[]
    updateMany?: OTelTraceEventUpdateManyWithWhereWithoutSpanInput | OTelTraceEventUpdateManyWithWhereWithoutSpanInput[]
    deleteMany?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
  }

  export type OTelTraceLinkUpdateManyWithoutSpanNestedInput = {
    create?: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput> | OTelTraceLinkCreateWithoutSpanInput[] | OTelTraceLinkUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutSpanInput | OTelTraceLinkCreateOrConnectWithoutSpanInput[]
    upsert?: OTelTraceLinkUpsertWithWhereUniqueWithoutSpanInput | OTelTraceLinkUpsertWithWhereUniqueWithoutSpanInput[]
    set?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    disconnect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    delete?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    update?: OTelTraceLinkUpdateWithWhereUniqueWithoutSpanInput | OTelTraceLinkUpdateWithWhereUniqueWithoutSpanInput[]
    updateMany?: OTelTraceLinkUpdateManyWithWhereWithoutSpanInput | OTelTraceLinkUpdateManyWithWhereWithoutSpanInput[]
    deleteMany?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
  }

  export type OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput = {
    create?: XOR<OTelTraceScopeCreateWithoutSpansInput, OTelTraceScopeUncheckedCreateWithoutSpansInput>
    connectOrCreate?: OTelTraceScopeCreateOrConnectWithoutSpansInput
    upsert?: OTelTraceScopeUpsertWithoutSpansInput
    connect?: OTelTraceScopeWhereUniqueInput
    update?: XOR<XOR<OTelTraceScopeUpdateToOneWithWhereWithoutSpansInput, OTelTraceScopeUpdateWithoutSpansInput>, OTelTraceScopeUncheckedUpdateWithoutSpansInput>
  }

  export type OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput = {
    create?: XOR<OTelTraceResourceCreateWithoutSpansInput, OTelTraceResourceUncheckedCreateWithoutSpansInput>
    connectOrCreate?: OTelTraceResourceCreateOrConnectWithoutSpansInput
    upsert?: OTelTraceResourceUpsertWithoutSpansInput
    connect?: OTelTraceResourceWhereUniqueInput
    update?: XOR<XOR<OTelTraceResourceUpdateToOneWithWhereWithoutSpansInput, OTelTraceResourceUpdateWithoutSpansInput>, OTelTraceResourceUncheckedUpdateWithoutSpansInput>
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutSpansInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutSpansInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutSpansInput | OTelTraceAttributeUpdateManyWithWhereWithoutSpansInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput = {
    create?: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput> | OTelTraceEventCreateWithoutSpanInput[] | OTelTraceEventUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceEventCreateOrConnectWithoutSpanInput | OTelTraceEventCreateOrConnectWithoutSpanInput[]
    upsert?: OTelTraceEventUpsertWithWhereUniqueWithoutSpanInput | OTelTraceEventUpsertWithWhereUniqueWithoutSpanInput[]
    set?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    disconnect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    delete?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    connect?: OTelTraceEventWhereUniqueInput | OTelTraceEventWhereUniqueInput[]
    update?: OTelTraceEventUpdateWithWhereUniqueWithoutSpanInput | OTelTraceEventUpdateWithWhereUniqueWithoutSpanInput[]
    updateMany?: OTelTraceEventUpdateManyWithWhereWithoutSpanInput | OTelTraceEventUpdateManyWithWhereWithoutSpanInput[]
    deleteMany?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
  }

  export type OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput = {
    create?: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput> | OTelTraceLinkCreateWithoutSpanInput[] | OTelTraceLinkUncheckedCreateWithoutSpanInput[]
    connectOrCreate?: OTelTraceLinkCreateOrConnectWithoutSpanInput | OTelTraceLinkCreateOrConnectWithoutSpanInput[]
    upsert?: OTelTraceLinkUpsertWithWhereUniqueWithoutSpanInput | OTelTraceLinkUpsertWithWhereUniqueWithoutSpanInput[]
    set?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    disconnect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    delete?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    connect?: OTelTraceLinkWhereUniqueInput | OTelTraceLinkWhereUniqueInput[]
    update?: OTelTraceLinkUpdateWithWhereUniqueWithoutSpanInput | OTelTraceLinkUpdateWithWhereUniqueWithoutSpanInput[]
    updateMany?: OTelTraceLinkUpdateManyWithWhereWithoutSpanInput | OTelTraceLinkUpdateManyWithWhereWithoutSpanInput[]
    deleteMany?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
  }

  export type OTelTraceAttributeCreateNestedManyWithoutEventsInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanCreateNestedOneWithoutEventsInput = {
    create?: XOR<OTelTraceSpanCreateWithoutEventsInput, OTelTraceSpanUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutEventsInput
    connect?: OTelTraceSpanWhereUniqueInput
  }

  export type OTelTraceAttributeUncheckedCreateNestedManyWithoutEventsInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceAttributeUpdateManyWithoutEventsNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutEventsInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutEventsInput | OTelTraceAttributeUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutEventsInput, OTelTraceSpanUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutEventsInput
    upsert?: OTelTraceSpanUpsertWithoutEventsInput
    connect?: OTelTraceSpanWhereUniqueInput
    update?: XOR<XOR<OTelTraceSpanUpdateToOneWithWhereWithoutEventsInput, OTelTraceSpanUpdateWithoutEventsInput>, OTelTraceSpanUncheckedUpdateWithoutEventsInput>
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutEventsNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutEventsInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutEventsInput | OTelTraceAttributeUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceAttributeCreateNestedManyWithoutLinksInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanCreateNestedOneWithoutLinksInput = {
    create?: XOR<OTelTraceSpanCreateWithoutLinksInput, OTelTraceSpanUncheckedCreateWithoutLinksInput>
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutLinksInput
    connect?: OTelTraceSpanWhereUniqueInput
  }

  export type OTelTraceAttributeUncheckedCreateNestedManyWithoutLinksInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceAttributeUpdateManyWithoutLinksNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutLinksInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutLinksInput | OTelTraceAttributeUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutLinksInput, OTelTraceSpanUncheckedCreateWithoutLinksInput>
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutLinksInput
    upsert?: OTelTraceSpanUpsertWithoutLinksInput
    connect?: OTelTraceSpanWhereUniqueInput
    update?: XOR<XOR<OTelTraceSpanUpdateToOneWithWhereWithoutLinksInput, OTelTraceSpanUpdateWithoutLinksInput>, OTelTraceSpanUncheckedUpdateWithoutLinksInput>
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutLinksNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutLinksInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutLinksInput | OTelTraceAttributeUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanCreateNestedManyWithoutScopeInput = {
    create?: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput> | OTelTraceSpanCreateWithoutScopeInput[] | OTelTraceSpanUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutScopeInput | OTelTraceSpanCreateOrConnectWithoutScopeInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
  }

  export type OTelTraceAttributeCreateNestedManyWithoutScopesInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanUncheckedCreateNestedManyWithoutScopeInput = {
    create?: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput> | OTelTraceSpanCreateWithoutScopeInput[] | OTelTraceSpanUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutScopeInput | OTelTraceSpanCreateOrConnectWithoutScopeInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
  }

  export type OTelTraceAttributeUncheckedCreateNestedManyWithoutScopesInput = {
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
  }

  export type OTelTraceSpanUpdateManyWithoutScopeNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput> | OTelTraceSpanCreateWithoutScopeInput[] | OTelTraceSpanUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutScopeInput | OTelTraceSpanCreateOrConnectWithoutScopeInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutScopeInput | OTelTraceSpanUpsertWithWhereUniqueWithoutScopeInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutScopeInput | OTelTraceSpanUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutScopeInput | OTelTraceSpanUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceAttributeUpdateManyWithoutScopesNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutScopesInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutScopesInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutScopesInput | OTelTraceAttributeUpdateManyWithWhereWithoutScopesInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutScopeNestedInput = {
    create?: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput> | OTelTraceSpanCreateWithoutScopeInput[] | OTelTraceSpanUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: OTelTraceSpanCreateOrConnectWithoutScopeInput | OTelTraceSpanCreateOrConnectWithoutScopeInput[]
    upsert?: OTelTraceSpanUpsertWithWhereUniqueWithoutScopeInput | OTelTraceSpanUpsertWithWhereUniqueWithoutScopeInput[]
    set?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    disconnect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    delete?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    connect?: OTelTraceSpanWhereUniqueInput | OTelTraceSpanWhereUniqueInput[]
    update?: OTelTraceSpanUpdateWithWhereUniqueWithoutScopeInput | OTelTraceSpanUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: OTelTraceSpanUpdateManyWithWhereWithoutScopeInput | OTelTraceSpanUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutScopesNestedInput = {
    set?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    disconnect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    delete?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    connect?: OTelTraceAttributeWhereUniqueInput | OTelTraceAttributeWhereUniqueInput[]
    update?: OTelTraceAttributeUpdateWithWhereUniqueWithoutScopesInput | OTelTraceAttributeUpdateWithWhereUniqueWithoutScopesInput[]
    updateMany?: OTelTraceAttributeUpdateManyWithWhereWithoutScopesInput | OTelTraceAttributeUpdateManyWithWhereWithoutScopesInput[]
    deleteMany?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type MailTemplateComponentCreateWithoutTemplateInput = {
    id?: string
    name: string
    propsTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailTemplateComponentUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    propsTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailTemplateComponentCreateOrConnectWithoutTemplateInput = {
    where: MailTemplateComponentWhereUniqueInput
    create: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput>
  }

  export type MailTemplateComponentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: MailTemplateComponentWhereUniqueInput
    update: XOR<MailTemplateComponentUpdateWithoutTemplateInput, MailTemplateComponentUncheckedUpdateWithoutTemplateInput>
    create: XOR<MailTemplateComponentCreateWithoutTemplateInput, MailTemplateComponentUncheckedCreateWithoutTemplateInput>
  }

  export type MailTemplateComponentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: MailTemplateComponentWhereUniqueInput
    data: XOR<MailTemplateComponentUpdateWithoutTemplateInput, MailTemplateComponentUncheckedUpdateWithoutTemplateInput>
  }

  export type MailTemplateComponentUpdateManyWithWhereWithoutTemplateInput = {
    where: MailTemplateComponentScalarWhereInput
    data: XOR<MailTemplateComponentUpdateManyMutationInput, MailTemplateComponentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type MailTemplateComponentScalarWhereInput = {
    AND?: MailTemplateComponentScalarWhereInput | MailTemplateComponentScalarWhereInput[]
    OR?: MailTemplateComponentScalarWhereInput[]
    NOT?: MailTemplateComponentScalarWhereInput | MailTemplateComponentScalarWhereInput[]
    id?: StringFilter<"MailTemplateComponent"> | string
    name?: StringFilter<"MailTemplateComponent"> | string
    mailTemplateId?: StringFilter<"MailTemplateComponent"> | string
    propsTemplate?: StringFilter<"MailTemplateComponent"> | string
    createdAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
    updatedAt?: DateTimeFilter<"MailTemplateComponent"> | Date | string
  }

  export type MailTemplateCreateWithoutComponentsInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailTemplateUncheckedCreateWithoutComponentsInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailTemplateCreateOrConnectWithoutComponentsInput = {
    where: MailTemplateWhereUniqueInput
    create: XOR<MailTemplateCreateWithoutComponentsInput, MailTemplateUncheckedCreateWithoutComponentsInput>
  }

  export type MailTemplateUpsertWithoutComponentsInput = {
    update: XOR<MailTemplateUpdateWithoutComponentsInput, MailTemplateUncheckedUpdateWithoutComponentsInput>
    create: XOR<MailTemplateCreateWithoutComponentsInput, MailTemplateUncheckedCreateWithoutComponentsInput>
    where?: MailTemplateWhereInput
  }

  export type MailTemplateUpdateToOneWithWhereWithoutComponentsInput = {
    where?: MailTemplateWhereInput
    data: XOR<MailTemplateUpdateWithoutComponentsInput, MailTemplateUncheckedUpdateWithoutComponentsInput>
  }

  export type MailTemplateUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceResourceCreateWithoutAttributesInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanCreateNestedManyWithoutResourceInput
  }

  export type OTelTraceResourceUncheckedCreateWithoutAttributesInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanUncheckedCreateNestedManyWithoutResourceInput
  }

  export type OTelTraceResourceCreateOrConnectWithoutAttributesInput = {
    where: OTelTraceResourceWhereUniqueInput
    create: XOR<OTelTraceResourceCreateWithoutAttributesInput, OTelTraceResourceUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceResourceUpsertWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceResourceWhereUniqueInput
    update: XOR<OTelTraceResourceUpdateWithoutAttributesInput, OTelTraceResourceUncheckedUpdateWithoutAttributesInput>
    create: XOR<OTelTraceResourceCreateWithoutAttributesInput, OTelTraceResourceUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceResourceUpdateWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceResourceWhereUniqueInput
    data: XOR<OTelTraceResourceUpdateWithoutAttributesInput, OTelTraceResourceUncheckedUpdateWithoutAttributesInput>
  }

  export type OTelTraceResourceUpdateManyWithWhereWithoutAttributesInput = {
    where: OTelTraceResourceScalarWhereInput
    data: XOR<OTelTraceResourceUpdateManyMutationInput, OTelTraceResourceUncheckedUpdateManyWithoutAttributesInput>
  }

  export type OTelTraceResourceScalarWhereInput = {
    AND?: OTelTraceResourceScalarWhereInput | OTelTraceResourceScalarWhereInput[]
    OR?: OTelTraceResourceScalarWhereInput[]
    NOT?: OTelTraceResourceScalarWhereInput | OTelTraceResourceScalarWhereInput[]
    id?: StringFilter<"OTelTraceResource"> | string
    attributesHash?: StringFilter<"OTelTraceResource"> | string
    createdAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceResource"> | Date | string
  }

  export type OTelTraceSpanCreateWithoutAttributesInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OTelTraceEventCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkCreateNestedManyWithoutSpanInput
    scope: OTelTraceScopeCreateNestedOneWithoutSpansInput
    resource: OTelTraceResourceCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateWithoutAttributesInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    scopeId: string
    resourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanCreateOrConnectWithoutAttributesInput = {
    where: OTelTraceSpanWhereUniqueInput
    create: XOR<OTelTraceSpanCreateWithoutAttributesInput, OTelTraceSpanUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceSpanUpsertWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceSpanWhereUniqueInput
    update: XOR<OTelTraceSpanUpdateWithoutAttributesInput, OTelTraceSpanUncheckedUpdateWithoutAttributesInput>
    create: XOR<OTelTraceSpanCreateWithoutAttributesInput, OTelTraceSpanUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceSpanUpdateWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceSpanWhereUniqueInput
    data: XOR<OTelTraceSpanUpdateWithoutAttributesInput, OTelTraceSpanUncheckedUpdateWithoutAttributesInput>
  }

  export type OTelTraceSpanUpdateManyWithWhereWithoutAttributesInput = {
    where: OTelTraceSpanScalarWhereInput
    data: XOR<OTelTraceSpanUpdateManyMutationInput, OTelTraceSpanUncheckedUpdateManyWithoutAttributesInput>
  }

  export type OTelTraceSpanScalarWhereInput = {
    AND?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
    OR?: OTelTraceSpanScalarWhereInput[]
    NOT?: OTelTraceSpanScalarWhereInput | OTelTraceSpanScalarWhereInput[]
    id?: StringFilter<"OTelTraceSpan"> | string
    traceId?: StringFilter<"OTelTraceSpan"> | string
    traceState?: StringNullableFilter<"OTelTraceSpan"> | string | null
    spanId?: StringFilter<"OTelTraceSpan"> | string
    parentId?: StringNullableFilter<"OTelTraceSpan"> | string | null
    name?: StringFilter<"OTelTraceSpan"> | string
    flags?: IntNullableFilter<"OTelTraceSpan"> | number | null
    kind?: IntFilter<"OTelTraceSpan"> | number
    startTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    endTimeNano?: BigIntFilter<"OTelTraceSpan"> | bigint | number
    statusMessage?: StringNullableFilter<"OTelTraceSpan"> | string | null
    statusCode?: IntNullableFilter<"OTelTraceSpan"> | number | null
    scopeId?: StringFilter<"OTelTraceSpan"> | string
    resourceId?: StringFilter<"OTelTraceSpan"> | string
    createdAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceSpan"> | Date | string
  }

  export type OTelTraceEventCreateWithoutAttributesInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    span: OTelTraceSpanCreateNestedOneWithoutEventsInput
  }

  export type OTelTraceEventUncheckedCreateWithoutAttributesInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    spanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTelTraceEventCreateOrConnectWithoutAttributesInput = {
    where: OTelTraceEventWhereUniqueInput
    create: XOR<OTelTraceEventCreateWithoutAttributesInput, OTelTraceEventUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceEventUpsertWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceEventWhereUniqueInput
    update: XOR<OTelTraceEventUpdateWithoutAttributesInput, OTelTraceEventUncheckedUpdateWithoutAttributesInput>
    create: XOR<OTelTraceEventCreateWithoutAttributesInput, OTelTraceEventUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceEventUpdateWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceEventWhereUniqueInput
    data: XOR<OTelTraceEventUpdateWithoutAttributesInput, OTelTraceEventUncheckedUpdateWithoutAttributesInput>
  }

  export type OTelTraceEventUpdateManyWithWhereWithoutAttributesInput = {
    where: OTelTraceEventScalarWhereInput
    data: XOR<OTelTraceEventUpdateManyMutationInput, OTelTraceEventUncheckedUpdateManyWithoutAttributesInput>
  }

  export type OTelTraceEventScalarWhereInput = {
    AND?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
    OR?: OTelTraceEventScalarWhereInput[]
    NOT?: OTelTraceEventScalarWhereInput | OTelTraceEventScalarWhereInput[]
    id?: StringFilter<"OTelTraceEvent"> | string
    startTimeNano?: BigIntFilter<"OTelTraceEvent"> | bigint | number
    name?: StringFilter<"OTelTraceEvent"> | string
    spanId?: StringFilter<"OTelTraceEvent"> | string
    createdAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceEvent"> | Date | string
  }

  export type OTelTraceLinkCreateWithoutAttributesInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    span: OTelTraceSpanCreateNestedOneWithoutLinksInput
  }

  export type OTelTraceLinkUncheckedCreateWithoutAttributesInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    linkedSpanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTelTraceLinkCreateOrConnectWithoutAttributesInput = {
    where: OTelTraceLinkWhereUniqueInput
    create: XOR<OTelTraceLinkCreateWithoutAttributesInput, OTelTraceLinkUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceLinkUpsertWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceLinkWhereUniqueInput
    update: XOR<OTelTraceLinkUpdateWithoutAttributesInput, OTelTraceLinkUncheckedUpdateWithoutAttributesInput>
    create: XOR<OTelTraceLinkCreateWithoutAttributesInput, OTelTraceLinkUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceLinkUpdateWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceLinkWhereUniqueInput
    data: XOR<OTelTraceLinkUpdateWithoutAttributesInput, OTelTraceLinkUncheckedUpdateWithoutAttributesInput>
  }

  export type OTelTraceLinkUpdateManyWithWhereWithoutAttributesInput = {
    where: OTelTraceLinkScalarWhereInput
    data: XOR<OTelTraceLinkUpdateManyMutationInput, OTelTraceLinkUncheckedUpdateManyWithoutAttributesInput>
  }

  export type OTelTraceLinkScalarWhereInput = {
    AND?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
    OR?: OTelTraceLinkScalarWhereInput[]
    NOT?: OTelTraceLinkScalarWhereInput | OTelTraceLinkScalarWhereInput[]
    id?: StringFilter<"OTelTraceLink"> | string
    traceId?: StringFilter<"OTelTraceLink"> | string
    spanId?: StringFilter<"OTelTraceLink"> | string
    traceState?: StringNullableFilter<"OTelTraceLink"> | string | null
    flags?: IntNullableFilter<"OTelTraceLink"> | number | null
    linkedSpanId?: StringFilter<"OTelTraceLink"> | string
    createdAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceLink"> | Date | string
  }

  export type OTelTraceScopeCreateWithoutAttributesInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanCreateNestedManyWithoutScopeInput
  }

  export type OTelTraceScopeUncheckedCreateWithoutAttributesInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spans?: OTelTraceSpanUncheckedCreateNestedManyWithoutScopeInput
  }

  export type OTelTraceScopeCreateOrConnectWithoutAttributesInput = {
    where: OTelTraceScopeWhereUniqueInput
    create: XOR<OTelTraceScopeCreateWithoutAttributesInput, OTelTraceScopeUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceScopeUpsertWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceScopeWhereUniqueInput
    update: XOR<OTelTraceScopeUpdateWithoutAttributesInput, OTelTraceScopeUncheckedUpdateWithoutAttributesInput>
    create: XOR<OTelTraceScopeCreateWithoutAttributesInput, OTelTraceScopeUncheckedCreateWithoutAttributesInput>
  }

  export type OTelTraceScopeUpdateWithWhereUniqueWithoutAttributesInput = {
    where: OTelTraceScopeWhereUniqueInput
    data: XOR<OTelTraceScopeUpdateWithoutAttributesInput, OTelTraceScopeUncheckedUpdateWithoutAttributesInput>
  }

  export type OTelTraceScopeUpdateManyWithWhereWithoutAttributesInput = {
    where: OTelTraceScopeScalarWhereInput
    data: XOR<OTelTraceScopeUpdateManyMutationInput, OTelTraceScopeUncheckedUpdateManyWithoutAttributesInput>
  }

  export type OTelTraceScopeScalarWhereInput = {
    AND?: OTelTraceScopeScalarWhereInput | OTelTraceScopeScalarWhereInput[]
    OR?: OTelTraceScopeScalarWhereInput[]
    NOT?: OTelTraceScopeScalarWhereInput | OTelTraceScopeScalarWhereInput[]
    id?: StringFilter<"OTelTraceScope"> | string
    name?: StringFilter<"OTelTraceScope"> | string
    version?: StringNullableFilter<"OTelTraceScope"> | string | null
    createdAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceScope"> | Date | string
  }

  export type OTelTraceSpanCreateWithoutResourceInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkCreateNestedManyWithoutSpanInput
    scope: OTelTraceScopeCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateWithoutResourceInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    scopeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanCreateOrConnectWithoutResourceInput = {
    where: OTelTraceSpanWhereUniqueInput
    create: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput>
  }

  export type OTelTraceAttributeUpdateWithWhereUniqueWithoutResourcesInput = {
    where: OTelTraceAttributeWhereUniqueInput
    data: XOR<OTelTraceAttributeUpdateWithoutResourcesInput, OTelTraceAttributeUncheckedUpdateWithoutResourcesInput>
  }

  export type OTelTraceAttributeUpdateManyWithWhereWithoutResourcesInput = {
    where: OTelTraceAttributeScalarWhereInput
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyWithoutResourcesInput>
  }

  export type OTelTraceAttributeScalarWhereInput = {
    AND?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
    OR?: OTelTraceAttributeScalarWhereInput[]
    NOT?: OTelTraceAttributeScalarWhereInput | OTelTraceAttributeScalarWhereInput[]
    id?: StringFilter<"OTelTraceAttribute"> | string
    hash?: StringFilter<"OTelTraceAttribute"> | string
    key?: StringFilter<"OTelTraceAttribute"> | string
    type?: StringFilter<"OTelTraceAttribute"> | string
    createdAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"OTelTraceAttribute"> | Date | string
  }

  export type OTelTraceSpanUpsertWithWhereUniqueWithoutResourceInput = {
    where: OTelTraceSpanWhereUniqueInput
    update: XOR<OTelTraceSpanUpdateWithoutResourceInput, OTelTraceSpanUncheckedUpdateWithoutResourceInput>
    create: XOR<OTelTraceSpanCreateWithoutResourceInput, OTelTraceSpanUncheckedCreateWithoutResourceInput>
  }

  export type OTelTraceSpanUpdateWithWhereUniqueWithoutResourceInput = {
    where: OTelTraceSpanWhereUniqueInput
    data: XOR<OTelTraceSpanUpdateWithoutResourceInput, OTelTraceSpanUncheckedUpdateWithoutResourceInput>
  }

  export type OTelTraceSpanUpdateManyWithWhereWithoutResourceInput = {
    where: OTelTraceSpanScalarWhereInput
    data: XOR<OTelTraceSpanUpdateManyMutationInput, OTelTraceSpanUncheckedUpdateManyWithoutResourceInput>
  }

  export type OTelTraceEventCreateWithoutSpanInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutEventsInput
  }

  export type OTelTraceEventUncheckedCreateWithoutSpanInput = {
    id?: string
    startTimeNano: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutEventsInput
  }

  export type OTelTraceEventCreateOrConnectWithoutSpanInput = {
    where: OTelTraceEventWhereUniqueInput
    create: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput>
  }

  export type OTelTraceLinkCreateWithoutSpanInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutLinksInput
  }

  export type OTelTraceLinkUncheckedCreateWithoutSpanInput = {
    id?: string
    traceId: string
    spanId: string
    traceState?: string | null
    flags?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutLinksInput
  }

  export type OTelTraceLinkCreateOrConnectWithoutSpanInput = {
    where: OTelTraceLinkWhereUniqueInput
    create: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput>
  }

  export type OTelTraceScopeCreateWithoutSpansInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutScopesInput
  }

  export type OTelTraceScopeUncheckedCreateWithoutSpansInput = {
    id?: string
    name: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutScopesInput
  }

  export type OTelTraceScopeCreateOrConnectWithoutSpansInput = {
    where: OTelTraceScopeWhereUniqueInput
    create: XOR<OTelTraceScopeCreateWithoutSpansInput, OTelTraceScopeUncheckedCreateWithoutSpansInput>
  }

  export type OTelTraceResourceCreateWithoutSpansInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutResourcesInput
  }

  export type OTelTraceResourceUncheckedCreateWithoutSpansInput = {
    id?: string
    attributesHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutResourcesInput
  }

  export type OTelTraceResourceCreateOrConnectWithoutSpansInput = {
    where: OTelTraceResourceWhereUniqueInput
    create: XOR<OTelTraceResourceCreateWithoutSpansInput, OTelTraceResourceUncheckedCreateWithoutSpansInput>
  }

  export type OTelTraceAttributeUpdateWithWhereUniqueWithoutSpansInput = {
    where: OTelTraceAttributeWhereUniqueInput
    data: XOR<OTelTraceAttributeUpdateWithoutSpansInput, OTelTraceAttributeUncheckedUpdateWithoutSpansInput>
  }

  export type OTelTraceAttributeUpdateManyWithWhereWithoutSpansInput = {
    where: OTelTraceAttributeScalarWhereInput
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyWithoutSpansInput>
  }

  export type OTelTraceEventUpsertWithWhereUniqueWithoutSpanInput = {
    where: OTelTraceEventWhereUniqueInput
    update: XOR<OTelTraceEventUpdateWithoutSpanInput, OTelTraceEventUncheckedUpdateWithoutSpanInput>
    create: XOR<OTelTraceEventCreateWithoutSpanInput, OTelTraceEventUncheckedCreateWithoutSpanInput>
  }

  export type OTelTraceEventUpdateWithWhereUniqueWithoutSpanInput = {
    where: OTelTraceEventWhereUniqueInput
    data: XOR<OTelTraceEventUpdateWithoutSpanInput, OTelTraceEventUncheckedUpdateWithoutSpanInput>
  }

  export type OTelTraceEventUpdateManyWithWhereWithoutSpanInput = {
    where: OTelTraceEventScalarWhereInput
    data: XOR<OTelTraceEventUpdateManyMutationInput, OTelTraceEventUncheckedUpdateManyWithoutSpanInput>
  }

  export type OTelTraceLinkUpsertWithWhereUniqueWithoutSpanInput = {
    where: OTelTraceLinkWhereUniqueInput
    update: XOR<OTelTraceLinkUpdateWithoutSpanInput, OTelTraceLinkUncheckedUpdateWithoutSpanInput>
    create: XOR<OTelTraceLinkCreateWithoutSpanInput, OTelTraceLinkUncheckedCreateWithoutSpanInput>
  }

  export type OTelTraceLinkUpdateWithWhereUniqueWithoutSpanInput = {
    where: OTelTraceLinkWhereUniqueInput
    data: XOR<OTelTraceLinkUpdateWithoutSpanInput, OTelTraceLinkUncheckedUpdateWithoutSpanInput>
  }

  export type OTelTraceLinkUpdateManyWithWhereWithoutSpanInput = {
    where: OTelTraceLinkScalarWhereInput
    data: XOR<OTelTraceLinkUpdateManyMutationInput, OTelTraceLinkUncheckedUpdateManyWithoutSpanInput>
  }

  export type OTelTraceScopeUpsertWithoutSpansInput = {
    update: XOR<OTelTraceScopeUpdateWithoutSpansInput, OTelTraceScopeUncheckedUpdateWithoutSpansInput>
    create: XOR<OTelTraceScopeCreateWithoutSpansInput, OTelTraceScopeUncheckedCreateWithoutSpansInput>
    where?: OTelTraceScopeWhereInput
  }

  export type OTelTraceScopeUpdateToOneWithWhereWithoutSpansInput = {
    where?: OTelTraceScopeWhereInput
    data: XOR<OTelTraceScopeUpdateWithoutSpansInput, OTelTraceScopeUncheckedUpdateWithoutSpansInput>
  }

  export type OTelTraceScopeUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutScopesNestedInput
  }

  export type OTelTraceScopeUncheckedUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutScopesNestedInput
  }

  export type OTelTraceResourceUpsertWithoutSpansInput = {
    update: XOR<OTelTraceResourceUpdateWithoutSpansInput, OTelTraceResourceUncheckedUpdateWithoutSpansInput>
    create: XOR<OTelTraceResourceCreateWithoutSpansInput, OTelTraceResourceUncheckedCreateWithoutSpansInput>
    where?: OTelTraceResourceWhereInput
  }

  export type OTelTraceResourceUpdateToOneWithWhereWithoutSpansInput = {
    where?: OTelTraceResourceWhereInput
    data: XOR<OTelTraceResourceUpdateWithoutSpansInput, OTelTraceResourceUncheckedUpdateWithoutSpansInput>
  }

  export type OTelTraceResourceUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutResourcesNestedInput
  }

  export type OTelTraceResourceUncheckedUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutResourcesNestedInput
  }

  export type OTelTraceSpanCreateWithoutEventsInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutSpansInput
    links?: OTelTraceLinkCreateNestedManyWithoutSpanInput
    scope: OTelTraceScopeCreateNestedOneWithoutSpansInput
    resource: OTelTraceResourceCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateWithoutEventsInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    scopeId: string
    resourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput
    links?: OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanCreateOrConnectWithoutEventsInput = {
    where: OTelTraceSpanWhereUniqueInput
    create: XOR<OTelTraceSpanCreateWithoutEventsInput, OTelTraceSpanUncheckedCreateWithoutEventsInput>
  }

  export type OTelTraceAttributeUpdateWithWhereUniqueWithoutEventsInput = {
    where: OTelTraceAttributeWhereUniqueInput
    data: XOR<OTelTraceAttributeUpdateWithoutEventsInput, OTelTraceAttributeUncheckedUpdateWithoutEventsInput>
  }

  export type OTelTraceAttributeUpdateManyWithWhereWithoutEventsInput = {
    where: OTelTraceAttributeScalarWhereInput
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyWithoutEventsInput>
  }

  export type OTelTraceSpanUpsertWithoutEventsInput = {
    update: XOR<OTelTraceSpanUpdateWithoutEventsInput, OTelTraceSpanUncheckedUpdateWithoutEventsInput>
    create: XOR<OTelTraceSpanCreateWithoutEventsInput, OTelTraceSpanUncheckedCreateWithoutEventsInput>
    where?: OTelTraceSpanWhereInput
  }

  export type OTelTraceSpanUpdateToOneWithWhereWithoutEventsInput = {
    where?: OTelTraceSpanWhereInput
    data: XOR<OTelTraceSpanUpdateWithoutEventsInput, OTelTraceSpanUncheckedUpdateWithoutEventsInput>
  }

  export type OTelTraceSpanUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutSpansNestedInput
    links?: OTelTraceLinkUpdateManyWithoutSpanNestedInput
    scope?: OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput
    resource?: OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanCreateWithoutLinksInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventCreateNestedManyWithoutSpanInput
    scope: OTelTraceScopeCreateNestedOneWithoutSpansInput
    resource: OTelTraceResourceCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateWithoutLinksInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    scopeId: string
    resourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanCreateOrConnectWithoutLinksInput = {
    where: OTelTraceSpanWhereUniqueInput
    create: XOR<OTelTraceSpanCreateWithoutLinksInput, OTelTraceSpanUncheckedCreateWithoutLinksInput>
  }

  export type OTelTraceAttributeUpdateWithWhereUniqueWithoutLinksInput = {
    where: OTelTraceAttributeWhereUniqueInput
    data: XOR<OTelTraceAttributeUpdateWithoutLinksInput, OTelTraceAttributeUncheckedUpdateWithoutLinksInput>
  }

  export type OTelTraceAttributeUpdateManyWithWhereWithoutLinksInput = {
    where: OTelTraceAttributeScalarWhereInput
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyWithoutLinksInput>
  }

  export type OTelTraceSpanUpsertWithoutLinksInput = {
    update: XOR<OTelTraceSpanUpdateWithoutLinksInput, OTelTraceSpanUncheckedUpdateWithoutLinksInput>
    create: XOR<OTelTraceSpanCreateWithoutLinksInput, OTelTraceSpanUncheckedCreateWithoutLinksInput>
    where?: OTelTraceSpanWhereInput
  }

  export type OTelTraceSpanUpdateToOneWithWhereWithoutLinksInput = {
    where?: OTelTraceSpanWhereInput
    data: XOR<OTelTraceSpanUpdateWithoutLinksInput, OTelTraceSpanUncheckedUpdateWithoutLinksInput>
  }

  export type OTelTraceSpanUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUpdateManyWithoutSpanNestedInput
    scope?: OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput
    resource?: OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanCreateWithoutScopeInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkCreateNestedManyWithoutSpanInput
    resource: OTelTraceResourceCreateNestedOneWithoutSpansInput
  }

  export type OTelTraceSpanUncheckedCreateWithoutScopeInput = {
    id?: string
    traceId: string
    traceState?: string | null
    spanId: string
    parentId?: string | null
    name: string
    flags?: number | null
    kind: number
    startTimeNano: bigint | number
    endTimeNano: bigint | number
    statusMessage?: string | null
    statusCode?: number | null
    resourceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: OTelTraceAttributeUncheckedCreateNestedManyWithoutSpansInput
    events?: OTelTraceEventUncheckedCreateNestedManyWithoutSpanInput
    links?: OTelTraceLinkUncheckedCreateNestedManyWithoutSpanInput
  }

  export type OTelTraceSpanCreateOrConnectWithoutScopeInput = {
    where: OTelTraceSpanWhereUniqueInput
    create: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput>
  }

  export type OTelTraceSpanUpsertWithWhereUniqueWithoutScopeInput = {
    where: OTelTraceSpanWhereUniqueInput
    update: XOR<OTelTraceSpanUpdateWithoutScopeInput, OTelTraceSpanUncheckedUpdateWithoutScopeInput>
    create: XOR<OTelTraceSpanCreateWithoutScopeInput, OTelTraceSpanUncheckedCreateWithoutScopeInput>
  }

  export type OTelTraceSpanUpdateWithWhereUniqueWithoutScopeInput = {
    where: OTelTraceSpanWhereUniqueInput
    data: XOR<OTelTraceSpanUpdateWithoutScopeInput, OTelTraceSpanUncheckedUpdateWithoutScopeInput>
  }

  export type OTelTraceSpanUpdateManyWithWhereWithoutScopeInput = {
    where: OTelTraceSpanScalarWhereInput
    data: XOR<OTelTraceSpanUpdateManyMutationInput, OTelTraceSpanUncheckedUpdateManyWithoutScopeInput>
  }

  export type OTelTraceAttributeUpdateWithWhereUniqueWithoutScopesInput = {
    where: OTelTraceAttributeWhereUniqueInput
    data: XOR<OTelTraceAttributeUpdateWithoutScopesInput, OTelTraceAttributeUncheckedUpdateWithoutScopesInput>
  }

  export type OTelTraceAttributeUpdateManyWithWhereWithoutScopesInput = {
    where: OTelTraceAttributeScalarWhereInput
    data: XOR<OTelTraceAttributeUpdateManyMutationInput, OTelTraceAttributeUncheckedUpdateManyWithoutScopesInput>
  }

  export type MailTemplateComponentUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateComponentUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailTemplateComponentUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propsTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceResourceUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUpdateManyWithoutResourceNestedInput
  }

  export type OTelTraceResourceUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type OTelTraceResourceUncheckedUpdateManyWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    attributesHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceSpanUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OTelTraceEventUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUpdateManyWithoutSpanNestedInput
    scope?: OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput
    resource?: OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceEventUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    span?: OTelTraceSpanUpdateOneRequiredWithoutEventsNestedInput
  }

  export type OTelTraceEventUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceEventUncheckedUpdateManyWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceLinkUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    span?: OTelTraceSpanUpdateOneRequiredWithoutLinksNestedInput
  }

  export type OTelTraceLinkUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    linkedSpanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceLinkUncheckedUpdateManyWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    linkedSpanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceScopeUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUpdateManyWithoutScopeNestedInput
  }

  export type OTelTraceScopeUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutScopeNestedInput
  }

  export type OTelTraceScopeUncheckedUpdateManyWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceSpanUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUpdateManyWithoutSpanNestedInput
    scope?: OTelTraceScopeUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    scopeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutSpansInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceEventUpdateWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutEventsNestedInput
  }

  export type OTelTraceEventUncheckedUpdateWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type OTelTraceEventUncheckedUpdateManyWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceLinkUpdateWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutLinksNestedInput
  }

  export type OTelTraceLinkUncheckedUpdateWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutLinksNestedInput
  }

  export type OTelTraceLinkUncheckedUpdateManyWithoutSpanInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    spanId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput
    scopes?: OTelTraceScopeUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceSpanUpdateWithoutScopeInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUpdateManyWithoutSpanNestedInput
    resource?: OTelTraceResourceUpdateOneRequiredWithoutSpansNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateWithoutScopeInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: OTelTraceAttributeUncheckedUpdateManyWithoutSpansNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutSpanNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutSpanNestedInput
  }

  export type OTelTraceSpanUncheckedUpdateManyWithoutScopeInput = {
    id?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    traceState?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    flags?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: IntFieldUpdateOperationsInput | number
    startTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    endTimeNano?: BigIntFieldUpdateOperationsInput | bigint | number
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    resourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTelTraceAttributeUpdateWithoutScopesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateWithoutScopesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: OTelTraceResourceUncheckedUpdateManyWithoutAttributesNestedInput
    spans?: OTelTraceSpanUncheckedUpdateManyWithoutAttributesNestedInput
    events?: OTelTraceEventUncheckedUpdateManyWithoutAttributesNestedInput
    links?: OTelTraceLinkUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type OTelTraceAttributeUncheckedUpdateManyWithoutScopesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MailTemplateCountOutputTypeDefaultArgs instead
     */
    export type MailTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceAttributeCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceAttributeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceAttributeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceResourceCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceResourceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceResourceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceSpanCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceSpanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceSpanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceEventCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceEventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceEventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceLinkCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceLinkCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceLinkCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceScopeCountOutputTypeDefaultArgs instead
     */
    export type OTelTraceScopeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceScopeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConnectionStatusDefaultArgs instead
     */
    export type ConnectionStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConnectionStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MailRendererDefaultArgs instead
     */
    export type MailRendererArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailRendererDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MailTemplateDefaultArgs instead
     */
    export type MailTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MailTemplateComponentDefaultArgs instead
     */
    export type MailTemplateComponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailTemplateComponentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MailSMTPInboxEntryDefaultArgs instead
     */
    export type MailSMTPInboxEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailSMTPInboxEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MailAPIInboxEntryDefaultArgs instead
     */
    export type MailAPIInboxEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MailAPIInboxEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceAttributeDefaultArgs instead
     */
    export type OTelTraceAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceAttributeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceResourceDefaultArgs instead
     */
    export type OTelTraceResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceResourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceSpanDefaultArgs instead
     */
    export type OTelTraceSpanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceSpanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceEventDefaultArgs instead
     */
    export type OTelTraceEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceLinkDefaultArgs instead
     */
    export type OTelTraceLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTelTraceScopeDefaultArgs instead
     */
    export type OTelTraceScopeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTelTraceScopeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}