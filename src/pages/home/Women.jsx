import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import women1 from '/images/women (1).jpg'
import women2 from '/images/women (2).jpg'
import women3 from '/images/women (3).jpg'
import women4 from '/images/women (4).jpg'


const Women = () => {
  return (
    <section className='womens_collection common_pad'>
    <div className="container mx-auto">
    <div className="womens_title text-center">
        <h2 className='font-e text-[#9D7753] text-5xl'>Women's Collection</h2>
        <p className='text-[#787878] font-p px-[392px] pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="womens_carousel pt-5">
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
        <img src={women1} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women2} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women3} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women4} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women1} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women2} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women3} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
    <SwiperSlide>
        <img src={women4} alt="" className='rounded-2xl'/>
        <p className='text-[#787878] text-center pt-5'>Aliquam tincidunt eu</p>
    </SwiperSlide>
   
    
  </Swiper>
  
    </div>

    </div>
    
</section>
  )
}

export default Women
