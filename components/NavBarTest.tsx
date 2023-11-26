"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from "next/navigation"


const NavbarTest = () => {
    const [navbar, setNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user } = useUser();
    const router = useRouter();
    const path = usePathname();


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
        <div>
            <nav className={`w-full dark:bg-gray-900 fixed lg:bg-transparent  md:bg-transparent  top-0 left-0 right-0 z-10 ${navbar ? '' : ' relative'}`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="/" className="flex items-center">
                                <Image
                                    src="/logo.svg"
                                    alt="Car Hub Logo "
                                    width={118}
                                    height={18}
                                    className="object-contain"
                                />
                            </a>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z">
                                            </path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${navbar ? 'lg:bg-transparent md:bg-transparent bg-primary-blue-300  rounded ' : ''
                        }`}>
                        <div
                            className={`flex-1 justify-self-center pt-24 md:pt-0 lg:pt-0 xl:pt-0 mt-8 pb-32 md:block md:pb-0 md:mt-0 ${navbar ? 'max-h-max p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="max-h-max md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0   " onClick={() => setNavbar(false)}>
                                    <motion.a
                                        href="/"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push("/");
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        className={`${path === '/' ? 'text-blue-900' : ''} block  py-1 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${navbar ? 'text-white lg:text-gray-900 hover:bg-gray-100 md:text-gray-900 hover:bg-gray-100' : ' text-gray-900 hover:bg-gray-100'
                                            }`}
                                    >
                                        Home
                                    </motion.a>
                                </li>
                                <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  " onClick={() => setNavbar(false)}>
                                    <motion.a
                                        href="/aboutUs"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push("/aboutUs");
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        className={`${path === '/aboutUs' ? 'text-blue-900' : ''} block  py-1 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${navbar ? 'text-white lg:text-gray-900 hover:bg-gray-100 md:text-gray-900 hover:bg-gray-100' : ' text-gray-900 hover:bg-gray-100'
                                            }`}
                                    >
                                        About Us
                                    </motion.a>
                                </li>
                                {!user && (
                                    <>
                                        <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-purple-600 md:hover:bg-transparent" onClick={() => setNavbar(false)}>
                                            <motion.a
                                                href="/sign-in"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.push("/sign-in");
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                className={`${path === '/sign-in' ? 'text-blue-900' : ''} block  py-1 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${navbar ? 'text-white lg:text-gray-900 hover:bg-gray-100 md:text-gray-900 hover:bg-gray-100' : ' text-gray-900 hover:bg-gray-100'
                                                    }`}
                                            >
                                                Sign In
                                            </motion.a>
                                        </li>
                                        <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-purple-600 md:hover:bg-transparent" onClick={() => setNavbar(false)}>
                                            <motion.a
                                                href="/sign-up"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.push("/sign-up");
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                className={`${path === '/sign-up' ? 'text-blue-900' : ''} block  py-1 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${navbar ? 'text-white lg:text-gray-900 hover:bg-gray-100 md:text-gray-900 hover:bg-gray-100' : ' text-gray-900 hover:bg-gray-100'
                                                    }`}
                                            >
                                                Sign Up
                                            </motion.a>
                                        </li>
                                    </>
                                )}
                                {user && (
                                    <>
                                        <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-purple-600 md:hover:bg-transparent" onClick={() => setNavbar(false)}>
                                            <motion.a
                                                href="/profile"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.push("/profile");
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                className={`${path === '/profile' ? 'text-blue-900' : ''} block  py-1 px-3 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${navbar ? 'text-white' : ' text-gray-900 hover:bg-gray-100'
                                                    }`}
                                            >
                                                Profile
                                            </motion.a>
                                        </li>
                                        <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-purple-600 md:hover:bg-transparent" onClick={() => setNavbar(false)}>

                                            <UserButton afterSignOutUrl="/" />

                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarTest;