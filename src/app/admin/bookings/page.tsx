"use client";

import { useState, useEffect, useCallback } from "react";
import type { Booking, BookingSettings } from "@/domains/booking/types";
import styles from "./page.module.css";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export default function AdminBookingsPage() {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [settings, setSettings] = useState<BookingSettings | null>(null);
  const [newUnavailable, setNewUnavailable] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-token");
    if (saved) {
      setToken(saved);
      setAuthenticated(true);
    }
  }, []);

  const fetchData = useCallback(async (adminToken: string) => {
    try {
      const [bookingsRes, settingsRes] = await Promise.all([
        fetch(`/api/booking/list?adminToken=${adminToken}`),
        fetch("/api/booking/settings"),
      ]);

      if (bookingsRes.ok) {
        const data = (await bookingsRes.json()) as { bookings: Booking[] };
        setBookings(data.bookings);
      }
      if (settingsRes.ok) {
        const data = (await settingsRes.json()) as { settings: BookingSettings };
        setSettings(data.settings);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, []);

  useEffect(() => {
    if (authenticated && token) {
      fetchData(token);
    }
  }, [authenticated, token, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      sessionStorage.setItem("admin-token", token.trim());
      setAuthenticated(true);
    }
  };

  const toggleDay = (day: number) => {
    if (!settings) return;
    const days = settings.availableDays.includes(day)
      ? settings.availableDays.filter((d) => d !== day)
      : [...settings.availableDays, day].sort();
    setSettings({ ...settings, availableDays: days });
  };

  const addUnavailableDate = () => {
    if (!settings || !newUnavailable) return;
    if (!settings.unavailableDates.includes(newUnavailable)) {
      setSettings({
        ...settings,
        unavailableDates: [...settings.unavailableDates, newUnavailable].sort(),
      });
    }
    setNewUnavailable("");
  };

  const removeUnavailableDate = (date: string) => {
    if (!settings) return;
    setSettings({
      ...settings,
      unavailableDates: settings.unavailableDates.filter((d) => d !== date),
    });
  };

  const saveSettings = async () => {
    if (!settings || !token) return;
    setSaving(true);
    try {
      const response = await fetch("/api/booking/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings, adminToken: token }),
      });
      if (response.ok) {
        alert("설정이 저장되었습니다.");
      }
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setSaving(false);
    }
  };

  const cancelBooking = async (bookingId: string) => {
    if (!token) return;
    if (!confirm("이 예약을 취소하시겠습니까?")) return;

    try {
      const response = await fetch("/api/booking/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, adminToken: token }),
      });
      if (response.ok) {
        await fetchData(token);
      }
    } catch (err) {
      console.error("Cancel error:", err);
    }
  };

  if (!authenticated) {
    return (
      <div className={styles.page}>
        <div className="glass-panel loginCard">
          <h2>관리자 로그인</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="관리자 토큰을 입력하세요"
            />
            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Coffee Chat 관리</h1>
        <a href="/">rolean.org</a>
      </div>

      <div className={styles.content}>
        {settings && (
          <div className="glass-panel">
            <p className={styles.sectionTitle}>예약 설정</p>
            <div className={styles.settingsPanel}>
              <div>
                <label style={{ color: "var(--color-silver)", fontSize: "0.82rem", marginBottom: "0.5rem", display: "block" }}>
                  가능한 요일
                </label>
                <div className={styles.dayToggles}>
                  {DAYS.map((day, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`${styles.dayToggle} ${settings.availableDays.includes(idx) ? styles.dayToggleActive : ""}`}
                      onClick={() => toggleDay(idx)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ color: "var(--color-silver)", fontSize: "0.82rem", marginBottom: "0.5rem", display: "block" }}>
                  가능 시간
                </label>
                <div className={styles.timeRow}>
                  <input
                    type="time"
                    value={settings.startHour}
                    onChange={(e) => setSettings({ ...settings, startHour: e.target.value })}
                  />
                  <span>—</span>
                  <input
                    type="time"
                    value={settings.endHour}
                    onChange={(e) => setSettings({ ...settings, endHour: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ color: "var(--color-silver)", fontSize: "0.82rem", marginBottom: "0.5rem", display: "block" }}>
                  불가능한 날짜
                </label>
                <div className={styles.unavailableList}>
                  {settings.unavailableDates.map((d) => (
                    <span key={d} className={styles.unavailableTag}>
                      {d}
                      <button type="button" onClick={() => removeUnavailableDate(d)}>
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className={styles.addDateRow}>
                  <input
                    type="date"
                    value={newUnavailable}
                    onChange={(e) => setNewUnavailable(e.target.value)}
                  />
                  <button type="button" className={styles.addDateBtn} onClick={addUnavailableDate}>
                    추가
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="btn-primary"
                onClick={saveSettings}
                disabled={saving}
                style={{ width: "fit-content" }}
              >
                {saving ? "저장 중..." : "설정 저장"}
              </button>
            </div>
          </div>
        )}

        <div className="glass-panel">
          <p className={styles.sectionTitle}>예약 목록 ({bookings.length})</p>
          {bookings.length > 0 ? (
            <div className={styles.bookingList}>
              {bookings.map((booking) => (
                <div key={booking.id} className={`glass-panel ${styles.bookingCard}`}>
                  <div className={styles.bookingDate}>
                    {booking.date}
                    <br />
                    {booking.timeSlot}
                  </div>
                  <div className={styles.bookingInfo}>
                    <span className={styles.bookingName}>
                      {booking.name}
                      <span
                        className={`${styles.statusBadge} ${booking.status === "confirmed" ? styles.statusConfirmed : styles.statusCancelled}`}
                      >
                        {booking.status === "confirmed" ? "확정" : "취소"}
                      </span>
                    </span>
                    <span className={styles.bookingEmail}>{booking.email}</span>
                    <span className={styles.bookingTopic}>{booking.topic}</span>
                    {booking.meetLink && (
                      <a
                        href={booking.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#d4af37", fontSize: "0.78rem" }}
                      >
                        Meet 링크
                      </a>
                    )}
                  </div>
                  {booking.status === "confirmed" && (
                    <button
                      type="button"
                      className={styles.cancelBtn}
                      onClick={() => cancelBooking(booking.id)}
                    >
                      취소
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyState}>예약이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
