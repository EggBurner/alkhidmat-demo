import React from 'react';
import NationWIdeCard from './NationWIdeCard';

const data: [string, string][] = [
  ['Khyber Pakhtunkhwa', '79 CAMPUSES'],
  ['Punjab', '42 CAMPUSES'],
  ['Karachi', '26 CAMPUSES'],
  ['Islamabad', '08 CAMPUSES'],
  ['Balochistan', '07 CAMPUSES'],
  ['Sindh', 'Coming Soon'],
  ['Azad Kashmir', 'Coming Soon'],
  ['Gilgit-Baltistan', 'Coming Soon'],
];

const NationwideImpact = () => {
  return (
    <div className="bg-linear-to-b from-[#DDFCEC] to-[#FFFFFF] p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        DIGITAL FOOTPRINT
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Our Nationwide <span className="text-[#2c8e84]">Impact</span>
      </h2>
      <p className="mt-4 text-center text-[12px]">
        A strong nationwide presence delivering skills and opportunities to
        every region.
      </p>
      <div className="mx-auto mt-10 grid w-[85%] grid-cols-4 gap-x-8 gap-y-5">
        {data.map((entry, index) => (
          <NationWIdeCard key={index} text1={entry[0]} text2={entry[1]} />
        ))}
      </div>
    </div>
  );
};

export default NationwideImpact;
