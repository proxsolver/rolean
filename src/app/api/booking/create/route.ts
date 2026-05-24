import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readBookings, writeBookings, readSettings } from "@/domains/booking/storage";
import type { Booking, BookingRequest } from "@/domains/booking/types";

async function sendConfirmationEmail(booking: Booking) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) return;

  const dateStr = new Date(booking.date + "T00:00:00+09:00").toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const meetSection = booking.meetLink
    ? `<div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px; text-align: center;">
        <p style="margin: 0 0 10px 0; font-weight: 600; color: #333;">Google Meet 링크</p>
        <a href="${booking.meetLink}" style="display: inline-block; padding: 10px 24px; background: #d4af37; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600;">미팅 참여하기</a>
      </div>`
    : `<p style="color: #666;">미팅 링크는 별도로 전송될 예정입니다.</p>`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #222; padding: 20px; border: 1px solid #eaeaea; border-radius: 12px;">
      <h2 style="color: #d4af37; border-bottom: 2px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">커피챗 예약이 확정되었습니다</h2>
      <p style="font-size: 15px;"><strong>이름:</strong> ${booking.name}</p>
      <p style="font-size: 15px;"><strong>일시:</strong> ${dateStr} ${booking.timeSlot} (30분, KST)</p>
      <p style="font-size: 15px;"><strong>주제:</strong></p>
      <div style="font-size: 15px; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #d4af37;">
        ${booking.topic.replace(/\n/g, "<br />")}
      </div>
      ${meetSection}
      <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
      <p style="font-size: 11px; color: #999; margin-bottom: 0;">rolean.org 커피챗 예약 시스템에서 자동 발송되었습니다.</p>
    </div>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: booking.email,
        subject: `[rolean.org] 커피챗 예약 확정 - ${dateStr} ${booking.timeSlot}`,
        html,
      }),
    });
  } catch {
    console.error("Failed to send confirmation email");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;
    const { name, email, topic, date, timeSlot } = body;

    if (!name || !email || !topic || !date || !timeSlot) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const settings = readSettings();
    const bookingDate = new Date(date + "T00:00:00+09:00");
    const dayOfWeek = bookingDate.getDay();

    if (!settings.availableDays.includes(dayOfWeek)) {
      return NextResponse.json({ error: "Selected day is not available" }, { status: 400 });
    }
    if (settings.unavailableDates.includes(date)) {
      return NextResponse.json({ error: "Selected date is not available" }, { status: 400 });
    }

    const bookings = readBookings();
    const alreadyBooked = bookings.some(
      (b) => b.date === date && b.timeSlot === timeSlot && b.status === "confirmed"
    );
    if (alreadyBooked) {
      return NextResponse.json({ error: "This slot is already booked" }, { status: 409 });
    }

    let meetLink: string | null = null;
    let googleEventId: string | null = null;

    try {
      const { createCalendarEvent } = await import("@/domains/booking/google-calendar");
      const result = await createCalendarEvent({ name, email, topic, date, timeSlot });
      meetLink = result.meetLink;
      googleEventId = result.eventId;
    } catch (err) {
      console.error("Google Calendar error (booking still saved):", err);
    }

    const booking: Booking = {
      id: randomUUID(),
      name,
      email,
      topic,
      date,
      timeSlot,
      status: "confirmed",
      meetLink,
      googleEventId,
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);
    writeBookings(bookings);

    await sendConfirmationEmail(booking);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error("Booking create error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
