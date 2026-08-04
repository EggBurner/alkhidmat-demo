import Image from 'next/image';
import React from 'react';

const contactData: [string, string, string, string][] = [
  [
    '/email.png',
    'Chat with us',
    'Our team is ready to assist you',
    'info@banoqabil.pk',
  ],
  [
    '/phone.png',
    'Call our support',
    'Mon-Sat from 9am to 6pm',
    '+92 21 34567890',
  ],
  [
    '/location.png',
    'Visit our Office',
    'Mon-Sat from 9am to 6pm',
    'Alkhidmat Foundation Pakistan Head Office',
  ],
];

const ContactSideBar = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-3 bg-linear-to-r from-[#29978C] to-[#0E5049] px-12 py-8 text-white">
      {contactData.map((entry, index) => (
        <div key={index} className="flex flex-col gap-1">
          <Image alt="icon" src={entry[0]} width={40} height={40} />
          <p className="font-semibold">{entry[1]}</p>
          <p className="text-xs opacity-70">{entry[2]}</p>
          <p className="text-sm font-semibold">{entry[3]}</p>
        </div>
      ))}
    </div>
  );
};
export default ContactSideBar;
