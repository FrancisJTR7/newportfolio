'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Hero from './site/hero';
import Intro from './site/intro';
import Lenis from '@studio-freight/lenis';
import About from './site/about';
import Personal from './site/personal';
import Professional from './site/professional';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to('.intro', { opacity: 0, duration: 2, delay: 1.9 })
      .to('.introH', { opacity: 1, duration: 0.6 });
  }, []);

  useEffect(() => {
    gsap.to('.about', {
      scale: 1,
      scrollTrigger: {
        trigger: '.xcontainer',
        start: 'top 97%',
        end: 'top center',
        scrub: true,
      },
    });

    const lenis = new Lenis();

    lenis.stop(); // Stop scrolling immediately

    // Start scrolling again after 2.6 seconds
    setTimeout(() => {
      lenis.start();
    }, 3950);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <div className='relative h-[100vh]'>
        <div className='intro absolute top-0 left-0 right-0  h-[100vh] '>
          <Intro />
        </div>
        <div className='introH opacity-0'>
          <Hero />
        </div>
      </div>
      <div className='overflow-hidden'>
        <div className='xcontainer flex flex-row w-[300vw] h-[100vh] relative translate-x-[-100vw]'>
          <div className='about aboutpers scale-[.85]'>
            <Personal />
          </div>
          <div className='about aboutm scale-[.85]'>
            <About />
          </div>
          <div className='about aboutprof scale-[.85]'>
            <Professional />
          </div>
        </div>
      </div>
      <div className='w-[100vw] h-[100vh]'></div>
    </main>
  );
}
