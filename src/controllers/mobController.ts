import { Service } from "../services/Service";

export class MobController {
    static async carregarMobs(): Promise<void> {
        await Service.carregarMobs();
    }

    static listar(){
        console.log("Mob Controller: Listando mobs");
    }

    static mostrar(){
        console.log("Mob Controller: mostrando mob");
    }

    static inserir(){
        console.log("Mob Controller: inserindo mob");
    }

    static atualizar(){
        console.log("Mob Controller: atualizando mob");
    }

    static deletar(){
        console.log("Mob Controller: deletando mob");
    }
}