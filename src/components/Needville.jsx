import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function Needville() {
  return (
    <>
      <Header />
      <Container>
        <h3 className="text-[30px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          Needville
        </h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-primary">
            The Jay Café – Needville
          </span>
          , where southern comfort meets hometown hospitality. Located in the
          heart of Needville, our original café is where it all began — rooted
          in tradition, family values, and a passion for serving hearty,
          home-cooked meals. Whether you’re stopping by for a quick bite or
          gathering with loved ones, we’re here to make you feel right at home
          with fresh ingredients, friendly service, and flavors that bring back
          memories.
        </p>

        <p className="text-end mb-4 text-red-600">Open Every Day: 10 AM - 9 PM</p>

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.2129692896237!2d-95.800451!3d29.366016999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86410147b2e35c8f%3A0x52a90f8be2e4ec9d!2sThe%20Jay%20Cafe!5e1!3m2!1sen!2s!4v1751377067731!5m2!1sen!2s"
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

export default Needville;
