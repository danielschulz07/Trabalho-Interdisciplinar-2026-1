"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaController = void 0;
const BiomaService_1 = require("../services/BiomaService");
class BiomaController {
    _vetBiomas = [];
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
    static async getBiomas(reg, res) {
        const biomas = await BiomaService_1.BiomaService.getBiomas();
        return res.json(biomas);
        // try {
        //     const response = await Service.selecionarTodosBiomas();
        //     return response;
        // } catch(e: any) {
        //     return "Erro ao tentar listar dados: " + e.message;
        // }
    }
    static async getBioma(req, res) {
        const nomeBioma = req.params.nome;
        const bioma = await BiomaService_1.BiomaService.getBioma(nomeBioma);
        return res.json(bioma);
    }
    static async insertBioma(req, res) {
        //const nomeBioma: string = req.params.nome as string;
        //const bioma = await BiomaService.getBioma(nomeBioma);
        console.log("Insert bioma no controller");
        return res.json({ message: "Insert bioma no controller" });
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
    pesquisarPorCriterio(criterio) {
        return this._vetBiomas.filter(b => b.atendeCriterio(criterio));
    }
}
exports.BiomaController = BiomaController;
//# sourceMappingURL=biomaController.js.map