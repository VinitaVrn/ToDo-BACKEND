import { Prisma } from "@prisma/client";
import { TodoRepository } from "./todo-repository.js";

export class TodoService{
     private todoRepository = new TodoRepository();
     async createTodo(data: Prisma.TodoCreateInput) {

    const title = data.title.trim();

    return await this.todoRepository.create({
      ...data,
      title,
    });
  }

  async getTodos() {
    return await this.todoRepository.findAll();
  }
}
