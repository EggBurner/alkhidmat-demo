import React from 'react';
import LeadershipMessageImageLeft from './LeadershipMessageImageLeft';
import LeadershipMessageImageRight from './LeadershipMessageImageRight';

const LeadershipSection = () => {
  return (
    <div className="bg-[#F9FFFB] px-6 py-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        EMPOWER YOUR FUTURE
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Leadership <span className="text-[#2c8e84]">Messages</span>
      </h2>
      <p className="mx-auto mt-4 text-center text-[13px] text-[#6A7282] lg:w-[35%]">
        Inspiration and guidance from the leaders driving the Bano Qabil mission
        across Pakistan.
      </p>
      <LeadershipMessageImageLeft />
      <LeadershipMessageImageRight />
    </div>
  );
};

export default LeadershipSection;
