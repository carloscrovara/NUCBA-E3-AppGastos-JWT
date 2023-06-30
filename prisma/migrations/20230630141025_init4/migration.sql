/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `gastos` table. All the data in the column will be lost.
  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usuarioId` to the `gastos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `gastos` DROP FOREIGN KEY `gastos_categoriaId_fkey`;

-- AlterTable
ALTER TABLE `gastos` DROP COLUMN `categoriaId`,
    ADD COLUMN `usuarioId` VARCHAR(36) NOT NULL;

-- DropTable
DROP TABLE `categorias`;

-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
