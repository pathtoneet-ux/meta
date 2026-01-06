import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, state, neetScore } = req.body;

  // ✅ validation only for popup form
  if (!name || !phone || !state) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PathToNeet – Popup Lead" <${process.env.SMTP_EMAIL}>`,
      to: "admission@PathToNeet.in",
      subject: "🔥 New Popup Lead Received",
      html: `
        <h3>New Popup Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>State:</b> ${state}</p>
        <p><b>NEET Score:</b> ${neetScore || "Not Provided"}</p>
        <hr/>
        <p style="font-size:12px;color:#666">
          Source: Website Popup Form
        </p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Popup lead mail error:", error);
    return res.status(500).json({ success: false });
  }
}
