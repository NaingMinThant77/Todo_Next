import { z } from "zod";

export const todoSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.string().min(1, "Priority is required").max(1),
  status: z.enum(["PENDING", "COMPLETE", "OVERDUE"]).optional(),
  dueAt: z.date(),
  createdAt: z.date().optional(),
});

export type TodoSchema = z.infer<typeof todoSchema>;

export const deleteTodoSchema = z.object({
  id: z.number(),
});

export type DeleteTodoInput = z.infer<typeof deleteTodoSchema>;

export const statusUpdateSchema = z.object({
  id: z.number(),
  status: z.enum(["PENDING", "COMPLETE", "OVERDUE"]),
});
