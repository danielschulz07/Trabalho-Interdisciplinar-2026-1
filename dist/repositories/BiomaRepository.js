"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaRepository = void 0;
const db_1 = __importDefault(require("../config/db"));
class BiomaRepository {
    _tableName;
    constructor(tableName) {
        this._tableName = tableName;
    }
    async findAll() {
        const [rows] = await db_1.default.query(`SELECT * FROM ${this._tableName}`);
        return rows;
    }
    async selectBioma(nome) {
        const [row] = await db_1.default.query(`SELECT * FROM ${this._tableName} WHERE nome = '${nome}'`);
        return row;
    }
    async insertBioma(nome, dimensao, categoria) {
        const [row] = await db_1.default.query(`INSERT INTO ${this._tableName} (nome, dimensao, categoria) VALUES ('${nome}', '${dimensao}', '${categoria}')`);
        return row;
    }
}
exports.BiomaRepository = BiomaRepository;
exports.default = new BiomaRepository("Biomas");
//# sourceMappingURL=BiomaRepository.js.map