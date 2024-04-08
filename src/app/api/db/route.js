import { NextResponse, NextRequest } from 'next/server'
import mariadb from 'mariadb';


// for connecting to the database
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testwindb'
});

export async function POST(request) {
  // Parsing all the data received from the form
  const body = await request.json();
  const firstName = body['data']['name'];
  const email = body['data']['email'];
  const message = body['data']['message'];
  const phoneNumber = body['data']['phoneNumber'];

  try {
    // WRITING CODE FOR STORING THE DATA IN DATABASE HERE 
    // Connecting to the database
    const conn = await pool.getConnection();
    // Running the insert queries
    const insert_query = await conn.query('INSERT INTO customers (customer_name, customer_email, customer_contact_no,customer_message) VALUES (?, ?, ?,?)', [firstName,email,phoneNumber,message]);
    conn.release();
    return NextResponse.json({ message: "DATA ADDED SUCCESSFULLY" });

  } catch (error) {
      console.log(error)
      NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
  }
}

export async function GET(res) {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM customers');
    conn.release();
    return NextResponse.json({ message: rows });
  // res.status(200).json(rows);
}