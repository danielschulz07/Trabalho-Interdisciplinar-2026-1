import { consumoAPI } from "./consumoAPI";
import { Bioma } from "./Bioma";

export abstract class BiomaController {

private static _vetBiomas: Array<Bioma> = [];


static async criaBiomas(): Promise<Bioma> {
    
    return new Promise(async(resolve, reject) => {
        try{

        const dadosBioma: any = await consumoAPI.consultaBioma("");// passo essa const para o index, pq isso e a view, ai passa o JSON no parametro da função que pega pela view

            dadosBioma.data.forEach((novoBioma: any) => {
                const biomaRetornado = novoBioma;

                const novoBiomaCriado: Bioma = new Bioma(biomaRetornado.name, biomaRetornado.dimension, biomaRetornado.category)


                BiomaController._vetBiomas.push(novoBiomaCriado)
            });
        }catch(error){
            reject(error)
        }
    })
}
}

