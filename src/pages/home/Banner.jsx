import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImage from "/images/banner_image.png";

import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <>
    <div className="slider">
<Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          className="mySwiper"
          style={{ height: "100vh" }}
        >
          <SwiperSlide>
            <div className=" bg-[#E9E4DE] text-3xl text-black min-h-[720px]">

              <div className="columns-2 container mx-auto">
                <div className="banner__content py-20">
                  <h4 className="font-e pb-8">Discover Self</h4>
                  <h1 className="text-5xl font-e pb-8">
                    Find Your Inner Power With Yoga
                  </h1>
                  <p className="text-base pb-8 font-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    faucibus, arcu non faucibus fermentum, justo est sagittis
                    velit, et tristique ex velit ut neque.
                  </p>

                  <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
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

                <div className="banner__image">
                  <img src={bannerImage}></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#E9E4DE] text-3xl text-black min-h-[720px]">
              <div className="columns-2 container mx-auto">
                <div className="banner__content py-20">
                  <h4 className="font-e pb-8">Discover Self</h4>
                  <h1 className="text-5xl font-e pb-8">
                    Find Your Inner Power With Yoga
                  </h1>
                  <p className="text-base pb-8 font-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    faucibus, arcu non faucibus fermentum, justo est sagittis
                    velit, et tristique ex velit ut neque.
                  </p>

                  <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
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

                <div className="banner__image">
                  <img src={bannerImage}></img>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-[#E9E4DE] text-3xl text-black min-h-[720px]">

              <div className="columns-2 container mx-auto">
                <div className="banner__content py-20">
                  <h4 className="font-e pb-8">Discover Self</h4>
                  <h1 className="text-5xl font-e pb-8">
                    Find Your Inner Power With Yoga
                  </h1>
                  <p className="text-base pb-8 font-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    faucibus, arcu non faucibus fermentum, justo est sagittis
                    velit, et tristique ex velit ut neque.
                  </p>

                  <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
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

                <div className="banner__image">
                  <img src={bannerImage} className=""></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>

   
    </>
  )
}

export default Banner