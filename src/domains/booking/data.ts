import type { BookingSettings } from "./types";

export const DEFAULT_BOOKING_SETTINGS: BookingSettings = {
  availableDays: [1, 2, 3, 4, 5],
  startHour: "09:00",
  endHour: "17:00",
  unavailableDates: [],
  minBookingNoticeHours: 24,
  maxBookingDaysAhead: 30,
};

export function generateTimeSlots(startHour: string, endHour: string): string[] {
  const [startH, startM] = startHour.split(":").map(Number);
  const [endH, endM] = endHour.split(":").map(Number);
  const slots: string[] = [];

  let current = startH * 60 + startM;
  const end = endH * 60 + endM - 30;

  while (current <= end) {
    const h = Math.floor(current / 60);
    const m = current % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    current += 30;
  }

  return slots;
}
