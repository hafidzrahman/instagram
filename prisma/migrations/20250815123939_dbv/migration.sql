/*
  Warnings:

  - You are about to drop the `Korban` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Korban";

-- CreateTable
CREATE TABLE "public"."Victim" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Victim_pkey" PRIMARY KEY ("id")
);
