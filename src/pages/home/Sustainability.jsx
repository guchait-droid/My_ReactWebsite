import React from "react";
import sus1 from "/images/sustainability (1).jpg";
import sus2 from "/images/sustainability (2).jpg";
import sus3 from "/images/sustainability (3).jpg";
import icon1 from "/images/solar-panel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const Sustainability = () => {
  return (
    <section className="sustainability py-12 bg-[#FAFAFA]">
      <div className="container mx-auto">
        <div className="sustainability_title text-center">
          <h2 className="text-[#4F8B00] font-e text-5xl">Sustainability</h2>
          <p className="px-[392px] text-[#787878] font-p pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sustainability_main grid lg:grid-cols-2 gap-2 pt-10">
     
      <div className="sustainability_images h-[100vh] relative">
        <img src={sus1} alt="" className="absolute rounded-2xl" />
        <img
          src={sus2}
          alt=""
          className="absolute rounded-2xl top-60 right-10 border-6 border-white"
        />
        <img
          src={sus3}
          alt=""
          className="absolute rounded-2xl top-30 left-[-20px] border-4 border-white"
        />
      </div>

   
      <div className="sustainability_content h-[100vh]">
        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={20}
          mousewheel={{ forceToAxis: true }}
          scrollbar={{ draggable: true }}
          modules={[Mousewheel, Scrollbar]}
          className="h-full"
        >
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="sus_card bg-white rounded-2xl p-5">
                  <div className="card_icon bg-[#4F8B00] w-12 h-12 p-2 rounded-full">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="card_title">
                    <h3 className="text-black font-e text-3xl py-3">
                      Solar Panel
                    </h3>
                    <p className="font-p text-[#787878]">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="cursor-pointer flex items-center gap-2 mt-5 px-5 py-2 text-[#4F8B00] border border-[#4F8B00] rounded-full bg-transparent hover:bg-[#4F8B00] hover:text-white text-sm duration-300 ease-in-out">
                      Learn More
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
                    </button>
                  </div>
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

export default Sustainability;
