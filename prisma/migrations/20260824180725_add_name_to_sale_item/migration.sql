/*
  Warnings:

  - Added the required column `name` to the `SaleItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SaleItem" ADD COLUMN     "name" TEXT NOT NULL;
