import { CreateConnection } from '../db/connection.js';

export async function Login(req, res) {
  try {
    console.log('בקשה חדשה לכניסה');
    const { name, password } = req.body;
    const connection = await CreateConnection();
    const query = `SELECT * FROM users WHERE name = ? AND password = ?`;
    const [rows] = await connection.execute(query, [name, password]);

    if (rows.length === 0) {
      return res.status(404).send(`User not found: ${name}`);
    }

    res.status(200).json({ data: rows });
  } catch (err) {
    console.log('Login error:', err);
    res.status(400).json({ error: err });
  }
}

export async function Enrollment(req, res) {
  try {
    console.log('בקשה חדשה להרשמה');
    const { name, password } = req.body;
    const connection = await CreateConnection();
    const role = 'user';
    const query = `INSERT INTO users (name, password) VALUES (?, ?)`;
    await connection.execute(query, [name, password]);

    res.status(201).json({ message: 'Insert successfully' });
  } catch (err) {
    console.log('Enrollment error:', err);
    res.status(500).json({ message: 'Invalid error' });
  }
}
