import React from 'react';
import ImpactCard from './impactCard';
import { impactData } from '@/lib/data';

const ImpactSection = () => {
  return (
    <div className="mt-10 bg-linear-to-t from-[#DDFCEC] to-[#FFFFFF]">
      <h2 className="text-center text-4xl font-semibold">
        Bano Qabil{' '}
        <span className="ibrand-font font-medium text-[#2c8e84]">Impact</span>
      </h2>
      <p className="mt-4 text-center text-[13px] text-[#6A7282]">
        Creating measurable impact by equipping Pakistan’s youth with
        industry-ready IT skills.
      </p>
      <div className="mx-auto mt-10 grid w-[85%] grid-cols-1 gap-5 lg:grid-cols-4">
        {impactData.map((entry, index) => (
          <ImpactCard key={index} heading={entry.heading} desc={entry.desc} />
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
