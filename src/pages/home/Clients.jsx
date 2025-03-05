import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clientLogo from '/images/clients (2).png'
import certificateLogo from '/images/certificates (2).png'

const Clients = () => {
  return (
    <section className="clients bg-[#F3F3F3] common_pad">
  <div className="container mx-auto">
    

    <div className="clients_main flex flex-col lg:flex-row gap-4">
      <div className="client_title lg:w-1/4 border-r pr-6">
        <h2 className="pb-3 font-e text-5xl">Our Clients</h2>
        <p className="font-p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="clients_logos lg:w-3/4 flex justify-center items-center">
        <Swiper slidesPerView={5} spaceBetween={10} className="mySwiper">
          {[...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="c-logo bg-white p-4 rounded-2xl">
                <img src={clientLogo} alt={`Client Logo ${index + 1}`} className="mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  
    <div className="certificates_main flex flex-col lg:flex-row-reverse gap-4 pt-20">
      <div className="certificates_title lg:w-1/4 border-l lg:border-r-0 pl-6">
        <h2 className="pb-3 font-e text-5xl">Our Certificates</h2>
        <p className="font-p">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="certificates_logos lg:w-3/4 flex justify-center items-center">
        <Swiper slidesPerView={5} spaceBetween={10} className="mySwiper">
          {[...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="c-logo bg-white p-6 rounded-2xl">
                <img src={certificateLogo} alt={`Certificate Logo ${index + 1}`} className="mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
    </div>

  </div>
</section>

  )
}

export default Clients