import { prisma } from "../repository/prisma";
import { Response } from "express";

type filterInput = {dateRange:{start: Date, end: Date}};

export async function getTotalExpensesDateRange(res:Response, filterInput: filterInput){  
    try {
        const filter: any = {
            usuarioId: res.locals.userId,
            fecha_eliminacion: null,
        }
        if(filterInput.dateRange){
            filter.fecha_creacion = {
                gte: filterInput.dateRange.start,
                lte: filterInput.dateRange.end,
            }
        }
        const db = prisma();
        const result = await db.gastos.aggregate({
            where: filter,
            _sum: {
                importe: true,
            },
        });
        return result._sum.importe;
    } catch (err) {
        throw err;
    }
}