-- CreateTable
CREATE TABLE "public"."Korban" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Korban_pkey" PRIMARY KEY ("id")
);
