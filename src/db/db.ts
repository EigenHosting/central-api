import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import dotenv from "dotenv";

dotenv.config({ path: require("find-config")(".env") });

import * as userSchema from "./schema/user";

const DATABASE_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

const schema = {
  ...userSchema,
};

export const db = drizzle(pool, { schema });