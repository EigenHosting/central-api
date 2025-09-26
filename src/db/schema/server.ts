import {
    pgTable,
    integer,
    varchar,
    text,
    decimal,
    primaryKey,
    uniqueIndex,
    boolean,
    date,
    timestamp,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text().primaryKey().notNull().unique(),    
    // type: 
    expiry: timestamp({ mode: "date" }),
    created_at: timestamp({ mode: "date" }),
    updated_at: timestamp({ mode: "date" }),
})