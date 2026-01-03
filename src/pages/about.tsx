import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | PathToNEET – Trusted NEET Counselling Platform</title>
        <meta
          name="description"
          content="Know about PathToNEET – India’s trusted NEET counselling and MBBS admission guidance platform helping students secure the best medical colleges."
        />
      </Head>

      <div style={{ fontFamily: "system-ui, sans-serif", background: "#f5f7fb" }}>
        {/* ================= HERO ================= */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
            color: "#fff",
            padding: "120px 20px",
            textAlign: "center",
          }}
        >
          <p style={{ opacity: 0.85 }}>Trusted Medical Admission Experts</p>

          <h1 style={{ fontSize: 44, fontWeight: 800, marginTop: 10 }}>
            About
            <br />
            <span style={{ color: "#facc15" }}>PathToNEET</span>
          </h1>

          <p style={{ fontSize: 18, marginTop: 20, opacity: 0.9 }}>
            NEET Counselling • MBBS Admissions • Career Guidance
          </p>

          <div style={{ marginTop: 45 }}>
            <button
              onClick={() => (window.location.href = "/contact")}
              style={{
                padding: "16px 52px",
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, #ff8a00, #ff6a00)",
                color: "#fff",
                fontSize: 18,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "0 15px 35px rgba(255,138,0,0.55)",
              }}
            >
              Talk to Expert
            </button>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* INTRODUCTION */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Who We Are
              </h2>
              <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                <strong>PathToNEET</strong> is India’s trusted NEET counselling
                and MBBS admission guidance platform. We help medical aspirants
                choose the right colleges based on their NEET rank, category,
                budget, cutoff trends, and state preferences.
              </p>
              <p style={{ marginTop: 10, fontSize: 17, color: "#334155" }}>
                Our goal is to simplify the complex medical admission process
                and provide clear, honest, and expert guidance to students and
                parents at every step.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                What We Do
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ NEET UG Counselling (AIQ & State Quota)</li>
                <li>✔ MBBS Admission in Government & Private Colleges</li>
                <li>✔ College & Branch Prediction</li>
                <li>✔ Cutoff & Rank Trend Analysis</li>
                <li>✔ Choice Filling & Round-wise Strategy</li>
                <li>✔ Documentation & Admission Support</li>
              </ul>
            </div>

            {/* WHY CHOOSE US */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Why Choose PathToNEET?
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ Transparent & ethical counselling</li>
                <li>✔ Experienced NEET counselling experts</li>
                <li>✔ Data-driven college prediction</li>
                <li>✔ Personalised one-to-one guidance</li>
                <li>✔ Support till final seat confirmation</li>
              </ul>
            </div>

            {/* TRUST BOX */}
            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 30,
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h2 style={{ fontSize: 26, fontWeight: 700 }}>
                  Trusted by NEET Aspirants Across India
                </h2>
                <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                  We have successfully guided <strong>5000+ NEET aspirants</strong>
                  across India. Students trust us for our realistic guidance,
                  updated counselling knowledge, and honest admission strategy.
                </p>
              </div>
            </div>

            {/* FINAL CTA */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #ff8a00, #ff6a00)",
                color: "#fff",
                padding: 60,
                borderRadius: 20,
                textAlign: "center",
                boxShadow:
                  "0 20px 50px rgba(255,138,0,0.5)",
              }}
            >
              <h2 style={{ fontSize: 28 }}>
                Need Expert NEET Counselling?
              </h2>
              <p style={{ marginTop: 10 }}>
                Get personalised guidance for MBBS admission in India & abroad.
              </p>

              <button
                onClick={() => (window.location.href = "/contact")}
                style={{
                  marginTop: 25,
                  padding: "14px 44px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#ff6a00",
                  fontSize: 17,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Talk to Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
