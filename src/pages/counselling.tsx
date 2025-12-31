import Head from "next/head";
import React, { useState } from "react";

export default function CounsellingPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setSuccess(true);
    form.reset();

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {
      console.error("Email send failed");
    });
  };

  return (
    <>
      <Head>
        <title>NEET Counselling 2026 | MBBS Admission Guidance – PathToNEET</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Get expert NEET counselling and MBBS admission guidance in India. Book personalised counselling with PathToNEET."
        />
      </Head>

      <main className="contact-root">
        {/* HERO */}
        <section className="hero">
          <h1>NEET & MBBS Counselling 2026</h1>
          <p>
            Get expert guidance for <strong>NEET counselling</strong> and{" "}
            <strong>MBBS admissions</strong>. Our counsellors respond within
            24 hours.
          </p>

          <div className="hero-cta">
            <a
              href="https://wa.me/919217026137"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              WhatsApp Us
            </a>

            <a href="mailto:admission@pathtoneet.in" className="btn email">
              Email Us
            </a>
          </div>
        </section>

        {/* CONTENT */}
        <section className="container">
          <div className="grid">
            {/* FORM */}
            <div className="card">
              <h2>Book Expert Counselling</h2>
              <p className="muted">
                Fill the form below and our NEET counselling expert will contact
                you shortly.
              </p>

              {success && (
                <p className="success">
                  ✅ Thank you! We will contact you shortly.
                </p>
              )}

              {!success && (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    minLength={2}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Query (NEET / MBBS / Fees / Colleges)"
                  />

                  <button type="submit" className="btn submit">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="card">
              <h2>Contact Information</h2>

              <p>
                <strong>Phone:</strong> +91-9217026137
              </p>
              <p>
                <strong>Email:</strong> admission@pathtoneet.in
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                North Campus, Vishwavidalaya,
                <br />
                New Delhi – 110084
              </p>

              <div className="actions">
                <a
                  href="https://wa.me/919217026137"
                  target="_blank"
                  rel="noreferrer"
                  className="btn whatsapp"
                >
                  WhatsApp
                </a>

                <a href="mailto:admission@pathtoneet.in" className="btn email">
                  Email Us
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=North+Campus+Vishwavidalaya+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn map"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL STYLES */}
        <style jsx global>{`
          .contact-root {
            background: #f7f8fb;
            min-height: 100vh;
          }

          /* 🔥 GAP FIXED HERE */
          .hero {
            background: #ffffff;
            padding-top: 20px; /* ❌ header-space removed */
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 50px;
            text-align: center;
            border-bottom: 1px solid #e5e7eb;
          }

          .hero h1 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 12px;
          }

          .hero p {
            max-width: 720px;
            margin: auto;
            color: #4b5563;
            font-size: 16px;
          }

          .hero-cta {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
          }

          .container {
            max-width: 1100px;
            margin: 50px auto;
            padding: 0 16px;
          }

          .grid {
            display: grid;
            gap: 32px;
          }

          @media (min-width: 992px) {
            .grid {
              grid-template-columns: 2fr 1fr;
            }
          }

          .card {
            background: #fff;
            border-radius: 16px;
            padding: 28px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          }

          .muted {
            color: #6b7280;
            margin-bottom: 16px;
          }

          .success {
            color: #16a34a;
            font-weight: 600;
            margin-bottom: 14px;
          }

          input,
          textarea {
            width: 100%;
            padding: 12px 14px;
            border-radius: 10px;
            border: 1px solid #d1d5db;
            margin-bottom: 14px;
            font-size: 15px;
          }

          textarea {
            min-height: 120px;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 20px;
            border-radius: 10px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .btn:hover {
            transform: translateY(-2px);
          }

          .whatsapp {
            background: #16a34a;
            color: #fff;
          }

          .email {
            background: #2563eb;
            color: #fff;
          }

          .map {
            background: #f1f5f9;
            color: #0f172a;
          }

          .submit {
            background: #16a34a;
            color: #fff;
            width: 100%;
          }

          .actions {
            margin-top: 20px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
        `}</style>
      </main>
    </>
  );
}
