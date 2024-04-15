import { Link } from "react-router-dom"

const SectionFive = () => {
  return (
    <div className='bg-[#B4E5A3] grid lg:grid-cols-2 border-b-2 border-b-black overflow-hidden'>
      <div className='px-5 py-10 md:p-10 grid gap-8 lg:gap-16'>
        <h1 className='text-4xl sm:text-6xl md:text-[7rem]'>Take Medium with you.</h1>
        <p className='text-lg md:text-xl font-roboto'>Download the app so you can read wherever you are.</p>
        <div className='flex gap-4 md:gap-8 w-fit'>
          <Link to={'/'}>
          <img src='applestore.png' alt='applestore' className='h-10 sm:h-16'/>
          </Link>
          <Link to={'/'}>
          <img src='playstore.png' alt='playstore' className='h-10 sm:h-16'/>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-end'>
        <img src='image4.png' alt='iamge4' className='h-auto w-[90%] sm:w-2/4 lg:w-3/4 xl:w-2/4'/>
      </div>
    </div>
  )
}

export default SectionFive