import express from "express";
import { router } from "./router";
import { createPrismaClient } from "../repository/prisma";

//Configuracion del puerto
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/gastos/", router);

app.listen(PORT, () => {
    createPrismaClient()
    console.log("Server running on port 3000");
});