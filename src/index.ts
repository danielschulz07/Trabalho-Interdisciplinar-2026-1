import { BiomaController } from "./biomaController";
import { MobController } from "./mobController";
import { Repository } from "./Repository";

async function main() {

    //await BiomaController.carregarBiomas()
    //console.log(Repository.listarBiomas())

    await MobController.carregarMobs();
    console.log(Repository.listarMobs())



}

main();
