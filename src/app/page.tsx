'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Hero from './site/hero';
import Intro from './site/intro';
import Lenis from '@studio-freight/lenis';
import About from './site/about';
import Personal from './site/personal';
import Professional from './site/professional';
import Works from './site/works';
import Contact from './site/contact';
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
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', smoothScrollHandler);
    });

    gsap.to('.about', {
      scale: 1,
      scrollTrigger: {
        trigger: '.xcontainer',
        start: 'top 97%',
        end: 'top center',
        scrub: true,
      },
    });
    gsap.to('.works', {
      opacity: 1,
      translateY: 0,
      scrollTrigger: {
        trigger: '.worksbox',
        start: 'top bottom',
        end: 'top 15%',
        scrub: true,
      },
    });
    gsap.to('.hide', {
      height: '100%',
      width: '100%',
      overflow: 'visible',
      delay: 3.95,
    });

    const options = {
      lerp: 0.1,
      smoothTouch: true,
    };

    const lenis = new Lenis(options);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', smoothScrollHandler);
      });
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  const smoothScrollHandler = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      <div className='relative h-[100vh]'>
        <div className='intro absolute top-0 left-0 right-0  h-[100vh]  '>
          <Intro />
        </div>
        <div className='introH opacity-0'>
          <Hero />
        </div>
      </div>
      <div className='hide w-0 h-0 overflow-hidden '>
        <div className='overflow-hidden'>
          <div
            id='aboutss'
            className='xcontainer flex flex-row w-[300vw] h-[100vh] relative translate-x-[-100vw]'
          >
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
        <div className='w-[100vw] h-[315vh] max-lg:h-[340vh] worksbox'>
          <Works />
        </div>
        <div className='w-[100vw] h-[100vh]'>
          <Contact />
        </div>
      </div>
    </main>
  );
}
