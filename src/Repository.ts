import { Bioma } from "./Bioma";

export class Repository {

    private static vetBiomas: Array<Bioma> = [];

    static salvarTodos(biomas: Array<Bioma>): void {
        this.vetBiomas.push(...biomas);
    }

    static listar(): Array<Bioma> {
        return this.vetBiomas;
    }
}