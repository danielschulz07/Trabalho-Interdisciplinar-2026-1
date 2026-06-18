import { consumoAPI } from "./consumoAPI";
import { Mobs } from "./Mobs";

async function main() {
    const mob = await consumoAPI.consultaMob("zomb");

    console.log(mob);

    const bioma = await consumoAPI.consultaBioma("desert")


    console.log(bioma)
}

main();

const mob = new Mobs("aaa", "sda", 2, "144", )