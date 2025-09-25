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
    handle: text().primaryKey().notNull().unique(),    
    email: text().notNull(),
    discordId: text().notNull(),
    pterodactylId: text().notNull(),
    maxServerCount: integer().notNull().default(1),
})