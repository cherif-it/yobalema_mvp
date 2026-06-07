"use client";

import { useState } from "react";

export default function CreateAvailability() {
  const [form, setForm] = useState({
    fromLocation: "",
    toLocation: "",
    capacity: 0,
    transporterId: "cmq17tsc10000eywb0le07d8c",
  });

  async function submit() {
    await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        departureDate: new Date().toISOString(),
      }),
    });

    alert("Trajet créé !");
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>🚗 Créer un trajet</h2>

      <input placeholder="Départ" onChange={e => setForm({...form, fromLocation: e.target.value})} />
      <input placeholder="Arrivée" onChange={e => setForm({...form, toLocation: e.target.value})} />
      <input placeholder="Capacité" type="number" onChange={e => setForm({...form, capacity: Number(e.target.value)})} />

      <button onClick={submit}>Créer</button>
    </div>
  );
}