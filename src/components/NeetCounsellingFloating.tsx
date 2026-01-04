"use client";

export default function NeetCounsellingFloating() {
  return (
    <a
      href="/neet-counselling-2026"
      className="neet-float-animation"
      style={{
        position: "fixed",
        bottom: "80px",   // syllabus ke upar gap
        right: "16px",
        zIndex: 99999,
        backgroundColor: "rgba(223, 6, 6, 1)",
        color: "#ffffff",
        padding: "12px 16px",
        borderRadius: "9999px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        fontWeight: 600,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: "18px" }}>🎓</span>
      NEET Counselling 2026
    </a>
  );
}
