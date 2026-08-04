import React from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image';
import HeroBottomn from './HeroBottomn';

const Hero = () => {
  return (
    <div className="h-fit bg-linear-to-r from-[#000E0D] to-[#007468] pt-6">
      <HeaderBar />
      <div className="h-52 sm:h-60 lg:h-64">
        <div className="relative mt-16 h-20 w-full sm:mt-24 lg:mt-32">
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
              className="h-auto w-[60%] max-w-[400px] object-contain sm:w-[50%]"
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
  );
};

export default Hero;
