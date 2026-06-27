import { createPool } from 'mysql2/promise';

const pool = createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'mobs_interdiciplinar1',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'trabalho_interdiciplinar_mobs',
  waitForConnections: true,
  connectionLimit:    10,
});

// Testa a conexão ao iniciar a aplicação
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conectado ao banco de dados com sucesso.');
    connection.release();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
}
 
export default pool;
const _testConnection = testConnection;
export { _testConnection as testConnection };