"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewShipmentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    origin: "",
    destination: "",
    weight: "",
  });

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/dashboard/shipments");
    } else {
      alert("Error creating shipment");
    }
  }

  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">➕ New Shipment</h1>

      <form onSubmit={submit} className="space-y-3">
        <input
          name="title"
          placeholder="Title"
          onChange={update}
          className="w-full border p-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={update}
          className="w-full border p-2"
        />

        <input
          name="origin"
          placeholder="Origin"
          onChange={update}
          className="w-full border p-2"
        />

        <input
          name="destination"
          placeholder="Destination"
          onChange={update}
          className="w-full border p-2"
        />

        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          onChange={update}
          className="w-full border p-2"
        />

        <button
          className="bg-black text-white px-4 py-2 rounded"
          type="submit"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
}