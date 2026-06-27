"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumoAPI = void 0;
class consumoAPI {
    static async consultaMob(mob) {
        const url = `https://api.astroworldmc.com/api/v1/mobs?search=${mob}`;
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new SyntaxError(`HTTP error! Status: ${response.status}`);
        }
    }
    static async consultaBioma(bioma) {
        const url = `https://api.astroworldmc.com/api/v1/biomes?search=${bioma}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro ao consultar API");
        }
        return await response.json();
    }
}
exports.consumoAPI = consumoAPI;
//# sourceMappingURL=consumoAPI.js.map