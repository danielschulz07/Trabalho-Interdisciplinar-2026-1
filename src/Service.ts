import { consumoAPI } from "./consumoAPI";
import { Bioma } from "./Bioma";
import { Repository } from "./Repository";

export class Service {

    static async carregarBiomas(): Promise<void> {

        const dados = await consumoAPI.consultaBioma("");

        const vetBiomas: Array<Bioma> = [];

        dados.data.forEach((bioma: any) => {

            vetBiomas.push(
                new Bioma(
                    bioma.name,
                    bioma.dimension,
                    bioma.category
                )
            );

        });

        Repository.salvarTodos(vetBiomas);
    }
}