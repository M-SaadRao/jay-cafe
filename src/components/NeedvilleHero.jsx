import React from "react";
import heroImg from "../assets/images/needville/needville-hero.jpg";

const NeedvilleHero = () => {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-[30vh] md:h-[100vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Hero Heading */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight max-w-4xl">
            Welcome to The Jay Café – Needville’s
            <br className="hidden md:block" /> Favorite Comfort Food Spot
          </h1>
        </div>
      </section>

      {/* Content Below Hero */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-primary">
              The Jay Café – Needville
            </span>
            , your new destination for home cooking in Needville, TX at{" "}
            <strong>16634 TX-36, Needville, TX 77461, United States</strong>. We’re proud to serve
            crave-worthy <em>fried chicken near me</em>, <em>burger near me</em>
            , chopped sirloin steak, grilled chicken breast, chicken fried
            steak, and homemade pie, plus our signature <em>fried mushrooms</em>
            , <em>fried shrimp</em>, and <em>peach cobbler</em>—all made fresh
            daily.
          </p>
        </div>
      </section>
    </>
  );
};

export default NeedvilleHero;
