export class consumoAPI {

    static async consultaMob(mob: string): Promise<JSON> {
        const url = `https://api.astroworldmc.com/api/v1/mobs?search=${mob}`
        const response: Response = await fetch(url);

        if (response.ok) {
            return response.json();
        } else {
            throw new SyntaxError(`HTTP error! Status: ${response.status}`);
        }
    }

        static async consultaBioma(bioma: string): Promise<JSON> {
        const url = `https://api.astroworldmc.com/api/v1/biomes?search=${bioma}`
        const response: Response = await fetch(url);

        if (response.ok) {
            return response.json();
        } else {
            throw new SyntaxError(`HTTP error! Status: ${response.status}`);
        }
    }
  } 