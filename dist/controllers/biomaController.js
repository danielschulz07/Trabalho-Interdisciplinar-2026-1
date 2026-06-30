"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaController = void 0;
class BiomaController {
    _vetBiomas = [];
    static async inserir(req, res) {
        console.log("Entrou no Controller");
        try {
            await Service_1.Service.inserirBiomasAPI();
            console.log("Service finalizado");
            res.status(201).json({
                mensagem: "Biomas importados com sucesso!"
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                erro: error.message
            });
        }
    }
    static async listar() {
        try {
            const response = await Service_1.Service.selecionarTodosBiomas();
            return response;
        }
        catch (e) {
            return "Erro ao tentar listar dados: " + e.message;
        }
    }
    static async mostrar(bioma) {
        try {
            console.log("Bioma Controller: mostrando bioma");
            const response = await Service_1.Service.selecionarBioma(bioma.nome);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    static async atualizar(nomeBioma, coluna, valor) {
        try {
            console.log("Bioma Controller: atualizando bioma");
            const response = await Service_1.Service.atualizarBioma(nomeBioma, coluna, valor);
            if (response == null) {
                throw new Error("Não foi possível atualizar o bioma.");
            }
            return response;
        }
        catch (e) {
            return e.message;
        }
    }
    static async deletar(nomeBioma) {
        try {
            console.log("Bioma Controller: deletando bioma");
            const response = await Service_1.Service.deletarBioma(nomeBioma);
            if (!response) {
                throw new Error("Não foi possível deletar o bioma.");
            }
            return response;
        }
        catch (e) {
            return e.message;
        }
    }
    pesquisarPorCriterio(criterio) {
        return this._vetBiomas.filter(b => b.atendeCriterio(criterio));
    }
}
exports.BiomaController = BiomaController;
//# sourceMappingURL=biomaController.js.map