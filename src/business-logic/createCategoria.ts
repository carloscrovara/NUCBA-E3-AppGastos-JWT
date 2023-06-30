import { Categoria } from "./types/Categoria";
import { prisma } from "../repository/prisma";

export async function createCategoria(categoria: Categoria): Promise<Categoria> {
    try {
        const db = prisma();
        const createdCategory = await db.categorias.create({
            data: {
                nombre: categoria.nombre,
            },
        });
    return createdCategory;
    } catch (err) {
        console.log(err);
        throw err;
    }
}