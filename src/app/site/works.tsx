import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';

export function Works() {
  useEffect(() => {
    gsap.to('.work1', {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.work1c',
        start: 'top 97%',
        end: 'top 15%',
        scrub: true,
      },
    });
    gsap.to('.work2', {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.work2c',
        start: 'top 97%',
        end: 'top 15%',
        scrub: true,
      },
    });
    gsap.to('.work3', {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.work3c',
        start: 'top 97%',
        end: 'top 15%',
        scrub: true,
      },
    });
    gsap.to('.pic1', {
      scale: 1,
      scrollTrigger: {
        trigger: '.work1c',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to('.pic2', {
      scale: 1,
      scrollTrigger: {
        trigger: '.work2c',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to('.pic3', {
      scale: 1,
      scrollTrigger: {
        trigger: '.work3c',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to('.pic3', {
      scale: 1,
      scrollTrigger: {
        trigger: '.work3c',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to('.worksec', {
      background: 'rgba(0, 0, 0, 0.0)',
      scrollTrigger: {
        trigger: '.contsec',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
      },
    });
    gsap.to('.work3c', {
      opacity: 0,
      translateY: '15%',
      scrollTrigger: {
        trigger: '.contsec',
        start: 'top 90%',
        end: 'top top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='worksec h-[240vh] w-[100vw] bg-dgray bg-noised-gif '>
      <div className='works opacity-0 translate-y-24'>
        <div className='w-[100vw] pt-[40px] text-[20px]  text-center mb-[35px] font-haasm text-white '>
          works
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='work1c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work1 opacity-30 translate-x-[-10%] h-full w-[50vw] flex justify-end items-center '>
            <div className='relative max-w-[90%]'>
              <div className='overflow-hidden rounded-[40px]'>
                <Image
                  src='/night1.jpg'
                  width={900}
                  height={0}
                  alt='Picture of night'
                  className='pic1 w-[900px] max-h-[55vh] h-[55vh]  opacity-70 scale-[1.2]'
                />
              </div>
              <Image
                src='/aishirt.png'
                width={700}
                height={550}
                alt='Picture of night'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='work1 opacity-30  translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw]  ml-[3vw] h-[70%] items-center self-center'>
            <div className='font-haasxt text-[72px] tracking-[-.8px]'>
              threejs ai shirt website
            </div>
            <div className='w-full flex flex-col items-center'>
              <div className='font-haasm opacity-[90%]'>technologies</div>
              <div className='flex w-[20%] justify-between font-haast opacity-[80%]'>
                <div>
                  react <br />
                  vite <br />
                  node.js
                </div>
                <div>
                  tailwindcss <br />
                  threejs
                  <br /> framer
                </div>
              </div>
            </div>
            <div className='w-[20vw] font-haaslight mb-10'>
              simple 3d project where the user can customize a t-shirt using a
              prompt to create an ai generated image, or upload their own image
              onto the model.
            </div>
            <div className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%]'>
              https://3dairshirt.com
            </div>
          </div>
        </div>
        <div className='work2c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work2 opacity-30  translate-x-[-10%] flex flex-col justify-evenly  w-[40vw] pl-[8vw] h-full'>
            <div className='work1 opacity-30  translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw] h-[70%] items-center self-center'>
              <div className='font-haasxt text-[72px] tracking-[-.8px]'>
                old portfolio
              </div>
              <div className='w-full flex flex-col items-center'>
                <div className='font-haasm opacity-[90%]'>technologies</div>
                <div className='flex w-[20%] justify-between font-haast opacity-[80%]'>
                  <div>
                    react <br />
                    sass
                  </div>
                  <div>
                    threejs
                    <br /> bootstrap
                  </div>
                </div>
              </div>
              <div className='w-[20vw] font-haaslight mb-10'>
                straightforward portfolio website with threejs implementation.
                if you are seeing this then you are on the new portfolio website
                and my old portfolio is no longer serviced.
              </div>
              <div className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%]'>
                this website is no longer live
              </div>
            </div>
          </div>
          <div className='work2 opacity-30 translate-x-[10%] h-full w-[50vw] flex justify-end items-center ml-[3vw] '>
            <div className='relative max-w-[90%] '>
              <div className=' overflow-hidden rounded-[40px]'>
                <Image
                  src='/sanfran.jpg'
                  width={900}
                  height={0}
                  alt='Picture of night'
                  className='pic2 w-[900px] max-h-[55vh] h-[55vh] opacity-50 scale-[1.2]'
                />
              </div>
              <Image
                src='/oldportff.gif'
                width={700}
                height={550}
                alt='Gif of old portfolio'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
        </div>
        <div className='work3c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work3 opacity-30 translate-x-[-10%] h-full w-[50vw] flex justify-end items-center '>
            <div className='relative max-w-[90%]'>
              <div className='w-[900px] h-full max-w-[100%] overflow-hidden rounded-[40px]'>
                <Image
                  src='/nycpic.jpg'
                  width={900}
                  height={0}
                  alt='Picture of night'
                  className='pic3 opacity-70 w-[900px] max-h-[55vh] h-[55vh] scale-[1.2]'
                />
              </div>
              <Image
                src='/3djackgif.gif'
                width={700}
                height={550}
                alt='Picture of jacket website'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='work3 opacity-30  translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw]  ml-[3vw] h-[70%] items-center self-center'>
            <div className='font-haasxt text-[72px] tracking-[-.8px]'>
              jacket builder component
            </div>
            <div className='w-full flex flex-col items-center'>
              <div className='font-haasm opacity-[90%]'>technologies</div>
              <div className='flex w-[20%] justify-between font-haast opacity-[80%]'>
                <div>
                  nextjs <br />
                  three.js <br />
                  tailwindcss
                </div>
                <div>
                  redux <br />
                  axios
                  <br /> typescript
                </div>
              </div>
            </div>
            <div className='w-[20vw] font-haaslight mb-10'>
              threejs jacket build component featuring a series of dropdown
              options for in-depth customization, real-time 3D model updates
              reflecting user choices, responsive design across multiple
              devices, and backend data acquisition.
              <br />
              <br />
              (this was a component for a website requested by a client)
            </div>
            <div className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%] w-[20vw]'>
              no link available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
