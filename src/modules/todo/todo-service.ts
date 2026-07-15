import { TodoRepository } from "./todo-repository.js";
import { CreateTodoDto } from "../../utils/todo-types.js";

export class TodoService {
  private todoRepository = new TodoRepository();

  async createTodo(data: CreateTodoDto, userId: string) {
    return this.todoRepository.create({
      title: data.title.trim(),
      description: data.description,
      type: data.type,
      status: data.status,
      priority: data.priority,
      tags: data.tags,
      dueDate: data.dueDate,

      user: {
        connect: {
          id: userId,
        },
      },

      items: data.items
        ? {
            create: data.items,
          }
        : undefined,
    });
  }

  async getTodos(userId: string) {
    return this.todoRepository.findAll(userId);
  }
}