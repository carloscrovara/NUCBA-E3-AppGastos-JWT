import { Response } from "express";
import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function getExpenses(res: Response): Promise<Item[]> {
    try {
        const items = await prisma().gastos.findMany({
            where: {
                usuario: {
                    id: res.locals.userId,
                },  
            },  
        });
        return items;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getExpenseItemId(itemId: string, userId:string): Promise<Item| null> {
    try {
        const db = prisma();
        const usuarios = await db.usuarios.findUnique({
            where: {
                id: userId,
            },
            include: { gastos: true },
        });
        if (!usuarios) {
            return null;
        }
        return usuarios.gastos.find((item) => item.id === itemId) ?? null;
    } catch (err) { 
        console.log(err);
        throw err;
    }
}