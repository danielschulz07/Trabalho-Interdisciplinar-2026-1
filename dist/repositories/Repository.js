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
    static async inserirMobHostil(id_mob, dano) {
        await db_1.default.query(`INSERT INTO MobsHostis(id_mob,dano)
             VALUES (?,?)`, [id_mob, dano]);
    }
    static async inserirMobPassivo(id_mob) {
        await db_1.default.query(`INSERT INTO MobsPassivos(id_mob)
             VALUES (?)`, [id_mob]);
    }
    static async deletarMob(nome) {
        console.log("Deletando Mob no banco de dados...");
        const result = await db_1.default.query(`DELETE FROM Mobs WHERE nome = ?`, [nome]);
        return result.affectedRows > 0;
    }
    static async atualizarMob(nome, coluna, novoValor) {
        console.log("Atualizando mob no banco de dados...");
        const result = await db_1.default.query(`UPDATE Mobs SET ? = ? WHERE nome = ?`, [coluna, novoValor, nome]);
        if (result.affectedRows === 0)
            return null;
        return this.selecionarMob(nome);
    }
    static async selecionarMob(nome) {
        console.log("Selecionando mob no banco de dados...");
        const result = await db_1.default.query(`SELECT * FROM Mobs WHERE nome = ?`, [nome]);
        return result;
    }
    static async selecionarTodosMobs() {
        console.log("Selecionando todos os mobs do banco de dados...");
        const [result] = await db_1.default.query(`SELECT * FROM Mobs`);
        return result;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map