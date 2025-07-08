import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Dummy image imports
import dish1 from "../assets/images/lake jackson/lake carousel 1.webp";
import dish2 from "../assets/images/lake jackson/lake carousel 2.webp";
import dish3 from "../assets/images/lake jackson/lake carousel 3.webp";
import dish4 from "../assets/images/lake jackson/lake carousel 4.webp";
import dish5 from "../assets/images/lake jackson/lake carousel 5.webp";

const SignatureCarousel = () => {
  const dishes = [dish1, dish2, dish3, dish4, dish5];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1} // Scroll only one at a time
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <div className="h-[250px] md:h-[300px] overflow-hidden rounded-xl shadow">
              <img
                src={dish}
                alt={`Dish ${index + 1}`}
                className="w-full h-full object-cover img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SignatureCarousel;
