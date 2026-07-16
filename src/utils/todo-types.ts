import { z } from "zod";
import { createTodoSchema,updateTodoSchema} from "../modules/todo/todo-validator.js";

export type CreateTodoDto = z.infer<typeof createTodoSchema>;
export type UpdateTodoDto = z.infer<typeof updateTodoSchema>;