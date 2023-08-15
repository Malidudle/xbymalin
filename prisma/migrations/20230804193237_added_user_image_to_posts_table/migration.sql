/*
  Warnings:

  - Added the required column `userImage` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main"."Posts" ADD COLUMN     "userImage" TEXT NOT NULL;
