import React from 'react'
import aboutimg from '/images/about1.jpg'
import listimg1 from '/images/about2.jpg'
import listimg2 from '/images/about3.jpg'

const Aboutsec = () => {
  return (
    <div className="about_sec columns-2 common_pad container mx-auto">
        <div className="about_sec_image">
        <img src={aboutimg} alt="" className='rounded-2xl'/>
        </div>
        <div className="about_sec_content py-10">
            <div className="about_title">
                <h2 className='font-e text-5xl pb-5'>Improve your technique
                with Comfort &  Style</h2>
                <p className='text-gray-500 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about_list_image columns-2 pb-5">
            <div className="list_img1">
            <img src={listimg1} alt="" className='rounded-2xl'/>
            </div>
            <div className="list_img2">
            <img src={listimg2} alt="" className='rounded-2xl'/>
            </div>
        </div>
        <div className="about_button">
        <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-[#E9E4DE] text-base duration-300 ease-in-out">
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
    </div>
    </div>
  )
}

export default Aboutsec