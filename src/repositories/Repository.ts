import pool from "../config/db";
import { Bioma } from "../models/Bioma";
import { Mob } from "../models/Mob";

export class Repository {

    static async inserirMob(id_bioma:number,nome:string,vida:number,tipo:string){

        const [result]:any = await pool.query(
            `INSERT INTO Mobs(id_bioma,nome,vida,tipo)
             VALUES (?,?,?,?)`,
             [id_bioma,nome,vida,tipo]
        );

        return result.insertId;
    }

    static async inserirHostil(id_mob:number,dano:number){

        await pool.query(
            `INSERT INTO MobsHostis(id_mob,dano)
             VALUES (?,?)`,
             [id_mob,dano]
        );

    }

    static async inserirPassivo(id_mob:number){

        await pool.query(
            `INSERT INTO MobsPassivos(id_mob)
             VALUES (?)`,
             [id_mob]
        );

    }




    static async inserirBioma(
    nome: string,
    dimensao: string,
    categoria: string
): Promise<number> {

    const [result]: any = await pool.query(
        `INSERT INTO Biomas (nome, dimensao, categoria)
         VALUES (?, ?, ?)`,
        [nome, dimensao, categoria]
    );

    return result.insertId;
}













}