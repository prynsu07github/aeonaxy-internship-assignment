
const SectionSix = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="grid xl:grid-cols-2 border-b-2 border-black minh-[100vh] h-auto">
        <div className="px-5 py-10 md:p-10 border-b-2 xl:border-b-0 xl:border-r-2 border-black ">
          <h1 className="text-5xl sm:text-7xl md:text-[7rem]">Learn more</h1>
          <h1 className="text-5xl sm:text-8xl md:text-[7rem]">about us. or</h1>
          <h1 className="text-5xl sm:text-8xl md:text-[7rem]">join us.</h1>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-none xl:grid-cols-none xl:grid-rows-2">
          <div className="flex flex-col justify-between px-5 py-10 border-b-2 md:border-b-0 md:border-r-2 xl:border-b-2 border-black">
            <div>
              <h1 className="text-3xl md:text-5xl">The Medium blog.</h1>
              <p className="text-lg  md:text-xl mt-5 w-[70%] font-roboto">
              Visit our company blog for the latest news, product updates, and tips and tricks.
              </p>
            </div>
            <button className="font-roboto mt-24 px-8 py-2 text-[#40A34D] rounded-full text-xl md:text-2xl border-2 border-[#40A34D] w-fit">
              Read Our blog
            </button>
          </div>
          <div className="flex flex-col justify-between px-5 py-10 ">
            <div>
              <h1 className="text-3xl md:text-5xl">The Medium blog.</h1>
              <p className="text-lg  md:text-xl mt-5 w-[70%] font-roboto">
              Our team is home to engineers, journalists, artists, and creatives of all stripes.
              </p>
            </div>
            <button className="font-roboto mt-24 px-8 py-2 text-[#40A34D] rounded-full text-xl md:text-2xl border-2 border-[#40A34D] w-fit">
              Read Our blog
            </button>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 border-b-2 border-black">
        <div className="border-b-2 xl:border-b-0 xl:border-r-2 border-black p-5 flex justify-center items-center">
            <img src="/image5.png" alt="image5" className="md:w-2/4 xl:w-3/4"/>
        </div>
        <div className="px-5 py-10 md:p-10 flex flex-col justify-between">
            <div>
            <h1 className="text-5xl sm:text-8xl md:text-[7rem]">Read, write,</h1>
            <h1 className="text-5xl sm:text-8xl md:text-[7rem]">and, expand</h1>
            <h1 className="text-5xl sm:text-6xl md:text-[7rem]">your world.</h1>
            </div>
            <button className="font-roboto mt-24 px-8 py-2 text-white bg-[#36A243] rounded-full text-xl md:text-2xl border-2 w-fit">
              Get started
            </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
