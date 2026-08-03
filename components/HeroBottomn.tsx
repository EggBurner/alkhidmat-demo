import Image from 'next/image';
import React from 'react';

const HeroBottomn = () => {
  return (
    <>
      <div className="mx-auto w-fit rounded-full border p-1.5 text-center text-[12px] text-white">
        Youth Empowerment through IT Education
      </div>
      <div>
        <h1 className="mx-auto mt-3 w-[60%] text-center text-4xl font-semibold text-white">
          Contributing to Nation Reconstruction Through{' '}
          <span className="text-[#A3C902]">Free IT Education</span>
        </h1>
      </div>
      <div className="mx-auto mt-5 w-[50%] text-center text-[14px] text-white">
        Pakistan’s largest free IT education initiative, empowering youth with
        AI-driven, future-ready skills to excel as professionals, freelancers,
        and entrepreneurs.
      </div>
      <div className="mx-auto mt-6 flex w-fit items-center justify-center gap-2 rounded-full border-transparent bg-[#2D8E84] px-3 py-2 text-white">
        <button className="">Apply Now</button>
        <div className="rounded-full bg-white p-1">
          <Image
            alt="chevron"
            src="/Arrow_1.png"
            width={25}
            height={25}
            className="py-1.5"
          />
        </div>
      </div>
      <div className="mx-auto mt-8 w-fit">
        <Image alt="logos" src="/double_logos.png" width={200} height={200} />
      </div>
    </>
  );
};

export default HeroBottomn;
