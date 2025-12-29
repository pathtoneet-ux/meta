// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Colleges", href: "/colleges" },
    { label: "NEET 2026", href: "/neet-2026" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--header-space", `${h}px`);
    };

    update();
    window.addEventListener("load", update);
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    if (headerRef.current) ro.observe(headerRef.current);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      {/* Mobile modal */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)} aria-hidden>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div />
              <button onClick={() => setOpen(false)} style={styles.closeBtn}>
                ✕
              </button>
            </div>
            <nav style={styles.modalNav}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={styles.modalLink}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header ref={headerRef} style={styles.header} role="banner">
        <div style={styles.container}>
          <div style={styles.grid}>
            {/* LEFT: Logo */}
            <div style={styles.left}>
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="PathToNeet Logo"
                  style={styles.logo}
                />
              </Link>
            </div>

            {/* CENTER: Nav */}
            <div style={styles.center}>
              <nav style={styles.nav}>
                {links.map((l) => (
                  <a key={l.href} href={l.href} style={styles.navLink}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* RIGHT: Hamburger */}
            <div style={styles.right}>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                style={styles.hamburger}
              >
                {open ? "✕" : "≡"}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* Inline styles */
const styles: Record<string, any> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: "rgba(255,255,255,0.98)",
    boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
    backdropFilter: "saturate(120%) blur(6px)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
    height: "72px", // ✅ HEADER HEIGHT INCREASED
    display: "flex",
    alignItems: "center",
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: "52px", // ✅ LOGO SIZE INCREASED
    width: "auto",
    objectFit: "contain",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },
  navLink: {
    fontSize: "15px",
    color: "#374151",
    textDecoration: "none",
    fontWeight: 600,
  },
  hamburger: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9988,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "80px",
  },
  modal: {
    width: "100%",
    maxWidth: "360px",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    borderBottom: "1px solid #efefef",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  modalNav: {
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  modalLink: {
    fontSize: "18px",
    color: "#0b5156",
    textDecoration: "none",
    fontWeight: 600,
  },
};

/* Responsive behavior */
if (typeof window !== "undefined") {
  const applyResponsive = () => {
    const hideOnSmall = window.innerWidth < 1024;

    const navs = document.querySelectorAll("header nav");
    navs.forEach((nav) => {
      (nav as HTMLElement).style.display = hideOnSmall ? "none" : "flex";
    });

    const hamburgers = document.querySelectorAll(
      "header button[aria-label='Toggle menu']"
    );
    hamburgers.forEach((btn) => {
      (btn as HTMLElement).style.display = hideOnSmall
        ? "inline-flex"
        : "none";
    });
  };

  window.addEventListener("resize", applyResponsive);
  window.addEventListener("load", applyResponsive);
  applyResponsive();
}
