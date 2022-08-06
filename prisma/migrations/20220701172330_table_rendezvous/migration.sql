-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "rdv" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Rendezvous" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3),
    "purpose" TEXT,
    "car" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Rendezvous_pkey" PRIMARY KEY ("id")
);
