import { Router } from "express";
import { validator } from "./validators/validators";
import { body } from "express-validator";
import * as controllers from "./AuthControllers";

export const authRouter = Router();

authRouter.post(
    "/register", 
    body("email").isString().notEmpty(),
    body("password").isString().notEmpty(),
    validator,
    controllers.registerController
);

authRouter.post(
    "/login",
    body("email").isString().notEmpty(),
    body("password").isString().notEmpty(),
    validator,
    controllers.loginController
);

authRouter.post("/refresh",controllers.refreshTokenController);