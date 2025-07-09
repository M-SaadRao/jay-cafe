import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Where are you located?",
    answer: "5885 Gulf Fwy #353, Texas City, TX 77591.",
  },
  {
    question: "Do you offer takeout / curbside?",
    answer: "Yes! Quick and easy order via phone or online.",
  },
  {
    question: "What burgers do you offer?",
    answer:
      "Classic burger, bacon cheeseburger, double bacon cheeseburger, chicken tender sandwich.",
  },
  {
    question: "Do you have fried chicken options?",
    answer:
      "Yes — Texas fried chicken, chicken fried steak, chicken fried chicken, and fried shrimp.",
  },
  {
    question: "What pies are available?",
    answer: "American pie, granny cream pie, apple pie, peach cobbler.",
  },
  {
    question: "Can I order online?",
    answer: 'Absolutely — click “Order Online” above.',
  },
];

const TexasFAQs = () => {
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

export default TexasFAQs;
