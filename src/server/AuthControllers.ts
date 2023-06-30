import { Request, Response } from "express";
import { login, register } from "../auth-logic/auth.functions";

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const result = await login(email, password)
        res.json(result)
        return;
    } catch (err) {
        res.status(500).send(err)
        return;
    }
}

export const registerController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const result = await register(email, password)
        res.json(result);
        return;
    } catch (err) {
        res.status(500).send(err);
        return;
    }
}