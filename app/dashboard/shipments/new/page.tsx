"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewShipment() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    origin: "",
    destination: "",
    weight: 0,
  });

  const handleSubmit = async () => {
    await fetch("/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        expeditorId: "USER_ID", // TODO auth
      }),
    });

    router.push("/dashboard/shipments");
  };

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold">New Shipment</h1>

      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Origin" onChange={(e) => setForm({ ...form, origin: e.target.value })} />
      <input placeholder="Destination" onChange={(e) => setForm({ ...form, destination: e.target.value })} />
      <input type="number" placeholder="Weight" onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })} />

      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">
        Create
      </button>
    </div>
  );
}