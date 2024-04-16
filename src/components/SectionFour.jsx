

const SectionFour = () => {
  return (
    <div className='bg-[#36A243] overflow-hidden '>
        <div className="flex flex-col items-center pt-16 md:pt-24 pb-20 px-5 text-center border-b-2 border-b-black">
        <h1 className="text-5xl sm:text-7xl md:text-[7rem]">Get more with</h1>
        <h1 className="text-5xl sm:text-7xl md:text-[7rem]">membership.</h1>
        <p className="text-lg md:text-xl w-full md:w-[700px] mt-6 font-roboto">
        Become a Medium member to enjoy unirmited access and directly support the writers you read most.
        </p>
        <button className="mt-16 sm:mt-24 px-8 py-2 text-white rounded-full text-lg sm:text-2xl border-2 border-white font-roboto">
          See membership options
        </button>
      </div>
      <div className='grid md:grid-cols-2 border-b-2 border-b-black'>
        <div className='grid gap-8 md:gap-12 p-5 md:p-10 pb-10 md:pb-16 border-b-2 border-b-black md:border-b-0 md:border-r-2 md:border-r-black'>
          <h1 className='text-3xl md:text-5xl'>Read as much you want.</h1>
          <img src='/image2.png' alt='image2' className='w-[80%] xl:w-[40%]'/>
          <p className='text-lg md:text-xl'>Enjoy unlimited access to every story across all of your devices</p>
        </div>
        <div className='grid gap-12 p-5 md:p-10 pb-10 md:pb-16 border-r-2 border-r-black'>
          <h1 className='text-3xl md:text-5xl'>Reward quality content.</h1>
          <img src='/image3.png' alt='image3' className='w-[80%] xl:w-[40%]'/>
          <p className='text-lg md:text-xl'>Your membership helps us pay writers, and keeps your experience ad-free</p>
        </div>
      </div>
    </div>
  )
}

export default SectionFour