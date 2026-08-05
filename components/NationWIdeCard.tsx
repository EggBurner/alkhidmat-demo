import { regionType } from '@/types/region';
import React, { Children } from 'react';

const NationWIdeCard = ({ region, campuses }: regionType) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white bg-no-repeat py-6 shadow-xl">
        <p className="text-md font-bold">{region}</p>
        <p className="text-[12px] text-[#6A7282]">{campuses}</p>
      </div>
    </div>
  );
};

export default NationWIdeCard;
