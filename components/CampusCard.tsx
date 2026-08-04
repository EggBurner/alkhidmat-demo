import React from 'react';

const CampusCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-[#F0F1F3] px-5 py-3 shadow">
      <div className="flex gap-1">
        <div className="text-md text-[#383E49]">
          Test Jamshoro Technical Campus
        </div>
        <div className="h-fit w-fit rounded-full bg-[#2D8E84] px-2 py-1 text-[12px] text-white">
          Active
        </div>
      </div>
      <div className="text-[12px] text-[#5D6679]">
        🌏 Region: KP Hazara | 🏢 City: Battagran
      </div>
      <div className="text-[12px] text-[#5D6679]">
        📍 Near Bannu Adda Road, DI Khan
      </div>
    </div>
  );
};

export default CampusCard;
