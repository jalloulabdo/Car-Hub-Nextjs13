import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";


// variants 

const container = {
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const buttom = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};
const title = {
    hidden: { x: -80, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
            duration: 1,
        },
    },
    exit: {
        x: 30,
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};
const text = {
    hidden: { x: -80, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
            duration: 1.3,
        },
    },
    exit: {
        x: 30,
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};
const Shape = () => {
    return (
        <>
            <motion.div className="shape bg-[#2b59ff] relative py-20 px-5 "
                variants={container}
                initial="hidden"
                whileInView="show"
                exit="exit"
            >
                <Image
                    src="/shape-16.svg"
                    alt="loader"
                    className="absolute bottom-0 right-0 max-w-full w-full h-auto"
                    width={0}
                    height={0}
                ></Image>

                <div className=" px-5  my-auto content-center   relative ">
                    <div className="gap:2rem lg:flex md:grid md:grid sm:grid sm:gap-8 sm:grid-cols-1  lg:justify-between  lg:max-w-7xl   lg:items-center  lg:gap-x-8 ">
                        <div className=" w-full lg:w-2/4  pb-16 md:pb-0 lg:pb-0 xl:pb-0">
                            <motion.h2 className="text-4xl leading-10 text-white mb-4 " variants={title}>THE CHEAPEST CAR RENTAL IN MOROCCO We care what you drive!</motion.h2>
                            <motion.p className="text-white" variants={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.</motion.p>
                        </div>
                        <motion.div className="" variants={buttom}>
                            <Link href="/" className="ease-out duration-300 text-black bg-white py-3 px-7 rounded-full">Get Started Now</Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Shape;
