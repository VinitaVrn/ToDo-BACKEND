import { z } from "zod";
import { createTodoSchema } from "../modules/todo/todo-validator.js";

export type CreateTodoDto = z.infer<typeof createTodoSchema>;