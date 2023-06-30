/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `gastos` DROP FOREIGN KEY `gastos_usuarioId_fkey`;

-- DropTable
DROP TABLE `usuarios`;
