import React from 'react';
import ContactSideBar from './ContactSideBar';
import ContactForum from './ContactForum';

const ContactSection = () => {
  return (
    <div className="relative mt-5 lg:p-15">
      <div className="mx-auto w-fit rounded-full bg-[#2C8E84]/10 px-2 text-center text-[14px] text-[#2C8E84]">
        GET IN TOUCH
      </div>
      <h2 className="mt-2 text-center text-4xl font-semibold">
        Contact <span className="text-[#2c8e84]">Us</span>
      </h2>
      <p className="mx-auto mt-4 text-center text-[13px] text-[#6A7282] lg:w-[40%]">
        Your Journey from application to career success in simple, achievable
        steps designed to empower you.
      </p>

      <div className="mx-auto mt-8 grid w-[80%] grid-cols-1 overflow-hidden rounded-4xl border border-white shadow-[0_0_15px_rgba(0,0,0,0.15)] lg:grid-cols-[3.5fr_6.5fr]">
        <ContactSideBar />
        <ContactForum />
      </div>
      <div className="absolute top-0 -left-5 z-0 h-74 w-108 rounded-full bg-[#A4F4CF]/30 blur-3xl"></div>
      <div className="absolute right-5 bottom-0 -z-10 h-74 w-108 rounded-full bg-[#A4F4CF]/30 blur-3xl"></div>
    </div>
  );
};

export default ContactSection;
