import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not configured. Add it to your environment variables before using the database.",
  );
}

const sql = neon(databaseUrl);

export const db = drizzle({
  client: sql,
  schema,
});