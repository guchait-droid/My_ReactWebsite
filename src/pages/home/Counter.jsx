import React from "react";
import counterIcon1 from "/images/counter_icon (2).png";
import counterIcon2 from "/images/counter_icon (1).png";
import counterIcon3 from "/images/counter_icon (3).png";
import counterIcon4 from "/images/counter_icon (4).png";
import useCounter from "../../hooks/useCounter";



const Counter = () => {
    const experience = useCounter(5);
    const shipTo = useCounter(20);
    const products = useCounter(1144);
    const team = useCounter(200);
  return (
    <section className="counter bg-[url(../images/counter_img.jpg)] bg-cover bg-center relative">
      <div className="counter_overlay absolute bg-black opacity-50 inset-0"></div>
      <div className="container mx-auto">
        <div className="counter_items grid lg:grid-cols-4">

          <div className="c_item z-10 py-10 flex gap-5 items-center justify-center relative before:absolute before:content-[''] before:right-0 before:top-5 before:bottom-5 before:w-0.5 before:bg-white">
            <div className="c_icon">
              <img src={counterIcon1} alt="" />
            </div>
            <div className="c_text">
              <h4 className="text-white font-e text-2xl">Experience</h4>
              <h3 className="text-white font-e text-4xl">
                {experience}+<span className="font-e text-4xl">Years</span>
              </h3>
            </div>
          </div>

          <div className="c_item z-10 py-10 flex gap-5 items-center justify-center relative before:absolute before:content-[''] before:right-0 before:top-5 before:bottom-5 before:w-0.5 before:bg-white">
            <div className="c_icon">
              <img src={counterIcon3} alt="" />
            </div>
            <div className="c_text">
              <h4 className="text-white font-e text-2xl">Ship To</h4>
              <h3 className="text-white font-e text-4xl">
                {shipTo}+<span className="font-e text-4xl">Countries</span>
              </h3>
            </div>
          </div>

          <div className="c_item z-10 py-10 flex gap-5 items-center justify-center relative before:absolute before:content-[''] before:right-0 before:top-5 before:bottom-5 before:w-0.5 before:bg-white">
            <div className="c_icon">
              <img src={counterIcon4} alt="" />
            </div>
            <div className="c_text">
              <h4 className="text-white font-e text-2xl">Products</h4>
              <h3 className="text-white font-e text-4xl">
                {products}+
              </h3>
            </div>
          </div>

          <div className="c_item z-10 py-10 flex gap-5 items-center justify-center">
            <div className="c_icon">
              <img src={counterIcon2} alt="" />
            </div>
            <div className="c_text">
              <h4 className="text-white font-e text-2xl">Team</h4>
              <h3 className="text-white font-e text-4xl">
                {team}+<span className="font-e text-4xl">Backend</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
