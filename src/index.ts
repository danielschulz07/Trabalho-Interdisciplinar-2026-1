import { Bioma } from "./Bioma";
import { Mob } from "./Mob";
import { BiomaController } from "./biomaController";
import { MobController } from "./mobController";
//import { IPesquisavel } from "./IPesquisavel";
import { Service } from "./Service";



async function main() {


    await BiomaController.carregarBiomas()


    //await Service.carregaMobs();
    //console.log(Service.listarMobs())

}

main();
