import mysql from 'mysql2/promise';

export async function CreateConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'system_idf'
    });
    return connection;
  } catch (err) {
    console.log('Database connection error:', err);
  }
}

