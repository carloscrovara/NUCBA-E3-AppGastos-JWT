import { prisma } from "../repository/prisma";
import { getExpenseItemId } from "./getExpense";
import { Response } from "express";

export async function deleteExpense(id: string, res: Response) {
    try {
        //condicional que comprueba si el id del gasto a borrar pertenece al usuario logueado
        const item = await getExpenseItemId(id, res.locals.userId);
        if (!item) {
            throw new Error("No se encuentra el gasto a borrar o el ID del gasto corresponde a otro usuario.");
        }
        const db = prisma();        
        await db.gastos.delete({ where: { id: id } });
        return;
    } catch (err) {
        console.log(err);
        throw err;
    }
}