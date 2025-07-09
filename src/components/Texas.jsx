import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img2.png";
import { Helmet } from "react-helmet-async";
import TexasHero from "./TexasHero";
import TexasCarousel from "./TaxesCarousel";
import baconJay from "../assets/images/texas/texas 1.webp";
import peachcobbler from "../assets/images/texas/texas 4.webp";
import TexasFAQs from "./TexasFAQs";

function Texas() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Best Burgers & Fried Chicken in Texas City | The Jay Café</title>
        <meta
          name="description"
          content="Visit The Jay Café at 5885 Gulf Fwy #353, Texas City, TX for delicious burgers, fried chicken, steaks & homemade pies. Order online now!"
        />
      </Helmet>
      <Container>
        <TexasHero />

        <h2
          className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-3"
          style={{ color: "#1d6cb5" }}
        >
          Your Local Diner in Texas City Near La Marque & Kemah
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          We serve neighbors in <strong>La Marque</strong>,{" "}
          <strong>Kemah</strong>, <strong>Dickinson</strong>,{" "}
          <strong>Clear Lake</strong>, <strong>Houston</strong>, and{" "}
          <strong>Galveston County</strong>. If you’re looking for{" "}
          <strong>best burger near me</strong>,{" "}
          <strong>fried chicken near me</strong>, <strong>pie near me</strong>,
          or <strong>best fried mushrooms</strong>,{" "}
          <span className="font-semibold text-primary">The Jay Café</span> is
          your go-to spot.
        </p>

        <div className="mt-5">
          <figure className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow">
            <iframe
              title="Map of The Jay Café, Texas"
              aria-label="Map of The Jay Café, Texas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.6216311373923!2d-95.0593301!3d29.4249243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f7d7ad28b0647%3A0x8f9a0665caca897c!2sThe%20Jay%20Cafe%20Texas%20City!5e1!3m2!1sen!2s!4v1751457856128!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <figcaption className="sr-only">
              Map of The Jay Café location at 5885 Gulf Fwy #353, Texas City
            </figcaption>
          </figure>
        </div>
        <div className="text-center mt-6">
          <a
            href="/contact" // or "/visit" based on your actual route
            className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition"
          >
            Visit or Contact Us
          </a>
        </div>

        <section className="py-12 px-4 bg-white mt-2">
          <div className="max-w-6xl mx-auto">
            {/* H2 Heading */}
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ color: "#1d6cb5" }}
            >
              Flavorful, Made-From-Scratch Comfort Food Daily
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              We’re proud to serve <strong>Texas fried chicken</strong>,{" "}
              <strong>chicken fried steak in Texas</strong>,{" "}
              <strong>chicken fried chicken near me</strong>, all prepared fresh
              every day. Everything — from our <strong>turkey dressing</strong>{" "}
              to <strong>crunchy fried mushrooms</strong> — is from scratch.
            </p>

            {/* Carousel Placeholder */}
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-gray-500 text-lg px-4 text-center">
                <TexasCarousel />
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1d6cb5] text-center">
            Signature Plates That Hit the Spot
          </h2>

          <ul className="list-disc text-gray-700 pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Bacon Cheeseburger</strong> – classic, juicy, topped with
              bacon.
            </li>
            <li>
              <strong>Chopped Sirloin Steak</strong> – hearty and flavorful.
            </li>
            <li>
              <strong>Texas Ribeye Steak</strong> – grilled to perfection.
            </li>
            <li>
              <strong>Chicken Fried Chicken &amp; Chicken Fried Steak</strong> –
              served with creamy gravy.
            </li>
            <li>
              <strong>Fried Shrimp</strong> – golden, crispy Gulf shrimp.
            </li>
            <li>
              <strong>Grilled Chicken Breast</strong> – light, savory,
              mesquite-grilled.
            </li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Burgers &amp; Sandwiches Worth the Drive
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text */}
            <div>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                All burgers are served with home-cut fries and fresh toppings:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>
                    Classic Burger, Bacon Cheeseburger, Double Bacon
                    Cheeseburger
                  </strong>
                </li>
                <li>
                  <strong>
                    Grilled Chicken Breast Sandwich, Chicken Tender Sandwich,
                    Fried Shrimp Sandwich
                  </strong>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div>
              <img
                src={baconJay}
                alt="Bacon cheeseburger with home-cut fries at The Jay Café Texas City"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Soups, Salads &amp; Sides to Satisfy
          </h2>

          {/* Text Section */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 space-y-4 text-center">
            <p>
              Enjoy our: <br />
              <strong>
                Turkey Dressing, Fried Mushrooms, Fried Pickle Chips
              </strong>
            </p>
            <p>
              Sides: <br />
              <strong>
                Green Beans, Mashed Potatoes, Seasoned Corn, Onion Strings
              </strong>
            </p>
            <p>
              Salads + Dressings: <br />
              <strong>Jalapeño Ranch, Caesar</strong>
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Image */}
            <div>
              <img
                src={peachcobbler} // You may replace this with the peach cobbler image variable if available
                alt="Slice of homemade peach cobbler at The Jay Café Texas City"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Right Column: Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-4">
                Homemade Pies &amp; Desserts You’ll Love
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                We bake fresh every day:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>American Pie</strong>
                </li>
                <li>
                  <strong>Granny Cream Pie</strong>
                </li>
                <li>
                  <strong>Apple Pie</strong>
                </li>
                <li>
                  <strong>Peach Cobbler</strong>
                </li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg mt-4">
                Your go-to for <em>pies near me</em>, <em>apple pie near me</em>
                , and <em>cobbler near me</em>.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6">
            Dine-In, Curbside Takeout &amp; Online Ordering
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Grab takeout or dine in! We offer:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg mb-6 space-y-2">
            <li>Curbside pickup</li>
            <li>
              Order Online:{" "}
              <strong>
                <a href="https://order.online/store/the-jay-cafe-texas-city-33557927/?hideModal=true&pickup=true">
                  Order Online
                </a>
              </strong>
            </li>
            <li>Fast, hot food ready for you</li>
          </ul>

          {/* Order Online Button */}
          <a
            href="https://order.online/store/the-jay-cafe-texas-city-33557927/?hideModal=true&pickup=true" // Replace with your actual online ordering URL
            className="inline-block bg-[#1d6cb5] hover:bg-[#155a94] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Order Online
          </a>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Why Texas City Chooses The Jay Café Over Fast Food Chains?
          </h2>

          <ul className="list-decimal pl-6 text-gray-700 text-base md:text-lg leading-relaxed space-y-3">
            <li>
              <strong>Real burger places near me</strong> flavor, not fast-food
              taste
            </li>
            <li>
              <strong>Best fried chicken near me</strong> vs. generic chain
              offerings
            </li>
            <li>Scratch-made meals from local ingredients</li>
            <li>Friendly, welcoming service – not just drive-thru</li>
          </ul>
        </section>

        <TexasFAQs />

        <section className="py-12 px-4 bg-white text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-5">
            Visit The Jay Café Today – Texas City’s Best Burgers &amp; Pies
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            If you’re looking for <em>best burger</em>,{" "}
            <em>fried chicken near me</em>, <em>pie near me</em>, or{" "}
            <em>fried mushrooms near me</em>, head to{" "}
            <span className="font-semibold text-primary">
              The Jay Café – Texas City
            </span>{" "}
            and taste the homemade difference!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+12819898889"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://www.google.com/maps/place/The+Jay+Cafe+Texas+City/@29.4249289,-95.061905,17z/data=!3m2!4b1!5s0x863f7df86c4f3ce1:0x64dca853c26cf6e0!4m6!3m5!1s0x863f7d7ad28b0647:0x8f9a0665caca897c!8m2!3d29.4249243!4d-95.0593301!16s%2Fg%2F11x6xm0g49?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📍 Get Directions
            </a>
            <a
              href="https://order.online/store/the-jay-cafe-texas-city-33557927/?hideModal=true&pickup=true" // replace with actual Order link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              🍽️ Order Online
            </a>
          </div>
        </section>

        <section className="pt-12 px-4 bg-gray-50 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-3">
            What Our Guests Say – Google Reviews
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-3">
            Our guests consistently rave about:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-1 text-left">
            <li>
              <strong>Delicious burgers, fried chicken, and pies</strong>
            </li>
            <li>
              <strong>Friendly service and cozy atmosphere</strong>
            </li>
            <li>
              <strong>
                A top burger restaurant near me and best pies near me
              </strong>
            </li>
          </ul>
        </section>

      </Container>
      <Footer />
    </>
  );
}

export default Texas;
