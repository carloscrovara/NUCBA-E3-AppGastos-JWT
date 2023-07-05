import { Item } from "./types/Item";
import { Response } from "express";
import { prisma } from "../repository/prisma";

export async function updateExpense(id: string, item: Item, res: Response) {
        try {
            if (id !== item.id) {
                throw new Error("Id de gasto no coincide con registros.");
            }
            const db = prisma();
            const udpatedItem = await db.gastos.update({
                data: {
                    id: item.id,
                    importe: item.importe,
                    descripcion: item.descripcion,
                    usuarioId: res.locals.userId,
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