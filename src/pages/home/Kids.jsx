import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import Kid1 from '/images/kid (1).jpg'
import Kid2 from '/images/kid (2).jpg'
import Kid3 from '/images/kid (3).jpg'
import Kid4 from '/images/kid (4).jpg'

const Kids = () => {
  return (
    <section className='Kids_collection common_pad'>
        <div className="container mx-auto">
        <div className="Kids_title text-center">
            <h2 className='font-e text-[#9D7753] text-5xl'>Kid's Collection</h2>
            <p className='text-[#787878] font-p px-[392px] pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="Kids_carousel pt-5">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          
            clickable: true
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Kid1} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid2} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid3} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid4} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid1} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid2} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid3} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kid4} alt="" className='rounded-2xl'/>
            <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
        </SwiperSlide>
       
        
      </Swiper>
      
        </div>

        </div>
        
    </section>
  )
}

export default Kids