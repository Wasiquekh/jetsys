export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name: string;
  email: string;
  companyName?: string;
  designation?: string;
  contactNumber?: string;
  city?: string;
  message: string;
  phone?: string; // legacy
};

function esc(s: string) {
  return s.replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ]!)
  );
}

export async function POST(request: Request) {
  try {
    // ✅ Env checks
    const requiredEnvVars = [
      "CPANEL_EMAIL_HOST",
      "CPANEL_EMAIL_USER",
      "CPANEL_EMAIL_PASSWORD",
      "EMAIL_RECEIVER",
    ] as const;
    const missing = requiredEnvVars.filter((v) => !process.env[v]);
    if (missing.length) {
      console.error("Missing env:", missing);
      return NextResponse.json(
        {
          status: 500,
          message: "Server configuration error",
          error: `Missing: ${missing.join(", ")}`,
        },
        { status: 500 }
      );
    }

    // ✅ Read body (typed) + fallback for old 'phone'
    const body = (await request.json()) as ContactBody;
    const {
      name,
      email,
      companyName,
      designation,
      contactNumber,
      city,
      message,
    } = body;
    const phone = body.phone ?? contactNumber;

    // ✅ Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          status: 400,
          message:
            "All fields are required (name, email, contactNumber, message)",
        },
        { status: 400 }
      );
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.CPANEL_EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.CPANEL_EMAIL_USER!,
        pass: process.env.CPANEL_EMAIL_PASSWORD!,
      },
    });

    await transporter.verify();

    const cleanMsg = String(message).replace(/\s+/g, " ").trim();

    const mailOptions = {
      from: `"${process.env.NEXT_PUBLIC_SITE_NAME || "Website"} Contact" <${
        process.env.CPANEL_EMAIL_USER
      }>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New Contact Submission: ${esc(name)}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
          <h2 style="color:#333;margin:0 0 12px">Subject: Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;border:1px solid #ddd;width:160px"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
              name
            )}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
              email
            )}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Contact Number</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
              String(phone)
            )}</td></tr>
            ${
              companyName
                ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Company Name</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
                    companyName
                  )}</td></tr>`
                : ""
            }
            ${
              designation
                ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Designation</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
                    designation
                  )}</td></tr>`
                : ""
            }
            ${
              city
                ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>City</strong></td><td style="padding:8px;border:1px solid #ddd">${esc(
                    city
                  )}</td></tr>`
                : ""
            }
            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Message</strong></td>
              <td style="padding:8px;border:1px solid #ddd;white-space:normal;word-break:break-word">${esc(
                cleanMsg
              )}</td></tr>
          </table>
          <p style="margin-top:16px;font-size:.9em;color:#666">
            Sent via ${esc(
              process.env.NEXT_PUBLIC_SITE_NAME || "Website"
            )} • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      headers: { "X-Mailer": "Next.js Contact Form", "X-Priority": "1" },
    };

    // ✅ Send with timeout
    const sendPromise = transporter.sendMail(mailOptions);
    const timeout = new Promise((_, rej) =>
      setTimeout(() => rej(new Error("Email sending timed out")), 10000)
    );
    await Promise.race([sendPromise, timeout]);

    return NextResponse.json(
      { status: 200, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    // 🔒 Type-safe narrowing (no 'any')
    let errMessage = "Unknown error";
    let errCode: string | undefined;
    let stack: string | undefined;

    if (typeof err === "object" && err !== null) {
      if (
        "message" in err &&
        typeof (err as { message?: unknown }).message === "string"
      ) {
        errMessage = (err as { message: string }).message;
      }
      if (
        "code" in err &&
        typeof (err as { code?: unknown }).code === "string"
      ) {
        errCode = (err as { code?: string }).code;
      }
      if (
        "stack" in err &&
        typeof (err as { stack?: unknown }).stack === "string"
      ) {
        stack = (err as { stack?: string }).stack;
      }
    }

    console.error("Email Error:", {
      message: errMessage,
      code: errCode,
      stack,
    });

    let userMessage = "An error occurred while sending the email.";
    if (errCode === "EAUTH")
      userMessage = "Authentication failed. Please check email credentials.";
    else if (["ECONNECTION", "ETIMEDOUT"].includes(String(errCode)))
      userMessage = "Unable to connect to the email server.";
    else if (errMessage.includes("timed out"))
      userMessage = "Email server timed out.";

    return NextResponse.json(
      {
        status: 500,
        message: userMessage,
        error: process.env.NODE_ENV === "development" ? errMessage : undefined,
      },
      { status: 500 }
    );
  }
}
