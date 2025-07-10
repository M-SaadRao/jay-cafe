import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img2.png";
import NeedvilleHero from "./NeedvilleHero";
import { Helmet } from "react-helmet-async";
import NeedvilleCarousel from "./NeedvilleCarousle";
import liljay from "../assets/images/needville/lil jay burger.jpg";
import applepie from "../assets/images/needville/apple pie.avif";
import NeedvilleFAQs from "./NeedvilleFAQs";

function Needville() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Best Home Cooking & Burgers in Needville, TX | The Jay Café
        </title>
        <meta
          name="description"
          content="Visit The Jay Café in Needville, TX for made‑from‑scratch comfort food—fried chicken, 
          burgers, steak, and homemade pie. Local favorite near Pleak & Fairchilds."
        />
      </Helmet>

      <Container>
        <NeedvilleHero />

        <h2
          className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-3"
          style={{ color: "#1d6cb5" }}
        >
          Local Diner Serving Needville, Pleak, Fairchilds & Damon
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          We welcome diners from <strong>Needville</strong>,{" "}
          <strong>Pleak</strong>, <strong>Fairchilds</strong>,{" "}
          <strong>Damon</strong>, <strong>Rosharon</strong>,{" "}
          <strong>Beasley</strong>, and <strong>Boling</strong>. Whether you’re
          searching for <strong>burgers restaurants near me</strong>,{" "}
          <strong>best fried chicken near me</strong>,{" "}
          <strong>pie near me</strong>, or <strong>best fried mushrooms</strong>
          , you can find us easily at{" "}
          <span className="font-semibold text-primary">The Jay Café</span>.
        </p>

        <div className="mt-5">
          <figure className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow">
            <iframe
              title="Map of The Jay Café, Needville"
              aria-label="Map of The Jay Café, Needville"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.2129692896237!2d-95.800451!3d29.366016999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86410147b2e35c8f%3A0x52a90f8be2e4ec9d!2sThe%20Jay%20Cafe!5e1!3m2!1sen!2s!4v1751377067731!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <figcaption className="sr-only">
              Map of The Jay Café location at 16634 TX-36, Needville, TX 77461,
              United States
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
              Scratch-Made Comfort Food—Fresh & Authentic
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Everything is made with care—from scratch:{" "}
              <strong>chicken fried chicken</strong>,{" "}
              <strong>fried chicken</strong>,{" "}
              <strong>chicken fried steak</strong>,{" "}
              <strong>grilled chicken breast</strong>, and{" "}
              <strong>chopped sirloin steak</strong>. Even our{" "}
              <strong>crispy fried mushrooms</strong> and{" "}
              <strong>fried shrimp</strong> are handcrafted. We also bake{" "}
              <strong>peach cobbler</strong> and{" "}
              <strong>classic American pie</strong> from scratch daily.
            </p>

            {/* Carousel Placeholder */}
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-gray-500 text-lg px-4 text-center">
                <NeedvilleCarousel />
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1d6cb5] text-center">
            Signature Plates That Bring Everyone to the Table
          </h2>

          <ul className="list-disc text-gray-700 pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Chicken Fried Chicken</strong> – golden breading, creamy
              gravy
            </li>
            <li>
              <strong>Chicken Fried Steak</strong> – hearty, Southern classic
            </li>
            <li>
              <strong>Chopped Sirloin Steak</strong> – flavorful and juicy
            </li>
            <li>
              <strong>Grilled Chicken Breast</strong> – light and satisfying
            </li>
            <li>
              <strong>Texas Ribeye Steak</strong> – butter-basted to perfection
            </li>
            <li>
              <strong>Fried Shrimp</strong> – Gulf-battered and crispy
            </li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Burgers &amp; Sandwiches – Classic &amp; Delicious
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text */}
            <div>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                All burgers served with home-cut fries:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>Jay Burger</strong>
                </li>
                <li>
                  <strong>Bacon Jay Burger</strong>
                </li>
                <li>
                  <strong>Double Jay Burger</strong>
                </li>
                <li>
                  <strong>Chicken Tender Sandwich</strong>
                </li>
                <li>
                  <strong>Grilled Chicken Sandwich</strong>
                </li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg mt-4 leading-relaxed">
                Add-ons: <strong>bacon</strong>, <strong>jalapeños</strong>,
                optional <strong>cheese</strong>
              </p>
            </div>

            {/* Right Column: Image */}
            <div>
              <img
                src={liljay}
                alt="lil Jay Burger with home-cut fries at The Jay Café"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Salads, Soups &amp; Sides You’ll Love
          </h2>

          {/* Text Section */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 space-y-4 text-center">
            <p>
              Choose from: <br />
              <strong>
                Fried mushrooms, onion strings, fried pickle chips
              </strong>
            </p>
            <p>
              <strong>Green beans, mashed potatoes, seasoned corn</strong>
            </p>
            <p>
              <strong>Soups &amp; salads</strong> with{" "}
              <strong>Jalapeño Ranch</strong> or{" "}
              <strong>Caesar dressing</strong>
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Image */}
            <div>
              <img
                src={applepie} // You may replace this with the peach cobbler image variable if available
                alt="Slice of homemade peach cobbler at The Jay Café"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Right Column: Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-4">
                Homemade Pie &amp; Desserts to Finish Your Meal
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                Enjoy our daily-baked pies:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>American pie</strong>
                </li>
                <li>
                  <strong>Granny cream pie</strong>
                </li>
                <li>
                  <strong>Apple pie</strong>
                </li>
                <li>
                  <strong>Peach cobbler</strong>
                </li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg mt-4">
                Perfect for dessert lovers looking for <em>pie near me</em>.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6">
            Family-Friendly Dining &amp; Kid’s Favorites
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Our Lil’ Jay Menu offers:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg mb-6 space-y-2">
            <li>Lil’ Jay Burger</li>
            <li>Tenders</li>
            <li>Footlong Corn Dog</li>
            <li>PB&amp;J</li>
            <li>Grilled Cheese</li>
          </ul>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Each meal includes a drink and a side—perfect for families.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Takeout &amp; Easy Online Ordering
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed text-center">
            Looking for <strong>takeout near me</strong> or{" "}
            <strong>food delivery Needville TX</strong>?
          </p>

          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg leading-relaxed space-y-3">
            <li>Online ordering</li>
            <li>Curbside pickup</li>
            <li>Meals packaged to stay hot and fresh</li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Why Needville Chooses The Jay Café Over Chains
          </h2>

          <ul className="list-decimal pl-6 text-gray-700 text-base md:text-lg leading-relaxed space-y-3">
            <li>Scratch-made meals—no fast-food shortcuts</li>
            <li>Southern classics not found in typical chains</li>
            <li>Bigger, tastier portions—great value</li>
            <li>Community-driven, friendly service</li>
          </ul>
        </section>

        <NeedvilleFAQs />

        <section className="py-12 px-4 bg-white text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-5">
            Come Taste What Southern Cooking Should Be—Only at Needville
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            If you're searching for <em>burgers restaurants near me</em>,{" "}
            <em>fried chicken near me</em>, <em>pie near me</em>, or{" "}
            <em>fried mushrooms near me</em>, visit{" "}
            <span className="font-semibold text-primary">
              The Jay Café – Needville
            </span>{" "}
            today and enjoy real, homemade comfort food!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+19797937900"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://www.google.com/maps/dir//The+Jay+Cafe+16634+TX-36+Needville,+TX+77461+United+States/@29.366017,-95.800451,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x86410147b2e35c8f:0x52a90f8be2e4ec9d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📍 Get Directions
            </a>

            <a
              href="https://order.online/store/the-jay-cafe-needville-23308433/?hideModal=true&pickup=true" // replace with actual Needville online ordering link if different
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
            Guest Praise – What Locals Say
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-3">
            Visitors rave about:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-1 text-left">
            <li>
              <strong>Best burger near me</strong>
            </li>
            <li>
              <strong>Best fried chicken near me</strong>
            </li>
            <li>
              <strong>Great pie near me</strong>
            </li>
            <li>
              <strong>Fried mushrooms near me</strong>
            </li>
            <li>
              <strong>Friendly staff and homey atmosphere</strong>
            </li>
          </ul>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Needville;
