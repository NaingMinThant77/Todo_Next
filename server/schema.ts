import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["PENDING", "COMPLETE", "OVERDUE"]);

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  status: statusEnum("status").default("PENDING").notNull(),
  priority: integer("priority").default(1).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  completedAt: timestamp("completed_at"),
  dueAt: timestamp("due_at"),
});
