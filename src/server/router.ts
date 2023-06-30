import { Router } from "express";
import * as controllers from "./controllers";
import { validator } from "./validators/validators";
import { body } from "express-validator";
import { authMiddleware } from "./middlewares/authMiddlewares";

export const router = Router();

router.use(authMiddleware); // MIDDLEWARE DE LOGIN

//Ruta para crear un gasto
router.post(
    "/", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("usuarioId").isString().notEmpty(),
    validator,
    controllers.createGastoController
);

//Rutas para obtener todos los gastos y para obtener un gasto por ID
router.get("/", controllers.getGastosController);
router.get("/:id", controllers.getGastoIdController);

//Ruta para consultar los gastos de un mes y año en particular
router.get("/consulta/:anio/:mes", controllers.getGastoMesController);

//Ruta para consultar el total de gastos de un mes y año en particular
router.get("/consulta/total/:anio/:mes", controllers.getTotalGastosMesController);

//Ruta para obtener el total de gastos registrados
router.get("/consulta/total", controllers.getTotalGastosController);

//Ruta para modificar un gasto
router.put(
    "/:id", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("usuarioId").isString().notEmpty(),
    validator,    
    controllers.updateGastoController
);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteGastoController);