import { Router } from "express";
import * as controllers from "./controllers";
import { createItemValidator as validator } from "./validators/validators";
import { body } from "express-validator";

export const router = Router();

//Ruta para crear un gasto
router.post(
    "/", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("categoriaId").isString().notEmpty(),
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
    body("categoriaId").isString().notEmpty(),
    validator,    
    controllers.updateGastoController
);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteGastoController);

//Ruta para crear una categoria
router.post(
    "/categoria", 
    body("nombre").isString().notEmpty(),
    validator,
    controllers.createCategoriaController
);

//Rutas para obtener todas las categorias y para obtener una categoria por ID
router.get("/categorias/listado", controllers.getCategoriasController);
router.get("/categoria/:id", controllers.getCategoriaIdController);

//Ruta para modificar una categoria
router.put(
    "/categoria/:id", 
    body("nombre").isString().notEmpty(),
    validator,
    controllers.updateCategoriaController
); 

//Ruta para eliminar una categoria
router.delete("/categoria/:id", controllers.deleteCategoriaController);