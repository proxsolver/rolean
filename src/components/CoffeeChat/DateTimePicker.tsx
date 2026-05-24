"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./DateTimePicker.module.css";

interface DateTimePickerProps {
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (date: string) => void;
  onSlotChange: (slot: string) => void;
}

export default function DateTimePicker({
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
}: DateTimePickerProps) {
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const minDateStr = minDate.toISOString().slice(0, 10);
  const maxDateStr = maxDate.toISOString().slice(0, 10);

  const fetchSlots = useCallback(async (date: string) => {
    if (!date) {
      setSlots([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/booking/slots?date=${date}`);
      if (response.ok) {
        const data = (await response.json()) as { slots: string[] };
        setSlots(data.slots);
      } else {
        setSlots([]);
      }
    } catch {
      setSlots([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSlots(selectedDate);
  }, [selectedDate, fetchSlots]);

  return (
    <div className={styles.pickerWrapper}>
      <input
        type="date"
        className={styles.dateInput}
        value={selectedDate}
        min={minDateStr}
        max={maxDateStr}
        onChange={(e) => {
          onDateChange(e.target.value);
          onSlotChange("");
        }}
      />

      {selectedDate && (
        <>
          <p className={styles.slotsLabel}>시간 선택 (30분)</p>
          {loading ? (
            <p className={styles.loading}>시간 불러오는 중...</p>
          ) : slots.length > 0 ? (
            <div className={styles.slotsGrid}>
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`${styles.slotButton} ${selectedSlot === slot ? styles.slotButtonActive : ""}`}
                  onClick={() => onSlotChange(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          ) : (
            <p className={styles.noSlots}>선택 가능한 시간이 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
}
