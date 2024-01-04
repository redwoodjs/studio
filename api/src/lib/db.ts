// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { nanoid } from 'nanoid'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { PrismaClient } from '../../db/client'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})

// Useful because Prisma's raw methods don't automatically generate values
export function generateTypicalValues() {
  return {
    id: nanoid(24),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}
