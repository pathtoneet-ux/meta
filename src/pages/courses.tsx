// src/pages/courses.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Icons ---------- */
const IconMedical = () => (
  <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M32 12v40M12 32h40" strokeLinecap="round" />
  </svg>
);
const IconTooth = () => (
  <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M20 18c8-10 16-10 24 0 4 6 2 16-2 22-3 4-5 10-6 14-1-4-3-10-6-14-4-6-6-16-2-22z" />
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M12 40c20 10 32-6 40-28C32 12 18 18 12 40z" />
  </svg>
);
const IconHomeo = () => (
  <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.4">
    <circle cx="32" cy="20" r="8" />
    <path d="M22 34c0 6 4 12 10 12s10-6 10-12" />
  </svg>
);

/* ---------- Types ---------- */
type Course = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  eligibility: string;
  career: string;
  scope?: string;
  focus?: string;
  note?: string;
  Icon?: React.FC;
};

/* ---------- Course Data (FULL DETAILS) ---------- */
const COURSES: Course[] = [
  {
    id: "mbbs",
    title: "MBBS",
    subtitle: "Bachelor of Medicine & Bachelor of Surgery",
    duration: "5.5 Years (4.5 + 1 Internship)",
    eligibility: "12th PCB + NEET",
    career: "Doctor, MD/MS, Surgeon",
    scope: "India & Abroad",
    note: "After completing the course, you become a General Physician.",
    Icon: IconMedical,
  },
  {
    id: "bds",
    title: "BDS",
    subtitle: "Bachelor of Dental Surgery",
    duration: "5 Years (4 + 1 Internship)",
    eligibility: "12th PCB + NEET",
    career: "Dentist, Orthodontist (after MDS)",
    scope: "Dental clinics & hospitals",
    focus: "Teeth, gums & oral health treatment",
    Icon: IconTooth,
  },
  {
    id: "bams",
    title: "BAMS",
    subtitle: "Bachelor of Ayurvedic Medicine & Surgery",
    duration: "5.5 Years",
    eligibility: "12th PCB + NEET",
    career: "Ayurvedic Doctor",
    focus: "Herbal & natural treatment system",
    Icon: IconLeaf,
  },
  {
    id: "bhms",
    title: "BHMS",
    subtitle: "Bachelor of Homeopathic Medicine & Surgery",
    duration: "5.5 Years",
    eligibility: "12th PCB + NEET",
    career: "Homeopathy Doctor",
    focus: "Natural remedies & holistic treatment",
    Icon: IconHomeo,
  },
  {
    id: "bums",
    title: "BUMS",
    subtitle: "Bachelor of Unani Medicine & Surgery",
    duration: "5.5 Years",
    eligibility: "12th PCB + NEET",
    career: "Unani Doctor",
    focus: "Greco-Arab medicine system",
    Icon: IconLeaf,
  },
  {
    id: "bnys",
    title: "BNYS",
    subtitle: "Bachelor of Naturopathy & Yogic Sciences",
    duration: "5.5 Years",
    eligibility: "12th PCB + NEET",
    career: "Naturopathy Doctor",
    focus: "Yoga, lifestyle & drugless treatment",
    Icon: IconLeaf,
  },
  {
    id: "bsc-nursing",
    title: "B.Sc Nursing",
    subtitle: "Bachelor of Science in Nursing",
    duration: "4 Years",
    eligibility: "12th PCB",
    career: "Nurse, Hospital Management",
    scope: "India & Abroad",
    Icon: IconMedical,
  },
  {
    id: "bpt",
    title: "BPT",
    subtitle: "Bachelor of Physiotherapy",
    duration: "4.5 Years",
    eligibility: "12th PCB",
    career: "Physiotherapist",
    focus: "Muscle, joint & movement therapy",
    Icon: IconMedical,
  },
  {
    id: "bmlt",
    title: "BMLT",
    subtitle: "Bachelor of Medical Laboratory Technology",
    duration: "3–4 Years",
    eligibility: "12th PCB",
    career: "Lab Technician, Diagnostics",
    focus: "Blood tests, pathology & lab reports",
    Icon: IconMedical,
  },
  {
    id: "bpharm",
    title: "B.Pharm",
    subtitle: "Bachelor of Pharmacy",
    duration: "4 Years",
    eligibility: "12th PCB / PCM",
    career: "Pharmacist, Industry, Medical Rep",
    Icon: IconMedical,
  },
  {
    id: "pharmd",
    title: "Pharm.D",
    subtitle: "Doctor of Pharmacy",
    duration: "6 Years",
    eligibility: "12th PCB",
    career: "Clinical Pharmacist",
    focus: "Hospital-based pharmacy role",
    Icon: IconMedical,
  },
];

/* ---------- Page ---------- */
export default function CoursesPage() {
  const gridRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const applyCols = () => {
      el.style.display = "grid";
      el.style.gridTemplateColumns = window.innerWidth >= 1024 ? "repeat(2,1fr)" : "1fr";
      el.style.gap = "24px";
    };
    applyCols();
    window.addEventListener("resize", applyCols);
    return () => window.removeEventListener("resize", applyCols);
  }, []);

  return (
    <main style={{ paddingTop: "var(--header-space,96px)" }} className="bg-white min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Undergraduate Medical Courses</h1>

        <section ref={gridRef}>
          {COURSES.map((c) => (
            <motion.article
              key={c.id}
              className="course-card"
              whileHover={{ y: -6 }}
            >
              <div className="head">
                <div className="left">
                  <div className="icon">{c.Icon && <c.Icon />}</div>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.subtitle}</p>
                  </div>
                </div>
                <div className="duration">{c.duration}</div>
              </div>

              <button className="btn" onClick={() => setOpen(open === c.id ? null : c.id)}>
                View Details
              </button>

              <AnimatePresence>
                {open === c.id && (
                  <motion.div
                    className="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p><b>Eligibility:</b> {c.eligibility}</p>
                    <p><b>Career:</b> {c.career}</p>
                    {c.scope && <p><b>Scope:</b> {c.scope}</p>}
                    {c.focus && <p><b>Focus:</b> {c.focus}</p>}
                    {c.note && <p className="note">👉 {c.note}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </section>
      </div>

      <style jsx>{`
        .course-card {
          background: #fff;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
        }
        .head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .left {
          display: flex;
          gap: 12px;
        }
        .icon {
          width: 50px;
          height: 50px;
          background: #eef2ff;
          color: #4f46e5;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 { margin: 0; font-weight: 700; }
        p { margin: 4px 0; color: #555; }
        .duration {
          font-weight: 600;
          color: #111;
        }
        .btn {
          margin-top: 12px;
          background: #4f46e5;
          color: #fff;
          padding: 8px 14px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
        }
        .details {
          margin-top: 12px;
          background: #f9fafb;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.95rem;
        }
        .note {
          margin-top: 6px;
          color: #1e40af;
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
