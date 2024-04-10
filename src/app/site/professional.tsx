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
    <div className='h-[100vh] overflow-hidden bg-dgray bg-noised-gif w-[100vw] '>
      <div className=' h-[100vh] w-[100vw] opacity-0 prof'>
        <div className=' flex w-full justify-between mt-[40px] text-[20px] ml-[100px] mb-[35px] font-haasm text-white '>
          professional
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='h-full'>
          <div className='h-[35%]  w-[50%] pl-[10vw]  pt-[10vh]'>
            <p className='text-white  font-haaslight  '>
              <span className='font-haasm'>
                skills (ordered by most favored): <br />
              </span>
              front end development, ux/ui design, back end development
            </p>
          </div>

          <div className=' flex flex-row font-haaslight text-white justify-between indent-10 w-[100w]'>
            <div
              onClick={handleClickbProf}
              className=' underline decoration-1 font-haasm underline-offset-[6px] self-start cursor-pointer mt-4'
            >
              go back
            </div>

            <div className='w-[80vw] flex flex-row justify-between text-center'>
              <div className='w-[32vw] h-max mt-[8vh] p-6  border-[1px] border-opacity-35 border-dashed rounded-[40px] border-white '>
                <p>
                  so if your here now you’ve probably seen a million other
                  portfolios. i don’t know about you but i find it really
                  annoying how everyone just claims to be “the best” at every
                  technology they list out, feels kind of robotic and i think
                  just lacking of personality overall
                </p>
                <br />
                <br />
                <p>
                  but anywho, to the <span className='font-haasm'>right</span>{' '}
                  are listed my primary technologies of development. i’m
                  basically the best at every one of them so please do go ahead
                  and reach out to me if i could help you with any of them : )
                </p>
              </div>
              <div className='indent-0 w-[20vw] mr-[8vw]'>
                <span className='font-haasm'>technologies:</span>
                <br />
                nextjs (react too of course)
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
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
