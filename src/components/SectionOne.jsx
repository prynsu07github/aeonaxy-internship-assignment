/* eslint-disable react/no-unescaped-entities */
const SectionOne = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center py-16 md:py-32 px-5 xl:px-0 border-2 border-b-black h-[88vh] md:h-auto">
        <h1 className="text-6xl sm:text-7xl md:text-[7rem] font-serif">
          Every idea needs a <span className="font-bold">Medium.</span>
        </h1>
      </div >
      <div className="grid  lg:grid-cols-2 border-2 border-b-black font-roboto">
        <div className="px-5 md:px-16 xl:px-32 py-5 md:py-12 border-b-2 lg:border-r-2 lg:border-b-0 border-black">
          <p className="mb-10 text-lg md:text-xl">
          The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We're an open platform where over 100 million readers come to find insightful and dynamic thinking, Hers, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. purpose is to spread these ideas and deepen understanding of the world.
          </p>
          <p className="text-lg">
          We're creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It's an environment that's open to everyone but promotes substance and authenticity. And it's where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we're building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/Image1.png" alt="Globe" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
