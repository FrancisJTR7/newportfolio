import Image from 'next/image';

export default function Hero() {
  return (
    <div className='h-[100vh] overflow-hidden'>
      <div>
        <div className='flex w-full justify-between mt-[40px] text-[20px]'>
          <div className='w-full ml-[100px] mb-[15px] font-haaslight'>
            <h1 className=' text-lgray opacity-[60%] '>frontend developer</h1>
            <h1>francis torres rios</h1>
          </div>
          <div className='flex justify-around w-full font-haaslight'>
            <h1 className='mr-[20px]'>about</h1>
            <h1 className='mr-[20px]'>projects</h1>
            <h1 className='font-haasroman underline decoration-1 underline-offset-[6px] mr-[20px] mt-[1px]'>
              contact
            </h1>
          </div>
        </div>
        <div className='border-b-[1px] border-dashed border-black opacity-[35%]' />
      </div>
      <div className='flex flex-col h-[80%] justify-between'>
        <Image
          src='/OIP.jpeg'
          width={140}
          height={1}
          alt='Picture of profile'
          className='h-[180px] ml-[100px] mt-[25px] object-cover'
        />
        <div>
          <div className='flex justify-end w-full mt-[20px] mb-[80px]'>
            <div className='flex flex-col font-haasxxt text-[100px] w-[920px] text-lgray'>
              <div className='h-[120px]'>howdy</div>
              <div className=' self-end mr-[250px]'>
                i'm <span className='font-haasroman'>frankie</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[420px] font-haaslight text-[20px] text-lgray opacity-[60%] ml-[140px] mt-[40px]'>
            <div>a digital designer and frontend developer </div>
            <div className=' self-end '>
              currently located in new jersey and beyond
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
