"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaController = void 0;
const Service_1 = require("../services/Service");
class BiomaController {
    static async inserir(req, res) {
        console.log("Entrou no Controller");
        try {
            await Service_1.Service.inserirBiomas();
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
    static listar() {
        console.log("Bioma Controller: Listando biomas");
    }
    static mostrar() {
        console.log("Bioma Controller: mostrando bioma");
    }
    static atualizar() {
        console.log("Bioma Controller: atualizando bioma");
    }
    static deletar() {
        console.log("Bioma Controller: deletando bioma");
    }
}
exports.BiomaController = BiomaController;
//# sourceMappingURL=biomaController.js.map