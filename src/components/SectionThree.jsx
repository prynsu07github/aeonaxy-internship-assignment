/* eslint-disable react/no-unescaped-entities */

const SectionThree = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="grid lg:grid-cols-2 border-b-2 border-b-white">
        <div
          className="
       py-10 md:py-16 px-5 md:px-10 border-b-2
         border-b-white lg:border-b-0
         lg:border-r-2 lg:border-r-white"
        >
          <h1 className="text-6xl md:text-[7rem] w-auto md:w-[80%] ">
            Over 100 million readers and growing.
          </h1>
        </div>
        <div className="py-10 md:py-16 px-5 md:px-10">
          <div className="flex items-center gap-3  w-auto h-32 md:h-48">
            <img
              src="https://bit.ly/dan-abramov"
              alt="image2"
              className="rounded-full h-full"
            />
            <div className="bg-[#4479FF] w-16 md:w-24 h-[90%] rounded-[100%]"></div>
            <div className="bg-[#F45188] w-6 md:w-8 h-[85%] rounded-[100%]"></div>
          </div>
          <div className="w-full sm:w-[80%] mt-10 md:mt-16">
            <p className="text-xl md:text-2xl mb-10 font-roboto">
            "Medium is a great place to read and learn from a wide range of authors. It's not muddied up by ads. It feels like one of the few pure places to go online."
            </p>
            <p className="text-2xl">Jackie Colburn</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-24 pb-16 px-5 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-[7rem]">Create the space for your</h1>
        <h1 className="text-5xl sm:text-7xl md:text-[7rem]">thinking to take off.</h1>
        <p className="text-lg md:text-xl w-full md:w-[700px] mt-6 font-roboto">
        A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.
        </p>
        <button className="mt-24 px-8 py-2 text-[#40A34D] rounded-full text-xl md:text-2xl border-2 border-[#40A34D] font-roboto">
          Write on medium
        </button>
      </div>
    </div>
  );
};

export default SectionThree;
