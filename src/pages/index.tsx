// src/pages/index.tsx
import React from "react";
import Head from "next/head";  // ye add kiya hun
import Link from "next/link";
import Image from "next/image";

import Hero from "../components/Hero";
import NewsSidebar from "@/components/NewsSidebar";
import TrustBar from "@/components/TrustBar";
import OfferSection from "../components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FAQSchema from "@/components/FAQSchema";
<a href="/blog1">NEET Counselling Process</a>

/* ---------------- Featured Colleges for Home ---------------- */
const FEATURED = [
  {
    id: "smsr",
    name: "Sharda School of Medical Science and Research",
    city: "Greater Noida",
    short: "Approved by MCI, strong clinical exposure and modern labs.",
    img: "/images/college1.jpg",
    url: "/colleges#smsr",
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi Medical College & Hospital",
    city: "Jaipur, Rajasthan",
    short: "High-standard medical education with advanced facilities.",
    img: "/images/college9.jpg",
    url: "/colleges#mahatma-gandhi",
  },
  {
    id: "dy-patil",
    name: "DY Patil Medical College, Pune",
    city: "Pune, Maharashtra",
    short: "Renowned private college with excellent faculty & hospital.",
    img: "/images/college15.jpg",
    url: "/colleges#dy-patil",
  },
];

/* ---------------- Featured Colleges Section ---------------- */
export function HomeFeaturedColleges() {
  return (
    <section className="mt-20 py-16 rounded-2xl bg-gradient-to-b from-blue-50 to-white border border-blue-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            ⭐ Top Medical Colleges You Can Get Through Our Guidance ⭐
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Personalised college shortlisting based on your rank, budget & category.
          </p>
        </div>

        {/* Cards */}
        <div className="featured-grid">
          {FEATURED.map((c) => (
            <article key={c.id} className="card">

              {/* ✅ IMAGE (MOBILE SAFE) */}
              <div className="imgWrap">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="collegeImg"
                />
              </div>

              <div className="cardBody">
                <h3 className="cardTitle">{c.name}</h3>
                <p className="city">{c.city}</p>
                <p className="desc">{c.short}</p>

                <div className="ctaRow">
                  <Link href={c.url} className="linkBtn">
                    Details →
                  </Link>
                  <Link href={c.url} className="primaryBtn">
                    Apply →
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* View More */}
        <div className="mt-24 text-center">
          <Link href="/colleges" legacyBehavior>
            <a className="premiumBtnInner">View More →</a>
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(37, 99, 235, 0.2);
        }

        /* 🔥 MOBILE IMAGE FIX */
        .imgWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .collegeImg {
          object-fit: cover;
        }

        .cardBody {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cardTitle {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
        }

        .city {
          font-size: 13px;
          color: #64748b;
        }

        .desc {
          font-size: 13px;
          color: #334155;
        }

        .ctaRow {
          margin-top: 12px;
          display: flex;
          gap: 10px;
        }

        .linkBtn {
          font-size: 12px;
          color: #2563eb;
        }

        .primaryBtn {
          margin-left: auto;
          font-size: 12px;
          font-weight: 600;
          color: #2563eb;
        }

        .premiumBtnInner {
          padding: 12px 32px;
          border-radius: 999px;
          background: linear-gradient(90deg,#2563eb,#6d28d9);
          color: white;
          font-weight: 700;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}

/* ------------------------ PAGE ------------------------ */

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-12">

        <Hero />

        <TrustBar />

        <aside className="lg:sticky lg:top-24 h-fit mt-6">
          <NewsSidebar visibleCount={3} speed={40} />
        </aside>

        <div className="mt-10">
          <OfferSection />
        </div>

        <HomeFeaturedColleges />

        <FAQSection />
        <FAQSchema />

      </main>

      {/* ✅ CANONICAL – PAGE KE LAST ME */}
      <Head>
        <link rel="canonical" href="https://www.pathtoneet.in/" />
      </Head>
    </>
  );
}

