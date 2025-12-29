import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      {/* 🔥 WEBSITE LOAD POPUP */}
      <LeadPopup />

      {/* ✅ HEADER SPACE FIX */}
      <main
        style={{
          paddingTop: "var(--header-space, 72px)",
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
