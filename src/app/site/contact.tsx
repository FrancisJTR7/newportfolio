import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Contact() {
  // Create a ref for the email div
  const emailRef = useRef(null);

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
      const email = emailRef.current.innerText;
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
    <section className='contsec w-full bg-dgray bg-noised-gif'>
      <div className=' flex justify-center w-[80vw] '>
        <div className='flex flex-col h-[100vh] justify-evenly items-center w-[70vw]'>
          <h1 className='font-haasxxt text-[100px] text-lgray mt-[10vh]'>
            let's get something done.
          </h1>
          <div
            ref={emailRef}
            className='font-haaslight text-[28px] text-lgray self-end opacity-[65%] cursor-pointer mb-6'
          >
            <span className='text-[14px] cursor-default'>copy me!</span>
            <br />
            francisjtr7@outlook.com
          </div>
        </div>
      </div>
    </section>
  );
}
