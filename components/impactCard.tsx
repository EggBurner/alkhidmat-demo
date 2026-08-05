import { impactType } from '@/types/impact';
import React, { Children } from 'react';

const impactCard = ({ heading, desc }: impactType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white bg-[url('/lines.png')] bg-cover bg-center bg-no-repeat py-6 shadow-xl">
      <p className="text-3xl font-bold">{heading}</p>
      <p className="text-sm text-[#6A7282]">{desc}</p>
    </div>
  );
};

export default impactCard;
