import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./src/lib/drizzle/migrations",
} satisfies Config;
