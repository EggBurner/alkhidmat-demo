import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-[2.7fr_4.6fr_2.7fr] bg-linear-to-r from-[#29978C] via-[#377379] to-[#0E5049] p-15 text-white">
      <div className="flex flex-col gap-8 px-3">
        <div className="flex items-center gap-2">
          <Image
            alt="bano qabil logo"
            src={'/footer-logo.png'}
            width={200}
            height={200}
            unoptimized
            className="w-9"
          />
          <h2 className="font-bold">Bano Qabil</h2>
        </div>
        <p className="text-sm">
          Join Pakistan&apos;s largest free IT education initiative. We are
          dedicated to empowering the youth through world-class technical
          training.
        </p>
      </div>
      <div className="grid grid-cols-3 px-16 text-xs">
        <div className="flex flex-col gap-2">
          <p className="pb-4 font-bold">Main Links</p>
          <p>Home</p>
          <p>All Courses</p>
          <p className="underline">Log in as user</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="pb-4 font-bold">About Us</p>
          <p>Gallery</p>
          <p>Career</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="pb-4 font-bold">Support</p>
          <p>Contact Us</p>
          <p>FAQ&apos;s</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-right text-sm">
        <p className="font-semibold">Address</p>
        <p className="text-xs text-[#F0F1F3]">
          Alkhidmat Foundation Pakistan Head Office: Karachi, Pakistan
        </p>
        <p className="font-semibold">Social Links</p>
        <div className="flex flex-row-reverse gap-1">
          <Image
            alt="youtube"
            src={'/youtube.png'}
            width={30}
            height={30}
            unoptimized
          />
          <Image
            alt="Linked in"
            src={'/linkedin.png'}
            width={30}
            height={30}
            unoptimized
          />
          <Image
            alt="Facebook"
            src={'/facebook.png'}
            width={30}
            height={30}
            unoptimized
          />
          <Image
            alt="Instagram"
            src={'/instagram.png'}
            width={30}
            height={30}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
