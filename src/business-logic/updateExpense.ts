import { Item } from "./types/Item";
import { Response, Request } from "express";
import { getExpenseItemId } from "./getExpense";
import { prisma } from "../repository/prisma";

export async function updateExpense(id: string, gasto: Item, res: Response, req: Request) {
        try {
            //condicional que comprueba si el id del gasto a modificar pertenece al usuario logueado
            const item = await getExpenseItemId(id, res.locals.userId);
            if (!item) {
                throw new Error("No se encuentra el gasto a modificar o el ID del gasto corresponde a otro usuario.");
            }
            const db = prisma();
            const udpatedItem = await db.gastos.update({
                data: {
                    id: req.params.id,
                    importe: gasto.importe,
                    descripcion: gasto.descripcion,
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