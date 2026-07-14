-- CreateEnum
CREATE TYPE "public"."TodoType" AS ENUM ('task', 'checklist', 'note');

-- CreateEnum
CREATE TYPE "public"."TodoStatus" AS ENUM ('todo', 'in_progress', 'blocked', 'done', 'cancelled');

-- CreateEnum
CREATE TYPE "public"."TodoPriority" AS ENUM ('low', 'medium', 'high', 'critical');

-- CreateTable
CREATE TABLE "public"."todos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "public"."TodoType" NOT NULL DEFAULT 'task',
    "status" "public"."TodoStatus" NOT NULL DEFAULT 'todo',
    "priority" "public"."TodoPriority" NOT NULL DEFAULT 'medium',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dueDate" TIMESTAMP(3),
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."todo_items" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "todoId" TEXT NOT NULL,

    CONSTRAINT "todo_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."todo_history" (
    "id" TEXT NOT NULL,
    "changedField" TEXT NOT NULL,
    "oldValue" TEXT,
    "newValue" TEXT,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "todoId" TEXT NOT NULL,

    CONSTRAINT "todo_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "todos_status_priority_idx" ON "public"."todos"("status", "priority");

-- AddForeignKey
ALTER TABLE "public"."todo_items" ADD CONSTRAINT "todo_items_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "public"."todos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."todo_history" ADD CONSTRAINT "todo_history_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "public"."todos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
