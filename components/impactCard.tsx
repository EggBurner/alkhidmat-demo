import React, { Children } from 'react';

interface TextPairProps {
  text1: string;
  text2: string;
}

const impactCard = ({ text1, text2 }: TextPairProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[url('/lines.png')] bg-cover bg-center bg-no-repeat py-6 shadow-xl">
      <p className="text-3xl font-bold">{text1}</p>
      <p className="text-sm text-[#6A7282]">{text2}</p>
    </div>
  );
};

export default impactCard;
