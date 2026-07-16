import { Prisma } from "@prisma/client";
import { TodoRepository } from "./todo-repository.js";
import { CreateTodoDto } from "../../utils/todo-types.js";
import { UpdateTodoDto } from "../../utils/todo-types.js";

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

  async getTodos(userId: string, filters: any) {
    return this.todoRepository.findAll(userId, filters);
  }

  async getTodoById(id: string, userId: string) {
    const todo = await this.todoRepository.findById(id, userId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async updateTodo(id: string, userId: string, data: UpdateTodoDto) {
    await this.getTodoById(id, userId);

    const updateData: Prisma.TodoUpdateInput = {
      title: data.title,
      description: data.description,
      type: data.type,
      status: data.status,
      priority: data.priority,
      tags: data.tags,
      dueDate: data.dueDate,
      isPinned: data.isPinned,
      isArchived: data.isArchived,
    };

    if (data.items) {
      updateData.items = {
        update: data.items.map((item) => ({
          where: {
            id: item.id,
          },
          data: {
            content: item.content,
            position: item.position,
            isDone: item.isDone,
          },
        })),
      };
    }

    return this.todoRepository.update(id, userId, updateData);
  }
  async deleteTodo(id: string, userId: string) {
    await this.getTodoById(id, userId);

    await this.todoRepository.delete(id, userId);
  }
}
