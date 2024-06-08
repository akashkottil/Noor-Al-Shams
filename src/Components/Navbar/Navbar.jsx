import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo/logo.png'
import { Link, Element, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=' flex justify-center'>
      <header className="p-4 z-20 fixed bg-white  rounded-b-3xl rounded-t-3xl mt-8 w-4/5 dark:text-gray-800">
        <div className=" flex justify-between items-center h-16 mx-auto -m-2 ">
          <div className=' flex flex-col items-center'>
            <img src={logo} className='  h-10  w-10 ' alt="" />
            <h1 className=' text-base font-bold flex items-center pl-3 text-green-800'>Noor Al Shams</h1>
          </div>
          <ul className={`items-stretch space-x-3 space-y-1 pt-10 md:pt-0 md:flex ${isDropdownOpen ? 'block bg-white rounded-2xl pt-0 mt-60 py-5 ' : 'hidden'}`}>
            <Link
              activeClass="active" // Optional: Add a class for active link styling
              to="home"
              spy={true} // Enables active link highlighting
              smooth={true} // Enables smooth scrolling
              offset={-50} // Optional: Adjust scroll offset for header clearance
            >
              <li className=" text-base flex items-center px-4 md:pt-1 pt-1 -mb-1 font-bold hover:text-blue-800 hover:cursor-pointer">
                HOME
              </li>
            </Link>
            <Link
              activeClass="active" // Optional: Add a class for active link styling
              to="about"
              spy={true} // Enables active link highlighting
              smooth={true} // Enables smooth scrolling
              offset={-50} // Optional: Adjust scroll offset for header clearance
            >
              <li className="text-base flex items-center px-4 -mb-1 font-bold hover:text-blue-800 hover:cursor-pointer">
                ABOUT US
              </li>
            </Link>
            
            <Link
              activeClass="active" // Optional: Add a class for active link styling
              to="service"
              spy={true} // Enables active link highlighting
              smooth={true} // Enables smooth scrolling
              offset={-50} // Optional: Adjust scroll offset for header clearance
            >
              <li className="text-base flex items-center px-4 -mb-1 font-bold hover:text-blue-800 hover:cursor-pointer">
                SERVICE
              </li>
            </Link>
            <Link
              activeClass="active" // Optional: Add a class for active link styling
              to="products"
              spy={true} // Enables active link highlighting
              smooth={true} // Enables smooth scrolling
              offset={-50} // Optional: Adjust scroll offset for header clearance
            >
              <li className="text-base flex items-center px-4 -mb-1 font-bold achover:text-blue-800 hover:cursor-pointer">
                PRODUCTS
              </li>
            </Link>
            <Link
              activeClass="active" // Optional: Add a class for active link styling
              to="contact"
              spy={true} // Enables active link highlighting
              smooth={true} // Enables smooth scrolling
              offset={-50} // Optional: Adjust scroll offset for header clearance
            >
              <li className="text-base flex items-center px-4 -mb-1 font-bold achover:text-blue-800 hover:cursor-pointer">
                CONTACT
              </li>
            </Link>
          </ul>
          <button className="flex justify-end p-4 md:hidden" onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
