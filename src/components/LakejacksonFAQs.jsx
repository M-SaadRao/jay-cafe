import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Where is The Jay Café located?",
    answer: "At 145 Oyster Creek 1-A, just off SH 288 in Lake Jackson, TX 77566.",
  },
  {
    question: "Do you offer takeout & delivery?",
    answer: "Yes, we offer curbside pickup and online ordering.",
  },
  {
    question: "What are your most popular dishes?",
    answer:
      "Chicken Fried Chicken, Big Tex Chicken Fried Steak, Jumbo Shrimp, and our Homemade Pies.",
  },
  {
    question: "Are there kid-friendly options?",
    answer: "Yes! Try our Lil’ Jay Menu featuring burgers, grilled cheese, and more.",
  },
  {
    question: "Are your ingredients locally sourced?",
    answer: "Absolutely — from local Texas farms.",
  },
  {
    question: "Can I host a group or event here?",
    answer: "Yes! We welcome groups and offer custom menus.",
  },
];

const LakejacksonFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      {/* Schema Markup for SEO */}
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
            to={"/contact"}
            className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium py-2 px-6 rounded-lg shadow transition"
          >
            Contact Us Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LakejacksonFAQs;
