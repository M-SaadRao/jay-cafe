import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img.png";

function Lakejackson() {
  return (
    <>
      <Header />

      <Container>
        <h3 className="text-[35px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          Lake Jackson
        </h3>
        <p className="text-start md:text-center text-gray-700 max-w-5xl mx-auto px-4 mb-8 text-lg leading-relaxed">
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Contact:
            </h3>
            <p className="flex items-start mb-3 text-gray-700">
              <FaMapMarkerAlt className="text-primary mt-1 mr-2 size-5" />
              <span>
                145 Oyster Creek Dr, Lake Jackson, <br />
                TX 77566, United States
              </span>
            </p>
            <p className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-primary mr-2 size-5" />
              <a href="tel:+19792928278">+1 979-292-8278</a>
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Jay Cafe Open Hours:
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Monday, 10 AM–9 PM</p>
              <p>Tuesday, 10 AM–9 PM</p>
              <p>Wednesday, 10 AM–9 PM</p>
              <p>Thursday, 10 AM–9 PM</p>
              <p>Friday, 10 AM–9 PM</p>
              <p>Saturday, 10 AM–9 PM</p>
              <p>Sunday, 10 AM–9 PM</p>
            </div>
          </div>

          {/* enjoy */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Enjoy The Best Taste with:
            </h3>
            <img src={image} alt="jay Cafe" className="w-[180px] h-auto" />
          </div>
        </div>

        <div className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow mt-5">
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
