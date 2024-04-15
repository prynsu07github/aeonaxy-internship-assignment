import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-5 flex justify-between border-2 border-b-black h-[12vh] md:h-auto relative">
      <div className="flex items-center">
        <img src="/medium-logo.png" alt="logo" className="h-4 md:h-8" />
      </div>
      <div className="flex md:hidden items-center" onClick={toggleMenu}>
      <RxHamburgerMenu size={25} />
      </div>
      <div className={`bg-[#f1f1f1] md:bg-transparent lg:gap-10 flex gap-5 p-5 md:p-0 items-start md:items-center font-roboto fixed md:relative left-0 right-0 top-0 h-screen md:h-auto w-screen md:w-auto flex-col md:flex-row ${isOpen ? "translate-x-full" : ""} md:translate-x-0 transition ease-in-out duration-500`}>
        <div className="inline md:hidden" onClick={toggleMenu}>
        <CgClose size={25} />
        </div>
        <Link>
          <p className="text-lg underline">our story</p>
        </Link>
        <Link>
          <p className="text-lg">Membership</p>
        </Link>
        <Link>
          <p className="text-lg">Write</p>
        </Link>
        <Link>
          <p className="text-lg">Sign in</p>
        </Link>
        <Link>
          <button className="bg-black px-8 py-2 text-white rounded-full text-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
