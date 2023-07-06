import { prisma } from "../repository/prisma";
import { Item } from "./types/Item";
import { Response } from "express";

type filterInput = {dateRange:{start: Date, end: Date}};

export async function getExpensesDateRange(res:Response, filterInput: filterInput): Promise<Item[]>{   
    try {
        const filter: any = {
            usuarioId: res.locals.userId,
        }
        if(filterInput.dateRange){
            filter.fecha_creacion = {
                gte: filterInput.dateRange.start,
                lte: filterInput.dateRange.end,
            }
        }
        const db = prisma();
        const result = await db.gastos.findMany({
            where: filter,
        });
        return result;
    } catch (err) {
        throw err;
    }
}