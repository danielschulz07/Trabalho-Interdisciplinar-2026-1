import { Request, Response } from "express";
import { Service } from "../services/Service";
import { Mob } from "../models/Mob";
import { IPesquisavel } from "../models/IPesquisavel.js";

export class MobController {
    _vetMobs: Array<Mob> = [];

    static async inserir(req: Request, res: Response) {
        try {
            await Service.inserirMobsAPI();
            console.log("Service finalizado");
            res.status(201).json({
                mensagem: "Mobs importados com sucesso!"
            });

        } catch (error: any) {
            console.error(error);

            res.status(500).json({
                erro: error.message
            });
        }
    }

    static async listar(){
        try {

            const response = await Service.selecionarTodosMobs();
            return response;

        } catch(e: any) {

            return "Erro ao tentar listar dados: " + e.message;

        }
    }

    static async mostrar(mob: Mob){
        try {

            console.log("Mob Controller: mostrando mob");
            const response = await Service.selecionarMob(mob.nome);
            return response;

        } catch(e: any) {
            
            return e;

        }
        
    }

    static async atualizar(nomeMob: string, coluna: string, valor: string){
        try {

            console.log("Mob Controller: atualizando mob");
            const response = await Service.atualizarMob(nomeMob, coluna, valor);
            if(response == null){
                throw new Error("Não foi possível atualizar o mob.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
        
    }

    static async deletar(nomeMob: string){
        try {

            console.log("Mob Controller: deletando mob");
            const response = await Service.deletarMob(nomeMob);
            if(!response){
                throw new Error("Não foi possível deletar o mob.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
    }

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel>{
        return this._vetMobs.filter(b => b.atendeCriterio(criterio));
    }
}