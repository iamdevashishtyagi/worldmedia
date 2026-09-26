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

    // Email is now optional, but we require a name, message, and at least one contact method (phone or email)
    if (!name || !message || (!phone && !email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your name, message, and at least a phone number or email address.",
        },
        { status: 400 }
      );
    }

    // Create transporter using environment variables (from .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipientEmail = process.env.MAIL_TO || "worldmediancr@gmail.com";
    const senderEmail = process.env.SMTP_USER || "worldmediancr@gmail.com";
    const cleanPhone = phone ? phone.replace(/[^\d+]/g, "") : "";

    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(name);
    const safeEmail = email ? escapeHtml(email) : "";
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeCompany = company ? escapeHtml(company) : "";
    const safeService = service ? escapeHtml(service) : "General Inquiry";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const inquiryTimestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const textBody = `
=== NEW LEAD - WORLD MEDIA NCR ===
Time: ${inquiryTimestamp} (IST)

Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided (Optional)"}
Company / Brand: ${company || "Not specified"}
Service Interested In: ${service || "General Inquiry"}

Campaign Requirements / Message:
${message}

---
Sent from https://worldmediancr.com contact form
`.trim();

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(10, 23, 62, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0A173E; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #FACC15; margin-bottom: 6px;">
                      WORLD MEDIA NCR · LEAD DESK
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      New Client Inquiry Received
                    </h1>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                      Received: ${inquiryTimestamp} IST
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(250, 204, 21, 0.18); color: #FACC15; font-size: 12px; font-weight: 800; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(250, 204, 21, 0.35);">
                      ⚡ Direct Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Highlight Banner -->
          <tr>
            <td style="background-color: #F0F8FF; padding: 16px 32px; border-bottom: 1px solid #D8EAFD;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 13px; color: #0A173E; font-weight: 700;">
                    Interested In:
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: #0A173E; color: #FACC15; font-size: 12px; font-weight: 800; padding: 5px 14px; border-radius: 20px; letter-spacing: 0.3px;">
                      ${safeService}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; color: #0A173E; text-transform: uppercase; letter-spacing: 0.5px;">
                Client Details
              </h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">
                    Full Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0A173E; font-size: 14px; font-weight: 700;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">
                    Phone Number
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0A173E; font-size: 14px; font-weight: 700;">
                    ${
                      phone
                        ? `<a href="tel:${cleanPhone}" style="color: #0A173E; text-decoration: none; font-weight: 800;">${safePhone}</a>`
                        : '<span style="color: #94a3b8; font-style: italic;">Not Provided</span>'
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">
                    Email Address
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0A173E; font-size: 14px;">
                    ${
                      email
                        ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${safeEmail}</a>`
                        : '<span style="color: #94a3b8; font-style: italic;">Not Provided (Optional)</span>'
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">
                    Brand / Company
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0A173E; font-size: 14px; font-weight: 600;">
                    ${safeCompany || '<span style="color: #94a3b8; font-style: italic;">Individual / Not Specified</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">
                    Service Requested
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0A173E; font-size: 14px; font-weight: 700;">
                    ${safeService}
                  </td>
                </tr>
              </table>

              <!-- Requirements Message Box -->
              <h2 style="margin: 24px 0 10px 0; font-size: 14px; font-weight: 800; color: #0A173E; text-transform: uppercase; letter-spacing: 0.5px;">
                Campaign Requirements &amp; Message
              </h2>
              <div style="background-color: #F0F8FF; border-left: 4px solid #0A173E; border-radius: 0 12px 12px 0; padding: 18px 20px; color: #1e293b; font-size: 14px; line-height: 1.6;">
                ${safeMessage}
              </div>

              <!-- Quick Action Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  ${
                    phone
                      ? `
                    <td style="padding-right: 8px;">
                      <a href="tel:${cleanPhone}" style="display: block; text-align: center; background-color: #FACC15; color: #0A173E; padding: 12px 18px; border-radius: 10px; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        📞 Call Client
                      </a>
                    </td>
                    <td style="padding-left: 8px; padding-right: 8px;">
                      <a href="https://wa.me/${cleanPhone.replace("+", "")}?text=Hi%20${encodeURIComponent(name || "")}%2C%20thank%20you%20for%20contacting%20World%20Media%20NCR." style="display: block; text-align: center; background-color: #22c55e; color: #ffffff; padding: 12px 18px; border-radius: 10px; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        💬 WhatsApp
                      </a>
                    </td>
                  `
                      : ""
                  }
                  ${
                    email
                      ? `
                    <td style="padding-left: 8px;">
                      <a href="mailto:${email}?subject=World%20Media%20NCR%20Inquiry%20Response" style="display: block; text-align: center; background-color: #0A173E; color: #ffffff; padding: 12px 18px; border-radius: 10px; font-weight: 800; font-size: 14px; text-decoration: none;">
                        ✉️ Email Reply
                      </a>
                    </td>
                  `
                      : ""
                  }
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #64748b; font-weight: 600;">
                This lead was generated automatically from <a href="https://worldmediancr.com" style="color: #0A173E; text-decoration: underline; font-weight: 700;">worldmediancr.com</a>.
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                World Media NCR · Office Opp. GIC, Dharam Palace, Begum Bridge Road, Meerut · +91 94564 97636
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"${name} (World Media Lead)" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New Inquiry: ${name} — ${service || "Advertising Request"}${company ? ` (${company})` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
