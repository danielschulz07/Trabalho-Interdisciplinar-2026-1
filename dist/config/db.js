"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = testConnection;
const promise_1 = __importDefault(require("mysql2/promise"));
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'mobs_interdiciplinar1',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'trabalho_interdiciplinar_mobs',
    waitForConnections: true,
    connectionLimit: 10,
});
// Testa a conexão ao iniciar a aplicação
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conectado ao banco de dados com sucesso.');
        connection.release();
    }
    catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    }
}
exports.default = pool;
//# sourceMappingURL=db.js.map