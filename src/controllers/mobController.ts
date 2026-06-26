import { Service } from "../services/Service";

export class MobController {
    static async carregarMobs(): Promise<void> {
        await Service.carregarMobs();
    }






    
}