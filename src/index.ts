import express from "express";
import * as dotenv from "dotenv";
import { MobController } from "./controllers/mobController";
import { BiomaController } from "./controllers/biomaController";
import { Service } from "./services/Service";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/mobs", MobController.inserir);
app.post("/biomas", BiomaController.inserir);

async function teste(){
    await Service.inserirBiomas();
}

teste();

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});