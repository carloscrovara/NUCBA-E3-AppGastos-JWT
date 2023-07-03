import { prisma } from "../repository/prisma";

    export async function getMonthExpenses(usuarioId: string, anio: string, mes: string){   
    try {
        const result = await prisma().$queryRaw`select * FROM gastos WHERE usuarioId = ${usuarioId} AND YEAR (fecha_creacion) = ${anio} AND MONTH (fecha_creacion) = ${mes}`;
        return result;
    } catch (err) {
        throw err;
    }
}

//export async function getMonthExpenses(anio: string, mes: string, diaDesde: string, diaHasta: string){ 
        /*
        return await prisma().gastos.findMany({
            where: {
                fecha_creacion: {
                    lte: "2023-06-30",
                    gte: "2023-06-01",
                },
            },
        });
        */