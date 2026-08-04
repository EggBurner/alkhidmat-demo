import React from 'react';

const EmpoweringSection = () => {
  return (
    <div className="mx-auto h-90 w-[90%] rounded-4xl bg-white bg-[url('/man_laptop_one.jpg')] bg-cover bg-center bg-no-repeat pt-8 pb-16">
      <div className="white-grad mx-auto mt-4 flex w-[50%] flex-col gap-6 rounded-4xl px-4 py-8 text-center leading-8">
        <h2 className="mx-auto w-[80%] text-3xl font-bold">
          Empowering Pakistan <br />{' '}
          <span className="x text-2xl text-[#2c8e84]">
            Through Digital Skills
          </span>
        </h2>
        <p className="mx-auto w-[90%] pt-6 text-sm tracking-wider text-white">
          Join thousands of students who are building their future with free,
          quality IT education. Transform your life and career with Bano Qabil.
        </p>
        <button className="mx-auto block h-fit w-fit rounded-full bg-[#2C8E84] px-10 py-3 text-sm font-semibold text-white shadow-2xl">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default EmpoweringSection;
