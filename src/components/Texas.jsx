import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function Texas() {
  return (
    <>
      <Header />
      <Container>
        <h3 className="text-[30px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          Texas
        </h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-primary">
            The Jay Café – Texas City
          </span>
          , our vibrant location nestled inside the Tanger Outlet Mall. Whether
          you’re shopping, meeting friends, or just passing through, this stop
          is the perfect place to refuel with fresh, made-from-scratch meals. We
          bring our classic homestyle cooking and friendly service to a
          fast-paced retail setting — so you can enjoy the comfort of The Jay
          Café no matter where your day takes you.
        </p>
        <p className="text-end mb-4 text-red-600">
          Open Every Day: 10 AM - 9 PM
        </p>

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.6216311373923!2d-95.0593301!3d29.4249243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f7d7ad28b0647%3A0x8f9a0665caca897c!2sThe%20Jay%20Cafe%20Texas%20City!5e1!3m2!1sen!2s!4v1751383705276!5m2!1sen!2s"
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

export default Texas;
