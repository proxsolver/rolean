import { NextResponse } from "next/server";
import { readSettings, readBookings } from "@/domains/booking/storage";
import { generateTimeSlots } from "@/domains/booking/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date format (YYYY-MM-DD)" }, { status: 400 });
  }

  const settings = readSettings();

  const bookingDate = new Date(date + "T00:00:00+09:00");
  const dayOfWeek = bookingDate.getDay();

  if (!settings.availableDays.includes(dayOfWeek)) {
    return NextResponse.json({ date, slots: [] });
  }

  if (settings.unavailableDates.includes(date)) {
    return NextResponse.json({ date, slots: [] });
  }

  const now = new Date();
  const minDate = new Date(now.getTime() + settings.minBookingNoticeHours * 60 * 60 * 1000);
  const maxDate = new Date(now.getTime() + settings.maxBookingDaysAhead * 24 * 60 * 60 * 1000);

  if (bookingDate < new Date(minDate.toISOString().slice(0, 10) + "T00:00:00+09:00")) {
    return NextResponse.json({ date, slots: [] });
  }
  if (bookingDate > new Date(maxDate.toISOString().slice(0, 10) + "T23:59:59+09:00")) {
    return NextResponse.json({ date, slots: [] });
  }

  const allSlots = generateTimeSlots(settings.startHour, settings.endHour);

  const bookings = readBookings();
  const bookedSlots = bookings
    .filter((b) => b.date === date && b.status === "confirmed")
    .map((b) => b.timeSlot);

  const isToday = date === now.toISOString().slice(0, 10);
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentTotalMin = currentHour * 60 + currentMin;

  const availableSlots = allSlots.filter((slot) => {
    if (bookedSlots.includes(slot)) return false;
    if (isToday) {
      const [h, m] = slot.split(":").map(Number);
      return h * 60 + m > currentTotalMin;
    }
    return true;
  });

  return NextResponse.json({ date, slots: availableSlots });
}
