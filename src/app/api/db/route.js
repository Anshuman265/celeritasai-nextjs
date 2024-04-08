import { NextApiRequest, NextApiResponse } from 'next';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testwindb'
});

export async function GET(request) {
  const conn = await pool.getConnection();
  const rows = await conn.query('SELECT * FROM users');
  conn.release();
  res.status(200).json(rows);
}