import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | PathToNeet</title>
        <meta
          name="description"
          content="Privacy Policy of PathToNeet – how we collect, use and protect student information for NEET counselling and MBBS admissions."
        />
        <link rel="canonical" href="https://www.PathToNeet.in/privacy-policy" />
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
          <p style={{ opacity: 0.85 }}>Your Data, Our Responsibility</p>

          <h1 style={{ fontSize: 44, fontWeight: 800, marginTop: 10 }}>
            Privacy
            <br />
            <span style={{ color: "#facc15" }}>Policy</span>
          </h1>

          <p style={{ fontSize: 18, marginTop: 20, opacity: 0.9 }}>
            Transparency • Trust • Data Protection
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
              Contact Us
            </button>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* INTRO */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Introduction
              </h2>
              <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                At <strong>PathToNeet</strong>, we respect your privacy and are
                committed to protecting the personal information of students
                and parents who use our NEET counselling and MBBS admission
                services.
              </p>
            </div>

            {/* INFO COLLECTION */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                Information We Collect
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ Name, email address, phone number</li>
                <li>✔ NEET rank, category, academic preferences</li>
                <li>✔ Information submitted via forms or WhatsApp</li>
                <li>✔ Website usage data for analytics</li>
              </ul>
            </div>

            {/* USAGE */}
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700 }}>
                How We Use Your Information
              </h2>
              <ul style={{ marginTop: 20, lineHeight: "1.9" }}>
                <li>✔ To provide NEET counselling and admission guidance</li>
                <li>✔ To contact you regarding counselling updates</li>
                <li>✔ To improve our services and website experience</li>
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
                  Data Protection & Security
                </h2>
                <p style={{ marginTop: 15, fontSize: 17, color: "#334155" }}>
                  We do <strong>not sell or share</strong> your personal data
                  with third parties. Your information is used strictly for
                  counselling and admission-related purposes.
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
                Questions About Your Data?
              </h2>
              <p style={{ marginTop: 10 }}>
                Contact PathToNeet for clarity and support.
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
