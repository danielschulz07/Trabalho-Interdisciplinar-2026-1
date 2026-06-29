"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importStar(require("express"));
const db_1 = require("./config/db");
const mobRoutes_1 = __importDefault(require("./routes/mobRoutes"));
const biomaRoutes_1 = __importDefault(require("./routes/biomaRoutes"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
// Middlewares
app.use((0, express_1.json)());
// Rotas
app.use('/mobs', mobRoutes_1.default);
app.use('/biomas', biomaRoutes_1.default);
// Health check
app.get('/', (req, res) => res.json({ status: 'ok', message: 'Astroworld API' }));
// Tratamento de erros global
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Erro interno no servidor.' });
});
app.listen(PORT, async () => {
    try {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
        await (0, db_1.testConnection)();
        console.log("Servidor iniciado com sucesso!");
    }
    catch (error) {
        console.error("Erro ao iniciar:", error);
    }
});
//# sourceMappingURL=server.js.map