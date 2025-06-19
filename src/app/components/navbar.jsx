"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > lastScrollY.current);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
      <nav className={'bg-white text-white px-6 py-4 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ' + (isScrollingDown ? 'translate-y-[-100%]' : 'translate-y-0')}>
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold transform hover:scale-105 transition-all duration-300">
          <h1 className="font-bold underline text-black">Stiker SukiCau</h1>
        </Link>

        {/* Search Input */}
        <div className="hidden md:block w-1/3">
            <label htmlFor="Search">
            <span className="text-sm font-medium text-gray-700"> Search </span>

            <div className="relative">
                <input
                type="text"
                id="Search"
                placeholder="Stiker Apa Yang Kamu Cari? "
                className="mt-0.5 w-full p-2 border-1 border-gray-400 focus:border-gray-700 focus:outline-none text-black rounded pe-10 sm:text-sm"
                />

                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                <button
                    type="button"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                    </svg>
                </button>
                </span>
            </div>
            </label>
        </div>

        {/* Hamburger Button - only visible on small screens */}
        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu - hidden on mobile */}
        <ul className="hidden md:flex space-x-6 text-lg">
            <li><Link href="/" className="text-gray-700 transition-all transition-200 hover:text-black hover:underline ">
            <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Home
            </span>
            </Link></li>
            <li><Link href="/collection" className="text-gray-700 transition-all transition-200 hover:text-black">
                <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Collection
            </span>
            </Link></li>
            <li><Link href="/upload" className="text-gray-700 transition-all transition-200 hover:text-black">
                <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Upload
            </span>
            </Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div>
            <ul className="md:hidden mt-4 flex flex-col items-end gap-2 mr-1 justify-end text-lg">
            <li><Link onClick={toggleMenu} href="/" className="text-gray-700 transition-all transition-200 hover:text-black">
                <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Home
            </span>
            </Link></li>
            <li><Link onClick={toggleMenu} href="/collection" className="text-gray-700 transition-all transition-200 hover:text-black">
                <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Collection
            </span>
            </Link></li>
            <li><Link onClick={toggleMenu} href="/upload" className="text-gray-700 transition-all transition-200 hover:text-black">
                <span className="relative inline-block text-gray-700 hover:text-black transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
                hover:after:w-full after:transition-all after:duration-300">
                Upload
            </span>
            </Link></li>
            </ul>
            
            <div className="md:hidden block w-full">
                <label htmlFor="Search">
                <span className="text-sm font-medium text-gray-700"> Search </span>

                <div className="relative">
                    <input
                    type="text"
                    id="Search"
                    placeholder="Stiker Apa Yang Kamu Cari? "
                    className="mt-0.5 w-full p-2 border-1 border-gray-400 focus:border-gray-700 focus:outline-none text-black rounded pe-10 sm:text-sm"
                    />

                    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                    <button
                        type="button"
                        aria-label="Submit"
                        className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                        </svg>
                    </button>
                    </span>
                </div>
                </label>
            </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar;