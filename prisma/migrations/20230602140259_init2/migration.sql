/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `categorias` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `categorias_nombre_key` ON `categorias`(`nombre`);

-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
