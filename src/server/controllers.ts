import { Request, Response } from "express";
import { createExpense } from "../business-logic/createExpense";
import { getExpenses, getExpenseItemId } from "../business-logic/getExpense";
import { updateExpense } from "../business-logic/updateExpense";
import { deleteExpense } from "../business-logic/deleteExpense";
import { getTotalExpenses } from "../business-logic/getTotalExpenses";
import { getMonthExpenses } from "../business-logic/getMonthExpenses";
import { getTotalMonthExpenses } from "../business-logic/getTotalMonthExpenses";

//GASTOS
export const getExpensesController = async (req: Request, res: Response) => {
    try {
        const result = await getExpenses(res);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getExpenseIdController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const userId = res.locals.userId;
        const result = await getExpenseItemId(id, userId);
        if (result) {
            res.json(result);
            return;
        }
        res.status(404).json({ message: `Item: ${id} no encontrado` });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createExpenseController = async (req: Request, res: Response) => {
    try {
        const newItemInput = req.body;
        const result = await createExpense(newItemInput, res);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateExpenseController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const gastoInput = req.body;
        const result = await updateExpense(id, gastoInput, res, req);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteExpenseController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteExpense(id, res);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTotalExpensesController = async (req: Request, res: Response) => {
    try {
        const result = await getTotalExpenses(res);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getMonthExpensesController = async (req: Request, res: Response) => {
    try {
        const usuarioId = req.params.usuarioId;
        const anio = req.params.anio;
        const mes = req.params.mes;
        const result = await getMonthExpenses(usuarioId, anio, mes);
        if (result) {
            res.json(result);
            return;
        }
        res.status(404).json({ message: `No se encontraron registros.` });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTotalMonthExpensesController = async (req: Request, res: Response) => {
    try {
        const usuarioId = req.params.usuarioId;
        const anio = req.params.anio;
        const mes = req.params.mes;
        const result = await getTotalMonthExpenses(usuarioId, anio, mes);
        if (result) {
            res.json(result);
            return;
        }
        res.status(404).json({ message: `No se encontraron registros.` });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};