import { Router } from "express";
import { TodoController } from "./todo-controller.js";

const router = Router();

const todoController = new TodoController();

router.post("/", todoController.createTodo.bind(todoController));

router.get("/", todoController.getTodos.bind(todoController));

export default router;