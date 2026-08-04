import React from 'react';
import Image from 'next/image';

const LeadershipMessageImageRight = () => {
  return (
    <div className="mt-12 grid grid-cols-[6.5fr_3.5fr] rounded-lg border border-[#F3F4F6] shadow">
      <div className="text-md flex flex-col gap-6 px-8 pt-10 pb-8 text-[#4A5565]">
        <p>
          In a world where technology and skills define the future, Bano Qabil
          is our response to empowering Pakistan’s youth to become
          self-sufficient, innovative, and capable of contributing meaningfully
          to society. At Alkhidmat Foundation Pakistan, we recogniz the immense
          potential within our young people.
        </p>
        <p>
          The Bano Qabil program is more than a set of courses; it is a journey
          of transformation. By offering fully-funded, advanced training, we’re
          not only fosterin technical skills but also nurturing the values of
          resilience, integrity, and communit responsibility.
        </p>
        <p className="font-semibold">
          I invite everyone to support and celebrate this journey with us.
          Together, we are no just teaching skills; we are laying the groundwork
          for a skilled, confident, and capable Pakistan.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 bg-[#2C8E84]/5 px-8 pt-10 pb-8">
        <Image
          alt='"Hafiz Naeem'
          src={'/Mr_Naveed_Ali_Baig.png'}
          width={150}
          height={150}
          priority
          className="imageShadow size-54 rounded-full border-3 border-white"
        />
        <h3 className="text-center text-lg font-bold text-[#101828]">
          Mr. Naveed Ali Baig
        </h3>
        <p className="text-[11px] font-bold text-[#2C8E84]">Chairman</p>
        <p className="text-[11px] font-light tracking-wider text-[#6A7282]">
          Bano Qabil Pakistan
        </p>
      </div>
    </div>
  );
};

export default LeadershipMessageImageRight;
