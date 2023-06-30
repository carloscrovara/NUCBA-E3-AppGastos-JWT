-- CreateTable
CREATE TABLE `categorias` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `nombre` VARCHAR(255) NOT NULL,
    `fecha_creacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_eliminacion` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gastos` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `fecha_creacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `importe` FLOAT NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `categoriaId` VARCHAR(36) NOT NULL,
    `fecha_modificacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_eliminacion` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
