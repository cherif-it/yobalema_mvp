"use client";

import { useState } from "react";

export default function AvailabilityPage() {
  const [form, setForm] = useState({
    fromLocation: "",
    toLocation: "",
    capacity: 0,
    notes: "",
  });

  async function submit() {
    await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Availability created");
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        🚚 Create Availability
      </h1>

      <div className="flex flex-col gap-2">
        <input
          placeholder="From"
          onChange={(e) =>
            setForm({ ...form, fromLocation: e.target.value })
          }
        />

        <input
          placeholder="To"
          onChange={(e) =>
            setForm({ ...form, toLocation: e.target.value })
          }
        />

        <input
          placeholder="Capacity"
          type="number"
          onChange={(e) =>
            setForm({ ...form, capacity: Number(e.target.value) })
          }
        />

        <input
          placeholder="Notes"
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
        />

        <button onClick={submit}>
          Create
        </button>
      </div>
    </div>
  );
}