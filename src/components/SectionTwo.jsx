/* eslint-disable react/no-unescaped-entities */
import UsersList from "./UsersList";

const SectionTwo = () => {
  return (
    <div className="bg-[rgb(254,209,183)] flex flex-col items-center pt-16 md:pt-32 pb-16 px-5 text-center overflow-hidden">
      <h1 className="text-5xl sm:text-7xl md:text-[7rem]">A living network of</h1>
      <h1 className="text-5xl sm:text-7xl md:text-[7rem]">curios minds.</h1>
      <p className="text-lg md:text-xl w-full md:w-[700px] mt-6 font-roboto">
        Anyone can write on Medium. Thought-leaders, journalists, experts, and
        individuals with unique perspectives share their thinking here. You'll
        find pieces by independent writers from around the globe, stories we f
        feature and leading authors, and smart takes on our own suite of blogs
        and publications.
      </p>
      <UsersList />
    </div>
  );
};

export default SectionTwo;
