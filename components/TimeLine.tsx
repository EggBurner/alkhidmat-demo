import React from 'react';
import { eventData } from '@/lib/data';

const TimeLine = () => {
  return (
    <div className="mx-auto max-w-2xl py-10">
      {eventData.map((event, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={event.step}
            className="hidden grid-cols-[1fr_auto_1fr] items-stretch gap-8 lg:grid"
          >
            <div
              className={
                isLeft
                  ? 'rounded-3xl bg-white bg-[url(/lines.png)] bg-cover bg-center bg-no-repeat px-4 py-6 pt-6 shadow-xl'
                  : 'px-4 pt-6'
              }
            >
              {isLeft && (
                <div className="pb-6">
                  <span className="text-lg font-bold">{event.title}</span>
                  <h3 className="text-xs font-light text-[#6A7282]">
                    {event.description}
                  </h3>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full border-2 border-white bg-[#2C8E84] text-center text-white">
                {event.step}
              </div>
              {i !== eventData.length - 1 && (
                <div className="w-0.5 flex-1 bg-[#80F6DD]"></div>
              )}
            </div>

            <div className="pl-6">
              {!isLeft && (
                <div className="rounded-3xl bg-white bg-[url(/lines.png)] bg-cover bg-center bg-no-repeat px-4 py-8 shadow-xl">
                  <span className="text-lg font-bold">{event.title}</span>
                  <h3 className="text-xs font-light text-[#6A7282]">
                    {event.description}
                  </h3>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {eventData.map((entry, index) => (
        <div
          key={index}
          className="my-6 flex items-center justify-start gap-8 rounded-2xl border px-2 py-4 lg:hidden"
        >
          <p className="mono-font my-auto flex size-8 items-center justify-center rounded-full bg-[#2C8E84] text-center text-white">
            {entry.step}
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">{entry.title}</p>
            <p className="text-xs text-[#6A7282]">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
