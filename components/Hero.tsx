'use client';

import React, { useMemo } from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image';
import HeroBottomn from './HeroBottomn';
import { NextParticles } from '@tsparticles/nextjs';
import type { ISourceOptions } from '@tsparticles/engine';

const Hero = () => {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        links: { enable: true, color: '#ffffff', distance: 150 },
        move: { enable: true, speed: 0.2 },
        size: { value: 1 },
        opacity: { value: 0.1 },
      },
    }),
    []
  );

  return (
    <div className="relative h-fit overflow-hidden bg-linear-to-r from-[#000E0D] to-[#007468] pt-6">
      <NextParticles
        id="hero-particles"
        options={options}
        className="absolute inset-0 z-0 opacity-20"
      />

      <div className="relative z-10">
        <HeaderBar />
        <div className="h-52 sm:h-60 lg:h-64">
          <div className="relative z-10 mt-16 h-20 w-full sm:mt-24 lg:mt-32">
            <Image
              alt="Image of an alkhidmat rally"
              src={'/rally.png'}
              width={600}
              height={200}
              className="mx-auto h-auto w-[90%] object-cover opacity-10 sm:w-[75%] lg:w-[60%]"
              priority
            />
            <div className="absolute inset-0 top-20 flex items-center justify-center">
              <Image
                src="/hafiz_naeem.png"
                alt="Overlay"
                width={400}
                height={150}
                className="h-auto w-[60%] max-w-100 object-contain sm:w-[50%]"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 40%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 40%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>
        <HeroBottomn />
      </div>
    </div>
  );
};

export default Hero;
