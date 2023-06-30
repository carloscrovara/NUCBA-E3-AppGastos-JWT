-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
