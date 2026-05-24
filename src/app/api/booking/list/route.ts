import { NextResponse } from "next/server";
import { readBookings } from "@/domains/booking/storage";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const adminToken = searchParams.get("adminToken");

    if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = readBookings();
    const sorted = bookings.sort(
      (a, b) => new Date(b.date + "T" + b.timeSlot).getTime() - new Date(a.date + "T" + a.timeSlot).getTime()
    );

    return NextResponse.json({ bookings: sorted });
  } catch (error) {
    console.error("Booking list error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
