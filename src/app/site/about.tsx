import gsap from 'gsap';
import React from 'react';

export default function About() {
  const handleClickPers = () => {
    gsap.to('.xcontainer', { x: '0vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 0, duration: 0.6 });
    gsap.to('.aboutm', { scale: 0.85, duration: 0.6 });
    gsap.to('.aboutpers', { scale: 0.85, duration: 0, delay: 0.3 });
    gsap.to('.aboutpers', { scale: 1, duration: 0.6, delay: 0.9 });
    gsap.to('.pers', {
      opacity: 1,
      duration: 0.9,
      delay: 0.7,
    });
  };

  const handleClickProf = () => {
    gsap.to('.xcontainer', { x: '-200vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 0, duration: 0.6 });
    gsap.to('.aboutm', { scale: 0.85, duration: 0.6 });
    gsap.to('.aboutprof', { scale: 0.85, duration: 0, delay: 0.3 });
    gsap.to('.aboutprof', { scale: 1, duration: 0.6, delay: 0.9 });
    gsap.to('.prof', {
      opacity: 1,
      duration: 0.9,
      delay: 0.7,
    });
  };

  return (
    <div className='h-[100vh] bg-dgray bg-noised-gif flex justify-center text-white font-haasxxt text-[100px] w-[100vw] max-xl:text-[90px] max-md:text-[80px] max-sm:text-[70px]'>
      <div className='w-full flex flex-col self-center text-center opacity-[90%] who'>
        <div className='max-sm:mb-12 max-md:mb-8 max-lg:mb-4'>who</div>
        <div className='flex justify-between w-full items-center opacity-[90%] '>
          <div
            onClick={handleClickPers}
            className='font-haasm text-[16px] underline decoration-1 underline-offset-[6px] ml-10 cursor-pointer max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px] max-md:ml-6'
          >
            personal
          </div>
          <div>am</div>
          <div
            onClick={handleClickProf}
            className='font-haasm text-[16px] underline decoration-1 underline-offset-[6px] mr-10 cursor-pointer max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px] max-md:mr-6'
          >
            professional
          </div>
        </div>
        <div className='max-md:mt-8 max-lg:mt-4 max-sm:mt-12'>i?</div>
      </div>
    </div>
  );
}
