"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { MobController } from "./controllers/mobController";
//import { BiomaController } from "./controllers/biomaController";
const mobRoutes_1 = __importDefault(require("./routes/mobRoutes"));
const biomaRoutes_1 = __importDefault(require("./routes/biomaRoutes"));
const db_1 = require("./config/db");
//import { Service } from "./services/Service";
//dotenv.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
app.use(express_1.default.json());
app.use('/mobs', mobRoutes_1.default);
app.use('/biomas', biomaRoutes_1.default);
//app.post("/mobs", MobController.inserir);
//app.post("/biomas", BiomaController.inserir);
//app.get("/listarbiomas", BiomaController.listar);
app.listen(PORT, async () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    await (0, db_1.testConnection)();
    console.log("Servidor iniciado com sucesso!");
});
//async function teste(){
//await Service.inserirBiomas();
//const resposta = await Service.atualizarBioma('Plains', 'categoria', 'teste');
//console.log(resposta);
//}
//teste();
// app.listen(3000, () => {
//     console.log("Servidor rodando em http://localhost:3000");
// });
//# sourceMappingURL=index.js.map