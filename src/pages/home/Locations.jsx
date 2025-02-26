import React from "react";

const Locations = () => {
  return (
    <section className="locations common_pad">
      <div className="container mx-auto">
        <div className="location_title">
          <h2 className="text-center text-5xl font-e text-[#9D7753]">
            Our Locations
          </h2>
          <p className="text-[#787878] px-[392px] font-p text-center pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="location_details flex justify-center mt-10 gap-5 group">
    <div className="location_card p-6 bg-[url(../images/location-1.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 1</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="location_card p-6 bg-[url(../images/location-2.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 2</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    {/* Active 3rd Card */}
    <div className="location_card p-6 bg-[url(../images/location-3.jpg)] bg-cover bg-center relative rounded-2xl w-[500px] h-[400px] transition-all duration-500 ease-in-out flex-shrink-0 group-hover:w-[100px] hover:w-[500px]">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 3 (Active)</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="location_card p-6 bg-[url(../images/location-4.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 4</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="location_card p-6 bg-[url(../images/location-5.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 5</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="location_card p-6 bg-[url(../images/location-6.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 6</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="location_card p-6 bg-[url(../images/location-7.jpg)] bg-cover bg-center relative rounded-2xl w-[100px] h-[400px] transition-all duration-500 ease-in-out hover:w-[500px] flex-shrink-0">
        <h3 className="text-center text-2xl font-e text-[#9D7753]">Location 7</h3>
        <p className="text-[#787878] font-p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>



      </div>
    </section>
  );
};

export default Locations;
