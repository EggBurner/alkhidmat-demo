import React from 'react';
import CourseCard from './CourseCard';

import { courseData } from '@/lib/data';

const CoursesSection = () => {
  return (
    <div className="relative overflow-hidden border-t border-[#F0F1F3] bg-linear-to-b from-[#FFFFFF] to-[#D1F2FF] p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        EMPOWER YOUR FUTURE
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Our{' '}
        <span className="ibrand-font font-medium text-[#2c8e84]">Courses</span>
      </h2>
      <p className="mt-4 text-center text-[13px] text-[#6A7282]">
        Courses designed for real-world tech careers.
      </p>
      <div className="mx-auto mt-10 grid grid-cols-1 gap-6 lg:w-[85%] lg:grid-cols-3">
        {courseData.map((entry) => (
          <CourseCard key={entry.text} text={entry.text} style={entry.style} />
        ))}
      </div>
      <button className="text-md mx-auto mt-12 block h-fit w-fit rounded-full bg-[#2C8E84] px-10 py-3 font-semibold text-white shadow-2xl">
        Explore Campuses
      </button>
      <div className="absolute top-0 -left-5 z-0 h-74 w-108 rounded-full bg-[#A4F4CF]/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 z-0 h-74 w-108 rounded-full bg-[#A4F4CF]/30 blur-3xl"></div>
      <div className="absolute -top-68 -right-68 z-20 size-96 rounded-full bg-radial from-[#0E5049] to-[#29978C]/30 blur-xl"></div>
      <div className="absolute -bottom-80 -left-68 z-20 size-96 rounded-full bg-radial from-[#0E5049] to-[#29978C]/30 blur-xl"></div>
    </div>
  );
};

export default CoursesSection;
