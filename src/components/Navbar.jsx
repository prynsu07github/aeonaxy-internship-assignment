import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars , faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-5 flex justify-between border-2 border-b-black h-[12vh] md:h-auto relative">
      <div className="flex items-center">
        <Link to={'/'}>
        <img src="/medium-logo.png" alt="logo" className="h-4 md:h-8" />
        </Link>
      </div>
      <div className="flex md:hidden items-center" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg"/>
      </div>
      <div className={`bg-[#fffafa] md:bg-transparent lg:gap-10 flex gap-5 p-5 md:p-0 items-start md:items-center font-roboto fixed md:relative left-0 right-0 top-0 h-screen md:h-auto w-screen md:w-auto flex-col md:flex-row ${isOpen ? "translate-x-full" : ""} md:translate-x-0 transition ease-in-out duration-500`}>
        <div className="inline md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faXmark} size="lg"/>
        </div>
        <ul className="flex gap-5 flex-col md:flex-row">
        <Link>
         <li>
         <p className="text-lg underline">our story</p>
         </li>
        </Link>
        <Link>
          <li>
          <p className="text-lg">Membership</p>
          </li>
        </Link>
        <Link>
          <li>
          <p className="text-lg">Write</p>
          </li>
        </Link>
        <Link>
          <li>
          <p className="text-lg">Sign in</p>
          </li>
        </Link>
        </ul>
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
