/*
  Warnings:

  - Added the required column `confirmEmail` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmPassword` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "confirmEmail" VARCHAR(255) NOT NULL,
ADD COLUMN     "confirmPassword" VARCHAR(255) NOT NULL;
