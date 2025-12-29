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

  // 🔹 popup show only once per session
  useEffect(() => {
    const shown = sessionStorage.getItem("lead_popup_shown");

    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);

        // ✅ blur + scroll lock
        document.body.classList.add("popup-open");
        document.body.style.overflow = "hidden";

        sessionStorage.setItem("lead_popup_shown", "yes");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const closePopup = () => {
    document.body.classList.remove("popup-open");
    document.body.style.overflow = "";
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.state) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ success message inside popup
    setSubmitted(true);

    // ✅ auto close after 2 sec
    setTimeout(() => {
      closePopup();
    }, 2000);

    // ✅ backend call (background)
    fetch("/api/popup-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              {/* MOBILE */}
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              {/* NEET SCORE (OPTIONAL) */}
              <input
                type="number"
                name="neetScore"
                placeholder="NEET Score (Optional)"
                value={form.neetScore}
                onChange={handleChange}
                min="0"
                max="720"
              />

              {/* STATE DROPDOWN */}
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Haryana">Haryana</option>
                <option value="Punjab">Punjab</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Other">Other</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          // ✅ SUCCESS VIEW
          <div style={{ textAlign: "center", padding: "32px 10px" }}>
            <h2 style={{ color: "#16a34a" }}>Thank You!</h2>
            <p style={{ marginTop: "10px", fontSize: "15px" }}>
              We’ll contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
