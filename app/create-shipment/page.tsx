"use client";

import { useState } from "react";

export default function CreateShipment() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    origin: "",
    destination: "",
    weight: 0,
    expeditorId: "cmq17tsc10000eywb0le07d8c",
  });

  async function submit() {
    await fetch("/api/shipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        date: new Date().toISOString(),
      }),
    });

    alert("Colis créé !");
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>📦 Créer un colis</h2>

      <input placeholder="Titre" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Origine" onChange={e => setForm({...form, origin: e.target.value})} />
      <input placeholder="Destination" onChange={e => setForm({...form, destination: e.target.value})} />
      <input placeholder="Poids" type="number" onChange={e => setForm({...form, weight: Number(e.target.value)})} />

      <button onClick={submit}>Créer</button>
    </div>
  );
}