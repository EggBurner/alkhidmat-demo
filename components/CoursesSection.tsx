import React from 'react';
import CourseCard from './CourseCard';

const data: string[] = [
  'Data Science',
  'Graphic Designing',
  'Business Analyst',
  'Project Management',
  'Quality Assurance',
  'Web Development',
];

const CoursesSection = () => {
  return (
    <div className="border-t border-[#F0F1F3] p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        Empower Your Future
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Our <span className="text-[#2c8e84]">Courses</span>
      </h2>
      <p className="mt-4 text-center text-[12px] text-[#6A7282]">
        Courses designed for real-world tech careers.
      </p>
      <div className="mx-auto mt-10 grid w-[85%] grid-cols-3 gap-6">
        {data.map((entry) => (
          <CourseCard key={entry} text={entry} />
        ))}
      </div>
      <button className="text-md mx-auto mt-12 block h-fit w-fit rounded-full bg-[#2C8E84] px-10 py-3 font-semibold text-white shadow-2xl">
        Explore Campuses
      </button>
    </div>
  );
};

export default CoursesSection;
