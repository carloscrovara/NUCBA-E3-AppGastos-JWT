import { Response } from "express";
import { prisma } from "../repository/prisma";

export async function getTotalExpenses(res: Response) {
    try {
        const total = await prisma().gastos.aggregate({
            where: {
                usuario: {
                    email: res.locals.email,
                },  
            },  
            _sum: {
                importe: true,
            },
        });
        return total._sum.importe;
    } catch (err) {
        console.log(err);
        throw err;
    }
}