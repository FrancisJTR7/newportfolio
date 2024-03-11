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
        <div className='flex w-full justify-between mt-[40px] text-[20px] translate-y-[-20px] ntext'>
          <div className='w-full ml-[100px] mb-[15px] font-haaslight'>
            <h1 className=' text-lgray opacity-[60%] '>frontend developer</h1>
            <h1>francis torres rios</h1>
          </div>
          <div className='flex justify-around w-full font-haaslight'>
            <h1 className='mr-[20px]'>about</h1>
            <h1 className='mr-[20px]'>projects</h1>
            <h1 className='font-haasroman underline decoration-1 underline-offset-[6px] mr-[20px] mt-[1px]'>
              contact
            </h1>
          </div>
        </div>
        <div className='border-b-[1px] border-dashed border-black opacity-[35%] scale-110' />
      </div>
      <div className='flex flex-col h-[80%] justify-between'>
        <div className='overflow-hidden ml-[100px] mt-[25px] w-[140px]'>
          <Image
            src='/OIP.jpeg'
            width={140}
            height={1}
            alt='Picture of profile'
            className='h-[180px] object-cover scale-125 imgz'
          />
        </div>
        <div>
          <div className='flex justify-end w-full mt-[20px] mb-[80px]'>
            <div className='flex flex-col font-haasxxt text-[100px] w-[920px] text-lgray'>
              <div className='rtext h-[120px] rotate-[6deg] translate-y-[100%]'>
                howdy
              </div>

              <div className='rtext mr-[250px] rotate-[7deg] translate-y-[100%] self-end'>
                i'm <span className='font-haasroman'>frankie</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[420px] font-haaslight text-[20px] text-lgray opacity-[65%] ml-[140px] mt-[40px] translate-y-[20px] btext'>
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
