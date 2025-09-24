import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const User = sqliteTable("user", {
    id: integer("id").primaryKey(),
    username: text("username").notNull(),
    password: text("password").notNull(),
    inviteCode: text("inviteCode").notNull()
});

export const inviteCodes = sqliteTable("inviteCodes", {
    inviteCode: text("inviteCode").primaryKey(),
    uses: integer("uses").notNull(),
    remark: text("remark")
})

