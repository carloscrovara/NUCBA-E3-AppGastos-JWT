import { prisma } from "../repository/prisma";

export async function deleteExpense(id: string) {
    try {
        const db = prisma();        
        await db.gastos.delete({ where: { id: id } });
        return;
    } catch (err) {
        console.log(err);
        throw err;
    }
}