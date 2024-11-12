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
    gsap.to('.work4', {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.work4c',
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
    gsap.to('.pic4', {
      scale: 1,
      scrollTrigger: {
        trigger: '.work4c',
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
    gsap.to('.work4c', {
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
    <div
      id='works'
      className='worksec h-[315vh] w-[100vw] bg-dgray bg-noised-gif max-lg:h-[340vh]'
    >
      <div className='works opacity-0 translate-y-24'>
        <div className='w-[100vw] pt-[40px] text-[20px]  text-center mb-[35px] font-haasm text-white '>
          works
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='work1c flex h-[75vh] w-[100vw] '>
          <div className='work1 opacity-30 translate-x-[-10%] h-full w-[50vw] flex justify-end items-center max-lg:hidden'>
            <div className='relative max-w-[90%]'>
              <div className='overflow-hidden rounded-[40px]'>
                <Image
                  src='/night1.jpg'
                  alt='Picture of night'
                  width={800}
                  height={600}
                  className='pic1 max-h-[55vh] h-[30vw]  opacity-70 scale-[1.2]'
                />
              </div>
              <Image
                src='/aishirt.png'
                alt='Picture of shirt website'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='work1 opacity-30 max-lg:h-full translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw] max-sm:ml-0 max-lg:w-full ml-[3vw] h-[70%] items-center self-center max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px]'>
            <div className='font-haasxt text-[72px] max-xl:text-[66px] max-md:text-[60px] max-sm:text-[44px] max-sm:w-full tracking-[-.8px] max-lg:mt-[4vh] max-lg:mb-[2vh] '>
              threejs ai shirt website
            </div>
            <div className='relative  lg:hidden'>
              <div className='overflow-hidden rounded-[40px] max-sm:rounded-[20px] max-h-[55vh] h-[35vw]'>
                <Image
                  src='/night1.jpg'
                  alt='Picture of night'
                  width={250}
                  height={600}
                  className='pic1 max-h-[55vh] h-[35vw]  opacity-70 scale-[1.2]'
                />
              </div>
              <Image
                src='/aishirt.png'
                alt='Picture of shirt website'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto w-[80%]'
              />
            </div>
            <div className='w-full flex flex-col items-center'>
              <div className='font-haasm opacity-[90%] max-lg:mt-4'>
                technologies
              </div>
              <div className='flex w-[20%] max-sm:w-[30vw] justify-between font-haast opacity-[80%] '>
                <div>
                  react <br />
                  vite <br />
                  node.js
                </div>
                <div>
                  tailwind
                  <br />
                  threejs
                  <br /> framer
                </div>
              </div>
            </div>
            <div className='w-[20vw] font-haaslight mb-10 max-lg:w-[40vw] max-lg:mt-4 max-sm:w-[60vw]'>
              simple 3d project where the user can customize a t-shirt using a
              prompt to create an ai generated image, or upload their own image
              onto the model.
            </div>
            <a
              href='https://3daishirt.com'
              className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%]'
            >
              https://3daishirt.com
            </a>
          </div>
        </div>
        <div className='work2c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work2 opacity-30  translate-x-[-10%] flex flex-col justify-evenly  w-[40vw] pl-[8vw] h-full max-lg:w-full max-lg:pl-0'>
            <div className='work1 opacity-30 max-lg:h-full translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw] max-lg:ml-0 max-lg:w-full ml-[3vw] h-[70%] items-center self-center max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px]'>
              <div className='font-haasxt text-[72px] max-xl:text-[66px] max-md:text-[60px] max-sm:text-[44px] max-sm:w-full tracking-[-.8px] max-lg:mt-[6vh] max-lg:mb-[2vh] max-sm:mt-[4vh]'>
                old portfolio
              </div>
              <div className='relative w-[60%] lg:hidden '>
                <div className='overflow-hidden rounded-[40px] max-sm:rounded-[20px] max-h-[55vh] h-[35vw]'>
                  <Image
                    src='/sanfran.jpg'
                    alt='Picture of night'
                    width={800}
                    height={600}
                    className='pic2 max-h-[55vh] h-[35vw]  opacity-70 scale-[1.2]'
                  />
                </div>
                <Image
                  src='/oldport.gif'
                  alt='Gif of old portfolio'
                  width={800}
                  height={600}
                  className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
                />
              </div>
              <div className='w-full flex flex-col items-center'>
                <div className='font-haasm opacity-[90%] max-lg:mt-4'>
                  technologies
                </div>
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
              <div className='w-[20vw] font-haaslight mb-10 max-lg:w-[40vw] max-lg:mt-4 max-sm:w-[60vw]'>
                straightforward portfolio website with threejs implementation.
                if you are seeing this then you are on the new portfolio website
                and my old portfolio is no longer serviced.
              </div>
              <div className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%]'>
                this website is no longer live
              </div>
            </div>
          </div>
          <div className='work2 max-lg:hidden opacity-30 translate-x-[10%] h-full w-[50vw] flex justify-end items-center ml-[3vw] '>
            <div className='relative max-w-[90%] '>
              <div className=' overflow-hidden rounded-[40px]'>
                <Image
                  src='/sanfran.jpg'
                  alt='Picture of night'
                  width={800}
                  height={600}
                  className='pic2 w-[900px] max-h-[55vh] h-[30vw] opacity-50 scale-[1.2]'
                />
              </div>
              <Image
                src='/oldport.gif'
                alt='Gif of old portfolio'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
        </div>
        <div className='work3c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work3 opacity-30 translate-x-[-10%] h-full w-[50vw] flex justify-end items-center max-lg:hidden'>
            <div className='relative max-w-[90%]'>
              <div className='overflow-hidden rounded-[40px]'>
                <Image
                  src='/nycpic.jpg'
                  alt='Picture of night'
                  width={800}
                  height={600}
                  className='pic3 max-h-[55vh]   h-[30vw] h-full w-full opacity-70 scale-[1.2]'
                />
              </div>
              <Image
                src='/3djackgif.gif'
                alt='Picture of jacket website'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='work3 opacity-30 max-lg:h-full translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw] max-lg:ml-0 max-lg:w-full ml-[3vw] h-[70%] items-center self-center max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px]'>
            <div className='font-haasxt text-[72px] max-xl:text-[66px] max-md:text-[60px] max-sm:text-[44px] max-sm:w-full tracking-[-.8px] max-lg:mt-[6vh] max-lg:mb-[2vh] max-sm:mt-[4vh]'>
              threejs jacket builder
            </div>
            <div className='relative max-w-[60%] lg:hidden'>
              <div className='overflow-hidden rounded-[40px] max-sm:rounded-[20px] max-h-[55vh] h-[35vw]'>
                <Image
                  src='/nycpic.jpg'
                  alt='Picture of night'
                  width={800}
                  height={600}
                  className='pic3 max-h-[55vh] h-[35vw]  opacity-70 scale-[1.2]'
                />
              </div>
              <Image
                src='/3djackgif.gif'
                alt='Picture of jacket website'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
            <div className='w-full flex flex-col items-center'>
              <div className='font-haasm opacity-[90%] max-lg:mt-4'>
                technologies
              </div>
              <div className='flex w-[20%] max-sm:w-[30vw] justify-between font-haast opacity-[80%] '>
                <div>
                  nextjs <br />
                  three.js <br />
                  tailwind
                </div>
                <div>
                  redux <br />
                  axios
                  <br /> typescript
                </div>
              </div>
            </div>
            <div className='w-[20vw] font-haaslight mb-10 max-lg:w-[40vw] max-lg:mt-4 max-sm:w-[60vw]'>
              threejs jacket builder component featuring dropdown options ,
              real-time 3D model updates, responsive design across multiple
              devices, and backend data acquisition.
              <br />
              <br />
              (this was a component for a website requested by a client)
            </div>
            <div className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%] w-[20vw] max-sm:w-[40vw]'>
              no link available
            </div>
          </div>
        </div>
        <div className='work4c flex flex-row h-[75vh] w-[100vw]'>
          <div className='work4 opacity-30  translate-x-[-10%] flex flex-col justify-evenly  w-[40vw] pl-[8vw] h-full max-lg:w-full max-lg:pl-0'>
            <div className='work1 opacity-30 max-lg:h-full translate-x-[10%] flex flex-col justify-evenly text-white text-center w-[40vw] max-lg:ml-0 max-lg:w-full ml-[3vw] h-[70%] items-center self-center max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px]'>
              <div className='font-haasxt text-[72px] max-xl:text-[66px] max-md:text-[60px] max-sm:text-[44px] max-sm:w-full tracking-[-.8px] max-lg:mt-[8vh] max-lg:mb-[2vh] '>
                ricch website
              </div>
              <div className='relative  lg:hidden '>
                <div className='overflow-hidden rounded-[40px] max-sm:rounded-[20px] max-h-[55vh] h-[35vw]'>
                  <Image
                    src='/tokyo.jpeg'
                    alt='Picture of night'
                    width={250}
                    height={600}
                    className='pic4 max-h-[55vh] h-[35vw]  opacity-70 scale-[1.2]'
                  />
                </div>
                <Image
                  src='/richhh.gif'
                  alt='Gif of richh'
                  width={800}
                  height={600}
                  className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
                />
              </div>
              <div className='w-full flex flex-col items-center'>
                <div className='font-haasm opacity-[90%] max-lg:mt-4'>
                  technologies
                </div>
                <div className='flex w-[20%] justify-between font-haast opacity-[80%]'>
                  <div>
                    nextjs <br />
                    figma
                  </div>
                  <div>
                    threejs
                    <br /> tailwind
                  </div>
                </div>
              </div>
              <div className='w-[20vw] font-haaslight mb-10 max-lg:w-[40vw] max-lg:mt-4 max-sm:w-[60vw]'>
                helped in the design and development of ricch website as
                requested by clientele. features threejs models and animations
                throughout the website.
              </div>
              <a
                href='https://www.ricch.com/'
                className='underline font-haaslight decoration-1 underline-offset-[6px] translate-y-[-60%]'
              >
                https://www.ricch.com/
              </a>
            </div>
          </div>
          <div className='work4 max-lg:hidden opacity-30 translate-x-[10%] h-full w-[50vw] flex justify-end items-center ml-[3vw] '>
            <div className='relative max-w-[90%] '>
              <div className='overflow-hidden rounded-[40px]'>
                <Image
                  src='/tokyo.jpeg'
                  alt='Picture of night'
                  width={800}
                  height={600}
                  className='pic4 w-[900px] max-h-[55vh] h-[30vw] opacity-50 scale-[1.2]'
                />
              </div>
              <Image
                src='/richhh.gif'
                alt='Gif of richh'
                width={800}
                height={600}
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
