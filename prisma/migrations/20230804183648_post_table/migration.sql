-- CreateTable
CREATE TABLE "main"."Posts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "datePosted" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_id_key" ON "main"."Posts"("id");
