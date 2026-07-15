import { Request, Response, NextFunction } from "express";
import { TodoService } from "./todo-service.js";

export class TodoController{
    private todoService = new TodoService();

    async createTodo(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const todo = await this.todoService.createTodo(req.body);

      return res.status(201).json({
        success: true,
        message: "Todo created successfully",
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async getTodos(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const todos = await this.todoService.getTodos();

      return res.status(200).json({
        success: true,
        data: todos,
      });
    } catch (error) {
      next(error);
    }
  }
}

