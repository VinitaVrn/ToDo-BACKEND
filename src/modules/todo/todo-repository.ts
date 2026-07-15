import prisma from "../../config/prisma.js";
import { Prisma } from "@prisma/client";

export class TodoRepository {
  async create(data: Prisma.TodoCreateInput) {
    return await prisma.todo.create({
      data,
    });
  }
  async findAll(userId: string) {
  return prisma.todo.findMany({
    where: {
      userId,
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
}