import { consumoAPI } from "./consumoAPI";

async function main() {
    const mob = await consumoAPI.consultaMob("zomb");

    console.log(mob);
}

main();