import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');
const username = process.env.SMTP_USER;
const password = process.env.SMTP_PASSWORD;
const myEmail = process.env.SMTP_FROM_EMAIL;
// Handles POST requests to /api


export async function POST(request) {
    const body = await request.json();
    const firstName = body['data']['firstName'];
    const lastName = body['data']['lastName'];
    const company = body['data']['company'];
    const email = body['data']['email'];
    const message = body['data']['message'];
    console.log(`name: ${firstName} ${lastName}`);

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: "anshv.iitb@gmail.com",
            pass: "",
        },
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: email,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${firstName} ${lastName} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            <p>Company: ${company} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}