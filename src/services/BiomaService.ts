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
}