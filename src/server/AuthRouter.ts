import { Router } from "express";
import * as controllers from "./AuthControllers";

export const authRouter = Router();

authRouter.post("/register", controllers.registerController);
authRouter.post("/login",controllers.loginController);