import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

export default function Intro() {
  useLayoutEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to('.introW', { opacity: '100%', duration: 1.5, stagger: 0.4 })
      .from('.introW2', { opacity: '100%', duration: 0.6 });
  }, []);

  return (
    <div className='h-[100vh] bg-dgray bg-noised-gif flex justify-center text-white font-haasxxt text-[100px] w-full'>
      <div className='w-[310px] flex flex-col self-center introW2'>
        <div className='introW opacity-0'>frankiet</div>
        <div className='introW self-start opacity-0'>.dev</div>
      </div>
    </div>
  );
}
