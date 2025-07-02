import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img.png"

function Texas() {
  return (
    <>
      <Header />
      <Container>
        <h3 className="text-[35px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          Texas City
        </h3>
        <p className="text-start md:text-center text-gray-700 max-w-5xl mx-auto px-4 mb-8 text-lg leading-relaxed">
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Contact:
            </h3>
            <p className="flex items-start mb-3 text-gray-700">
              <FaMapMarkerAlt className="text-primary mt-1 mr-2 size-5" />
              <span>
                5885 Gulf Fwy #353, Texas City, <br /> TX 77591, United States
              </span>
            </p>
            <p className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-primary mr-2 size-5" />
              <a href="tel:+12819898889">+1 281-989-8889</a>
              
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Jay Cafe Open Hours:
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Monday: 11 AM – 8:30 PM</p>
              <p>Tuesday: 11 AM – 8:30 PM</p>
              <p>Wednesday: 11 AM – 8:30 PM</p>
              <p>Thursday: 11 AM – 8:30 PM</p>
              <p>Friday: 11 AM – 8:30 PM</p>
              <p>Saturday: 11 AM – 7 PM</p>
              <p>Sunday: 11 AM – 8:30 PM</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.6216311373923!2d-95.0593301!3d29.4249243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f7d7ad28b0647%3A0x8f9a0665caca897c!2sThe%20Jay%20Cafe%20Texas%20City!5e1!3m2!1sen!2s!4v1751457856128!5m2!1sen!2s"
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
