async function getMatches(id: string) {
    const res = await fetch(`http://localhost:3000/api/match/${id}`, {
      cache: "no-store",
    });
  
    return res.json();
  }
  
  export default async function ShipmentPage({ params }: any) {
    const data = await getMatches(params.id);
  
    return (
      <div style={{ padding: 40 }}>
        <h2>🤝 Matches</h2>
  
        <pre>{JSON.stringify(data.shipment, null, 2)}</pre>
  
        <h3>Transporteurs compatibles</h3>
  
        {data.matches.map((m: any) => (
          <div key={m.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <p>🚗 {m.fromLocation} → {m.toLocation}</p>
            <p>📦 Capacité: {m.capacity}kg</p>
          </div>
        ))}
      </div>
    );
  }