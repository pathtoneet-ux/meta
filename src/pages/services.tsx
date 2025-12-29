import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaStar,
  FaFileAlt,
  FaRupeeSign,
  FaGlobe,
  FaClipboardList,
  FaUserTie,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

/* ================= DATA ================= */
const SERVICES = [
  {
    id: "admission-guidance",
    title: "Admission Guidance",
    bullets: [
      "College selection",
      "Rank-based prediction",
      "Choice-filling strategy",
      "Expected round-wise seat chances",
    ],
    note: "Most used service, must have",
    Icon: FaStar,
  },
  {
    id: "document-application",
    title: "Document & Application Assistance",
    bullets: [
      "All-India + State counselling document list",
      "University application help",
      "Correction help (form errors)",
      "Admission letter assistance",
    ],
    Icon: FaFileAlt,
  },
  {
    id: "fee-budget",
    title: "Fee Structure & Budget Planning",
    bullets: [
      "College-wise fee comparison",
      "Hostel / mess cost planning",
      "Hidden charges clarity",
      "Scholarships / education loan support",
    ],
    Icon: FaRupeeSign,
  },
  {
    id: "state-counselling",
    title: "State Counselling Guidance",
    bullets: [
      "UP, Rajasthan, Karnataka, Haryana, Bihar, West Bengal",
      "Category-wise + domicile-wise prediction",
      "Bond rules explanation",
    ],
    Icon: FaGlobe,
  },
  {
    id: "choice-expert",
    title: "Choice Filling Strategy (Expert Mode)",
    bullets: [
      "Round-wise best choice order",
      "AI-generated choice list",
      "High-risk vs low-risk combination",
      "Drop-in-score impact analysis",
    ],
    Icon: FaUserTie,
  },
  {
    id: "personal-prediction",
    title: "Personalized College Prediction",
    bullets: [
      "Rank + category + state input",
      "All India + State + Deemed prediction",
      "Expected allotment round-by-round",
    ],
    Icon: FaCalendarAlt,
  },
  {
    id: "post-admission",
    title: "Post-Admission Support",
    bullets: [
      "Fee payment help",
      "Reporting process guidance",
      "Document verification",
      "Travel & accommodation suggestions",
    ],
    Icon: FaCheckCircle,
  },
  {
    id: "mentor-support",
    title: "24/7 Dedicated Mentor Support",
    bullets: [
      "WhatsApp / Call support",
      "Instant query solving",
      "Round-by-round progress guidance",
    ],
    Icon: FaHeadset,
  },
];

/* ================= FRAMER MOTION (SAFE) ================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
    },
  },
};

/* ================= PAGE ================= */
export default function ServicesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: "#ffffff" }}
    >
      <style>{`
        .wrap { max-width:1100px; margin:auto; padding:48px 16px; font-family: Inter, system-ui; }
        .head { text-align:center; margin-bottom:32px; }
        .kicker { color:#2563eb; font-weight:600; letter-spacing:.08em; font-size:13px; }
        .title { font-size:28px; font-weight:700; color:#0f172a; margin-top:6px; }
        .sub { color:#475569; font-size:14px; max-width:800px; margin:8px auto 0; }

        .grid { display:grid; grid-template-columns:1fr; gap:16px; margin-top:28px; }
        .card { background:#f8fafc; border:1px solid #e6eef9; border-radius:10px; padding:18px; display:flex; gap:14px; }
        .icon { width:56px; height:56px; border-radius:50%; background:#0f4b4b; display:flex; align-items:center; justify-content:center; color:#fff; }
        .card-title { font-size:17px; font-weight:700; color:#0f172a; }
        .bullets { list-style:none; padding:0; margin-top:10px; font-size:14px; color:#334155; }
        .bullets li { display:flex; gap:8px; margin-bottom:6px; }
        .actions { margin-top:12px; display:flex; justify-content:space-between; align-items:center; }
        .link { color:#2563eb; font-weight:600; text-decoration:none; }
        .btn { background:#2563eb; color:#fff; border:none; padding:8px 12px; border-radius:8px; cursor:pointer; }

        @media (min-width:1000px) {
          .grid { grid-template-columns:1fr 1fr; gap:20px; }
        }
      `}</style>

      <div className="wrap">
        <div className="head">
          <div className="kicker">OUR SERVICES</div>
          <div className="title">What We Can Offer</div>
          <div className="sub">
            End-to-end counselling support for MBBS aspirants — from choice filling
            to post-admission guidance.
          </div>
        </div>

        <motion.div
          className="grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {SERVICES.map((s) => {
            const Icon = s.Icon;
            return (
              <motion.article key={s.id} className="card" variants={cardVariants}>
                <div className="icon">
                  <Icon />
                </div>

                <div style={{ flex: 1 }}>
                  <div className="card-title">{s.title}</div>

                  <ul className="bullets">
                    {s.bullets.map((b, i) => (
                      <li key={i}>✔ {b}</li>
                    ))}
                  </ul>

                  <div className="actions">
                    <a href={`#${s.id}`} className="link">
                      Learn more →
                    </a>
                    <button className="btn">Request</button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
