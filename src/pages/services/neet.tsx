// src/pages/services/neet.tsx
export default function NeetDetails() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">NEET Counselling Details</h1>
      <section>
        <h2 className="text-2xl font-semibold">What we offer</h2>
        <ul className="list-disc pl-6">
          <li>Rank analysis & college matching</li>
          <li>Seat allotment guidance</li>
          <li>Reservation & category support</li>
        </ul>
      </section>
      <section className="mt-6">
        <h3 className="text-xl font-semibold">How to start</h3>
        <p>Call us at <a href="tel:+919217026137">+91-9217026137</a> or use the contact form.</p>
      </section>
    </main>
  );
}
