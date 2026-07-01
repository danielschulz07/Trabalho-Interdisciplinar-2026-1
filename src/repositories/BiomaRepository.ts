import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export class BiomaRepository{
    _tableName: string;

    constructor(tableName: string){
        this._tableName = tableName;
    }

    static async findAll(){
        const [rows] = await pool.query<T>(
            `SELECT * FROM Biomas`
        );
    }
}