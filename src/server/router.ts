import { Router } from "express";
import * as controllers from "./controllers";
import { validator } from "./validators/validators";
import { body } from "express-validator";
import { authMiddleware } from "./middlewares/authMiddlewares";

export const router = Router();

router.use(authMiddleware);

//Rutas para obtener todos los gastos de un usuario logueado y para obtener un gasto por ID de un usuario logueado
router.get("/", controllers.getExpensesController);
router.get("/:id", controllers.getExpenseIdController);

//Ruta para consultar los gastos de un usuario en un rango de fechas determinado
router.get("/consulta/rangoFechas/:fechaInicio/:fechaFinal", controllers.getExpensesDateRangeController);

//Ruta para consultar el total de gastos de un usuario en un rango de fechas determinado
router.get("/consulta/total/:fechaInicio/:fechaFinal", controllers.getTotalExpensesDateRangeController);

//Ruta para obtener el total de gastos registrados de un usuario
router.get("/consulta/total", controllers.getTotalExpensesController);

//Ruta para crear un gasto
router.post(
    "/", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    validator,
    controllers.createExpenseController
);

//Ruta para modificar un gasto
router.put(
    "/:id", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    validator,    
    controllers.updateExpenseController
);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteExpenseController);