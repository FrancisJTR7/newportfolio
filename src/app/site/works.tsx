import { gsap } from 'gsap';
import Image from 'next/image';

export function Works() {
  return (
    <div className='h-[240vh] w-[100vw] bg-dgray bg-noised-gif '>
      <div className='works opacity-0 translate-y-24'>
        <div className='w-[100vw] pt-[40px] text-[20px]  text-center mb-[35px] font-haaslight text-white opacity-[90%]'>
          works
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='flex flex-row h-[75vh] w-[100vw]'>
          <div className='h-full w-[50vw] flex justify-end items-center '>
            <div className='relative max-w-[90%]'>
              <Image
                src='/night1.jpg'
                width={800}
                height={550}
                alt='Picture of night'
                className='opacity-70'
              />
              <Image
                src='/aishirt.png'
                width={700}
                height={550}
                alt='Picture of night'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='flex flex-col justify-evenly text-white text-[20px] font-haaslight w-[40vw] pl-[5vw] h-full'>
            <div>https://3dairshirt.com</div>
            <div>
              technologies: react, vite, node.js, tailwind, react three fiber,
              framer motion
            </div>
            <div>
              simple 3d project where the user can customize a t-shirt. they can
              use openai's dalle api to generate images on the shirt based on
              text or they can upload their own files.
            </div>
          </div>
        </div>
        <div className='flex flex-row h-[75vh] w-[100vw]'>
          <div className='flex flex-col justify-evenly text-white text-[20px] font-haaslight w-[40vw] pl-[5vw] h-full'>
            <div>https://3dairshirt.com</div>
            <div>
              technologies: react, vite, node.js, tailwind, react three fiber,
              framer motion
            </div>
            <div>
              simple 3d project where the user can customize a t-shirt. they can
              use openai's dalle api to generate images on the shirt based on
              text or they can upload their own files.
            </div>
          </div>
          <div className='h-full w-[50vw] flex justify-end items-center '>
            <div className='relative max-w-[90%]'>
              <Image
                src='/night1.jpg'
                width={800}
                height={550}
                alt='Picture of night'
                className='opacity-70'
              />
              <Image
                src='/aishirt.png'
                width={700}
                height={550}
                alt='Picture of night'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-row h-[75vh] w-[100vw]'>
          <div className='h-full w-[50vw] flex justify-end items-center '>
            <div className='relative max-w-[90%]'>
              <Image
                src='/night1.jpg'
                width={800}
                height={550}
                alt='Picture of night'
                className='opacity-70'
              />
              <Image
                src='/aishirt.png'
                width={700}
                height={550}
                alt='Picture of night'
                className='absolute right-0 left-0 bottom-0 top-0 m-auto max-w-[85%]'
              />
            </div>
          </div>
          <div className='flex flex-col justify-evenly text-white text-[20px] font-haaslight w-[40vw] pl-[5vw] h-full'>
            <div>https://3dairshirt.com</div>
            <div>
              technologies: react, vite, node.js, tailwind, react three fiber,
              framer motion
            </div>
            <div>
              simple 3d project where the user can customize a t-shirt. they can
              use openai's dalle api to generate images on the shirt based on
              text or they can upload their own files.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
