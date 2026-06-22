import { Service } from "./Service";

export class BiomaController {

    static async carregarBiomas(): Promise<void> {
        await Service.carregarBiomas();
    }

}