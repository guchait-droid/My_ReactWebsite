import React from "react";
import hand1 from "/images/hand 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Mousewheel, Scrollbar } from "swiper/modules";

const Manufacturing = () => {
  return (
    <section className="Manufacturing bg-[#C3AA8F] common_pad">
      <div className="container mx-auto">
        <div className="manufac_details grid lg:grid-cols-2 gap-10">
          <div className="manufacturing_title text-left flex justify-center h-full flex-col">
            <h2 className="text-black font-e text-5xl">
              Measured, Made and Fitted by Us
            </h2>
            <p className="text-[#27282C] font-p pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="cursor-pointer inline-flex items-center mt-5 px-6 py-2 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out w-fit">
              Get Started
              <span className="pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="manufac_swiper">
            <Swiper
              className="mySwiper h-[500px]"
              spaceBetween={10}
              slidesPerView={1}
              scrollbar={{ hide: true }}
              mousewheel={{ enabled: true, forceToAxis: true }}
              modules={[Mousewheel, Scrollbar]}
              direction="vertical"
            >
              {[1, 2].map((_, slideIndex) => (
  <SwiperSlide key={slideIndex}>
    <div className="manufac_cards grid lg:grid-cols-2 gap-5">
      {[1, 2, 3, 4].map((cardIndex) => (
        <div
          key={cardIndex}
          className={`manufac_card cursor-pointer relative bg-white rounded-2xl p-5 overflow-hidden group `} 
        >
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/sewing.jpg')] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <img
              src={hand1}
              alt={`Manufacturing Card ${cardIndex}`}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-black font-e text-2xl py-3 transition-colors duration-300 group-hover:text-white">
              Dyeing
            </h3>
            <p className="text-[#27282C] font-p transition-colors duration-300 group-hover:text-white">
              Adding color to biodegradable materials.
            </p>
          </div>
        </div>
      ))}
    </div>
  </SwiperSlide>
))}

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
