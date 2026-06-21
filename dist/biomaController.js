"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaController = void 0;
const consumoAPI_1 = require("./consumoAPI");
const Bioma_1 = require("./Bioma");
class BiomaController {
    static _vetBiomas = [];
    static async criaBiomas() {
        return new Promise(async (resolve, reject) => {
            try {
                const dadosBioma = await consumoAPI_1.consumoAPI.consultaBioma(""); // passo essa const para o index, pq isso e a view, ai passa o JSON no parametro da função que pega pela view
                dadosBioma.data.forEach((novoBioma) => {
                    const biomaRetornado = novoBioma;
                    const novoBiomaCriado = new Bioma_1.Bioma(biomaRetornado.name, biomaRetornado.dimension, biomaRetornado.category);
                    BiomaController._vetBiomas.push(novoBiomaCriado);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.BiomaController = BiomaController;
//# sourceMappingURL=biomaController.js.map