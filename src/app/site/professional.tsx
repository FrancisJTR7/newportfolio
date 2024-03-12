import { gsap } from 'gsap';

export default function Professional() {
  const handleClickbProf = () => {
    gsap.to('.xcontainer', { x: '-100vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 0.9, duration: 0.9, delay: 0.7 });
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
        <div className='flex w-full justify-between mt-[40px] text-[20px] ml-[100px] mb-[35px] font-haaslight text-white opacity-[90%]'>
          professional
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='h-full'>
          <div className='h-[35%]  w-[50%] pl-[10vw]  pt-[10vh]'>
            <p className='text-white text-[20px] font-haaslight opacity-[80%] '>
              skills (ordered by most favored): <br /> front end development,
              ux/ui design, back end development
            </p>
          </div>

          <div className=' flex flex-row font-haaslight opacity-[80%] text-white justify-between text-[20px] indent-10 w-[100w]'>
            <div
              onClick={handleClickbProf}
              className=' underline decoration-1 underline-offset-[6px] self-start cursor-pointer mt-4'
            >
              go back
            </div>

            <div className='w-[80vw] flex flex-row justify-between '>
              <div className='w-[45vw]'>
                <p>
                  i don't really know what to put here and this space needs to
                  be filled so enjoy my simplistic approach at listing what
                  technologies i enjoy using.
                </p>
                <br />
                <br />
                <p>
                  what’s most important about me is that i do truly enjoy
                  developing websites, I also enjoy designing them. i designed
                  then developed this website fully from the ground up, enjoyed
                  every second of it too. for this portfolio in particular, I
                  used figma for design and then nextjs, tailwindcss, and gsap
                  for development, those were the dominant technologies used
                  anyways.
                </p>
              </div>
              <div className='indent-0 w-[20vw]'>
                technologies
                <br />
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
