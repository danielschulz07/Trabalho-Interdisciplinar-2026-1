require('dotenv').config();

import express, { json } from 'express';
import { testConnection } from './config/db';
import mobRoutes from './src/routes/mobRoutes';
import biomaRoutes from './src/routes/biomaRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(json());

// Rotas
app.use('/mobs', mobRoutes);
app.use('/biomas', biomaRoutes);

// Health check
app.get('/', (req, res) => res.json({ status: 'ok', message: 'Products API' }));

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno no servidor.' });
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  await testConnection();
});