import { Response } from "express";
import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function getExpenses(res: Response): Promise<Item[]> {
    try {
        const items = await prisma()?.gastos.findMany({
            where: {
                usuario: {
                    email: res.locals.email,
                },  
            },  
        });
        return items;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getExpenseItemId(itemId: string): Promise<Item| null> {
    try {
        const db = prisma();
        const item = await db.gastos.findUnique({
            where: {
                id: itemId,
            },
        });
    return item;
    } catch (err) {
        console.log(err);
        throw err;
    }
}