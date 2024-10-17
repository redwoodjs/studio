// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { nanoid } from "nanoid";

import { emitLogLevels, handlePrismaLogging } from "@redwoodjs/api/logger";

import { PrismaClient } from "../../db/client";

import { logger } from "./logger";

const prismaClient = new PrismaClient({
  log: emitLogLevels(["info", "warn", "error"]),
});

handlePrismaLogging({
  db: prismaClient,
  logger,
  logLevels: ["info", "warn", "error"],
});

/**
 * Global Prisma client extensions should be added here, as $extend
 * returns a new instance.
 * export const db = prismaClient.$extend(...)
 * Add any .$on hooks before using $extend
 */
export const db = prismaClient;

// Useful because Prisma's raw methods don't automatically generate values
export function generateTypicalValues() {
  return {
    id: nanoid(24),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
