/*
  Warnings:

  - The primary key for the `Posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userID` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main"."Posts" DROP CONSTRAINT "Posts_pkey",
ADD COLUMN     "userID" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "datePosted" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_id_key" ON "main"."Posts"("id");
