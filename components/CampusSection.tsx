import React from 'react';
import CampusCard from './CampusCard';

const CampusSection = () => {
  return (
    <div className="border-t border-[#F0F1F3] bg-[#F9FFFB] p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        REGIONAL NETWORK
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Explore Our{' '}
        <span className="ibrand-font font-medium text-[#2c8e84]">Campuses</span>
      </h2>
      <div className="mx-auto mt-10 grid grid-cols-1 gap-6 lg:w-[85%] lg:grid-cols-3">
        <CampusCard />
        <CampusCard />
        <CampusCard />
        <CampusCard />
        <CampusCard />
        <CampusCard />
      </div>
      <button className="text-md mx-auto mt-12 block h-fit w-fit rounded-full bg-[#2C8E84] px-10 py-3 font-semibold text-white shadow-2xl">
        Explore Campuses
      </button>
    </div>
  );
};

export default CampusSection;
