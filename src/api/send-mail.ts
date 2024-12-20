'use server';
import nodemailer from 'nodemailer';
import { IMessage } from "../app/interfaces";
import Link from "next/link";
import LinkWithIcon from "../app/components/shared/linkWithIcon";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 456,
  secure: true,
  from: 'freelancer@christiandechant.de',
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
                                 name,
                                 email,
                                 sendTo,
                                 text,
                               }: IMessage) {
  try {
    await transporter.verify();
  } catch ( error ) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }

  console.log(name, email);
  const info = await transporter.sendMail({
    from: 'No-reply@christiandechant.de <freelancer@christiandechant.de>',
    to: SITE_MAIL_RECIEVER,
    subject: 'New contact Request',
    html: buildPrivateMail(text, email, name),
  });

  await transporter.sendMail({
    from: 'No-reply@christiandechant.de <freelancer@christiandechant.de>',
    to: sendTo,
    subject: 'christiandechant.de: Contact Form Submission Received!',
    html: buildRecipientMail(text, email, name),
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}

function buildPrivateMail(text: string, email: string, name: string) {
  return `
  <!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New contact request</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    h2 {
      color: #555;
    }
    .email-content {
      margin-bottom: 20px;
    }
    .email-content p {
      margin: 5px 0;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <h2>New contact request</h2>
    <div class="email-content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${text}</p>
    </div>
    <div class="footer">
      <p>These is an automatic notification. Please do not anser on this mail..</p>
    </div>
  </div>
</body>
</html>
  `
}

function buildRecipientMail(text: string, email: string, name: string) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission Received</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    h2 {
      color: #555;
    }
    .email-content {
      margin-bottom: 20px;
    }
    .email-content p {
      margin: 5px 0;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <h2>Contact Form Submission Received</h2>
    <div class="email-content">
      <p>Thank you for reaching out! I have received your message, and I will get back to you as soon as possible. Cheers, Christian</p>
      <p><strong>Your Message:</strong></p>
      <p><strong>Name:</strong> ${ name }</p>
      <p><strong>Email:</strong> ${ email }</p>
      <p><strong>Message:</strong></p>
      <p>${ text }</p>
    </div>
    <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-family: Arial, sans-serif; font-size: 14px; color: #555;">
    <p style="margin: 0; padding: 10px 0;">
        &copy; 2024 Christian Dechant. All rights reserved.
    </p>
    <p style="margin: 0; padding: 10px 0;">
        <a href="https://christiandechant.de/imprint" style="text-decoration: none; color: #007BFF; margin-right: 15px;">Imprint</a>
        <a href="https://christiandechant.de/privacy-policy" style="text-decoration: none; color: #007BFF;">Privacy Policy</a>
    </p>
    <p style="margin: 0; padding: 10px 0; font-size: 12px; color: #888;">
        This is an automated email. For urgent inquiries, please contact me directly.
    </p>
    </div>
  </div>
</body>
</html>
  `
}