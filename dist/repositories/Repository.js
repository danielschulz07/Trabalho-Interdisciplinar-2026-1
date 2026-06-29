"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const db_1 = __importDefault(require("../config/db"));
class Repository {
    static async inserirMob(id_bioma, nome, vida, tipo) {
        const [result] = await db_1.default.query(`INSERT INTO Mobs(id_bioma,nome,vida,tipo)
             VALUES (?,?,?,?)`, [id_bioma, nome, vida, tipo]);
        return result.insertId;
    }
    static async inserirHostil(id_mob, dano) {
        await db_1.default.query(`INSERT INTO MobsHostis(id_mob,dano)
             VALUES (?,?)`, [id_mob, dano]);
    }
    static async inserirPassivo(id_mob) {
        await db_1.default.query(`INSERT INTO MobsPassivos(id_mob)
             VALUES (?)`, [id_mob]);
    }
    static async inserirBioma(nome, dimensao, categoria) {
        const [result] = await db_1.default.query(`INSERT INTO Biomas (nome, dimensao, categoria)
         VALUES (?, ?, ?)`, [nome, dimensao, categoria]);
        return result.insertId;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map