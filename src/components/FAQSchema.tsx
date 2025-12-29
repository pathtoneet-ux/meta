import Script from "next/script";

export default function FAQSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "When will MBBS counselling in India 2026 start?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MBBS counselling in India usually starts between July and August after the NEET 2026 results are announced. All India Quota and State Quota counselling follow separate schedules."
              }
            },
            {
              "@type": "Question",
              "name": "Is it possible to get an MBBS seat with a low NEET rank?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Students with low NEET ranks can get MBBS seats in private medical colleges and deemed universities. Proper counselling and correct choice filling play a crucial role."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between government and private medical college counselling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Government medical colleges have lower fees but very high competition. Private medical colleges have higher fees but offer better seat availability for mid and low-rank students."
              }
            },
            {
              "@type": "Question",
              "name": "Is NEET counselling conducted online or offline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The NEET counselling process is conducted online, including registration, choice filling and seat allotment. Final reporting at the allotted college is done offline."
              }
            },
            {
              "@type": "Question",
              "name": "Who is eligible for MBBS counselling in India 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Students who qualify the NEET examination and meet the required eligibility criteria are eligible for MBBS counselling in India 2026."
              }
            },
            {
              "@type": "Question",
              "name": "How does PathToNeet help students in MBBS counselling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PathToNeet provides rank analysis, college prediction, choice filling guidance and complete admission support to help students secure the best possible MBBS college."
              }
            }
          ]
        })
      }}
    />
  );
}
