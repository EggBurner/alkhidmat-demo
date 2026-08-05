import React from 'react';
import NationWIdeCard from './NationWIdeCard';
import { regionData } from '@/lib/data';

const NationwideImpact = () => {
  return (
    <div className="bg-linear-to-b from-[#DDFCEC] to-[#FFFFFF] p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        DIGITAL FOOTPRINT
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Our Nationwide{' '}
        <span className="ibrand-font font-medium text-[#2c8e84]">Impact</span>
      </h2>
      <p className="mt-4 text-center text-[13px] text-[#6A7282]">
        A strong nationwide presence delivering skills and opportunities to
        every region.
      </p>
      <div className="mx-auto mt-10 grid w-[85%] grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-4">
        {regionData.map((entry, index) => (
          <NationWIdeCard
            key={index}
            region={entry.region}
            campuses={entry.campuses}
          />
        ))}
      </div>
    </div>
  );
};

export default NationwideImpact;
