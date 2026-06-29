import { Request, Response } from "express";
import pool from "../config/db";
import { Service } from "../services/Service";

export class MobController{

    static async inserir(req: Request, res: Response) {
    try {

        await Service.inserirMob();

        res.status(201).json({
            mensagem: "Mobs importados com sucesso!"
        });

    } catch (error: any) {

        res.status(500).json({
            erro: error.message
        });

    }
}
}