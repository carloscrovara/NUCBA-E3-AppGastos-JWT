import { prisma } from "../repository/prisma";

export async function deleteCategoria(id: string) {
    try {
        const db = prisma();
        await db.categorias.delete({ where: { id: id } });
        return;
    } catch (err) {
        console.log(err);
        throw err;
    }
}