import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export class BiomaRepository{
    _tableName: string;

    constructor(tableName: string){
        this._tableName = tableName;
    }

    async findAll(){
        const [rows] = await pool.query(
            `SELECT * FROM ${this._tableName}`
        );

        return rows;
    }

    async selectBioma(nome: string){
        const [row] = await pool.query(
            `SELECT * FROM ${this._tableName} WHERE nome = '${nome}'`
        );

        return row;
    }
}

export default new BiomaRepository("Biomas");