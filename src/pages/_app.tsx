// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";
import FloatingSyllabus from "@/components/FloatingSyllabus";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 🔒 FIXED HEADER */}
      <Header />

      {/* 🔽 PAGE CONTENT (header space auto adjust) */}
      <main
        style={{
          paddingTop: "var(--header-space, 72px)",
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
      </main>

      {/* 🔥 FLOATING SYLLABUS ICON */}
      <FloatingSyllabus />

      {/* 🔻 FOOTER */}
      <Footer />

      {/* 🔥 GLOBAL COMPONENTS (ALL PAGES) */}
      <WhatsAppButton />
      <LeadPopup />
    </>
  );
}
