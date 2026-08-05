'use client';

import React, { useState } from 'react';

const navLinks = [
  'Home',
  'About Us',
  'Cources',
  'Careers',
  'Campuses',
  'Contact Us',
];

const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-auto flex w-[90%] items-center justify-between gap-4 self-center rounded-md bg-white px-4 py-3 text-sm lg:grid lg:grid-cols-[1fr_9fr] lg:px-6 lg:py-2">
      <div className="flex items-center gap-2">
        <img alt="logo" src={'/header_logo.png'} width={50} height={50} />
        <h1 className="font-semibold text-[#2D8E84]">BanoQabil</h1>
      </div>

      <button
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="flex flex-col gap-1.5 p-2 lg:hidden"
      >
        <span className="block h-0.5 w-6 bg-[#2D8E84]" />
        <span className="block h-0.5 w-6 bg-[#2D8E84]" />
        <span className="block h-0.5 w-6 bg-[#2D8E84]" />
      </button>

      <nav className="hidden lg:grid lg:grid-cols-[6.8fr_3.2fr]">
        <menu className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link}
              className="decoration-[#29978C] decoration-2 underline-offset-4 hover:cursor-pointer hover:underline"
            >
              {link}
            </li>
          ))}
        </menu>
        <menu className="flex items-center justify-around border-[#2D8E84]">
          <li>
            <button className="rounded-sm border p-2 whitespace-nowrap text-[#2D8E84] hover:bg-[#2D8E84] hover:text-white">
              Student Log In
            </button>
          </li>
          <li>
            <button className="rounded-sm border border-[#2D8E84] bg-[#2D8E84] p-2 whitespace-nowrap text-white hover:bg-white hover:text-[#2D8E84]">
              Register as Student
            </button>
          </li>
        </menu>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-64 flex-col gap-6 bg-white px-6 py-6 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="self-end p-2 text-xl leading-none text-[#2D8E84]"
        >
          ✕
        </button>
        <menu className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link} onClick={() => setIsOpen(false)}>
              {link}
            </li>
          ))}
        </menu>
        <menu className="mt-auto flex flex-col gap-3">
          <li>
            <button className="w-full rounded-sm border p-2 text-[#2D8E84]">
              Student Log In
            </button>
          </li>
          <li>
            <button className="w-full rounded-sm border bg-[#2D8E84] p-2 text-white">
              Register as Student
            </button>
          </li>
        </menu>
      </aside>
    </header>
  );
};

export default HeaderBar;
