import Head from "next/head";

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | PathToNeet</title>
        <meta
          name="description"
          content="Terms of Service of PathToNeet – rules, responsibilities and conditions for using NEET counselling and MBBS admission services."
        />
        <link rel="canonical" href="https://www.PathToNeet.in/terms-of-service" />
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
          <p style={{ opacity: 0.85 }}>Please Read Carefully</p>

          <h1 style={{ fontSize: 44, fontWeight: 800, marginTop: 10 }}>
            Terms of
            <br />
            <span style={{ color: "#facc15" }}>Service</span>
          </h1>

          <p style={{ fontSize: 18, marginTop: 20, opacity: 0.9 }}>
            Rules • Responsibilities • Fair Usage
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
              Contact Support
            </button>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* INTRO */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Acceptance of Terms
              </h2>
              <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                By accessing or using <strong>PathToNeet</strong>, you agree to
                comply with and be bound by these Terms of Service. If you do
                not agree, please do not use our services.
              </p>
            </div>

            {/* SERVICES */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Our Services
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ NEET UG counselling guidance</li>
                <li>✔ MBBS college & admission support</li>
                <li>✔ Rank, cutoff & choice filling assistance</li>
                <li>✔ Information-based advisory services</li>
              </ul>
            </div>

            {/* USER RESPONSIBILITY */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                User Responsibilities
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ Provide accurate and truthful information</li>
                <li>✔ Follow official counselling rules & timelines</li>
                <li>✔ Use the website for lawful purposes only</li>
              </ul>
            </div>

            {/* DISCLAIMER BOX */}
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
                  Disclaimer
                </h2>
                <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                  PathToNeet provides <strong>guidance only</strong>. Final seat
                  allotment depends on NEET rank, counselling authorities,
                  availability of seats, and government regulations.
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
                Need Clarification?
              </h2>
              <p style={{ marginTop: 10 }}>
                Our team is here to help you understand our terms.
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
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
