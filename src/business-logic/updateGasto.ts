import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function updateGasto(id: string, item: Item) {
        try {
            if (id !== item.id) {
                throw new Error("Id de gasto no coincide con registros.");
            }
            const db = prisma();
            const udpatedItem = await db.gastos.update({
                data: {
                    importe: item.importe,
                    descripcion: item.descripcion,
                    categoriaId: item.categoriaId,
                },
                where: {
                    id: id,
                },
            });
        return udpatedItem;
        } catch (err) {
            console.log(err);
            throw err;
        }
}