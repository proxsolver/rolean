export interface Booking {
  id: string;
  name: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
  status: "confirmed" | "cancelled";
  meetLink: string | null;
  googleEventId: string | null;
  createdAt: string;
}

export interface BookingSettings {
  availableDays: number[];
  startHour: string;
  endHour: string;
  unavailableDates: string[];
  minBookingNoticeHours: number;
  maxBookingDaysAhead: number;
}

export interface BookingRequest {
  name: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
}
