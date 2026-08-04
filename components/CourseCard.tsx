import React, { Children } from 'react';

type CourseCardProps = {
  text: string;
};

const CourseCard = ({ text }: CourseCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-[#0096894D] p-7 shadow-xl">
      <h3 className="font-semibold text-[#383E49]">{text}</h3>
      <div className="flex items-center gap-2 text-[12px]">
        <div className="rounded-full border border-[#CBFBF1] bg-[#F0FDFA] px-2 py-1">
          BQ-002
        </div>
        <div className="tracking-wider text-[#2B2F38]">4 Months</div>
      </div>
      <p className="mt-2 text-[12px] font-light text-[#5D6679]">
        Full-stack web development with modern frameworks and technologies
      </p>
    </div>
  );
};

export default CourseCard;
