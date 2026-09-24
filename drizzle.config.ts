import {
  existsSync,
} from "node:fs";
import {
  loadEnvFile,
} from "node:process";

import {
  defineConfig,
} from "drizzle-kit";

if (existsSync(".env.local")) {
  loadEnvFile(".env.local");
}

const databaseUrl =
  process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    [
      "DATABASE_URL is not configured.",
      "Add your Neon PostgreSQL connection string to .env.local before running Drizzle commands.",
    ].join(" "),
  );
}

export default defineConfig({
  schema: "./db/schema.ts",

  out: "./drizzle",

  dialect: "postgresql",

  dbCredentials: {
    url: databaseUrl,
  },

  strict: true,

  verbose: true,
});