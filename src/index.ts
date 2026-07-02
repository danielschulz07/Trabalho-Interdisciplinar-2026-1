import express from "express";
import * as dotenv from "dotenv";
//import { MobController } from "./controllers/mobController";
//import { BiomaController } from "./controllers/biomaController";
import mobRoutes from './routes/mobRoutes';
import biomaRoutes from './routes/biomaRoutes';
import { testConnection } from './config/db';
//import { Service } from "./services/Service";

//dotenv.config();
const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.use('/mobs', mobRoutes);
app.use('/biomas', biomaRoutes);

//console.log(BiomaController);
//app.post("/mobs", MobController.inserir);
//app.post("/biomas", BiomaController.inserir);
//app.get("/listarbiomas", BiomaController.listar);

app.listen(PORT, async () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);

        await testConnection();

        console.log("Servidor iniciado com sucesso!");
});
 

//async function teste(){
    //await Service.inserirBiomas();
    //const resposta = await Service.atualizarBioma('Plains', 'categoria', 'teste');
    //console.log(resposta);
//}

//teste();