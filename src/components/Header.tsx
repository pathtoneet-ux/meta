"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Colleges", href: "/colleges" },
    { label: "NEET 2026", href: "/neet-2026" },
    { label: "Contact Us", href: "/contact" },
  ];

  /* header height -> page offset */
  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--header-space", `${h}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* responsive logic */
  useEffect(() => {
    const apply = () => {
      const d = window.innerWidth >= 1024;
      setIsDesktop(d);
      if (d) setOpen(false);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return (
    <>
      {/* MOBILE OVERLAY */}
      {!isDesktop && open && (
        <div style={styles.overlay} onClick={() => setOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <nav style={styles.modalNav}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={styles.modalLink}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header ref={headerRef} style={styles.header}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {/* LOGO */}
            <div style={styles.left}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="PathToNEET Logo"
                  width={200}
                  height={80}
                  priority
                  className="site-logo"
                />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div style={styles.center}>
              {isDesktop && (
                <nav style={styles.nav}>
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="menu-link"
                      style={styles.navLink}
                    >
                      {l.label}
                      <span className="underline" />
                    </Link>
                  ))}
                </nav>
              )}
            </div>

            {/* HAMBURGER */}
            <div style={styles.right}>
              {!isDesktop && (
                <button
                  aria-label="Toggle menu"
                  onClick={() => setOpen((s) => !s)}
                  className={open ? "hamburger open" : "hamburger"}
                  style={styles.hamburgerBtn}
                >
                  <span />
                  <span />
                  <span />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* STYLES */}
      <style jsx>{`
        /* ---------- MENU ---------- */
        .menu-link {
          position: relative;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .menu-link:hover {
          color: #0b5156;
          transform: translateY(-2px);
        }

        .underline {
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: #0b5156;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .menu-link:hover .underline {
          transform: scaleX(1);
        }

        /* ---------- HAMBURGER ---------- */
        .hamburger {
          width: 32px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          height: 3px;
          width: 100%;
          background: #111;
          border-radius: 3px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        /* ---------- LOGO SIZE ---------- */
        .site-logo {
          height: 44px;
          width: auto;
        }

        @media (max-width: 1023px) {
          .site-logo {
            height: 100px; /* 🔥 mobile BIG logo */
          }
        }
      `}</style>
    </>
  );
}

/* ---------- INLINE STYLES ---------- */
const styles: Record<string, any> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
    minHeight: "80px", // 🔥 mobile ko space
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

  nav: { display: "flex", gap: "28px" },
  navLink: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#374151",
    textDecoration: "none",
    paddingBottom: "4px",
  },

  hamburgerBtn: {
    background: "transparent",
    border: "none",
    padding: 0,
  },

  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9998,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    paddingTop: "90px",
  },
  modal: {
    width: "100%",
    maxWidth: "360px",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  modalNav: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  modalLink: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#0b5156",
    textDecoration: "none",
  },
};
