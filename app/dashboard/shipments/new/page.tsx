"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewShipmentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [form, setForm] = useState({
    title: "",
    description: "",
    origin: "",
    destination: "",
    weight: 0,
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!session?.user?.id) {
      setError("You must be logged in");
      return;
    }

    if (!form.title || !form.origin || !form.destination) {
      setError("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/shipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          origin: form.origin,
          destination: form.destination,
          weight: Number(form.weight),
          date: form.date ? new Date(form.date) : null,
          expeditorId: session.user.id,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create shipment");
      }

      const data = await res.json();

      router.push(`/dashboard/shipments/${data.id}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded border">
      <h1 className="text-xl font-bold mb-4">📦 Create Shipment</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="origin"
          placeholder="Origin"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="destination"
          placeholder="Destination"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Creating..." : "Create shipment"}
        </button>
      </form>
    </div>
  );
}