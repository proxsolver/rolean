import { randomUUID } from "crypto";
import { sign } from "crypto";

let cachedToken: { token: string; expiresAt: number } | null = null;

function getCredentials() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!email || !privateKey || !calendarId) {
    return null;
  }

  return { email, privateKey, calendarId };
}

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }

  const creds = getCredentials();
  if (!creds) throw new Error("Google Calendar credentials not configured");

  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      iss: creds.email,
      scope: "https://www.googleapis.com/auth/calendar",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url");

  const signResult = sign("RSA-SHA256", Buffer.from(`${header}.${payload}`), creds.privateKey);
  const signature = signResult.toString("base64url");
  const jwt = `${header}.${payload}.${signature}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Token exchange failed: ${error}`);
  }

  const data = (await response.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.token;
}

export async function createCalendarEvent(params: {
  name: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
}): Promise<{ eventId: string; meetLink: string }> {
  const creds = getCredentials();
  if (!creds) throw new Error("Google Calendar credentials not configured");

  const token = await getAccessToken();

  const [hours, minutes] = params.timeSlot.split(":").map(Number);
  const endMinutes = minutes + 30;
  const endHours = hours + Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;

  const startTime = `${params.date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00+09:00`;
  const endTime = `${params.date}T${String(endHours).padStart(2, "0")}:${String(endMins).padStart(2, "0")}:00+09:00`;

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(creds.calendarId)}/events?conferenceDataVersion=1`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: `Coffee Chat with ${params.name}`,
        description: `Topic: ${params.topic}\nEmail: ${params.email}`,
        start: { dateTime: startTime, timeZone: "Asia/Seoul" },
        end: { dateTime: endTime, timeZone: "Asia/Seoul" },
        conferenceData: {
          createRequest: {
            requestId: randomUUID(),
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Calendar event creation failed: ${error}`);
  }

  const event = (await response.json()) as {
    id: string;
    conferenceData?: { entryPoints?: { uri: string }[] };
  };

  const meetLink = event.conferenceData?.entryPoints?.find((ep) => ep.uri)?.uri || "";

  return { eventId: event.id, meetLink };
}

export async function cancelCalendarEvent(eventId: string): Promise<void> {
  const creds = getCredentials();
  if (!creds) throw new Error("Google Calendar credentials not configured");

  const token = await getAccessToken();

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(creds.calendarId)}/events/${eventId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "cancelled" }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Calendar event cancel failed: ${error}`);
  }
}
