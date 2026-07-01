import { Request, Response } from "express";
import { BiomaService } from "../services/BiomaService";
import { Bioma } from "../models/Bioma.js";
import { IPesquisavel } from "../models/IPesquisavel.js";

export class BiomaController {
    _vetBiomas: Array<Bioma> = [];

    /*static async inserir(req: Request, res: Response) {

        console.log("Entrou no Controller");

        try {

            await BiomaService.inserirBiomasAPI();

            console.log("Service finalizado");

            res.status(201).json({
                mensagem: "Biomas importados com sucesso!"
            });

        } catch (error: any) {

            console.error(error);

            res.status(500).json({
                erro: error.message
            });

        }
    }*/

    static async getBiomas(reg: Request, res: Response){
        const biomas = await BiomaService.getBiomas();
        return res.json(biomas);

        // try {

        //     const response = await Service.selecionarTodosBiomas();
        //     return response;

        // } catch(e: any) {

        //     return "Erro ao tentar listar dados: " + e.message;

        // }
    }

    static async getBioma(req: Request, res: Response){

        const nomeBioma: string = req.params.nome as string;
        const bioma = await BiomaService.getBioma(nomeBioma);
        return res.json(bioma);

    }

    static async insertBioma(req: Request, res: Response){
        const { nome, dimensao, categoria } = req.query;
        const resposta = await BiomaService.insertBioma(nome as string, dimensao as string, categoria as string);
        return res.json(resposta);


        //const nomeBioma: string = req.params.nome as string;
        //const bioma = await BiomaService.getBioma(nomeBioma);
        
    }

    /*static async mostrar(bioma: Bioma){
        try {

            console.log("Bioma Controller: mostrando bioma");
            const response = await BiomaService.selecionarBioma(bioma.nome);
            return response;

        } catch(e: any) {
            
            return e;

        }
        
    }*/

    /*static async atualizar(nomeBioma: string, coluna: string, valor: string){
        try {

            console.log("Bioma Controller: atualizando bioma");
            const response = await BiomaService.atualizarBioma(nomeBioma, coluna, valor);
            if(response == null){
                throw new Error("Não foi possível atualizar o bioma.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
        
    }*/

    /*static async deletar(nomeBioma: string){
        try {

            console.log("Bioma Controller: deletando bioma");
            const response = await BiomaService.deletarBioma(nomeBioma);
            if(!response){
                throw new Error("Não foi possível deletar o bioma.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
    }*/

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel>{
        return this._vetBiomas.filter(b => b.atendeCriterio(criterio));
    }
}