import React from "react";
import ctaimg from "/images/cta (2).png";
import ctaimg2 from "/images/cta (3).png";
import ctaimg3 from "/images/cta (4).png";
import ctaimg4 from "/images/cta (1).png";
import wcuicon from "/images/wcu_icon (3).png";
import wcumiddle from "/images/wcu_middle.jpg";

const Whychooseus = () => {
  return (
    <section className="why_choose_us bg-[url(../images/wcu_bg.png)] common_pad">
      <div className="container mx-auto">
        <div className="why_cta grid lg:grid-cols-4 gap-10">
          <div className="why_cta_item pt-10 flex flex-col items-center gap-3">
            <img src={ctaimg} alt="" />
            <h3 className="text-black text-2xl font-e">Meditation</h3>
            <p className="text-[#27282C] font-p text-sm px-3 text-center">
              Dui sapien eget mi proin sed libero. Sit amet massa vitae tortor
              condimentum.
            </p>
          </div>
          <div className="why_cta_item pt-10 flex flex-col items-center gap-3">
            <img src={ctaimg2} alt="" />
            <h3 className="text-black text-2xl font-e">Aromatherapy</h3>
            <p className="text-[#27282C] font-p text-sm px-3 text-center">
              Dui sapien eget mi proin sed libero. Sit amet massa vitae tortor
              condimentum.
            </p>
          </div>
          <div className="why_cta_item pt-10 flex flex-col items-center gap-3">
            <img src={ctaimg3} alt="" />
            <h3 className="text-black text-2xl font-e">Yoga Asanas</h3>
            <p className="text-[#27282C] font-p text-sm px-3 text-center">
              Dui sapien eget mi proin sed libero. Sit amet massa vitae tortor
              condimentum.
            </p>
          </div>
          <div className="why_cta_item pt-10 flex flex-col items-center gap-3">
            <img src={ctaimg4} alt="" />
            <h3 className="text-black text-2xl font-e">Sound Theraphy</h3>
            <p className="text-[#27282C] font-p text-sm px-3 text-center">
              Dui sapien eget mi proin sed libero. Sit amet massa vitae tortor
              condimentum.
            </p>
          </div>
        </div>

        <div className="wcu_main pt-20">
          <div className="wcu_title">
            <h2 className="text-[#9D7753] text-center font-e text-5xl">
              Why Choose Us
            </h2>
            <p className="px-[392px] text-center text-[#787878] font-p pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="wcu_details grid lg:grid-cols-3 gap-10">
            <div className="left_details pt-10">
              <div className="left_card bg-white rounded-2xl p-5 relative before:absolute before:top-[-60px] before:left-1/2 before:h-7 before:w-0.5 before:bg-gray-500 before:border-l before:border-gray-700 before:content-[''] after:absolute after:top-[-60px] after:right-[20px] after:h-0.5 after:w-45 after:bg-gray-500 after:border-1 after:content-['']">
                <img
                  src={wcuicon}
                  alt=""
                  className="bg-[#C3AA8F] rounded-full p-3 w-15 h-15 mt-[-45px]"
                />
                <h3 className=" text-black font-e text-2xl py-2">
                  Substantial Catalog
                </h3>
                <p className="text-[#666262] text-sm">
                  Known as one of the most eminent clothing manufacturers, we
                  have an enormous catalog of finest fashion-fitness wholesale
                  apparel. Browse through our catalog, decide and place bulk
                  order. Top-notch customization services.
                </p>
              </div>

              <div className="left_card lg:mt-20 bg-white rounded-2xl p-5 relative before:absolute before:top-[-50px] before:left-1/2 before:h-7 before:w-0.5 before:bg-gray-500 before:border-l before:border-gray-700 before:content-[''] after:absolute after:top-60 after:left-1/2 after:w-0.5 after:h-11 after:bg-gray-500 after:border-1 after:content-['']">
                <img
                  src={wcuicon}
                  alt=""
                  className="bg-[#C3AA8F] rounded-full p-3 w-15 h-15 mt-[-45px]"
                />
                <h3 className=" text-black font-e text-2xl py-2">
                  Substantial Catalog
                </h3>
                <p className="text-[#666262] text-sm">
                  Known as one of the most eminent clothing manufacturers, we
                  have an enormous catalog of finest fashion-fitness wholesale
                  apparel. Browse through our catalog, decide and place bulk
                  order. Top-notch customization services.
                </p>
              </div>
            </div>
            <div className="middle_details pt-10">
            <div className="middle_image group relative overflow-hidden rounded-2xl">
   
    <div className="absolute inset-5 border-2 border-white rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 cursor-pointer"></div>

    
    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-2xl cursor-pointer"></div>

    
    <img src={wcumiddle} alt="" className="rounded-2xl w-full h-full object-cover cursor-pointer" />
</div>

              
              <button className="cursor-pointer flex mx-auto mt-10 px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out relative after:absolute after:top-[30px] after:right-60 after:h-0.5 after:w-72 after:bg-gray-500 after:border-1 after:content-['']
              before:absolute before:top-[30px] before:left-60.5 before:h-0.5 before:w-72 before:bg-gray-500 before:border-1 before:content-['']
">
                Get Started
                <span className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
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
            <div className="right_details pt-10">
              <div className="right_card bg-white rounded-2xl p-5 relative before:absolute before:top-[-60px] before:left-1/2 before:h-7 before:w-0.5 before:bg-gray-500 before:border-l before:border-gray-700 before:content-[''] after:absolute after:top-[-60px] after:left-[20px] after:h-0.5 after:w-45 after:bg-gray-500 after:border-1 after:content-['']">
                <img
                  src={wcuicon}
                  alt=""
                  className="bg-[#C3AA8F] rounded-full p-3 w-15 h-15 mt-[-45px]"
                />
                <h3 className=" text-black font-e text-2xl py-2">
                  Substantial Catalog
                </h3>
                <p className="text-[#666262] text-sm">
                  Known as one of the most eminent clothing manufacturers, we
                  have an enormous catalog of finest fashion-fitness wholesale
                  apparel. Browse through our catalog, decide and place bulk
                  order. Top-notch customization services.
                </p>
              </div>

              <div className="right_card lg:mt-20 bg-white rounded-2xl p-5 relative before:absolute before:top-[-50px] before:left-1/2 before:h-7 before:w-0.5 before:bg-gray-500 before:border-l before:border-gray-700 before:content-[''] after:absolute after:top-60 after:left-1/2 after:w-0.5 after:h-11 after:bg-gray-500 after:border-1 after:content-['']">
                <img
                  src={wcuicon}
                  alt=""
                  className="bg-[#C3AA8F] rounded-full p-3 w-15 h-15 mt-[-45px]"
                />
                <h3 className=" text-black font-e text-2xl py-2">
                  Substantial Catalog
                </h3>
                <p className="text-[#666262] text-sm">
                  Known as one of the most eminent clothing manufacturers, we
                  have an enormous catalog of finest fashion-fitness wholesale
                  apparel. Browse through our catalog, decide and place bulk
                  order. Top-notch customization services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
