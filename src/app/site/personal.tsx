import { gsap } from 'gsap';
import Image from 'next/image';

export default function Personal() {
  const handleClickbPers = () => {
    gsap.to('.xcontainer', { x: '-100vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 1, duration: 0.9, delay: 0.7 });
    gsap.fromTo(
      '.aboutm',
      { scale: 0.85 },
      { scale: 1, duration: 0.6, delay: 0.9 }
    );
    gsap.to('.aboutpers', { scale: 0.85, duration: 0.6 });
    gsap.to('.pers', { opacity: 0, duration: 0.6 });
  };
  return (
    <div className='h-[100vh] overflow-hidden bg-dgray bg-noised-gif w-[100vw] relative max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px]'>
      <div className='opacity-0 pers'>
        <div className=' w-[100vw] pt-[40px] max-sm:pt-[30px] text-[20px] max-md:text-[17px] max-sm:text-[15px]  ml-[5vw] mb-[35px] font-haasm text-white '>
          personal
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='flex items-center w-full justify-around h-[40vh] max-sm:h-[37vh]  '>
          <div className=' overflow-hidden rounded-[40px] sm:hidden'>
            <Image
              src='/fishing.png'
              width={550}
              height={0}
              alt='Picture of francis fishing'
              className=' opacity-90 w-[75vw]'
            />
          </div>
          <div className='text-white w-max font-haaslight text-center ml-[3vw]  max-sm:hidden'>
            <div>
              <span className='font-haasm'>age: </span> 23
            </div>
            <div>
              <span className='font-haasm'>name: </span> francis j. torres rios
            </div>

            <div>
              <span className='font-haasm'>location: </span> new jersey
            </div>
            <div>
              <span className='font-haasm'>birthplace: </span> puerto rico
            </div>
          </div>

          <div className='w-[36vw] max-sm:hidden'>
            <p className='text-white text-center font-haaslight max-sm:hidden'>
              “If you set yourself to your present task along the path of true
              reason, with all determination, vigour,and good will: if you admit
              no distraction, but keep your own divinity pure and standing
              strong, as if you had to surrender it right now; if you grapple
              this to you, expecting nothing, shirking nothing, but self-content
              with each present action taken in accordance with nature and a
              heroic truthfulness in all that you say and mean - then you will
              lead a good life. And nobody is able to stop you.”{' '}
              <span className='font-haasm'>- Marcus Aurelius</span>
            </p>
          </div>
        </div>
        <div className='flex items-center w-full justify-around h-[42vh] max-sm:flex-col '>
          <div className=' overflow-hidden rounded-[40px] max-sm:hidden '>
            <Image
              src='/fishing.png'
              width={550}
              height={0}
              alt='Picture of francis fishing'
              className=' opacity-90 w-[32vw] max-xl:w-[42vw] max-lg:w-[46vw] '
            />
          </div>
          <div className='text-white w-max font-haaslight text-center max-sm:mb-6  sm:hidden'>
            <div>
              <span className='font-haasm'>age: </span> 23
            </div>
            <div>
              <span className='font-haasm'>name: </span> francis j. torres rios
            </div>

            <div>
              <span className='font-haasm'>location: </span> new jersey
            </div>
            <div>
              <span className='font-haasm'>birthplace: </span> puerto rico
            </div>
          </div>
          <div className='text-white flex text-center font-haaslight pr-[10vw] max-sm:pr-0 '>
            <div className='w-[10vw] max-sm:w-[35vw]'>
              <span className='font-haasm'>likes:</span> <br /> fishing <br />
              gaming
              <br /> bodybuilding
              <br /> communication <br />
              philosophy <br />
              psychology
              <br />
              space
              <br /> mycology
            </div>
            <div className='w-[10vw] max-sm:w-[35vw]'>
              <span className='font-haasm'>dislikes:</span> <br />
              not catching fish
              <br /> 5pm sunsets
              <br /> the cold
              <br /> mussels
              <br />
              pollution
              <br /> rain
              <br /> red lights <br />
              sauerkraut
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleClickbPers}
        className='text-white absolute right-10 top-[50%] opacity-0 underline decoration-1 underline-offset-[6px]  cursor-pointer font-haasm pers max-sm:right-2'
      >
        go back
      </div>
    </div>
  );
}
