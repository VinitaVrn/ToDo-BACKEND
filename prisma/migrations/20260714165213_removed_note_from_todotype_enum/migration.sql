/*
  Warnings:

  - The values [note] on the enum `TodoType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."TodoType_new" AS ENUM ('task', 'checklist');
ALTER TABLE "public"."todos" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "public"."todos" ALTER COLUMN "type" TYPE "public"."TodoType_new" USING ("type"::text::"public"."TodoType_new");
ALTER TYPE "public"."TodoType" RENAME TO "TodoType_old";
ALTER TYPE "public"."TodoType_new" RENAME TO "TodoType";
DROP TYPE "public"."TodoType_old";
ALTER TABLE "public"."todos" ALTER COLUMN "type" SET DEFAULT 'task';
COMMIT;
