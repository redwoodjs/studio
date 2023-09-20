import path from 'node:path'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

import { getStudioStatePath } from 'src/util/project'
import * as schema from 'src/lib/drizzle/schema'

function getDatabaseFile(){
  if(process.env.DATABASE_URL_DRIZZLE){
    return process.env.DATABASE_URL_DRIZZLE
  }
  return path.resolve(path.join(getStudioStatePath(), 'studio-drizzle.sqlite'))
}

const sqlite = new Database(getDatabaseFile())
sqlite.pragma('journal_mode = WAL');

export const db = drizzle(sqlite, { schema })
