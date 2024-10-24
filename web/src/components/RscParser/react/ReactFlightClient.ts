/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  StringDecoder,
  readFinalStringChunk,
  readPartialStringChunk,
} from './ReactFlightClientConfigBrowser'
import { ClientReferenceMetadata } from './ReactFlightClientConfigBundlerWebpack'
import { ImportMetadata } from './ReactFlightImportMetadata'
import { HintCode, HintModel } from './ReactFlightServerConfigDOM'
import { REACT_ELEMENT_TYPE } from './ReactSymbols'

const __DEV__ = process.env.NODE_ENV === 'development'
const enablePostpone = true

export type TextChunk = {
  type: 'text'
  id: string
  value: string
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type ModuleChunk = {
  type: 'module'
  id: string
  value: ImportMetadata
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type ActionChunk = {
  type: 'action'
  id: string
  value: unknown
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type ModelChunk = {
  type: 'model'
  id: string
  value: unknown
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type HintChunk = {
  type: 'hint'
  id: string
  code: string
  value: HintModel<HintCode>
  originalValue: { code: string; model: string }
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type ErrorDevChunk = {
  type: 'errorDev'
  id: string
  error: ErrorWithDigest
  originalValue: { digest: string; message: string; stack: string }
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type ErrorProdChunk = {
  type: 'errorProd'
  id: string
  error: ErrorWithDigest
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type PostponeDevChunk = {
  type: 'postponeDev'
  id: string
  error: Postpone
  originalValue: { reason: string; stack: string }
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type PostponeProdChunk = {
  type: 'postponeProd'
  id: string
  error: Postpone
  originalValue: undefined
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type BufferChunk = {
  type: 'buffer'
  id: string
  value: ArrayBufferView | ArrayBuffer
  originalValue: string
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type DebugInfoChunk = {
  type: 'debugInfo'
  id: string
  value: { name: string }
  originalValue: { name: string }
  startTime: number
  endTime: number
  _response: FlightResponse
}

export type Chunk =
  | TextChunk
  | ModuleChunk
  | HintChunk
  | ModelChunk
  | ActionChunk
  | ErrorDevChunk
  | ErrorProdChunk
  | PostponeDevChunk
  | PostponeProdChunk
  | BufferChunk
  | DebugInfoChunk

type RowParserState = 0 | 1 | 2 | 3 | 4

type UninitializedModel = string

type JSONValue =
  | string
  | number
  | boolean
  | null
  | Array<JSONValue>
  | { [key: string]: JSONValue }

export type FlightResponse = {
  _rowState: RowParserState
  _rowID: number // parts of a row ID parsed so far
  _rowTag: number // 0 indicates that we're currently parsing the row ID
  _rowLength: number // remaining bytes in the row. 0 indicates that we're looking for a newline.
  _buffer: Array<Uint8Array> // chunks received so far as part of this row
  _stringDecoder: StringDecoder
  _chunks: Chunk[]
  _currentStartTime: number
  _currentEndTime: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _fromJSON: (key: string, value: JSONValue) => any
}

export type Reference = {
  $$type: 'reference'
  id: string
  identifier: string
  type: string
}

export function isReference(x: unknown): x is Reference {
  return (
    typeof x === 'object' &&
    x !== null &&
    '$$type' in x &&
    x.$$type === 'reference'
  )
}

function parseModelString(
  response: FlightResponse,
  parentObject: object,
  key: string,
  value: string
) {
  if (value[0] === '$') {
    if (value === '$') {
      // A very common symbol.
      return REACT_ELEMENT_TYPE
    }
    switch (value[1]) {
      case '$': {
        // This was an escaped string value.
        return value.slice(1)
      }
      case 'L': {
        // Lazy node
        const id = parseInt(value.slice(2), 16)
        // const chunk = getChunk(response, id);
        // // We create a React.lazy wrapper around any lazy values.
        // // When passed into React, we'll know how to suspend on this.
        // return createLazyChunkWrapper(chunk);

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: 'L',
          type: 'Lazy node',
        } satisfies Reference
      }
      case '@': {
        // Promise
        const id = parseInt(value.slice(2), 16)
        // const chunk = getChunk(response, id);
        // return chunk;

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: '@',
          type: 'Promise',
        } satisfies Reference
      }
      case 'S': {
        // Symbol
        return Symbol.for(value.slice(2))
      }
      case 'P': {
        // Server Context Provider
        // return getOrCreateServerContext(value.slice(2)).Provider;

        // TODO: Remove this since it's no longer going to be a thing?
        return value
      }
      case 'F': {
        // Server Reference
        const id = parseInt(value.slice(2), 16)
        // const metadata = getOutlinedModel(response, id);
        // return createServerReferenceProxy(response, metadata);

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: 'F',
          type: 'Server Reference',
        } satisfies Reference
      }
      case 'Q': {
        // Map
        const id = parseInt(value.slice(2), 16)
        // const data = getOutlinedModel(response, id);
        // return new Map(data);

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: 'Q',
          type: 'Map',
        } satisfies Reference
      }
      case 'W': {
        // Set
        const id = parseInt(value.slice(2), 16)
        // const data = getOutlinedModel(response, id);
        // return new Set(data);

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: 'W',
          type: 'Set',
        } satisfies Reference
      }
      case 'I': {
        // $Infinity
        return Infinity
      }
      case '-': {
        // $-0 or $-Infinity
        if (value === '$-0') {
          return -0
        } else {
          return -Infinity
        }
      }
      case 'N': {
        // $NaN
        return NaN
      }
      case 'u': {
        // matches "$undefined"
        // Special encoding for `undefined` which can't be serialized as JSON otherwise.
        return undefined
      }
      case 'D': {
        // Date
        return new Date(Date.parse(value.slice(2)))
      }
      case 'n': {
        // BigInt
        return BigInt(value.slice(2))
      }
      default: {
        // We assume that anything else is a reference ID.
        const id = parseInt(value.slice(1), 16)

        // const chunk = getChunk(response, id);
        // switch (chunk.status) {
        //   case RESOLVED_MODEL:
        //     initializeModelChunk(chunk);
        //     break;
        //   case RESOLVED_MODULE:
        //     initializeModuleChunk(chunk);
        //     break;
        // }
        // // The status might have changed after initialization.
        // switch (chunk.status) {
        //   case INITIALIZED:
        //     return chunk.value;
        //   case PENDING:
        //   case BLOCKED:
        //   case CYCLIC:
        //     const parentChunk = initializingChunk;
        //     chunk.then(
        //       createModelResolver(
        //         parentChunk,
        //         parentObject,
        //         key,
        //         chunk.status === CYCLIC,
        //       ),
        //       createModelReject(parentChunk),
        //     );
        //     return null;
        //   default:
        //     throw chunk.reason;
        // }

        return {
          $$type: 'reference',
          id: new Number(id).toString(16),
          identifier: '',
          type: 'Reference',
        } satisfies Reference
      }
    }
  }
  return value
}

function parseModelTuple(
  response: FlightResponse,
  value: { [key: string]: JSONValue } | ReadonlyArray<JSONValue>
) {
  if (!Array.isArray(value)) {
    return value
  }

  if (value.length < 4) {
    return value
  }

  if (value[0] === REACT_ELEMENT_TYPE) {
    // TODO: Consider having React just directly accept these arrays as elements.
    // Or even change the ReactElement type to be an array.
    return createElement(value[1], value[2], value[3])
  }

  return value
}

export function createElement(type: unknown, key: unknown, props: unknown) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type as string,
    key: key as string | number | bigint,
    // ref: null,
    props: props as { [key: string]: unknown },

    // // Record the component responsible for creating this element.
    // _owner: null,
  }
  // if (__DEV__) {
  //   // We don't really need to add any of these but keeping them for good measure.
  //   // Unfortunately, _store is enumerable in jest matchers so for equality to
  //   // work, I need to keep it or make _store non-enumerable in the other file.
  //   element._store = ({}: {
  //     validated?: boolean,
  //   });
  //   Object.defineProperty(element._store, 'validated', {
  //     configurable: false,
  //     enumerable: false,
  //     writable: true,
  //     value: true, // This element has already been validated on the server.
  //   });
  //   Object.defineProperty(element, '_self', {
  //     configurable: false,
  //     enumerable: false,
  //     writable: false,
  //     value: null,
  //   });
  //   Object.defineProperty(element, '_source', {
  //     configurable: false,
  //     enumerable: false,
  //     writable: false,
  //     value: null,
  //   });
  // }
  return element
}

export function isElement(x: unknown): x is ReturnType<typeof createElement> {
  return (
    typeof x === 'object' &&
    x !== null &&
    '$$typeof' in x &&
    x.$$typeof === REACT_ELEMENT_TYPE
  )
}

function resolveModel(
  response: FlightResponse,
  id: number,
  model: UninitializedModel
): void {
  const chunks = response._chunks

  const value = parseModel(response, model)

  // If there is a `value.id` and it ends with #name, then it's an action.
  if (
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string' &&
    /#\w+$/.test(value.id)
  ) {
    chunks.push({
      type: 'action',
      id: new Number(id).toString(16),
      value: value,
      originalValue: model,
      startTime: response._currentStartTime,
      endTime: response._currentEndTime,
      _response: response,
    })
  } else {
    chunks.push({
      type: 'model',
      id: new Number(id).toString(16),
      value: value,
      originalValue: model,
      startTime: response._currentStartTime,
      endTime: response._currentEndTime,
      _response: response,
    })
  }
}

function resolveText(response: FlightResponse, id: number, text: string): void {
  const chunks = response._chunks
  // We assume that we always reference large strings after they've been
  // emitted.

  chunks.push({
    type: 'text',
    id: new Number(id).toString(16),
    value: text,
    originalValue: text,
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolveBuffer(
  response: FlightResponse,
  id: number,
  buffer: ArrayBufferView | ArrayBuffer
): void {
  const chunks = response._chunks
  // We assume that we always reference buffers after they've been emitted.

  chunks.push({
    type: 'buffer',
    id: new Number(id).toString(16),
    value: buffer,
    originalValue: buffer.toString(),
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolveModule(
  response: FlightResponse,
  id: number,
  model: UninitializedModel
): void {
  const chunks = response._chunks

  const clientReferenceMetadata: ClientReferenceMetadata = parseModel(
    response,
    model
  )

  chunks.push({
    type: 'module',
    id: new Number(id).toString(16),
    value: clientReferenceMetadata,
    originalValue: model,
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

type ErrorWithDigest = Error & { digest?: string }
function resolveErrorProd(
  response: FlightResponse,
  id: number,
  digest: string
): void {
  // if (__DEV__) {
  //   // These errors should never make it into a build so we don't need to encode them in codes.json
  //   // eslint-disable-next-line react-internal/prod-error-codes
  //   throw new Error(
  //     "resolveErrorProd should never be called in development mode. Use resolveErrorDev instead. This is a bug in React.",
  //   );
  // }
  const error = new Error(
    'An error occurred in the Server Components render. The specific message is omitted in production' +
      ' builds to avoid leaking sensitive details. A digest property is included on this error instance which' +
      ' may provide additional details about the nature of the error.'
  )
  error.stack = 'Error: ' + error.message
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(error as any).digest = digest
  const errorWithDigest = error as ErrorWithDigest
  const chunks = response._chunks

  chunks.push({
    type: 'errorProd',
    id: new Number(id).toString(16),
    error: errorWithDigest,
    originalValue: digest,
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolveErrorDev(
  response: FlightResponse,
  id: number,
  digest: string,
  message: string,
  stack: string
): void {
  // if (!__DEV__) {
  //   // These errors should never make it into a build so we don't need to encode them in codes.json
  //   // eslint-disable-next-line react-internal/prod-error-codes
  //   throw new Error(
  //     "resolveErrorDev should never be called in production mode. Use resolveErrorProd instead. This is a bug in React.",
  //   );
  // }
  // // eslint-disable-next-line react-internal/prod-error-codes
  const error = new Error(
    message ||
      'An error occurred in the Server Components render but no message was provided'
  )
  error.stack = stack
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(error as any).digest = digest
  const errorWithDigest = error as ErrorWithDigest
  const chunks = response._chunks

  chunks.push({
    type: 'errorDev',
    id: new Number(id).toString(16),
    error: errorWithDigest,
    originalValue: { digest, message, stack },
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

declare class Postpone extends Error {
  $$typeof: symbol
}

const REACT_POSTPONE_TYPE = Symbol.for('react.postpone')

function resolvePostponeProd(response: FlightResponse, id: number): void {
  // if (__DEV__) {
  //   // These errors should never make it into a build so we don't need to encode them in codes.json
  //   // eslint-disable-next-line react-internal/prod-error-codes
  //   throw new Error(
  //     "resolvePostponeProd should never be called in development mode. Use resolvePostponeDev instead. This is a bug in React.",
  //   );
  // }
  const error = new Error(
    'A Server Component was postponed. The reason is omitted in production' +
      ' builds to avoid leaking sensitive details.'
  )
  const postponeInstance = error as Postpone
  postponeInstance.$$typeof = REACT_POSTPONE_TYPE
  postponeInstance.stack = 'Error: ' + error.message
  const chunks = response._chunks

  chunks.push({
    type: 'postponeProd',
    id: new Number(id).toString(16),
    error: postponeInstance,
    originalValue: undefined,
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolvePostponeDev(
  response: FlightResponse,
  id: number,
  reason: string,
  stack: string
): void {
  // if (!__DEV__) {
  //   // These errors should never make it into a build so we don't need to encode them in codes.json
  //   // eslint-disable-next-line react-internal/prod-error-codes
  //   throw new Error(
  //     "resolvePostponeDev should never be called in production mode. Use resolvePostponeProd instead. This is a bug in React.",
  //   );
  // }
  // // eslint-disable-next-line react-internal/prod-error-codes
  const error = new Error(reason || '')
  const postponeInstance = error as Postpone
  postponeInstance.$$typeof = REACT_POSTPONE_TYPE
  postponeInstance.stack = stack
  const chunks = response._chunks

  chunks.push({
    type: 'postponeDev',
    id: new Number(id).toString(16),
    error: postponeInstance,
    originalValue: { reason, stack },
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolveHint<Code extends HintCode>(
  response: FlightResponse,
  id: number,
  code: Code,
  model: UninitializedModel
): void {
  const hintModel: HintModel<Code> = parseModel(response, model)

  const chunks = response._chunks

  chunks.push({
    type: 'hint',
    id: new Number(id).toString(16),
    code: code,
    value: hintModel,
    originalValue: { code, model },
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function resolveDebugInfo(
  response: FlightResponse,
  id: number,
  debugInfo: { name: string }
): void {
  // if (!__DEV__) {
  //   // These errors should never make it into a build so we don't need to encode them in codes.json
  //   // eslint-disable-next-line react-internal/prod-error-codes
  //   throw new Error(
  //     'resolveDebugInfo should never be called in production mode. This is a bug in React.',
  //   );
  // }

  const chunks = response._chunks

  chunks.push({
    type: 'debugInfo',
    id: new Number(id).toString(16),
    value: debugInfo,
    originalValue: debugInfo,
    startTime: response._currentStartTime,
    endTime: response._currentEndTime,
    _response: response,
  })
}

function mergeBuffer(
  buffer: Array<Uint8Array>,
  lastChunk: Uint8Array
): Uint8Array {
  const l = buffer.length
  // Count the bytes we'll need
  let byteLength = lastChunk.length
  for (let i = 0; i < l; i++) {
    byteLength += buffer[i].byteLength
  }
  // Allocate enough contiguous space
  const result = new Uint8Array(byteLength)
  let offset = 0
  // Copy all the buffers into it.
  for (let i = 0; i < l; i++) {
    const chunk = buffer[i]
    result.set(chunk, offset)
    offset += chunk.byteLength
  }
  result.set(lastChunk, offset)
  return result
}

function resolveTypedArray(
  response: FlightResponse,
  id: number,
  buffer: Array<Uint8Array>,
  lastChunk: Uint8Array,
  constructor:
    | Int8ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Int32ArrayConstructor
    | Uint32ArrayConstructor
    | Float32ArrayConstructor
    | Float64ArrayConstructor
    | BigInt64ArrayConstructor
    | BigUint64ArrayConstructor
    | DataViewConstructor,
  bytesPerElement: number
): void {
  // If the view fits into one original buffer, we just reuse that buffer instead of
  // copying it out to a separate copy. This means that it's not always possible to
  // transfer these values to other threads without copying first since they may
  // share array buffer. For this to work, it must also have bytes aligned to a
  // multiple of a size of the type.
  const chunk =
    buffer.length === 0 && lastChunk.byteOffset % bytesPerElement === 0
      ? lastChunk
      : mergeBuffer(buffer, lastChunk)
  // TODO: The transfer protocol of RSC is little-endian. If the client isn't little-endian
  // we should convert it instead. In practice big endian isn't really Web compatible so it's
  // somewhat safe to assume that browsers aren't going to run it, but maybe there's some SSR
  // server that's affected.
  const view: ArrayBufferView = new constructor(
    chunk.buffer,
    chunk.byteOffset,
    chunk.byteLength / bytesPerElement
  )
  resolveBuffer(response, id, view)
}

function processFullRow(
  response: FlightResponse,
  id: number,
  tag: number,
  buffer: Array<Uint8Array>,
  chunk: Uint8Array
): void {
  if (enableBinaryFlight) {
    switch (tag) {
      case 65 /* "A" */:
        // We must always clone to extract it into a separate buffer instead of just a view.
        resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer)
        return
      case 67 /* "C" */:
        resolveTypedArray(response, id, buffer, chunk, Int8Array, 1)
        return
      case 99 /* "c" */:
        resolveBuffer(
          response,
          id,
          buffer.length === 0 ? chunk : mergeBuffer(buffer, chunk)
        )
        return
      case 85 /* "U" */:
        resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1)
        return
      case 83 /* "S" */:
        resolveTypedArray(response, id, buffer, chunk, Int16Array, 2)
        return
      case 115 /* "s" */:
        resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2)
        return
      case 76 /* "L" */:
        resolveTypedArray(response, id, buffer, chunk, Int32Array, 4)
        return
      case 108 /* "l" */:
        resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4)
        return
      case 70 /* "F" */:
        resolveTypedArray(response, id, buffer, chunk, Float32Array, 4)
        return
      case 100 /* "d" */:
        resolveTypedArray(response, id, buffer, chunk, Float64Array, 8)
        return
      case 78 /* "N" */:
        resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8)
        return
      case 109 /* "m" */:
        resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8)
        return
      case 86 /* "V" */:
        resolveTypedArray(response, id, buffer, chunk, DataView, 1)
        return
    }
  }

  const stringDecoder = response._stringDecoder
  let row = ''
  for (let i = 0; i < buffer.length; i++) {
    row += readPartialStringChunk(stringDecoder, buffer[i])
  }
  row += readFinalStringChunk(stringDecoder, chunk)

  switch (tag) {
    case 73 /* "I" */: {
      resolveModule(response, id, row)
      return
    }
    case 72 /* "H" */: {
      const code = row[0] as HintCode
      resolveHint(response, id, code, row.slice(1))
      return
    }
    case 69 /* "E" */: {
      const errorInfo = JSON.parse(row)
      if (__DEV__) {
        resolveErrorDev(
          response,
          id,
          errorInfo.digest,
          errorInfo.message,
          errorInfo.stack
        )
      } else {
        resolveErrorProd(response, id, errorInfo.digest)
      }
      return
    }
    case 84 /* "T" */: {
      resolveText(response, id, row)
      return
    }
    case 68 /* "D" */: {
      //if (__DEV__) {
      const debugInfo = JSON.parse(row)
      resolveDebugInfo(response, id, debugInfo)
      return
      //}
      // throw new Error(
      //   "Failed to read a RSC payload created by a development version of React " +
      //     "on the server while using a production version on the client. Always use " +
      //     "matching versions on the server and the client.",
      // );
    }
    case 80 /* "P" */: {
      if (enablePostpone) {
        if (__DEV__) {
          const postponeInfo = JSON.parse(row)
          resolvePostponeDev(
            response,
            id,
            postponeInfo.reason,
            postponeInfo.stack
          )
        } else {
          resolvePostponeProd(response, id)
        }
        return
      }
    }
    // Fallthrough
    default: /* """ "{" "[" "t" "f" "n" "0" - "9" */ {
      // We assume anything else is JSON.
      resolveModel(response, id, row)
      return
    }
  }
}

const enableBinaryFlight = true

const ROW_ID = 0
const ROW_TAG = 1
const ROW_LENGTH = 2
const ROW_CHUNK_BY_NEWLINE = 3
const ROW_CHUNK_BY_LENGTH = 4

export function processBinaryChunk(
  response: FlightResponse,
  chunk: Uint8Array
): void {
  let i = 0
  let rowState = response._rowState
  let rowID = response._rowID
  let rowTag = response._rowTag
  let rowLength = response._rowLength
  const buffer = response._buffer
  const chunkLength = chunk.length
  while (i < chunkLength) {
    let lastIdx = -1
    switch (rowState) {
      case ROW_ID: {
        const byte = chunk[i++]
        if (byte === 58 /* ":" */) {
          // Finished the rowID, next we'll parse the tag.
          rowState = ROW_TAG
        } else {
          rowID = (rowID << 4) | (byte > 96 ? byte - 87 : byte - 48)
        }
        continue
      }
      case ROW_TAG: {
        const resolvedRowTag = chunk[i]
        if (
          resolvedRowTag === 84 /* "T" */ ||
          (enableBinaryFlight &&
            (resolvedRowTag === 65 /* "A" */ ||
              resolvedRowTag === 67 /* "C" */ ||
              resolvedRowTag === 99 /* "c" */ ||
              resolvedRowTag === 85 /* "U" */ ||
              resolvedRowTag === 83 /* "S" */ ||
              resolvedRowTag === 115 /* "s" */ ||
              resolvedRowTag === 76 /* "L" */ ||
              resolvedRowTag === 108 /* "l" */ ||
              resolvedRowTag === 70 /* "F" */ ||
              resolvedRowTag === 100 /* "d" */ ||
              resolvedRowTag === 78 /* "N" */ ||
              resolvedRowTag === 109 /* "m" */ ||
              resolvedRowTag === 86)) /* "V" */
        ) {
          rowTag = resolvedRowTag
          rowState = ROW_LENGTH
          i++
        } else if (resolvedRowTag > 64 && resolvedRowTag < 91 /* "A"-"Z" */) {
          rowTag = resolvedRowTag
          rowState = ROW_CHUNK_BY_NEWLINE
          i++
        } else {
          rowTag = 0
          rowState = ROW_CHUNK_BY_NEWLINE
          // This was an unknown tag so it was probably part of the data.
        }
        continue
      }
      case ROW_LENGTH: {
        const byte = chunk[i++]
        if (byte === 44 /* "," */) {
          // Finished the rowLength, next we'll buffer up to that length.
          rowState = ROW_CHUNK_BY_LENGTH
        } else {
          rowLength = (rowLength << 4) | (byte > 96 ? byte - 87 : byte - 48)
        }
        continue
      }
      case ROW_CHUNK_BY_NEWLINE: {
        // We're looking for a newline
        lastIdx = chunk.indexOf(10 /* "\n" */, i)
        break
      }
      case ROW_CHUNK_BY_LENGTH: {
        // We're looking for the remaining byte length
        lastIdx = i + rowLength
        if (lastIdx > chunk.length) {
          lastIdx = -1
        }
        break
      }
    }
    const offset = chunk.byteOffset + i
    if (lastIdx > -1) {
      // We found the last chunk of the row
      const length = lastIdx - i
      const lastChunk = new Uint8Array(chunk.buffer, offset, length)
      processFullRow(response, rowID, rowTag, buffer, lastChunk)
      // Reset state machine for a new row
      i = lastIdx
      if (rowState === ROW_CHUNK_BY_NEWLINE) {
        // If we're trailing by a newline we need to skip it.
        i++
      }
      rowState = ROW_ID
      rowTag = 0
      rowID = 0
      rowLength = 0
      buffer.length = 0
    } else {
      // The rest of this row is in a future chunk. We stash the rest of the
      // current chunk until we can process the full row.
      const length = chunk.byteLength - i
      const remainingSlice = new Uint8Array(chunk.buffer, offset, length)
      buffer.push(remainingSlice)
      // Update how many bytes we're still waiting for. If we're looking for
      // a newline, this doesn't hurt since we'll just ignore it.
      rowLength -= remainingSlice.byteLength
      break
    }
  }
  response._rowState = rowState
  response._rowID = rowID
  response._rowTag = rowTag
  response._rowLength = rowLength
}

function parseModel<T>(response: FlightResponse, json: UninitializedModel): T {
  return JSON.parse(json, response._fromJSON)
}

export function createFromJSONCallback(response: FlightResponse) {
  return function (key: string, value: JSONValue) {
    if (typeof value === 'string') {
      // We can't use .bind here because we need the "this" value.
      // ts-expect-error `this` doesn't work
      return parseModelString(response, this, key, value)
    }
    if (typeof value === 'object' && value !== null) {
      return parseModelTuple(response, value)
    }
    return value
  }
}
