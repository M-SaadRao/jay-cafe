import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Where is The Jay Café located?",
    answer: "16634 TX-36, Needville, TX 77461, United States",
  },
  {
    question: "Do you offer takeout?",
    answer: "Yes—online ordering and curbside pick-up available.",
  },
  {
    question: "What are your signature dishes?",
    answer:
      "Chicken Fried Chicken, Bacon Jay Burger, Fried Mushrooms, homemade pies.",
  },
  {
    question: "Do you serve fried chicken & fried shrimp?",
    answer:
      "Yes—we feature fried chicken, fried shrimp, and chicken fried steak.",
  },
  {
    question: "What pies are available?",
    answer: "American, granny cream, apple pie, peach cobbler.",
  },
  {
    question: "Do you have a kid-friendly menu?",
    answer:
      "Yes—the Lil’ Jay Menu includes burgers, tenders, corn dogs & more.",
  },
];

const NeedvilleFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      {/* FAQ Schema Markup for SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-50 transition flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/contact"
            className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium py-2 px-6 rounded-lg shadow transition"
          >
            Contact Us Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeedvilleFAQs;
