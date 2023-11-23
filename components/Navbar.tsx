
"use client"


import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { CustomButton } from ".";
import { UserButton, useUser } from '@clerk/nextjs'
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();
  const path = usePathname();
  const router = useRouter()
  const [isToggled, setToggle] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (user === undefined) {
    return null;
  }
  return (


    <nav className={`w-full z-50 border-gray-200 dark:bg-gray-900 top-0 bg-transparent relative z-10 ${scrolled ? '' : ''} `} >
      <div className={`max-w-screen-xl bg-transparent  flex flex-wrap items-center justify-between mx-auto p-4`}>
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo "
            width={118}
            height={18}
            className="object-contain"
          />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setToggle(!isToggled)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
    
        <div className={`  w-full md:block md:w-auto ${
                  isToggled ? 'p-12 md:p-0 block' : 'hidden'
                }`} id="navbar-default">
          <ul className="h-screen md:h-auto font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
              whileHover={{ scale: 1.1 }}
              className={`${path === '/' ? 'text-blue-900' : ''} block  py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
            >
              Home
            </motion.a>
            <motion.a
              href="/aboutUs"
              onClick={(e) => {
                e.preventDefault();
                router.push("/aboutUs");
              }}
              whileHover={{ scale: 1.1 }}
              className={`${path === '/aboutUs' ? 'text-blue-900' : ''} block  py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}

            >
              About Us
            </motion.a>

            {!user && (
              <>
                <motion.a
                  href="/sign-in"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/sign-in");
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`${path === '/sign-in' ? 'text-blue-900' : ''} block  py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Sign In
                </motion.a>
                <motion.a
                  href="/sign-up"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/sign-up");
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`${path === '/sign-up' ? 'text-blue-900' : ''} block  py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Sign Up
                </motion.a>
              </>
            )

            }

            {user && (
              <>
                <motion.a
                  href="/profile"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/profile");
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`${path === '/profile' ? 'text-blue-900' : ''} block  py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Profile
                </motion.a>

                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
