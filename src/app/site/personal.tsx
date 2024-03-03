export default function Personal() {
  return (
    <div className='h-[100vh] overflow-hidden bg-dgray bg-noised'>
      <div className='flex w-full justify-between mt-[40px] text-[20px] ml-[100px] mb-[35px] font-haaslight text-white opacity-[80%]'>
        personal
      </div>
      <div className='border-b-[1px] border-dashed border-white opacity-[35%]' />
      <div className='flex flex-row w-full h-full opacity-[80%]'>
        <div className='text-white text-[20px] font-haaslight flex flex-col justify-evenly h-[85vh] ml-12'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur
          </p>
          <p>
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit
          </p>
          <p>
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className='text-white text-[20px] font-haaslight flex flex-col justify-evenly h-[85vh]'>
          <div className='flex flex-col items-center '>
            <div>
              <div>name: francis j. torres rios</div>
              <div>age: 23</div>
              <div>location: new jersey</div>
              <div>birthplace: puerto rico</div>
            </div>
          </div>
          <div className=' underline decoration-1 underline-offset-[6px] mr-6 self-end'>
            go back
          </div>
          <div className='w-[80%] ml-[10%] mt-[10%]'>
            “If you set yourself to your present task along the path of true
            reason, with all determination, vigour,and good will: if you admit
            no distraction, but keep your own divinity pure and standing strong,
            as if you had to surrender it right now; if you grapple this to you,
            expecting nothing, shirking nothing, but self-content with each
            present action taken in accordance with nature and a heroic
            truthfulness in all that you say and mean - then you will lead a
            good life. And nobody is able to stop you.”- Marcus Aurelius
          </div>
        </div>
      </div>
    </div>
  );
}
