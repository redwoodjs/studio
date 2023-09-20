
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
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
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
    ConnectionStatus: 'ConnectionStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'connectionStatus'
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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

  export type ConnectionStatusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type ConnectionStatusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type ConnectionStatusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  export type $ConnectionStatusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ConnectionStatus"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      developmentServer: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connectionStatus"]>
    composites: {}
  }


  type ConnectionStatusGetPayload<S extends boolean | null | undefined | ConnectionStatusDefaultArgs> = $Result.GetResult<Prisma.$ConnectionStatusPayload, S>

  type ConnectionStatusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConnectionStatusFindManyArgs, 'select' | 'include'> & {
      select?: ConnectionStatusCountAggregateInputType | true
    }

  export interface ConnectionStatusDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__ConnectionStatusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type ConnectionStatusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConnectionStatusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionStatuses to delete
     */
    where?: ConnectionStatusWhereInput
  }


  /**
   * ConnectionStatus without action
   */
  export type ConnectionStatusDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionStatus
     */
    select?: ConnectionStatusSelect<ExtArgs> | null
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ConnectionStatusDefaultArgs instead
     */
    export type ConnectionStatusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConnectionStatusDefaultArgs<ExtArgs>

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