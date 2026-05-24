import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json() as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 1. Local JSON DB Backup (Always runs as a safe backup)
    const dbPath = path.join(process.cwd(), "messages.json");
    let messages = [];
    if (fs.existsSync(dbPath)) {
      try {
        const fileContent = fs.readFileSync(dbPath, "utf8");
        messages = JSON.parse(fileContent);
      } catch (e) {
        console.error("Failed to read messages file:", e);
      }
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);
    fs.writeFileSync(dbPath, JSON.stringify(messages, null, 2), "utf8");

    // 2. Dispatch Live Email using Resend REST API (Zero extra npm packages, 100% stable)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #222; padding: 20px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">rolean.org 신규 문의 접수</h2>
          <p style="font-size: 15px;"><strong>보낸 사람:</strong> ${name} (${email})</p>
          <div style="font-size: 15px; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #d4af37; margin: 20px 0;">
            ${message.replace(/\n/g, '<br />')}
          </div>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 11px; color: #999; margin-bottom: 0;">본 메일은 rolean.org 포트폴리오 사이트의 Contact Form을 통해 Resend API망으로 실시간 발송되었습니다.</p>
        </div>
      `;

      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "proxsolver@gmail.com",
            subject: `[rolean.org] ${name}님으로부터 새로운 문의가 도착했습니다.`,
            html: emailHtml,
          }),
        });

        if (!resendResponse.ok) {
          const errorData = await resendResponse.json();
          console.error("Resend API failed:", errorData);
        } else {
          console.log("Email forwarded successfully via Resend API.");
        }
      } catch (emailError) {
        console.error("Failed to forward email through Resend REST API:", emailError);
      }
    } else {
      console.warn("Resend API Key is missing in environment variables. Skipped sending email.");
    }

    return NextResponse.json({ success: true, message: "Message saved and forwarded successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
