import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🚚 Yobalema MVP</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Link href="/create-shipment">📦 Créer un colis</Link>
        <Link href="/create-availability">🚗 Créer un trajet</Link>
        <Link href="/bookings">🤝 Bookings</Link>
      </div>
    </div>
  );
}