"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    neetScore: "",
    state: "",
  });

  // ✅ Popup open hone par
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);

      // 👉 popup open = body me class add
      document.body.classList.add("popup-open");
      document.body.style.overflow = "hidden";
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // ❌ Agar popup band ho to kuch render hi nahi
  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Popup close hone par
  const closePopup = () => {
    setOpen(false);

    // 👉 popup close = body se class hatao
    document.body.classList.remove("popup-open");
    document.body.style.overflow = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.state) {
      alert("Please fill all required fields");
      return;
    }

    setSubmitted(true);

    // 2 sec baad popup band
    setTimeout(() => {
      closePopup();
    }, 2000);

    fetch("/api/popup-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {!submitted ? (
          <>
            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>

            <h2>Get Free Counselling</h2>
            <p>Fill your details & talk to our expert</p>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                name="neetScore"
                placeholder="NEET Score (Optional)"
                value={form.neetScore}
                onChange={handleChange}
              />

              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Bihar</option>
                <option>Rajasthan</option>
                <option>Madhya Pradesh</option>
                <option>Other</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "32px 10px" }}>
            <h2 style={{ color: "#16a34a" }}>Thank You!</h2>
            <p>We’ll contact you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
