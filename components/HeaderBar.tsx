import Image from 'next/image';
import React from 'react';

const HeaderBar = () => {
  return (
    <header className="mx-auto grid w-[90%] grid-cols-[1fr_9fr] items-center gap-4 self-center rounded-md bg-white px-6 py-4 text-sm">
      <div className="flex items-center gap-2">
        <img alt="logo" src={'/header_logo.png'} width={50} height={50} />
        <h1 className="font-semibold text-[#2D8E84]">BanoQabil</h1>
      </div>
      <nav className="grid grid-cols-[7fr_3fr]">
        <menu className="flex items-center justify-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Cources</li>
          <li>Careers</li>
          <li>Campuses</li>
          <li>Contact Us</li>
        </menu>
        <menu className="flex items-center justify-around border-[#2D8E84]">
          <li>
            <button className="rounded-sm border p-2 text-[#2D8E84]">
              Student Log In
            </button>
          </li>
          <li>
            <button className="rounded-sm border bg-[#2D8E84] p-2 text-white">
              Register as Student
            </button>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default HeaderBar;
