import { prisma } from "../repository/prisma";

export async function getGastosMes(anio: string, mes: string) {
    try {
        const result = await prisma().$queryRaw`select * FROM gastos WHERE YEAR (fecha_creacion) = ${anio} AND MONTH (fecha_creacion) = ${mes}`;
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}