import prisma from "../../config/prisma.js";
import { Prisma } from "@prisma/client";

export class TodoRepository {
  async create(data: Prisma.TodoCreateInput) {
    return await prisma.todo.create({
      data,
    });
  }
 async findAll(userId: string, filters: any) {
  const where: Prisma.TodoWhereInput = {
    userId,
    deletedAt: null,
  };

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.priority) {
    where.priority = filters.priority;
  }

  if (filters.isArchived !== undefined) {
    where.isArchived = filters.isArchived === "true";
  }

  if (filters.search) {
    where.OR = [
      {
        title: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        tags: {
         has:filters.search,
        },
      },
    ];
  }

  return prisma.todo.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
}
  async findById(id: string, userId: string) {
    return prisma.todo.findFirst({
      where: {
        id,
        userId,
        deletedAt: null,
      },
      include: {
        items: true,
      },
    });
  }
  async update(id: string, userId: string, data: Prisma.TodoUpdateInput) {
    return prisma.todo.update({
      where: {
        id,
        userId,
      },
      data,
      include: {
        items: true,
      },
    });
  }
  async delete(id: string, userId: string) {
  return prisma.todo.delete({
    where: {
      id,
      userId,
    },
  });
}

}