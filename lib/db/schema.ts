import { integer, pgTable, boolean, text, timestamp, date } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    task: text().notNull(),
    description: text(),
    status: boolean().default(false),
    cretedAt: timestamp('created_at').defaultNow(),
    updatedAt: date('updated_at'),
})



