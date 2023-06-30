import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function createGasto(item: Item): Promise<Item> {
    try {
        const db = prisma();
        const createdItem = await db.gastos.create({
            data: {
                importe: item.importe,
                descripcion: item.descripcion,
                categoriaId: item.categoriaId,
            },
        });
    return createdItem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}