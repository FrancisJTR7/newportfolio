import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function Hero() {
  useLayoutEffect(() => {
    gsap.to('.rtext', {
      rotation: 0,
      translateY: 0,
      duration: 0.9,
      delay: 3.4,
      stagger: 0.05,
      ease: 'circ.out',
    });
    gsap.to('.ntext', {
      translateY: 0,
      duration: 0.9,
      delay: 3.4,
    });
    gsap.to('.btext', {
      translateY: 0,
      duration: 0.9,
      delay: 3.4,
    });
    gsap.to('.imgz', {
      scale: 1,
      duration: 0.9,
      delay: 3.4,
    });
  }, []);

  return (
    <div className='h-[100vh] overflow-hidden'>
      <div>
        <div className='flex w-full justify-between mt-[40px] text-[20px] translate-y-[-20px] ntext max-sm:mt-[30px] max-md:text-[17px] max-sm:text-[15px]'>
          <div className='w-full ml-[5vw] mb-[15px] font-haaslight'>
            <h1 className=' text-lgray opacity-[60%] '>frontend developer</h1>
            <h1>francis torres rios</h1>
          </div>
          <div className='flex justify-around w-full font-haaslight'>
            <a href='#aboutss' className='mr-[20px]'>
              about
            </a>
            <a href='#works' className='mr-[20px]'>
              works
            </a>
            <a
              href='#contact'
              className='font-haasroman underline decoration-1 underline-offset-[6px] mr-[20px] mt-[1px]'
            >
              contact
            </a>
          </div>
        </div>
        <div className='border-b-[1px] border-dashed border-black opacity-[35%] scale-110' />
      </div>
      <div className='flex flex-col h-[80%] justify-between max-sm:h-min'>
        <div className='overflow-hidden ml-[5vw] mt-[25px] w-[140px] '>
          <img
            src='/OIP.jpeg'
            alt='Picture of profile'
            className='h-[180px] object-cover scale-125 imgz max-sm:w-[100px] max-sm:h-[140px] '
          />
        </div>
        <div>
          <div className='flex justify-end mt-[20px] mb-[80px]  max-sm:mb-[70px] max-sm:mt-[70px]'>
            <div className='flex flex-col font-haasxxt text-[100px] w-[920px] text-lgray max-xl:w-[750px] max-xl:ml-10 max-xl:text-[90px] max-md:text-[80px] max-lg:ml-16 max-sm:text-[60px] max-sm:ml-[7vw] '>
              <div className='rtext h-[min] rotate-[6deg] translate-y-[100%] w-min'>
                howdy
              </div>

              <div className='rtext mr-[13vw] rotate-[7deg] translate-y-[100%] self-end max-sm:mr-2'>
                i&apos;m <span className='font-haasroman'>frankie</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[420px] font-haaslight text-[20px] text-lgray opacity-[65%] ml-[8vw] translate-y-[20px] btext max-md:text-[17px] max-sm:text-[14px] max-sm:ml-4 max-sm:w-[350px] '>
            <div>a digital designer and frontend developer </div>
            <div className=' self-end '>
              currently located in new jersey and beyond
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
