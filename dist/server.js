"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const mobRoutes_1 = __importDefault(require("./routes/mobRoutes"));
const biomaRoutes_1 = __importDefault(require("./routes/biomaRoutes"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
// Middlewares
app.use(express_1.default.json());
// Rotas
app.use('/mobs', mobRoutes_1.default);
app.use('/biomas', biomaRoutes_1.default);
// Health check
//app.get('/', (req: Request, res: Response) => res.json({ status: 'ok', message: 'Astroworld API' }));
// Tratamento de erros global
// app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
//   console.error(err);
//   res.status(500).json({ message: 'Erro interno no servidor.' });
// });
app.listen(PORT, async () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    await (0, db_1.testConnection)();
    console.log("Servidor iniciado com sucesso!");
});
//# sourceMappingURL=server.js.map