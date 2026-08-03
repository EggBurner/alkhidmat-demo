import React, { Children } from 'react';

interface TextPairProps {
  text1: string;
  text2: string;
}

const NationWIdeCard = ({ text1, text2 }: TextPairProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white bg-no-repeat py-6 shadow-xl">
        <p className="text-md font-bold">{text1}</p>
        <p className="text-[12px] text-[#6A7282]">{text2}</p>
      </div>
    </div>
  );
};

export default NationWIdeCard;
