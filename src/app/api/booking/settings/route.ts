import { NextResponse } from "next/server";
import { readSettings, writeSettings } from "@/domains/booking/storage";
import type { BookingSettings } from "@/domains/booking/types";

export async function GET() {
  const settings = readSettings();
  return NextResponse.json({ settings });
}

export async function PUT(request: Request) {
  try {
    const { settings, adminToken } = (await request.json()) as {
      settings: BookingSettings;
      adminToken: string;
    };

    if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!settings || !Array.isArray(settings.availableDays) || !settings.startHour || !settings.endHour) {
      return NextResponse.json({ error: "Invalid settings format" }, { status: 400 });
    }

    writeSettings(settings);
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error("Settings update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
