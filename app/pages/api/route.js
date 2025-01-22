// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text, html } = req.body;

    // Create the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or another email service
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL, // Sender address
      to, // Recipient address
      subject, // Subject line
      text, // Plain text body
      html, // HTML body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      return res.status(500).json({ error: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
