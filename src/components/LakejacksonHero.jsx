import React from "react";
import heroImg from "../assets/images/lake jackson/lakejackson-hero.jpg";

const LakejacksonHero = () => {
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
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight max-w-4xl">
            Welcome to The Jay Café – Real Southern Flavor,
            <br className="hidden md:block" /> Made Fresh Daily
          </h1>
        </div>
      </section>

      {/* Content Below Hero */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-primary">The Jay Café</span>,
            your hometown family restaurant located at{" "}
            <strong>145 Oyster Creek 1-A, Lake Jackson, TX 77566</strong>. We
            specialize in homemade comfort food, made from scratch daily. If
            you’ve been searching for a <em>steak near me</em>,{" "}
            <em>grilled chicken sandwich</em>, <em>fried shrimp</em>,{" "}
            <em>onion rings near me</em>, or{" "}
            <em>burgers near Lake Jackson, TX</em>, your search ends here!
          </p>
        </div>
      </section>
    </>
  );
};

export default LakejacksonHero;
