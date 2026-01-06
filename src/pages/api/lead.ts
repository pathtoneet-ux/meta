import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ❌ Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  // ✅ Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    // 📧 Mail transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL, // 🔴 Gmail ID
        pass: process.env.SMTP_PASS,  // 🔴 Gmail App Password
      },
    });

    // ✉️ Send mail
    await transporter.sendMail({
      from: `"PathToNeet" <${process.env.SMTP_EMAIL}>`,
      to: "admission@PathToNeet.in",
      subject: "New Counselling Enquiry",
      html: `
        <h3>New Counselling Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({
      success: false,
      message: "Mail sending failed",
    });
  }
}
