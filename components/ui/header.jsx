'use client';
import { Poppins, Inconsolata } from 'next/font/google';
import Link from 'next/link';
import { use, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import ModeToggle from '@/components/ui/mode-toggle';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-teko',
});

function Header() {
  const [Mobilenav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('nav');
      const fixednav = header.offsetTop;

      if (window.scrollY > fixednav - 10) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    // Add the navbar-fixed class on initial load
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full flex justify-center ">
        <nav className="fixed z-[9999] w-full transition-all duration-300 bg-gray-300 dark:bg-gray-900 font-Poppins dark:bg-dark  ">
          <div className={`mx-auto max-w-6xl px-8 max-lg:mx-auto max-lg:px-4`}>
            <div className="flex">
              <div className="flex justify-between w-full px-4">
                <div className="max-lg:item-start max-lg:mx-0">
                  <a href="/" className="flex items-center py-4">
                    <span className={` ${inconsolata.className} text-3xl font-bold text-dark dark:text-light`}>elins</span>
                  </a>
                </div>
                <div className={`font-Inconsolata space-x-2 hidden align-middle text-dark md:flex`}>
                  <a href="/#Day1" className="px-2 py-5 text-lg font-semibold dark:text-light  hover:text-gray-900">
                    Home
                  </a>
                  <a href="/#Day2" className="px-2 py-5 text-lg font-semibold dark:text-light hover:text-gray-900">
                    Coursework
                  </a>
                  <a href="/#Fakultas" className="px-2 py-5 text-lg font-semibold dark:text-light hover:text-gray-900">
                    Notes
                  </a>
                </div>
                <div className={`font-Inconsolata space-x-2 hidden align-middle text-dark md:flex`}>
                  <div className="px-2 py-5 text-lg font-semibold transition-all dark:text-light">
                    <ModeToggle />
                  </div>
                </div>
                <div id="mobile-menu" className="flex  items-center dark:text-light md:hidden">
                  <div className="px-4">
                    <ModeToggle />
                  </div>
                  <button
                    className="mobile-menu-button outline-none dark:text-light"
                    onClick={() => {
                      setMobileNav(!Mobilenav);
                    }}
                  >
                    <svg className="h-7 w-7 text-gray-80" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {Mobilenav && (
            <div className="">
              <div className="flex flex-col font-Inconsolata items-center justify-center ">
                <a href="/#Day1" className="px-2 py-4 text-lg font-semibold transition duration-300 dark:text-light hover:text-gray-900">
                  Home
                </a>
                <a href="/#Day2" className="px-2 py-4 text-lg font-semibold transition duration-300 dark:text-light hover:text-gray-900">
                  Coursework
                </a>
                <a href="/#Fakultas" className="px-2 py-4 text-lg font-semibold transition duration-300 dark:text-light hover:text-gray-900">
                  Notes
                </a>
              </div>
            </div>
          )}
        </nav>
        <div id="gapping" className="w-full h-16 bg-light dark:bg-dark"></div>
      </div>
    </>
  );
}

export default Header;
