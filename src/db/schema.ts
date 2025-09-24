import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
    username: text("username").primaryKey(),
    password: text("password").notNull(),
    inviteCode: text("inviteCode").notNull(),
    credits: integer("credits").notNull(),
});


