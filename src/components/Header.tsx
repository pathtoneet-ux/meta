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
    { label: "NEET 2025", href: "/neet-2025" },
    { label: "Contact Us", href: "/contact" },
  ];

  /* 🔥 HEADER + LOGO HEIGHT AUTO FIX */
  useEffect(() => {
    const updateHeaderSpace = () => {
      const h = headerRef.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--header-space", `${h}px`);
    };

    const applyResponsive = () => {
      const isMobile = window.innerWidth < 1024;

      document.querySelectorAll("header nav").forEach((nav) => {
        (nav as HTMLElement).style.display = isMobile ? "none" : "flex";
      });

      document
        .querySelectorAll("header button[aria-label='Toggle menu']")
        .forEach((btn) => {
          (btn as HTMLElement).style.display = isMobile
            ? "inline-flex"
            : "none";
        });

      const logo = document.querySelector("header img") as HTMLImageElement;
      if (logo) {
        if (window.innerWidth < 640) {
          logo.style.height = "48px";
        } else if (window.innerWidth < 1024) {
          logo.style.height = "56px";
        } else {
          logo.style.height = "68px";
        }
      }
    };

    updateHeaderSpace();
    applyResponsive();

    window.addEventListener("resize", () => {
      updateHeaderSpace();
      applyResponsive();
    });

    window.addEventListener("load", () => {
      updateHeaderSpace();
      applyResponsive();
    });

    return () => {
      window.removeEventListener("resize", updateHeaderSpace);
      window.removeEventListener("load", updateHeaderSpace);
    };
  }, []);

  return (
    <>
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)}>
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

      <header ref={headerRef} style={styles.header}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <div style={styles.left}>
              <Link href="/">
                <img src="/logo.png" alt="PathToNeet Logo" style={styles.logo} />
              </Link>
            </div>

            <div style={styles.center}>
              <nav style={styles.nav}>
                {links.map((l) => (
                  <a key={l.href} href={l.href} style={styles.navLink}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            <div style={styles.right}>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
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

/* 🎨 STYLES */
const styles: Record<string, any> = {
  header: {
    position: "fixed",
    inset: "0 0 auto 0",
    zIndex: 9999,
    background: "rgba(255,255,255,0.98)",
    boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
    backdropFilter: "blur(6px)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
    height: "72px",
    display: "flex",
    alignItems: "center",
  },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  },

  left: { display: "flex", alignItems: "center" },
  center: { display: "flex", justifyContent: "center" },
  right: { display: "flex", justifyContent: "flex-end" },

  logo: {
    height: "64px",
    width: "auto",
    objectFit: "contain",
    transition: "height 0.25s ease",
  },

  nav: { display: "flex", gap: "28px" },

  navLink: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#374151",
    textDecoration: "none",
  },

  hamburger: {
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
    background: "rgba(0,0,0,0.45)",
    zIndex: 9988,
    paddingTop: "72px",
    display: "flex",
    justifyContent: "center",
  },

  modal: {
    width: "100%",
    maxWidth: "360px",
    background: "#fff",
    borderRadius: "12px",
  },

  modalHeader: {
    padding: "14px 18px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
  },

  closeBtn: {
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },

  modalNav: {
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  modalLink: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0b5156",
    textDecoration: "none",
  },
};
