import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#ff7a18",
  color: "#ffffff",
  padding: "10px 28px",
  borderRadius: "9999px",
  fontWeight: 600,
  fontSize: "15px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 6px 14px rgba(255, 122, 24, 0.35)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MbbsInIndia() {
  const states = [
    ["Uttar Pradesh", "₹30,000 – ₹60,000", "₹10 – ₹25 Lakhs", "UP State Counselling"],
    ["Bihar", "₹15,000 – ₹25,000", "₹8 – ₹12 Lakhs", "Bihar State Counselling"],
    ["Haryana", "₹50,000 – ₹1,00,000", "₹12 – ₹18 Lakhs", "Haryana State Counselling"],
    ["Rajasthan", "₹25,000 – ₹60,000", "₹12 – ₹22 Lakhs", "Rajasthan State Counselling"],
    ["Karnataka", "₹50,000 – ₹1.5 Lakhs", "₹7 – ₹15 Lakhs", "KEA Counselling"],
    ["Maharashtra", "₹1 – ₹1.5 Lakhs", "₹10 – ₹25 Lakhs", "State CET Cell"],
    ["Madhya Pradesh", "₹1 – ₹1.2 Lakhs", "₹8 – ₹15 Lakhs", "MP State Counselling"],
    ["West Bengal", "₹10,000 – ₹50,000", "₹10 – ₹15 Lakhs", "WB State Counselling"],
    ["Tamil Nadu", "₹15,000 – ₹25,000", "₹12 – ₹25 Lakhs", "TN State Counselling"],
    ["Kerala", "₹25,000 – ₹50,000", "₹6 – ₹12 Lakhs", "KEAM Counselling"],
    ["Delhi", "₹10,000 – ₹15,000", "Limited / NA", "AIQ + State"],
  ];

  return (
    <>
      <Head>
        <title>MBBS in India 2026 | State Wise Fees</title>
      </Head>

      <main style={{ background: "#f8fafc" }}>

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #0ea5e9)",
            color: "#fff",
            padding: "80px 16px",
            textAlign: "center",
          }}
        >
          <p style={{ opacity: 0.9, marginBottom: 12 }}>
            NEET Based Admission • Trusted Counselling
          </p>

          <h1 style={{ fontSize: 36, fontWeight: 800 }}>
            MBBS in India 2026
          </h1>

          <p style={{ maxWidth: 720, margin: "16px auto", opacity: 0.9 }}>
            State wise MBBS admission guide with transparent government &
            private medical college fees.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/contact" style={buttonStyle}>
              Talk to Expert
            </Link>
          </motion.div>
        </motion.section>

        {/* COURSE INFO */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <p>
              <strong>Course Duration:</strong> 5.5 Years
              (4.5 Years Academics + 1 Year Internship)
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>Admission Basis:</strong> NEET-UG through MCC & State Counselling
            </p>
          </div>
        </motion.section>

        {/* STATES */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {states.map(([state, govt, pvt, counselling], i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                }}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: 24,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                }}
              >
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>
                  MBBS in {state}
                </h2>

                <p style={{ marginTop: 12 }}>
                  <strong>Government Fees:</strong><br />{govt} / year
                </p>
                <p style={{ marginTop: 8 }}>
                  <strong>Private Fees:</strong><br />{pvt} / year
                </p>
                <p style={{ marginTop: 8 }}>
                  <strong>Counselling Authority:</strong><br />{counselling}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#111827",
            color: "#fff",
            textAlign: "center",
            padding: "80px 16px",
            marginTop: 80,
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 700 }}>
            Confused About State or Fees?
          </h2>

          <p style={{ marginTop: 12, opacity: 0.85 }}>
            Get personalised guidance from MBBS admission experts.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} style={{ marginTop: 28 }}>
            <Link href="/contact" style={buttonStyle}>
              Talk to Expert
            </Link>
          </motion.div>
        </motion.section>

      </main>
    </>
  );
}
