import React from 'react';
import TimeLine from './TimeLine';

const SuccessSection = () => {
  return (
    <div className="relative z-10 bg-linear-to-t from-white to-[#D1F2FF]/60 p-7 lg:p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        THE PROCESS
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Your path to{' '}
        <span className="ibrand-font font-medium text-[#2c8e84]">Success</span>
      </h2>
      <p className="mx-auto mt-4 text-center text-[13px] text-[#6A7282] lg:w-[40%]">
        Your Journey from application to career success in simple, achievable
        steps designed to empower you.
      </p>
      <TimeLine />
      <div className="absolute bottom-0 -left-20 z-0 h-74 w-108 rounded-full bg-[#A4F4CF]/30 blur-3xl"></div>
    </div>
  );
};

export default SuccessSection;
