require('dotenv').config();
import express, { json, Request, Response, NextFunction } from 'express';
import { testConnection } from './config/db';
import mobRoutes from './routes/mobRoutes';
import biomaRoutes from './routes/biomaRoutes';

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middlewares
app.use(json());

// Rotas
app.use('/mobs', mobRoutes);
app.use('/biomas', biomaRoutes);

// Health check
app.get('/', (req: Request, res: Response) => res.json({ status: 'ok', message: 'Astroworld API' }));

// Tratamento de erros global
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno no servidor.' });
});

app.listen(PORT, async () => {
    try {
        console.log(`Servidor rodando em http://localhost:${PORT}`);

        await testConnection();

        console.log("Servidor iniciado com sucesso!");

    } catch (error) {
        console.error("Erro ao iniciar:", error);
    }
});