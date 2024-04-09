import { NextResponse, NextRequest } from 'next/server';
import mariadb from 'mariadb';

const nodemailer = require('nodemailer');
const username = process.env.SMTP_USER;
const smtp_host = process.env.SMTP_HOST;
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
        host: smtp_host,
        secure: true,
        port: 465,
        auth: {
            user: myEmail,
            pass: password,
        },
    });
    // Send the CC mail to sales , send the customer an acknowledgment mail to the customer
    try {
        const mail2 = await transporter.sendMail({
            from: username,
            to: email,
            replyTo: username,
            subject: `Thank you for reaching out to us`,
            html: `
               <p>Thank you very much for reaching out to us. We will get back to you as soon as possible.</p>
            `,
        },
    {
        from: username,
        to: username,
        replyTo: username,
        subject: `Website activity from ${email}`,
        html: `
        <p>Name: ${firstName}</p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        <p>Phone number: ${phoneNumber} </p>
        `,
    })
        return NextResponse.json({ message: "Success: email was sent" })
    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }

}