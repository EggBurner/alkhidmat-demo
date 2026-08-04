import Image from 'next/image';
import React from 'react';

const LeadershipMessageImageLeft = () => {
  return (
    <div className="mt-12 grid grid-cols-1 rounded-lg border border-[#F3F4F6] shadow lg:grid-cols-[3.5fr_6.5fr]">
      <div className="flex flex-col items-center justify-center gap-1 bg-[#2C8E84]/5 px-8 pt-10 pb-8">
        <Image
          alt='"Hafiz Naeem'
          src={'/hafiz_naeem.png'}
          width={150}
          height={150}
          priority
          className="imageShadow size-40 rounded-full border-3 border-white lg:size-54"
        />
        <h3 className="text-center text-lg font-bold text-[#101828]">
          Hafiz Naeem ur Rehman
        </h3>
        <p className="text-[11px] font-bold text-[#2C8E84]">Patron-in-Chief</p>
        <p className="text-[11px] font-light tracking-wider text-[#6A7282]">
          Bano Qabil Pakistan
        </p>
      </div>
      <div className="text-md flex flex-col gap-6 px-8 pt-10 pb-8 text-[#4A5565]">
        <p>
          As we stand on the brink of a new era, the &quot;Bano Qabil&quot;
          initiative shines as a beacon of hope and empowerment for the youth of
          Pakistan. Launched by the Alkhidmat Foundation Pakistan, this program
          opens doors to advanced technical education, providing free access to
          in-demand IT skills, business training, and vocational courses.
        </p>
        <p>
          This initiative, one of the largest IT scholarship programs in the
          country, emphasizes skill development across fields like web
          development, digital marketing, and cybersecurity. It also focuses on
          inclusivity, welcoming women and underprivileged students with the
          resources and support to excel in the modern workforce.
        </p>
        <p className="font-semibold">
          Together, let us support Bano Qabil’s mission to build a skilled,
          self-reliant generation that will shape our nation’s future.
        </p>
      </div>
    </div>
  );
};

export default LeadershipMessageImageLeft;
