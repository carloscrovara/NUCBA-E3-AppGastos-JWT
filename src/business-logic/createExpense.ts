import { Item } from "./types/Item";
import { Response } from "express";
import { prisma } from "../repository/prisma";

export async function createExpense(item: Item, res: Response): Promise<Item> {
    try {
        const db = prisma();
        const createdItem = await db.gastos.create({
            data: {
                importe: item.importe,
                descripcion: item.descripcion,
                usuarioId: res.locals.userId,
            },
        });
        return createdItem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}