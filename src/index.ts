import express from "express";
import * as dotenv from "dotenv";
import { MobController } from "./controllers/mobController";
import { BiomaController } from "./controllers/biomaController";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/mobs", MobController.inserir);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});