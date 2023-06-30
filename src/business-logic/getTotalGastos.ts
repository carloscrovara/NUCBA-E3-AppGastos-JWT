import { prisma } from "../repository/prisma";

export async function getTotalGastos() {
    try {
        const total = await prisma().gastos.aggregate({
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