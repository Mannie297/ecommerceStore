import nodemailer from 'nodemailer'

const pass = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL_KEY
const email = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL


export const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    services: 'gmail',
    auth:{
        user: email,
        pass: pass,

    },
});

export const mailOptions = {
    from:email,
    to: email,
};