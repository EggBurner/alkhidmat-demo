import React from 'react';
import Sliderbar from './Sliderbar';

const PartnerSection = () => {
  return (
    <div className="bg-[#F6F6F6] py-15">
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Our <span className="text-[#2c8e84]">Partners</span>
      </h2>
      <p className="mx-auto mt-4 mb-10 text-center text-[13px] text-[#6A7282] lg:w-[30%]">
        Empowering communities across Pakistan – bringing opportunity closer to
        you, wherever you are.
      </p>

      <Sliderbar />
    </div>
  );
};

export default PartnerSection;
