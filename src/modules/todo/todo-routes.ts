import { Router } from "express";
import { TodoController } from "./todo-controller.js";
import { authMiddleware } from "../../middlewares/auth-middleware.js";

const router = Router();

const todoController = new TodoController();

router.use(authMiddleware);

router.post("/create", todoController.createTodo.bind(todoController));
router.get("/get", todoController.getTodos.bind(todoController));
router.get("/getById/:id", todoController.getTodoById.bind(todoController));
router.patch("/update/:id", todoController.updateTodo.bind(todoController));
router.delete("/delete/:id", todoController.deleteTodo.bind(todoController));

export default router;