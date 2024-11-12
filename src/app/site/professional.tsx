import { gsap } from 'gsap';

export default function Professional() {
  const handleClickbProf = () => {
    gsap.to('.xcontainer', { x: '-100vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 1, duration: 0.9, delay: 0.7 });
    gsap.fromTo(
      '.aboutm',
      { scale: 0.85 },
      { scale: 1, duration: 0.6, delay: 0.9 }
    );
    gsap.to('.aboutprof', { scale: 0.85, duration: 0.6 });
    gsap.to('.prof', { opacity: 0, duration: 0.6 });
  };

  return (
    <div className='h-[100vh] overflow-hidden bg-dgray bg-noised-gif w-[100vw] max-xl:text-[15px] max-md:text-[14px] max-sm:text-[14px] relative'>
      <div className=' h-[100vh] w-[100vw] opacity-0 prof'>
        <div className=' flex w-full justify-between mt-[40px] text-[20px] max-md:text-[17px] max-sm:text-[15px]  max-sm:mt-[30px] ml-[5vw] mb-[35px] font-haasm text-white '>
          professional
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='h-full'>
          <div className='h-[35%] flex  pl-[10vw]'>
            <p className='text-white  font-haaslight  w-[50%]  pt-[10vh] max-sm:pt-[8vh] '>
              <span className='font-haasm'>
                skills (ordered by most favored): <br />
              </span>
              front end development, ux/ui design, back end development
            </p>
            <div className='indent-0 w-[40vw]  text-white sm:hidden text-center  mt-4 '>
              <span className='font-haasm'>technologies:</span>
              <br />
              nextjs (react)
              <br />
              figma
              <br />
              tailwindcss
              <br />
              threejs
              <br />
              gsap
              <br />
              html
              <br />
              javascript
              <br />
              css
              <br />
              python
              <br />
              mysql
              <br />
              supabase
              <br />
              highcharts
              <br />
              posthog
              <br />
              bigquery
            </div>
          </div>

          <div className=' font-haaslight text-white w-full flex  justify-around text-center'>
            <div className='w-[32vw] max-xl:w-[42vw] max-lg:w-[46vw] max-sm:w-[75vw] h-max mt-[8vh] max-sm:mt-[10vh] p-6  border-[1px] border-opacity-35 border-dashed rounded-[40px] border-white max-lg:ml-16 max-sm:ml-2 max-sm:p-2'>
              <p>
                so if you&apos;re here now you’ve probably seen a million other
                portfolios. i don’t know about you, but i find it really
                annoying how everyone just claims to be “the best” at every
                technology they list out. feels kind of robotic and i think just
                lacking of personality overall
              </p>
              <br />
              <br className='max-sm:hidden' />
              <p>
                but anywho, to the{' '}
                <span className='font-haasm max-sm:hidden'>right</span>{' '}
                <span className='font-haasm sm:hidden'>top</span> here are
                listed my primary technologies of development. i’m basically the
                best at every one of them so please do go ahead and reach out to
                me if i could help you with any of them : )
              </p>
            </div>
            <div className='indent-0 w-[20vw] mr-[8vw] max-sm:hidden'>
              <span className='font-haasm'>technologies:</span>
              <br />
              nextjs (react)
              <br />
              figma
              <br />
              tailwindcss
              <br />
              threejs
              <br />
              gsap
              <br />
              html
              <br />
              javascript
              <br />
              css
              <br />
              python
              <br />
              mysql
              <br />
              supabase
              <br />
              highcharts
              <br />
              posthog
              <br />
              bigquery
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleClickbProf}
        className='text-white absolute left-10 top-[50%] opacity-0 underline decoration-1 underline-offset-[6px]  cursor-pointer font-haasm prof max-sm:left-2'
      >
        go back
      </div>
    </div>
  );
}
