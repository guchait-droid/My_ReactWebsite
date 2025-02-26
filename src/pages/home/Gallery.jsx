import React from "react";
import grid1 from "/images/grid (2).png";
import grid2 from "/images/grid (3).png";
import grid3 from "/images/grid (4).png";
import grid4 from "/images/grid (5).png";
import grid5 from "/images/grid (6).png";
import grid6 from "/images/grid (7).png";
import grid7 from "/images/grid (1).png";


const Gallery = () => {
  

  return (
    <section className="Gallery bg-[#C3AA8F] common_pad">
      <div className="gallery_sec container mx-auto">
        <div className="gallery_title flex justify-between gap-5">
          <div className="gallery_heading">
            <h2 className="text-white text-5xl font-e">Category</h2>
          </div>
          <div className="gallery_tabs flex justify-between gap-3">
          <div className="tab1">
        <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
                   All
                   
                  </button>
        </div>
        <div className="tab2">
        <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
                    Men
                   
                  </button>
        </div>
        <div className="tab3">
        <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
                    Women
                    
                  </button>
        </div>
        <div className="tab4">
        <button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
                   Kids
                  </button>
        </div>
          </div>
        </div>
      </div>

      <div className="main_gallery pt-5 container mx-auto">
  <div className="grid grid-cols-5 grid-rows-4 gap-4">
    <div className="row-span-2">
      <img src={grid1} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="row-span-2 col-start-1 row-start-3">
      <img src={grid2} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="row-span-4 col-start-2 row-start-1">
      <img src={grid3} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="col-span-2 row-span-2 col-start-3 row-start-1">
      <img src={grid4} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="row-span-2 col-start-3 row-start-3">
      <img src={grid5} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="row-span-2 col-start-4 row-start-3">
      <img src={grid6} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
    <div className="row-span-4 col-start-5 row-start-1">
      <img src={grid7} className="w-full h-full object-cover rounded-2xl" alt="" />
    </div>
  </div>
</div>


<div className="gallery_button pt-5 flex justify-center">
<button className="cursor-pointer flex px-8 py-3 text-black border border-black rounded-full bg-transparent hover:bg-white text-base duration-300 ease-in-out">
                    View All
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

    </section>
  );
};

export default Gallery;
