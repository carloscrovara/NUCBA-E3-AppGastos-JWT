import { Categoria } from "./types/Categoria";
import { prisma } from "../repository/prisma";

export async function updateCategoria(id: string, categoria: Categoria) {
        try {
            if (id !== categoria.id) {
                throw new Error("Id de categoria no coincide con registros.");
            }
            const db = prisma();
            const udpatedCategory = await db.categorias.update({
                data: {
                    nombre: categoria.nombre,
                },
                where: {
                    id: id,
                },
            });
        return udpatedCategory;
        } catch (err) {
            console.log(err);
            throw err;
        }
}