import { NextResponse } from "next/server";
import { readBookings, writeBookings } from "@/domains/booking/storage";

export async function POST(request: Request) {
  try {
    const { bookingId, adminToken } = (await request.json()) as {
      bookingId: string;
      adminToken: string;
    };

    if (!bookingId || !adminToken) {
      return NextResponse.json({ error: "bookingId and adminToken are required" }, { status: 400 });
    }

    if (adminToken !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = readBookings();
    const booking = bookings.find((b) => b.id === bookingId);

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    if (booking.status === "cancelled") {
      return NextResponse.json({ error: "Already cancelled" }, { status: 400 });
    }

    booking.status = "cancelled";

    try {
      const { cancelCalendarEvent } = await import("@/domains/booking/google-calendar");
      if (booking.googleEventId) {
        await cancelCalendarEvent(booking.googleEventId);
      }
    } catch (err) {
      console.error("Google Calendar cancel error:", err);
    }

    writeBookings(bookings);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking cancel error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
