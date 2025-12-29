"use client";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-20 pb-14 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          MBBS Counselling in India 2026 – Expert NEET Admission Guidance
        </h1>

        <h2 className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
          Get Expert NEET Counselling & Secure Your MBBS Seat With Confidence
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
          PathToNeet provides trusted MBBS counselling in India for NEET 2026 aspirants.
          We offer personalised guidance, AI-based college prediction and complete
          admission support for government and private medical colleges.
        </p>

        {/* CTA Buttons – SIDE BY SIDE */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "nowrap",
          }}
        >
          <a
            href="/counselling"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book Counselling
          </a>

          <a
            href="tel:+919217026137"
            style={{
              backgroundColor: "#1f2937",
              color: "#ffffff",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Call: +91-9217026137
          </a>
        </div>

        {/* IMAGE BELOW CTA – MOBILE SAME, DESKTOP SMALLER */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/hero.png"   /* image must be in public/hero.png */
            alt="MBBS Counselling Support"
            style={{
              display: "block",
              width: "360px",     // 👈 desktop size control
              maxWidth: "90%",    // 👈 mobile me responsive
              height: "auto",
              filter: "none",
              opacity: 1,
            }}
          />
        </div>

      </div>
    </section>
  );
}
