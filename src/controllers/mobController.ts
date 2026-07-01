import { Request, Response } from "express";
import pool from "../config/db";
import { MobService } from "../services/MobService";

export class MobController{

    static async inserir(req: Request, res: Response) {
    try {

        await MobService.inserirMob();

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