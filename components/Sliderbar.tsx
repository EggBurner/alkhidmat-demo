'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-infinite-logo-slider';

const data: string[] = [
  '/icon-one.png',
  '/icon-two.png',
  '/icon-three.png',
  '/icon-four.png',
  '/icon-five.png',
  '/icon-six.png',
  '/icon-seven.png',
  '/icon-eight.png',
];

const Sliderbar = () => {
  return (
    <Slider
      duration={40}
      pauseOnHover={true}
      blurBorders={true}
      blurBorderColor={'#fff'}
    >
      {data.map((entry) => (
        <div
          key={entry}
          className="mx-3 flex items-center rounded-2xl bg-white px-10 text-center"
        >
          <Image
            alt="partner logo"
            src={entry}
            width={140}
            height={120}
            unoptimized
          />
        </div>
      ))}
    </Slider>
  );
};

export default Sliderbar;
