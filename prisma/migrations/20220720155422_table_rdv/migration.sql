/*
  Warnings:

  - You are about to drop the column `car` on the `Rendezvous` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Rendezvous` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Rendezvous` table. All the data in the column will be lost.
  - You are about to drop the column `purpose` on the `Rendezvous` table. All the data in the column will be lost.
  - Added the required column `end` to the `Rendezvous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Rendezvous` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rendezvous" DROP COLUMN "car",
DROP COLUMN "date",
DROP COLUMN "email",
DROP COLUMN "purpose",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT;
