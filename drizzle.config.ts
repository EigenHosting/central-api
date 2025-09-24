import { defineConfig } from "drizzle-kit";


export default defineConfig({
  dialect: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL||"",
    authToken: process.env.TURSO_AUTH_TOKEN||"",
  },

});
