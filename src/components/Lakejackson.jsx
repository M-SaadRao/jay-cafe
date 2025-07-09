import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/images/jay_img2.png";
import { Helmet } from "react-helmet-async";
import SignatureCarousel from "../components/SignatureCarousel";
import baconJay from "../assets/images/lake jackson/bacon jay.png";
import wippedCream from "../assets/images/lake jackson/wipped cream.jpg";
import LakejacksonFAQs from "../components/LakejacksonFAQs";
import LakejacksonHero from "./LakejacksonHero";


function Lakejackson() {
  return (
    <>
      <Header />

      <Helmet>
        <title>Best Home Cooking in Lake Jackson | The Jay Café</title>
        <meta
          name="description"
          content="Visit The Jay Café for authentic, scratch-made Southern comfort food in Lake Jackson, TX. Family-friendly dining near Clute, Oyster Creek, and Angleton."
        />
      </Helmet>

      <Container>
        <LakejacksonHero />

        <h2
          className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-3"
          style={{ color: "#1d6cb5" }}
        >
          Your Local Diner in Lake Jackson, TX – Serving Clute, Oyster Creek,
          and Beyond
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At The Jay Café, we proudly welcome guests from Lake Jackson, Clute,
          Oyster Creek, Richwood, Angleton, Freeport, and Brazoria. Whether
          you're searching for{" "}
          <strong>family restaurants in Lake Jackson</strong>,{" "}
          <strong>best dinner near me</strong>, or a{" "}
          <strong>dine-in restaurant near Oyster Creek</strong> — your comfort
          food cravings end here.
        </p>

        <div className="mt-5">
          <figure className="relative w-full pb-[50%] h-0 overflow-hidden rounded-lg shadow">
            <iframe
              title="Map of The Jay Café, Lake Jackson"
              aria-label="Map of The Jay Café, Lake Jackson"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.815351830963!2d-95.4529762!3d29.045694799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86404386a2cb21a1%3A0x403dd790ac0442eb!2sThe%20Jay%20Cafe!5e1!3m2!1sen!2s!4v1751383449280!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <figcaption className="sr-only">
              Map of The Jay Café, Lake Jackson
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
              Real From-Scratch Meals—No Shortcuts
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Unlike chain restaurants like Beef O’ Brady’s, we handcraft every
              dish using locally sourced ingredients:
            </p>

            {/* Bullet List */}
            <ul className="list-disc list-inside text-gray-700 text-lg max-w-xl mx-auto mb-6">
              <li>Farm-to-table produce</li>
              <li>Fresh meats near me</li>
              <li>Homemade recipes</li>
            </ul>

            {/* Signature Dishes */}
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              From our signature <strong>Chicken Fried Chicken</strong>,
              <strong> Big Tex Chicken Fried Steak</strong>, to creamy,
              <strong> homemade Bluebell milkshakes</strong>, everything is made
              fresh — no microwaves, no mysteries.
            </p>

            {/* Carousel Placeholder */}
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-gray-500 text-lg px-4 text-center">
                <SignatureCarousel />
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
              <strong>Chicken Fried Chicken Breast</strong> – famous for its
              crispy hand-breading and creamy gravy.
            </li>
            <li>
              <strong>The Big Tex Chicken Fried Steak</strong> – a Texas-sized
              cutlet you won’t forget.
            </li>
            <li>
              <strong>New York Strip &amp; Texas Ribeye Steak</strong> – fresh,
              hand-cut, wood-grilled steaks with butter basting.
            </li>
            <li>
              <strong>Jumbo Gulf Shrimp</strong> – grilled or fried, served with
              our homemade tartar sauce.
            </li>
            <li>
              <strong>Hand-spun Bluebell Milkshake</strong> – choose chocolate,
              vanilla, or strawberry.
            </li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Burgers &amp; Sandwiches – South Texas Favorites
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text */}
            <div>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                All burgers and sandwiches come on toasted sourdough with
                home-cut fries, lettuce, tomato, onion, and pickles:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>
                    Jay Burger, Juicy Jay, Bacon Jay, Mushroom Jay, Jalapeño Jay
                  </strong>
                </li>
                <li>
                  <strong>Original Grilled Chicken Sandwich, Jay Filay</strong>
                </li>
                <li>
                  <strong>
                    Grandma’s Chicken Salad Sandwich, Fairchild Club, BLT on
                    Texas Toast
                  </strong>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div>
              <img
                src={baconJay}
                alt="Bacon Jay Burger with home-cut fries and jalapeños"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6 text-center">
            Soups, Salads &amp; Sides You’ll Crave
          </h2>

          {/* Text Section */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 space-y-4">
            <p>
              Our scratch-made soups and dressings include: <br />
              <strong>
                Jalapeño Ranch, Hot Bacon, Thousand Island, Honey Mustard,
                Italian, Caesar
              </strong>
            </p>
            <p>
              Menu highlights: <br />
              <strong>
                Chef Salad, Grilled Chicken Salad, Jumbo Shrimp Salad,
                Traditional Caesar Salad
              </strong>
            </p>
          </div>

          {/* Optional: Table Layout */}
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-300 text-gray-800 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Salads
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Sides
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Chef Salad
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Green beans with bacon
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Grilled Chicken Salad
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Seasoned corn
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Jumbo Shrimp Salad
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Fried okra
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Traditional Caesar Salad
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Mashed potatoes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">
                    Baked potato
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">
                    Onion strings
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">
                    Fried pickle chips
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-5 text-center">
            Kids Menu &amp; Family Dining
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Searching for <em>kids meals near me?</em> Our Lil’ Jay Menu
            features:
          </p>

          <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg space-y-2 mb-4">
            <li>
              <strong>Lil’ Jay Burger</strong>, <strong>Lil’ Tenders</strong>,{" "}
              <strong>Footlong Corn Dog</strong>, <strong>PB&amp;J</strong>,{" "}
              <strong>Old-fashioned Grilled Cheese</strong> — each with a drink
              and side.
            </li>
          </ul>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We’re the top family dining spot in Brazoria County — perfect for
            dinner with kids, best kids food, and affordable family meals.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-6">
            Convenient Takeout is Just a Click Away
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Looking for takeout near me or food delivery Lake Jackson TX? We
            offer:
          </p>

          <ul className="list-disc text-gray-700 text-left max-w-md mx-auto mb-6 space-y-2">
            <li>
              <strong>Curbside pickup</strong>
            </li>
            <li>
              <strong>Online ordering</strong>
            </li>
            <li>
              <strong>Meal packaging that keeps your food hot and fresh</strong>
            </li>
          </ul>

          <a
            href="https://order.online/store/the-jay-cafe-lake-jackson-26102938/?hideModal=true&pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1d6cb5] text-white px-6 py-3 rounded-md shadow hover:bg-[#165c9e] transition"
          >
            Order Online Now
          </a>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Image */}
            <div>
              <img
                src={wippedCream}
                alt="Slice of homemade coconut cream pie with whipped 
                topping"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Right Column: Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-4">
                Homemade Desserts to Finish the Meal
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                Don’t miss our pies made from scratch every day:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base md:text-lg">
                <li>
                  <strong>Coconut Cream Pie</strong>
                </li>
                <li>
                  <strong>Triple Chocolate Pie</strong>
                </li>
                <li>
                  <strong>Apple Pie</strong>
                </li>
                <li>
                  <strong>Peanut Butter Pie</strong>
                </li>
                <li>
                  <strong>Peach Cobbler</strong>
                </li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg mt-4">
                Perfect for dessert lovers and searchers for{" "}
                <em>homemade pie near me</em>.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-4 text-center">
            Located at 145 Oyster Creek 1-A – Easy to Find
          </h2>

          <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg space-y-2 mb-4">
            <li>
              <strong>Oyster Creek Shopping Center</strong>
            </li>
            <li>
              <strong>Brazosport High School</strong>
            </li>
            <li>
              <strong>Lake Jackson Civic Center</strong>
            </li>
            <li>
              <strong>Just off SH 288</strong>
            </li>
          </ul>

          <p className="text-gray-700 text-base md:text-lg">
            Your top result for <em>restaurant near me Lake Jackson</em>,{" "}
            <em>family diner Oyster Creek</em>.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-4 text-center">
            Why Locals Choose Us Over Beef O’ Brady&apos;s
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            What Sets The Jay Café Apart
          </h3>

          <ol className="list-decimal pl-5 text-gray-700 space-y-3 text-base md:text-lg">
            <li>No sports bar atmosphere — just genuine home-cooked food</li>
            <li>Locally sourced, freshly made — not generic bar food</li>
            <li>Bigger portions, better value than national chains</li>
            <li>Friendly, personal service — not just televised sports</li>
          </ol>
        </section>

        <LakejacksonFAQs />

        <section className="py-12 px-4 bg-white text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d6cb5] mb-5">
            Come Discover the Difference at The Jay Café
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            If you're searching for <em>family restaurants in Lake Jackson</em>,{" "}
            <em>steak sandwich near me</em>, <em>best comfort food near me</em>,
            or <em>homemade pie near me</em>, visit The Jay Café today. Every
            dish is made from scratch with love.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+19792928278"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📞 Call Now
            </a>
            <a
              href="https://www.google.com/maps/place/The+Jay+Cafe/@29.0456995,-95.4555511,17z/data=!3m1!4b1!4m6!3m5!1s0x86404386a2cb21a1:0x403dd790ac0442eb!8m2!3d29.0456948!4d-95.4529762!16s%2Fg%2F11vcy0m7lk?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              📍 Get Directions
            </a>
            <a
              href="https://order.online/store/the-jay-cafe-lake-jackson-26102938"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d6cb5] hover:bg-[#155494] text-white font-medium px-6 py-3 rounded-md transition"
            >
              🍽️ Order Online
            </a>
          </div>
        </section>

        <section className="bg-gray-50 pt-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1d6cb5] mb-3">
              What Our Guests Are Saying – Google Reviews
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              At{" "}
              <span className="font-semibold text-primary">The Jay Café</span>,
              customers rave about:
            </p>
            <ul className="text-gray-800 text-base md:text-lg text-left max-w-2xl mx-auto space-y-1 list-disc list-inside mb-3">
              <li>Authentic, made-from-scratch meals</li>
              <li>Friendly and attentive service</li>
              <li>Family-friendly atmosphere</li>
              <li>Generous portions and great value</li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg">
              We’re proud to be one of the most loved restaurants near Lake
              Jackson and Oyster Creek.
            </p>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default Lakejackson;
