import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";

import FloatingSyllabus from "@/components/FloatingSyllabus";
import NeetCounsellingFloating from "@/components/NeetCounsellingFloating";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter(); // 👈 current page pata karne ke liye

  return (
    <>
      {/* 🔒 FIXED HEADER */}
      <Header />

      {/* 🔽 PAGE CONTENT */}
      <main
        style={{
          paddingTop: "var(--header-space, 72px)",
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
      </main>

      {/* 🔻 FOOTER */}
      <Footer />

      {/* 🔥 NEET Counselling Floating – ALL PAGES */}
      <NeetCounsellingFloating />

      {/* 🔥 Updated Syllabus Floating – ONLY HOME PAGE */}
      {router.pathname === "/" && <FloatingSyllabus />}

      {/* 🔥 WhatsApp – ALL PAGES */}
      <WhatsAppButton />

      {/* 🔔 Popup – ALL PAGES */}
      <LeadPopup />
    </>
  );
}
