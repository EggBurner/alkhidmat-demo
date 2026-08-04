import React from 'react';
import Testimony from './Testimony';

const data: [string, string][] = [
  ['Haroon Ahmad', '/user_icon.png'],
  ['Ali Khan', '/user_icon_2.png'],
  ['Maaz Shafqat', '/user_icon_3.png'],
  ['Sarah Imtiaz', '/user_icon_4.png'],
  ['Hassan Zulfiqar', '/user_icon_5.png'],
  ['Fazl ur Rehman', '/user_icon_6.png'],
];

const TestimonialSection = () => {
  return (
    <div className="bg-linear-to-b from-white to-[#D1F2FF]/60 p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        REAL IMPACT
      </div>
      <h2 className="mx-auto mt-4 text-center text-4xl font-semibold lg:w-[40%]">
        Student Journey and{' '}
        <span className="text-[#2c8e84]">Success Stories</span>
      </h2>
      <p className="mx-auto mt-4 text-center text-[13px] text-[#6A7282] lg:w-[35%]">
        Heartfelt stories and transformational journeys from the student who
        have climbed the ladder of success through Bano Qabil.
      </p>
      <div className="testimonial-section mx-auto mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map((entry) => (
          <Testimony key={entry[0]} text1={entry[0]} text2={entry[1]} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
