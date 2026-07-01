import pool from "../config/db";

export class Repository {

    static async inserirMob(id_bioma: number, nome: string, vida: number, tipo: string) {

        const [result]: any = await pool.query(
            `INSERT INTO Mobs(id_bioma,nome,vida,tipo)
             VALUES (?,?,?,?)`,
            [id_bioma, nome, vida, tipo]
        );
        return result.insertId;
    }


    static async inserirMobHostil(id_mob: number, dano: number) {
        await pool.query(
            `INSERT INTO MobsHostis(id_mob,dano)
             VALUES (?,?)`,
            [id_mob, dano]
        );
    }

    static async inserirMobPassivo(id_mob: number) {
        await pool.query(
            `INSERT INTO MobsPassivos(id_mob)
             VALUES (?)`,
            [id_mob]
        );
    }

static async deletarMob(nome: string): Promise<boolean> {
        console.log("Deletando Mob no banco de dados...");
        const result: any = await pool.query(
            `DELETE FROM Mobs WHERE nome = ?`, [nome]
        );
        return result.affectedRows > 0;

    }

    static async atualizarMob(nome: string, coluna: string, novoValor: string): Promise<any> {
        console.log("Atualizando bioma no banco de dados...");

        const result: any = await pool.query(
            `UPDATE Biomas SET ? = ? WHERE nome = ?`, [coluna, novoValor, nome]
        );

        if(result.affectedRows === 0) return null;

    }

    static async selecionarMob(nome: string): Promise<any> {
        console.log("Selecionando mob no banco de dados...");

        const result: any = await pool.query(
            `SELECT * FROM Mobs WHERE nome = ?`, [nome]
        );

        return result;
    }



    static async selecionarTodosMobs(): Promise<any[]> {
        console.log("Selecionando todos os mobs do banco de dados...");

        const [result]: any = await pool.query(
            `SELECT * FROM Mobs`

        );

        return result;
    }










    static async inserirBioma(nome: string, dimensao: string, categoria: string): Promise<number> {
        console.log("Fazendo insert dos biomas no banco de dados...");

        const [result]: any = await pool.query(
            `INSERT INTO Biomas (nome, dimensao, categoria) VALUES (?, ?, ?)`, [nome, dimensao, categoria]
        );
        
        return result.insertId;
    }

    static async deletarBioma(nome: string): Promise<boolean> {
        console.log("Deletando bioma no banco de dados...");

        const result: any = await pool.query(
            `DELETE FROM Biomas WHERE nome = ?`, [nome]
        )
                return result.affectedRows > 0;
    }




    static async atualizarBioma(nome: string, coluna: string, novoValor: string): Promise<any> {
        console.log("Atualizando bioma no banco de dados...");

        const result: any = await pool.query(
            `UPDATE Biomas SET ? = ? WHERE nome = ?`, [coluna, novoValor, nome]
        );

        if(result.affectedRows === 0) return null;

    }





    static async selecionarBioma(nome: string): Promise<any> {
        console.log("Selecionando bioma no banco de dados...");

        const result: any = await pool.query(
            `SELECT * FROM Biomas WHERE nome = ?`, [nome]
        ) 
        if(result.affectedRows === 0) return null;
        return this.selecionarMob(nome);
    }

}