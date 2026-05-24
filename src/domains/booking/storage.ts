import fs from "fs";
import path from "path";
import type { Booking, BookingSettings } from "./types";
import { DEFAULT_BOOKING_SETTINGS } from "./data";

const BOOKINGS_FILE = "coffee-chat-bookings.json";
const SETTINGS_FILE = "coffee-chat-settings.json";

function readJsonFile<T>(filename: string, fallback: T): T {
  const filePath = path.join(process.cwd(), filename);
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function writeJsonFile<T>(filename: string, data: T): void {
  const filePath = path.join(process.cwd(), filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

export function readBookings(): Booking[] {
  return readJsonFile<Booking[]>(BOOKINGS_FILE, []);
}

export function writeBookings(bookings: Booking[]): void {
  writeJsonFile(BOOKINGS_FILE, bookings);
}

export function readSettings(): BookingSettings {
  return readJsonFile<BookingSettings>(SETTINGS_FILE, DEFAULT_BOOKING_SETTINGS);
}

export function writeSettings(settings: BookingSettings): void {
  writeJsonFile(SETTINGS_FILE, settings);
}
