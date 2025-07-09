import React from "react";
import heroImg from "../assets/images/lake jackson/lakejackson-hero.jpg";

const TexasHero = () => {
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
          <h1 className="text-white text-1xl md:text-5xl font-bold leading-tight max-w-4xl">
            Welcome to The Jay Café – Texas City’s Local Favorite ,
            <br className="hidden md:block" /> for Comfort Food
          </h1>
        </div>
      </section>

      {/* Content Below Hero */}

      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-primary">
              The Jay Café – Texas City
            </span>
            , your new <em>burgers restaurant near me</em> destination at{" "}
            <strong>5885 Gulf Fwy #353, Texas City, TX 77591</strong>. We serve
            mouthwatering <em>bacon cheeseburgers</em>, <em>burgers near me</em>
            , <em>fried chicken near me</em>, <em>chicken fried steak</em>,{" "}
            <em>chopped sirloin steak</em>, <em>Texas ribeye steak</em>, and
            irresistible homemade pie, all made fresh daily. Craving{" "}
            <em>fried shrimp</em> or a savoury <em>grilled chicken breast</em>?
            We’ve got you covered!
          </p>
        </div>
      </section>
    </>
  );
};

export default TexasHero;
