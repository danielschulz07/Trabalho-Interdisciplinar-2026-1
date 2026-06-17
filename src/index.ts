import { consumoAPI } from "./consumoAPI";

async function main() {
    const mob = await consumoAPI.consultaMob("zomb");

    console.log(mob);

    const bioma = await consumoAPI.consultaBioma("desert")


    console.log(bioma)
}

main();