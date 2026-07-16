import { Request, Response, NextFunction } from "express";
import { TodoService } from "./todo-service.js";
import { createTodoSchema, updateTodoSchema } from "./todo-validator.js";

interface TodoParams {
  id: string;
}

// interface TodoQuery{
//   query:string
// }

export class TodoController {
  private todoService = new TodoService();

  async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const reqestbody = createTodoSchema.parse(req.body);
      const todo = await this.todoService.createTodo(
        reqestbody,
        req.user!.userId
      );

      return res.status(201).json({
        success: true,
        message: "Todo created successfully",
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async getTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await this.todoService.getTodos(
        req.user!.userId,
        req.query
      );

      return res.status(200).json({
        success: true,
        data: todos,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(
    req: Request<TodoParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log("req.user:", req.user);
      const todo = await this.todoService.getTodoById(
        req.params.id,
        req.user!.userId
      );

      return res.status(200).json({
        success: true,
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateTodo(
    req: Request<TodoParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const requestBody = updateTodoSchema.parse(req.body);

      const todo = await this.todoService.updateTodo(
        req.params.id,
        req.user!.userId,
        requestBody
      );

      return res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteTodo(
    req: Request<TodoParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.todoService.deleteTodo(req.params.id, req.user!.userId);

      return res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
