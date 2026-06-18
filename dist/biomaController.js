"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iomaController = void 0;
exports.criaBiomas = criaBiomas;
const consumoAPI_1 = require("./consumoAPI");
const Bioma_1 = require("./Bioma");
class iomaController {
}
exports.iomaController = iomaController;
const vetBiomas = []; //esse vetor deve ficar no controller;
async function criaBiomas() {
    return new Promise(async (resolve, reject) => {
        try {
            const dadosBioma = await consumoAPI_1.consumoAPI.consultaBioma("");
            dadosBioma.data.forEach((novoBioma) => {
                const biomaRetornado = novoBioma;
                const novoBiomaCriado = new Bioma_1.Bioma(biomaRetornado.name, biomaRetornado.dimension, biomaRetornado.category);
                vetBiomas.push(novoBiomaCriado);
            });
            console.log(vetBiomas);
            //resolve(novoBioma)
            //console.log(novoBioma)
        }
        catch (error) {
            reject(error);
        }
    });
}
criaBiomas();
//# sourceMappingURL=biomaController.js.map