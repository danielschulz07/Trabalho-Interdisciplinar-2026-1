import { Request, Response } from "express";
import { Service } from "../services/Service";
import { Bioma } from "../models/Bioma.js";
import { IPesquisavel } from "../models/IPesquisavel.js";

export class BiomaController {
<<<<<<< HEAD
    _vetBiomas: Array<Bioma> = [];
=======

/*
static async inserir(req: Request, res: Response) {

    console.log("Entrou no Controller");

    try {

        await Service.inserirBiomas();

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
}
>>>>>>> daniel

    static async inserir(req: Request, res: Response) {

        console.log("Entrou no Controller");

        try {

            await Service.inserirBiomasAPI();

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
    }

    static async listar(){
        try {

            const response = await Service.selecionarTodosBiomas();
            return response;

        } catch(e: any) {

            return "Erro ao tentar listar dados: " + e.message;

        }
    }

<<<<<<< HEAD
    static async mostrar(bioma: Bioma){
        try {

            console.log("Bioma Controller: mostrando bioma");
            const response = await Service.selecionarBioma(bioma.nome);
            return response;

        } catch(e: any) {
            
            return e;

        }
        
    }

    static async atualizar(nomeBioma: string, coluna: string, valor: string){
        try {

            console.log("Bioma Controller: atualizando bioma");
            const response = await Service.atualizarBioma(nomeBioma, coluna, valor);
            if(response == null){
                throw new Error("Não foi possível atualizar o bioma.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
        
    }

    static async deletar(nomeBioma: string){
        try {

            console.log("Bioma Controller: deletando bioma");
            const response = await Service.deletarBioma(nomeBioma);
            if(!response){
                throw new Error("Não foi possível deletar o bioma.");
            }
            return response;

        } catch(e: any) {

            return e.message;

        }
    }

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel>{
        return this._vetBiomas.filter(b => b.atendeCriterio(criterio));
    }
}
=======
    static atualizar(){
        console.log("Bioma Controller: atualizando bioma");
    }

    static deletar(){
        console.log("Bioma Controller: deletando bioma");
    }*/
}
>>>>>>> daniel
