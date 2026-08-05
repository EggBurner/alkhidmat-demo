import Image from 'next/image';
import React from 'react';

const Testimony = ({ name, avatar }: UserType) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-[#F3F4F6] bg-white px-8 py-4 shadow">
      <div className="flex">
        <Image
          alt="annotation icon"
          src={'/annotation.png'}
          width={10}
          height={10}
        />
        <Image
          alt="annotation icon"
          src={'/annotation.png'}
          width={10}
          height={10}
        />
      </div>
      <div className="text-[13px] italic">
        The courses in Bano Qabil helped me gain confidence and technical
        skills. I was always interested in digital marketing, and now I feel
        ready to start my career. Thank you, Bano Qabil!&quot;
      </div>
      <div className="flex justify-between border-t pt-2">
        <div>
          <p className="text-[12px] font-semibold text-[#2C8E84]">{name}</p>
          <p className="text-[11px]">Student</p>
        </div>
        <Image
          alt="user icon"
          src={avatar}
          width={20}
          height={20}
          className="size-10"
        />
      </div>
    </div>
  );
};

export default Testimony;
