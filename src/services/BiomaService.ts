import BiomaRepo from "../repositories/BiomaRepository";

export class BiomaService{

    static async getBiomas(){
        const biomas = BiomaRepo.findAll();

        return biomas;
    }

    static async getBioma(nome: string){
        const bioma = BiomaRepo.selectBioma(nome);

        return bioma;
    }

    static async insertBioma(nome: string, dimensao: string, categoria: string){
        const resposta = BiomaRepo.insertBioma(nome, dimensao, categoria);
        
        return resposta;
    }
}