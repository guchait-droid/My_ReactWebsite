import React from 'react'
import shippingIcon from '/images/shipping (1).png'

const Shipping = () => {
  return (
    <section className='shipping bg-[#C3AA8F] common_pad'>
        <div className="container mx-auto">
        <div className="shipping_main flex lg:flex-row gap-4">
            <div className="shipping_details flex gap-4 lg:w-1/4">
            <div className="shipping_icon flex justify-center items-center">
                <img src={shippingIcon} alt="" />
            </div>
            <div className="shipping_title">
                <h2 className="text-black font-e text-xl">Shipping Worldwide</h2>
                <p className="text-black font-p text-[15px] pr-8">Quick shipping offered all
                around the world</p>
            </div>


            </div>

            <div className="shipping_details flex gap-4 lg:w-1/4">
            <div className="shipping_icon flex justify-center items-center">
                <img src={shippingIcon} alt="" />
            </div>
            <div className="shipping_title">
                <h2 className="text-black font-e text-xl">Shipping Worldwide</h2>
                <p className="text-black font-p text-[15px] pr-8">Quick shipping offered all
                around the world</p>
            </div>


            </div>

            <div className="shipping_details flex gap-4 lg:w-1/4">
            <div className="shipping_icon flex justify-center items-center">
                <img src={shippingIcon} alt="" />
            </div>
            <div className="shipping_title">
                <h2 className="text-black font-e text-xl">Shipping Worldwide</h2>
                <p className="text-black font-p text-[15px] pr-8">Quick shipping offered all
                around the world</p>
            </div>


            </div>

            <div className="shipping_details flex gap-4 lg:w-1/4">
            <div className="shipping_icon flex justify-center items-center">
                <img src={shippingIcon} alt="" />
            </div>
            <div className="shipping_title">
                <h2 className="text-black font-e text-xl">Shipping Worldwide</h2>
                <p className="text-black font-p text-[15px] pr-8">Quick shipping offered all
                around the world</p>
            </div>


            </div>
        </div>
        </div>
    </section>
  )
}

export default Shipping