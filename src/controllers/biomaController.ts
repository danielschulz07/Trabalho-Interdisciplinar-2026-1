import { Service } from "../services/Service";

export class BiomaController {
    static async carregarBiomas(): Promise<void> {
        await Service.carregarBiomas();
    }

    static listar(){
        console.log("Bioma Controller: Listando biomas");
    }

    static mostrar(){
        console.log("Bioma Controller: mostrando bioma");
    }

    static inserir(){
        console.log("Bioma Controller: inserindo bioma");
    }

    static atualizar(){
        console.log("Bioma Controller: atualizando bioma");
    }

    static deletar(){
        console.log("Bioma Controller: deletando bioma");
    }
}