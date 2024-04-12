import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Contact() {
  // Create a ref for the email div
  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation with GSAP
    gsap.to('.contsec', {
      background: 'rgba(0, 0, 0, 0.0)',
      scrollTrigger: {
        trigger: '.contsec',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
      },
    });

    // Function to copy email to clipboard
    const copyEmailToClipboard = () => {
      const email = 'francisjtr7@outlook.com'; // Hardcoded email address
      navigator.clipboard.writeText(email).catch((err) => {
        console.error('Failed to copy email to clipboard', err);
      });
    };

    // Attach click event listener to email div
    const emailDiv = emailRef.current;
    if (emailDiv) {
      emailDiv.addEventListener('click', copyEmailToClipboard);
    }

    // Cleanup function to remove event listener
    return () => {
      if (emailDiv) {
        emailDiv.removeEventListener('click', copyEmailToClipboard);
      }
    };
  }, []);

  return (
    <section id='contact' className='contsec w-full bg-dgray bg-noised-gif'>
      <div className=' flex justify-center w-[100vw] '>
        <div className='flex flex-col h-[100vh] justify-evenly items-center w-[100vw]'>
          <h1 className='text-center font-haasxxt text-[100px] text-lgray mt-[10vh] mr-[25vw] max-xl:mr-[10vw] max-lg:mr-0 max-xl:text-[90px] max-lg:text-[80px] max-md:text-[70px]  max-sm:text-[50px]'>
            let&apos;s get something done.
          </h1>
          <div className='max-sm:hidden font-haaslight text-[28px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px]  max-sm:text-[20px] text-lgray self-end opacity-[65%] cursor-pointer mb-6 mr-[25vw] max-lg:mr-[10vw]'>
            <span className='text-[14px] cursor-default max-sm:hidden'>
              click email to copy
            </span>
            <br />
            <span ref={emailRef}>francisjtr7@outlook.com</span>
          </div>
          <div className='sm:hidden font-haaslight text-[28px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px]  max-sm:text-[20px] text-lgray self-end opacity-[65%] cursor-pointer mb-6 mr-[25vw] max-lg:mr-[10vw]'>
            francisjtr7@outlook.com
          </div>
        </div>
      </div>
    </section>
  );
}
