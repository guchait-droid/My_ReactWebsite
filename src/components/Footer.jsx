import React from 'react'

import footerLogo from '/images/footerlogo.png'
import footerIcon from '/images/footerIcons (1).png'
import footerIcon2 from '/images/footerIcons (2).png'
import facebook from '/images/facebook.png'
import twitter from '/images/twitter.png'
import linkedin from '/images/linkedin.png'
import instagram from '/images/instagram.png'


const Footer = () => {
  return (
    <footer className='bg-[#1E1E1E] pt-[50px] pb-[20px]'>
      <div className="container mx-auto">
        <div className="footer_logo flex justify-center border-b-1 border-white pb-10">
          <img src={footerLogo} alt='' />
        </div>

        <div className="footer_main flex lg:flex-row gap-4 ">
          <div className="footer_location lg:w-1/4 lg:mt-10 border-r-1 border-white">
          <h4 className="text-white font-e text-2xl">Our Office Address</h4>
          <p className="text-white font-p text-sm py-3">Penthouse, 8370 Wilshire Blvd, Beverly Hills, California 90210,USA</p>
          <ul>
            <li className='flex text-white font-p lg:pb-3'>
              <span className='pr-4'><img src={footerIcon} alt=""/></span>+ 1 855 525 2642
              </li>
              <li className='flex text-white font-p'>
              <span className='pr-4'><img src={footerIcon2} alt=""/></span>info@alanic.clothing
              </li>
              <li className='flex gap-5 pt-5'>
                <img src={facebook} alt="" className='w-5 h-5'/>
                <img src={twitter} alt="" className='w-5 h-5'/>
                <img src={linkedin} alt="" className='w-5 h-5'/>
                <img src={instagram} alt="" className='w-5 h-5'/>
                
              </li>
          </ul>


          </div>

          <div className="sitemap lg:w-1/4 lg:mt-10">
          <h4 className="text-white font-e text-2xl">Sitemap</h4>
          <ul className='pt-3'>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Home</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">About Us</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Private Label</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Store</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Contact Us</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Dioz Group</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">FAQ</a></li>
          </ul>

          </div>

          <div className="footer_our_location lg:w-1/4 lg:mt-10">
          <h4 className="text-white font-e text-2xl">Our Locations</h4>
          <ul className='pt-3'>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">UAE</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Canada</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Australia</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">New Zealand</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">UK</a></li>
            <li className='pb-1 text-white hover:text-[#C3AA8F] duration-300 transition'><a href="#">Europe</a></li>
           
          </ul>
          </div>

          <div className="contact lg:w-1/4 lg:mt-10">
            <h4 className="text-white font-e text-2xl">Contact Us</h4>

            <form>
              <div className="flex gap-4">
                <input type="text" placeholder="Name" className="w-full  py-2 border-b-1 border-b-white text-white focus: outline-0" />
                <input type="email" placeholder="Email" className="w-full py-2 border-b-1 border-b-white text-white focus: outline-0" />
                <input type="text" placeholder="Phone" className="w-full py-2 border-b-1 border-b-white text-white focus: outline-0" />
              </div>

              <div className="flex gap-4 pt-3">
                <input type="number" placeholder="Quantity*" className="w-full  py-2 border-b-1 border-b-white text-white focus: outline-0"/>

                <input type="text" placeholder="Country Name" className='w-full py-2 border-b-1 border-b-white text-white focus: outline-0'/>

              </div>

              <div className="flex-col pt-3">
                <textarea placeholder="Message" className="w-full  py-2 border-b-1 border-b-white text-white focus: outline-0" />
                <button className="cursor-pointer px-8 py-3 text-white border border-white rounded-full bg-[#C3AA8F] hover:bg-white hover:text-black text-base duration-300 ease-in-out mt-3">Submit</button>
              </div>
            </form>
          
          </div>

        </div>

        <div className="footer_bottom mt-10 pb-0">
          <p className="text-white font-p text-sm text-center border-t pt-10">Copyright © 2023 Alani Clothing. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer