import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img2.png";

function Needville() {
  return (
    <>
      <Header />
      <Container>
        <h3 className="text-[35px] text-black mt-5 mb-3 pt-3 text-center md:text-[45px]  yellowtail-font leading-none">
          Needville
        </h3>
        <p className="text-start md:text-center text-gray-700 max-w-5xl mx-auto px-4 mb-8 text-lg leading-relaxed">
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl playFont text-red-600 mb-4">Contact:</h3>
            <p className="flex items-start mb-3 text-gray-700">
              <FaMapMarkerAlt className="text-primary mt-1 mr-2 size-5" />
              <span>
                16634 TX-36, Needville, <br />
                TX 77461, United States
              </span>
            </p>
            <p className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-primary mr-2 size-5" />
              <a href="tel:+19797937900">+1 979-793-7900</a>
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-xl playFont text-red-600 mb-4">
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
            <h3 className="text-xl playFont text-red-600 mb-4">
              Enjoy Best Online Delivery with:
            </h3>
            <a
              href="https://order.online/store/the-jay-cafe-needville-23308433/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt="Jay Cafe"
                className="w-[180px] h-auto text-center"
              />
            </a>
          </div>
        </div>

        <div className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow mt-5">
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
