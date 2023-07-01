import { prisma } from "../repository/prisma";

export async function getTotalMonthExpenses(anio: string, mes: string) {
    try {
        const result = await prisma().$queryRaw`select SUM(importe) FROM gastos WHERE YEAR (fecha_creacion) = ${anio} AND MONTH (fecha_creacion) = ${mes}`;
        return result;
    } catch (err) {
        throw err;
    }
}