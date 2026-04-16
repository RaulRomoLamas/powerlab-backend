const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();

const sslEnabled = String(process.env.DB_SSL || 'false').toLowerCase() === 'true';
const sslCaFromEnv = process.env.DB_SSL_CA
  ? process.env.DB_SSL_CA.replace(/\\n/g, '\n')
  : undefined;
const sslCaFromPath = process.env.DB_SSL_CA_PATH
  ? fs.readFileSync(process.env.DB_SSL_CA_PATH, 'utf8')
  : undefined;
const sslCa = sslCaFromEnv || sslCaFromPath;

const sslConfig = sslEnabled
  ? (sslCa
      ? { ca: sslCa }
      : { rejectUnauthorized: false })
  : undefined;

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'carbono_powerlab_db',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: sslConfig
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexion:', err);
    return;
  }
  console.log('Conectado a MySQL');
  connection.release();
});

module.exports = pool;
