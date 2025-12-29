"use client";

import { useEffect, useState } from "react";

/* 🔢 CountUp Component */
function CountUp({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const increment = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export default function TrustBar() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
          Trusted by 5,000+ NEET Aspirants Across India
        </h2>

        <div className="mt-3 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-red-600"></span>
        </div>

        {/* TRUST BOXES */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Box 1 */}
          <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center shadow-sm">
            <p className="text-4xl font-extrabold text-red-600">
              <CountUp end={10} />+
            </p>
            <p className="mt-2 text-base font-bold text-gray-900">
              Years of Counselling Experience
            </p>
          </div>

          {/* Box 2 */}
          <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center shadow-sm">
            <p className="text-4xl font-extrabold text-red-600">
              <CountUp end={5000} />+
            </p>
            <p className="mt-2 text-base font-bold text-gray-900">
              Students Guided Successfully
            </p>
          </div>

          {/* Box 3 */}
          <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center shadow-sm">
            <p className="text-4xl font-extrabold text-red-600">
              <CountUp end={100} />+
            </p>
            <p className="mt-2 text-base font-bold text-gray-900">
              Medical Colleges Covered
            </p>
          </div>

          {/* Box 4 (Text only) */}
          <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center shadow-sm">
            <p className="text-3xl font-extrabold text-red-600">
              PAN India
            </p>
            <p className="mt-2 text-base font-bold text-gray-900">
              NEET Counselling Support
            </p>
          </div>

        </div>

        <p className="mt-8 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          PathToNeet is a trusted platform for MBBS counselling in India, providing expert
          NEET admission guidance for government and private medical colleges across India.
        </p>

      </div>
    </section>
  );
}
