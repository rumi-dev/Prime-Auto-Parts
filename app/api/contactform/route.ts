import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "primeautopartspro@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "eavp ubky vixo amcg",
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { status: "error", message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create HTML email body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">
              <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-line;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          This message was sent from the contact form on Prime Auto Parts website.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Prime Auto Parts Contact Form" <${process.env.EMAIL_USER || "primeautopartspro@gmail.com"}>`,
      to: "primeautopartspro@gmail.com",
      replyTo: email,
      subject: "Enquiry (Contact Form) from Prime Auto Parts Website",
      html: htmlBody,
    });

    // Save to Google Sheets (placeholder URL - to be updated by user)
    const googleSheetsResponse = await fetch("https://script.google.com/macros/s/AKfycbxoxDwD3vPEDm0U9soj3KZHVIhIK8aybYORdjr2ipK1UvyZUnkhss-pwBihC9yY4vTOLA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!googleSheetsResponse.ok) {
      console.error("Failed to save to Google Sheets");
      // Don't fail the request if Google Sheets fails
    }

    return NextResponse.json({
      status: "success",
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { 
        status: "error", 
        message: "An error occurred while processing your request. Please try again later." 
      },
      { status: 500 }
    );
  }
}
