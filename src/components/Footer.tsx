"use client";

import { useState } from "react";
import Link from "next/link";
import siteConfig from "../lib/siteConfig";

import {
  RiWhatsappFill,
  RiPhoneFill,
  RiMailFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTelegramFill,
} from "react-icons/ri";

export default function Footer() {
  const [openAbroad, setOpenAbroad] = useState(false);

  return (
    <footer className="mt-12 w-full bg-sky-100">
      <div className="max-w-7xl mx-auto px-4 py-12 text-slate-800">
        <style jsx>{`
          .footer-row {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }

          .footer-right {
            margin-top: 48px;
          }

          @media (min-width: 768px) {
            .footer-row {
              flex-direction: row;
              align-items: flex-start;
            }
            .footer-left {
              flex: 1;
              max-width: 700px;
            }
            .footer-right {
              width: 420px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 80px;
            }
            .footer-map {
              width: 420px;
              height: 320px;
            }
          }

          .footer-map {
            width: 100%;
            height: 220px;
            border-radius: 12px;
            overflow: hidden;
            background: #e0f2fe;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          }

          .iconBox {
            width: 46px;
            height: 46px;
            background: #ffffff;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e5e7eb;
            transition: all 0.2s ease;
          }

          .iconBox:hover {
            background: #e0f2fe;
            transform: translateY(-2px);
          }

          /* LINK LOOK (NO BOX) */
          footer a,
          .link-btn {
            color: inherit !important;
            text-decoration: none;
            background: none;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
          }

          footer a::after,
          .link-btn::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0%;
            height: 2px;
            background: #1e293b;
            transition: width 0.3s ease;
          }

          footer a:hover::after,
          .link-btn:hover::after {
            width: 100%;
          }

          .mbbs-wrap {
            margin-top: -24px;
            margin-bottom: 16px;
            text-align: center;
          }

          .mbbs-anim:hover {
            transform: translateY(-3px);
          }

          .arrow {
            display: inline-block;
            margin-right: 4px;
            transition: transform 0.3s ease;
          }

          .arrow.open {
            transform: rotate(90deg);
          }

          .dropdown {
            overflow: hidden;
            transition: max-height 0.35s ease, opacity 0.35s ease;
          }

          .dropdown.closed {
            max-height: 0;
            opacity: 0;
          }

          .dropdown.open {
            max-height: 300px;
            opacity: 1;
          }
        `}</style>

        <div className="footer-row">
          {/* LEFT */}
          <div className="footer-left">
            <h2 className="text-2xl font-semibold mb-3">
              {siteConfig.siteName}
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              {siteConfig.tagline ||
                "Right Guidance, Right College, Bright Future"}
            </p>

            <p className="text-sm mb-1">
              <strong>Address:</strong> {siteConfig.address}
            </p>

            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>

            <p className="text-sm mt-1 mb-4">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </p>

            {/* COMPANY */}
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-slate-700 mb-6 list-disc pl-5">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            {/* MBBS LINKS */}
            <div className="mbbs-wrap space-y-1">
              <Link
                href="/mbbs-in-india"
                className="block text-lg font-semibold mbbs-anim"
              >
                MBBS in India
              </Link>

              <button
                onClick={() => setOpenAbroad(!openAbroad)}
                className="link-btn block text-sm font-medium mbbs-anim"
              >
                <span className={`arrow ${openAbroad ? "open" : ""}`}>›</span>
                MBBS Abroad
              </button>

              <div className={`dropdown ${openAbroad ? "open" : "closed"}`}>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><Link href="/mbbs-abroad/nepal">› MBBS in Nepal</Link></li>
                  <li><Link href="/mbbs-abroad/russia">› MBBS in Russia</Link></li>
                  <li><Link href="/mbbs-abroad/mauritius">› MBBS in Mauritius</Link></li>
                  <li><Link href="/mbbs-abroad/poland">› MBBS in Poland</Link></li>
                </ul>
              </div>
            </div>

            {/* MAP */}
            <div className="footer-map mb-6">
              <iframe
                title="GTB Nagar, New Delhi"
                src="https://maps.google.com/maps?q=GTB%20Nagar%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>

            {/* FOLLOW US */}
            <p className="mb-3 font-bold text-slate-900">
              Follow Us
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center gap-6">
              <a className="iconBox"><RiYoutubeFill size={20} color="#FF0000" /></a>
              <a className="iconBox"><RiInstagramFill size={20} color="#E1306C" /></a>
              <a className="iconBox"><RiFacebookFill size={20} color="#1877F2" /></a>
              <a className="iconBox"><RiTelegramFill size={20} color="#229ED9" /></a>
              <a className="iconBox" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                <RiWhatsappFill size={20} color="#25D366" />
              </a>
              <a className="iconBox" href={`tel:${siteConfig.phone}`}>
                <RiPhoneFill size={20} color="#2563EB" />
              </a>
              <a className="iconBox" href={`mailto:${siteConfig.email}`}>
                <RiMailFill size={20} color="#2563EB" />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-10 text-xs text-slate-600 border-t border-sky-200 pt-4">
          © {new Date().getFullYear()} {siteConfig.siteName} — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
