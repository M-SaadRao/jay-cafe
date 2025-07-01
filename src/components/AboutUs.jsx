import React from "react";
import Container from "./Container";
import index from "../index.css";

function AboutUs() {
  return (
    <Container>
      <div className="text-center about-bg p-5 rounded-lg">
        <h3 className="text-[30px] text-white mt-5 mb-3 pt-3 text-center md:text-[45px] font-medium yellowtail-font leading-none">
          About Us
        </h3>

        {/* Grid wrapper for 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div>
            <h3 className="text-[25px] text-gray-800 mt-5 mb-3 pt-3 text-center md:text-[35px] font-medium yellowtail-font leading-none">
              Our Story
            </h3>
            <p className="text-white">
              The Plaster Family has been in the restaurant business for 33
              years. Out of frustration, we started The Jay Café. You can’t find
              a plate of homemade real traditional American food anywhere! So we
              sold all of our franchised restaurants and are doing our own thing
              - getting up at the crack of dawn to hand pick the freshest meats
              and vegetables daily!
            </p>
          </div>
          <div>
            <h3 className="text-[25px] text-gray-800 mt-5 mb-3 pt-3 text-center md:text-[35px] font-medium yellowtail-font leading-none">
              Dine In or Take Out
            </h3>
            <p className="text-white">
              We have worked to package our meals in a way that lets you bring
              the quality of our meals into your home. We always love to see you
              in person, but even when we can't, we ensure that your dining
              experience is top notch!
            </p>
          </div>
          <div>
            <h3 className="text-[25px] text-gray-800 mt-5 mb-3 pt-3 text-center md:text-[35px] font-medium yellowtail-font leading-none">
              The Jay Promise
            </h3>
            <p className="text-white">
              We refuse to compromise on quality in our restaurant. That's why
              we source our fresh ingredients from local farmers' markets. No
              matter what time of year, you can be sure you're eating the best
              of the season. We make everything fresh from scratch in our
              kitchen from the soups, salad dressings to the Blue Plate specials
              and Homemade Pies! Try our famous Chicken Fried Chicken!{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
