import React from 'react'
import check from '/images/check.png'
import labelimg from '/images/label_img.jpg'

const Privatelabel = () => {
  return (
    <section className = 'private_label bg-[#C3AA8F] common_pad'>
        <div className="container mx-auto">
        <div className="privatelabel_details grid lg:grid-cols-2 gap-10">
        <div className="privatelabel_content flex justify-center flex-col h-full bg-[url(../images/label_bg.png)] bg-contain bg-center bg-no-repeat">
            <h2 className="text-black text-5xl font-e">The best private label
            clothing manufacturer</h2>
            <p className="text-[#27282C] font-p py-7">
            No matter how you have envisioned your apparel collection, putting your faith in us, the trusted private label clothing manufacturer, you will get what you want. We house an expert and experienced team of design specialists and have top-of-the-line manufacturing facilities to ensure that you are happy with your bulk order once you receive from us.
            </p>
            <ul>
                <li className="flex items-center text-[#27282C] font-p pb-2"><span className='pr-2'><img src={check} alt="" className='w-7 h-7'></img></span>Grab trendy, best-quality clothing products at lower price</li>
                <li className="flex items-center text-[#27282C] font-p pb-2"><span className='pr-2'><img src={check} alt="" className='w-7 h-7'></img></span>Get hold of 100% customized apparel on your bulk order</li>
                <li className="flex items-center text-[#27282C] font-p pb-2"><span className='pr-2'><img src={check} alt="" className='w-7 h-7'></img></span>Fast shipping of your preferred clothing pieces will make your day</li>
                <li className="flex items-center text-[#27282C] font-p pb-2"><span className='pr-2'><img src={check} alt="" className='w-7 h-7'></img></span>Round-the-clock available support team to help you with any hiccups</li>
               
            </ul>
        </div>

        <div className="privatelabel_image h-[525px] w-full">
            <img src={labelimg} alt="" className='rounded-2xl object-cover w-full h-full'/>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Privatelabel
