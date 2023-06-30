import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function getExpenses(): Promise<Item[]> {
    try {
        const items = await prisma()?.gastos.findMany();
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