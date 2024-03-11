import { gsap } from 'gsap';

export default function Personal() {
  const handleClickbPers = () => {
    gsap.to('.xcontainer', { x: '-100vw', duration: 1, delay: 0.3 });
    gsap.to('.who', { opacity: 0.9, duration: 0.9, delay: 0.7 });
    gsap.fromTo(
      '.aboutm',
      { scale: 0.85 },
      { scale: 1, duration: 0.6, delay: 0.9 }
    );
    gsap.to('.aboutpers', { scale: 0.85, duration: 0.6 });
    gsap.to('.pers', { opacity: 0, duration: 0.6 });
  };
  return (
    <div className='h-[100vh] overflow-hidden bg-dgray bg-noised-gif w-[100vw] '>
      <div className='opacity-0 pers'>
        <div className='flex w-[100vw] justify-between mt-[40px] text-[20px] ml-[100px] mb-[35px] font-haaslight text-white opacity-[90%]'>
          personal
        </div>
        <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
        <div className='flex flex-row w-full h-full opacity-[80%] text-white text-[20px] font-haaslight bpers translate-y-[20px]'>
          <div className=' flex flex-col justify-evenly h-[85vh] ml-12 indent-10'>
            <p>well... where do i start?</p>
            <p className='indent-10'>
              hey!! my name is francis, all my friends call me frankie, you can
              call me such too. like everyone i've had a pretty interesting
              life. i've been to a lot of places and i've met a lot of people.
              i've been through a lot of things, and i've learned plenty of
              others. i've had a lot of fun, and i've had a lot of pain. but
              nonetheless, i am always grateful for every moment that has shaped
              me into who i am today. if not for every single moment, from most
              miniscule to the most grand, i wouldn't be right where i am.
            </p>
            <p classname='indent-10'>
              you've entered the personal section of my portfolio, and so i've
              decided to treat it a little bit like a journal -i do journal by
              the way, daily- and i also like to read plenty, mostly philosophy
              and non-fiction literature, but maybe one day i'll get into
              fiction. who knows?
            </p>
            <p classname='indent-10'>
              you may be displeased (or maybe not?) to find that your venture to
              this section has led you not to a list of my hobbies, or my
              favorite movies, or my favorite foods, or my favorite color, or my
              favorite anything. i figured i showed a little bit of my inner
              monologue more instead, you can find out the little details
              yourself. if intrigued, please do go ahead and contact me so we
              can have a chat. i hope you enjoy your stay :)
            </p>
          </div>
          <div className=' flex flex-col justify-evenly min-w-[50%] h-[85vh]'>
            <div className='flex flex-col items-center pers '>
              <div>
                <div>name: francis j. torres rios</div>
                <div>age: 23</div>
                <div>location: new jersey</div>
                <div>birthplace: puerto rico</div>
              </div>
            </div>
            <div
              onClick={handleClickbPers}
              className=' underline decoration-1 underline-offset-[6px] mr-6 self-end cursor-pointer'
            >
              go back
            </div>
            <div classname='indent-10 w-[80%] ml-[10%] mt-[10%]'>
              "you have power over your mind - not outside events. realize this,
              and you will find strength.”-
              <br />
              marcus aurelius
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
