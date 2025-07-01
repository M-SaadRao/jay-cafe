import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function Lakejackson() {
  return (
    <>
      <Header />

      <Container>
        <h3 className="text-[30px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          Lake Jackson
        </h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-primary">
            The Jay Café – Lake Jackson
          </span>
          , where great food and southern hospitality come together. Located in
          the heart of Lake Jackson, this café offers the same beloved homemade
          flavors you’ve come to expect — from our hand-breaded tenders to our
          famous daily specials. Whether you’re here for a family meal, a quick
          lunch, or a weekend treat, we’re proud to serve our community with a
          smile and a full plate.
        </p>
        <p className="text-end mb-4 text-red-600">Open Every Day: 10 AM - 9 PM</p>

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.815351830963!2d-95.4529762!3d29.045694799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86404386a2cb21a1%3A0x403dd790ac0442eb!2sThe%20Jay%20Cafe!5e1!3m2!1sen!2s!4v1751383449280!5m2!1sen!2s"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Lakejackson;
