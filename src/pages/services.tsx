// src/pages/services.tsx
import React from "react";
import { motion } from "framer-motion";
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
    note: "Students find this extremely helpful",
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
    note: "This helps your SEO",
    Icon: FaGlobe,
  },
  {
    id: "deemed-counselling",
    title: "Deemed University Counselling",
    bullets: [
      "AIQ-D guidance",
      "Top Deemed colleges list",
      "Fee + budget-based shortlisting",
      "Mop-up strategy",
    ],
    Icon: FaClipboardList,
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
    note: "High conversion — converts MOST students",
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
    id: "form-filling",
    title: "Counselling Form Filling Assistance",
    bullets: [
      "MCC form filling",
      "State portal form support",
      "Payment support & error checking",
    ],
    Icon: FaClipboardList,
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
    note: "Round-by-round assistance",
    Icon: FaHeadset,
  },
];

/** Framer Motion variants */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.56, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function ServicesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "#fff" }}
    >
      {/* Inline styles (no Tailwind dependency) */}
      <style>{`
        .svc-wrap { max-width:1100px; margin:0 auto; padding:48px 16px; box-sizing:border-box; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        .svc-head { text-align:center; margin-bottom:28px; }
        .svc-kicker { color:#2563eb; font-weight:600; letter-spacing:.08em; font-size:13px; margin-bottom:8px; }
        .svc-title { font-size:28px; font-weight:700; color:#0f172a; margin-bottom:6px; }
        .svc-sub { color:#475569; font-size:14px; max-width:800px; margin:0 auto; }

        .services-grid { display:grid; grid-template-columns: 1fr; gap:16px; margin-top:18px; }
        .svc-card { background:#f8fafc; border:1px solid #e6eef9; border-radius:10px; padding:18px; display:flex; gap:14px; align-items:flex-start; box-sizing:border-box; transition: transform .18s ease, box-shadow .18s ease; }
        .svc-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.06); }
        .icon-wrap { width:56px; height:56px; border-radius:50%; background:#0f4b4b; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; flex-shrink:0; }
        .svc-title-row { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
        .svc-card-title { font-size:17px; font-weight:700; color:#0f172a; }
        .svc-bullets { margin-top:10px; color:#334155; font-size:14px; list-style:none; padding-left:0; }
        .svc-bullets li { display:flex; gap:10px; align-items:flex-start; margin-bottom:6px; }
        .bullet-svg { margin-top:3px; color:#059669; width:14px; height:14px; flex-shrink:0; }
        .actions { margin-top:12px; display:flex; justify-content:space-between; align-items:center; }
        .learn { color:#2563eb; font-weight:600; text-decoration:none; font-size:14px; }
        .btn { background:#2563eb; color:white; padding:8px 12px; border-radius:8px; border:none; cursor:pointer; font-size:14px; }

        /* desktop two columns at 1000px and above */
        @media (min-width: 1000px) {
          .services-grid { grid-template-columns: 1fr 1fr; gap:20px; }
          .icon-wrap { width:64px; height:64px; font-size:22px; }
          .svc-card { padding:22px; }
          .svc-card-title { font-size:18px; }
        }
      `}</style>

      <div className="svc-wrap">
        <div className="svc-head">
          <div className="svc-kicker">OUR SERVICES</div>
          <div className="svc-title">What We Can Offer</div>
          <div className="svc-sub">
            Practical, end-to-end support for MBBS aspirants — admission guidance, documentation,
            counselling and post-admission support.
          </div>
        </div>

        <motion.div className="services-grid" variants={containerVariants} initial="hidden" animate="show">
          {SERVICES.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.article key={s.id} className="svc-card" variants={cardVariants}>
                <div className="icon-wrap" aria-hidden>
                  <Icon />
                </div>

                <div style={{ flex: 1 }}>
                  <div className="svc-title-row">
                    <div id={`${s.id}-title`} className="svc-card-title">
                      {s.title}
                    </div>
                    {s.note && (
                      <div style={{ background: "#fff7ed", color: "#b45309", fontSize: 12, padding: "4px 8px", borderRadius: 999 }}>
                        {s.note}
                      </div>
                    )}
                  </div>

                  <ul className="svc-bullets" aria-hidden={false}>
                    {s.bullets &&
                      s.bullets.map((b, i) => (
                        <li key={i}>
                          <svg className="bullet-svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div>{b}</div>
                        </li>
                      ))}
                  </ul>

                  <div className="actions">
                    <a className="learn" href={`#${s.id}`}>
                      Learn more →
                    </a>
                    <button className="btn" aria-label={`Request ${s.title}`}>
                      Request
                    </button>
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
