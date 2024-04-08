import { NextResponse, NextRequest } from 'next/server';
import mariadb from 'mariadb';




const nodemailer = require('nodemailer');
const username = process.env.SMTP_USER;
const password = process.env.SMTP_PASSWORD;
const myEmail = process.env.SMTP_FROM_EMAIL;
// Handles POST requests to /api


export async function POST(request) {
  // Parsing all the data received from the form
  const body = await request.json();
  const firstName = body['data']['name'];
  const email = body['data']['email'];
  const message = body['data']['message'];
  const phoneNumber = body['data']['phoneNumber'];
  
    // THE BELOW CODE IS FOR SENDING AN EMAIL VIA SMTP SERVER
    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: "anshv.iitb@gmail.com",
            pass: "xpoo wzxf icxr zjme",
        },
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: email,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${firstName}</p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}