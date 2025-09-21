// src/app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    const { name, email, phone, company, service, message } = body;
    console.log(body, 'body');
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter using env variables (loaded from .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const textBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company: ${company || "-"}
Service: ${service || "-"}
Message:
${message}
`.trim();

    const htmlBody = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Service:</strong> ${service || "-"}</p>
      <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Contact form: ${name}${company ? ` — ${company}` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
