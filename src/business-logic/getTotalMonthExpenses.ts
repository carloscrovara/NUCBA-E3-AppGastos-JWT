import { prisma } from "../repository/prisma";

export async function getTotalMonthExpenses(usuarioId: string, anio: string, mes: string) {
    try {
        const result = await prisma().$queryRaw`select SUM(importe) FROM gastos WHERE usuarioId = ${usuarioId} AND YEAR (fecha_creacion) = ${anio} AND MONTH (fecha_creacion) = ${mes}`;
        return result;
    } catch (err) {
        throw err;
    }
}