// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* FIXED HEADER */}
      <Header />

      {/* OPTIONAL POPUP */}
      <LeadPopup />

      {/* ✅ CONTENT OFFSET = HEADER HEIGHT (72px) */}
      <main
        style={{
          paddingTop: "72px", // ⚠️ MUST MATCH Header height
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
