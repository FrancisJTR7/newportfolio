'use client';
import React, { useEffect } from 'react';
import Hero from './site/hero';
import Intro from './site/intro';
import Lenis from '@studio-freight/lenis';
import About from './site/about';
import Personal from './site/personal';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <Intro />
      <Hero />
      <About />
      <Personal />
    </main>
  );
}
