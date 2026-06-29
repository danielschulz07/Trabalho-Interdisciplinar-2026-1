import { Request, Response } from "express";
import { Service } from "../services/Service";

export class BiomaController {


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

    static listar(){
        console.log("Bioma Controller: Listando biomas");
    }

    static mostrar(){
        console.log("Bioma Controller: mostrando bioma");
    }

    static atualizar(){
        console.log("Bioma Controller: atualizando bioma");
    }

    static deletar(){
        console.log("Bioma Controller: deletando bioma");
    }
}