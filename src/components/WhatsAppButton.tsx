// src/components/WhatsAppButton.tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PHONE = "919217026137";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const message = encodeURIComponent(
    "Hi PathToNEET, I want counselling about NEET."
  );

  return createPortal(
    <a
      href={`https://wa.me/${PHONE}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        left: "16px",
        bottom: "20px",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="26"
          height="26"
        >
          <path d="M16 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.65 1.77 6.68L2 30l7.53-2.38c1.96 1.07 4.17 1.63 6.47 1.63 7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67z" />
        </svg>
      </div>
    </a>,
    document.body
  );
}
