import { z } from "zod";

const todoItemSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Checklist item cannot be empty"),

  position: z
    .number()
    .int()
    .nonnegative(),
});

export const createTodoSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(200, "Title must be at most 200 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description is too long")
    .optional(),

  type: z.enum(["task", "checklist"]),

  status: z.enum([
    "ALL",
    "in_progress",
    "blocked",
    "done",
    "cancelled",
  ]),

  priority: z.enum([
    "low",
    "medium",
    "high",
    "critical",
  ]),

  tags: z
    .array(z.string().trim().min(1))
    .default([]),

  dueDate: z
    .string()
    .date()
    .optional()
    .transform((value) =>
      value ? new Date(value) : undefined
    ),

  items: z
    .array(todoItemSchema)
    .optional(),
});