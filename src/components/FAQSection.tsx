"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When will MBBS counselling in India 2026 start?",
    a: "MBBS counselling in India usually starts between July and August after the NEET 2026 results are announced. All India Quota and State Quota counselling follow separate schedules.",
  },
  {
    q: "Is it possible to get an MBBS seat with a low NEET rank?",
    a: "Yes. Students with low NEET ranks can get MBBS seats in private medical colleges and deemed universities. Proper counselling and correct choice filling play a crucial role.",
  },
  {
    q: "What is the difference between government and private medical college counselling?",
    a: "Government medical colleges have lower fees but very high competition. Private medical colleges have higher fees but offer better seat availability for mid and low-rank students.",
  },
  {
    q: "Is NEET counselling conducted online or offline?",
    a: "The NEET counselling process is conducted online, including registration, choice filling and seat allotment. Final reporting at the allotted college is done offline.",
  },
  {
    q: "Who is eligible for MBBS counselling in India 2026?",
    a: "Students who qualify the NEET examination and meet the required eligibility criteria are eligible for MBBS counselling in India 2026.",
  },
  {
    q: "How does PathToNeet help students in MBBS counselling?",
    a: "PathToNeet provides rank analysis, college prediction, choice filling guidance and end-to-end admission assistance to help students secure the best possible MBBS college.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-slate-600 mt-3">
          Everything you need to know about MBBS Counselling in India 2026
        </p>

        {/* FAQ Cards */}
        <div className="mt-12 space-y-5">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur
              shadow-sm hover:shadow-lg transition-all duration-300
              ${open === i ? "ring-2 ring-blue-500/20" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {item.q}
                </h3>

                <span
                  className={`text-2xl font-bold text-blue-600 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ PREMIUM BOTTOM CTA (REPLACED) */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-slate-900">
            Still confused about NEET or MBBS counselling?
          </p>
          <p className="text-slate-600 mt-1">
            Talk to our expert counsellors and get personalised guidance.
          </p>

          <div className="faq-cta-wrap">
            <a href="/counselling" className="faq-cta-book">
              Book Counselling
            </a>
            <a href="tel:+919217026137" className="faq-cta-call">
              Call: +91-9217026137
            </a>
          </div>
        </div>

      </div>

      {/* CTA Styles */}
      <style jsx>{`
        .faq-cta-wrap {
          margin-top: 18px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .faq-cta-book {
          background: linear-gradient(90deg, #ff7a18, #ff9f1c);
          color: #fff;
          padding: 12px 30px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(255, 122, 24, 0.35);
          transition: all 0.25s ease;
        }

        .faq-cta-book:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(255, 122, 24, 0.45);
        }

        .faq-cta-call {
          background: #1f2937;
          color: #fff;
          padding: 12px 30px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
        }

        .faq-cta-call:hover {
          background: #111827;
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
}
