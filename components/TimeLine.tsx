import React from 'react';

const events: [string, string][] = [
  [
    'Apply Online',
    'Fill out the online application form with your basic information',
  ],
  ['Aptitude Test', 'Complete the online MCQ test to assess your aptitude.'],
  ['Interview', 'Selected candidates proceed to a merit-based interview.'],
  ['Enrollment', '4-month intensive training program with expert instructors.'],
  ['Incubation', 'Work on real projects with mentorship and guidance.'],
  [
    'Internship/Job',
    'Get connected with job opportunities and start your career.',
  ],
];

const TimeLine = () => {
  return (
    <div className="mx-auto max-w-2xl py-10">
      {events.map((event, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-8"
          >
            <div // no quotes (Tailwind handles this fine for simple paths)
              className={
                isLeft
                  ? 'rounded-3xl bg-white bg-[url(/lines.png)] bg-cover bg-center bg-no-repeat px-4 py-6 pt-6 shadow-xl'
                  : 'px-4 pt-6'
              }
            >
              {isLeft && (
                <div className="pb-6">
                  <span className="text-lg font-bold">{event[0]}</span>
                  <h3 className="text-xs font-light text-[#6A7282]">
                    {event[1]}
                  </h3>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full border-2 border-white bg-[#2C8E84] text-center text-white">
                {i}
              </div>
              {i !== events.length - 1 && (
                <div className="w-0.5 flex-1 bg-[#80F6DD]"></div>
              )}
            </div>

            <div className="pl-6">
              {!isLeft && (
                <div className="rounded-3xl bg-white bg-[url(/lines.png)] bg-cover bg-center bg-no-repeat px-4 py-8 shadow-xl">
                  <span className="text-lg font-bold">{event[0]}</span>
                  <h3 className="text-xs font-light text-[#6A7282]">
                    {event[1]}
                  </h3>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;
