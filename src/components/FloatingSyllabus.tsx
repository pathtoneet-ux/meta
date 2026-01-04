"use client";

import Link from "next/link";

export default function FloatingSyllabus() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "150px", // WhatsApp ke upar
        zIndex: 9999,    // SABSE upar
      }}
    >
     <Link
  href="/pdf/neet-2026-updated-syllabus.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background: "#4f46e5",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "999px",
    fontWeight: 600,
    fontSize: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
  }}
>
  📘 NEET 2026 Updated Syllabus
</Link>

    </div>
  );
}
