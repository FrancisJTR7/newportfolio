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
      opacity: 0.9,
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
      opacity: 0.9,
      duration: 0.9,
      delay: 0.7,
    });
  };

  return (
    <div className='h-[100vh] bg-dgray bg-noised-gif flex justify-center text-white font-haasxxt text-[100px] w-[100vw]'>
      <div className='w-full flex flex-col self-center text-center opacity-[90%] who'>
        <div>who</div>
        <div className='flex justify-between w-full items-center opacity-[90%]'>
          <div
            onClick={handleClickPers}
            className='font-haaslight text-[20px] underline decoration-1 underline-offset-[6px] ml-6 cursor-pointer '
          >
            personal
          </div>
          <div>am</div>
          <div
            onClick={handleClickProf}
            className='font-haaslight text-[20px] underline decoration-1 underline-offset-[6px] mr-6 cursor-pointer'
          >
            professional
          </div>
        </div>
        <div>i?</div>
      </div>
    </div>
  );
}
