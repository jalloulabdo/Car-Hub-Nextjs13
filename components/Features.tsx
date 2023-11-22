import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// variants 

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
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


const Features = () => {


  
  return (
    <div className="feature mt-16 padding-x">
      <motion.div className="container lg:flex lg:justify-between gap-2  md:justify-center sm:grid "
        variants={container}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <motion.div className="flex gap-5 w-full" variants={item}>
          <div className="rounded-full bg-pink-500 shrink-0 w-20 h-20 flex  justify-center items-center">
            <Image
              src="/icon-01.svg"
              alt="loader"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="">
            <h4 className="text-4xl text-blue-950 md:text-2xl  sm:text-lg">24/7 Support</h4>
            <p>
              Need assistance with your car rental at any time? Our 24/7 Support is here to help, ensuring a smooth and worry-free experience.</p>
          </div>
        </motion.div>
        <motion.div className="flex gap-5 w-full " variants={item}>
          <div className="rounded-full bg-green-500 shrink-0 w-20 h-20 flex  justify-center items-center">
            <Image
              src="/icon-02.svg"
              alt="loader"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="">
            <h4 className="text-4xl text-blue-950 md:text-2xl sm:text-lg">Take Ownership</h4>
            <p>Empower yourself—Take ownership of your journey. Seize control, make decisions, and shape your path with confidence and determination.</p>
          </div>
        </motion.div>
        <motion.div className="flex gap-5 w-full " variants={item}>
          <div className="rounded-full bg-amber-500 shrink-0 w-20 h-20 flex  justify-center items-center">
            <Image
              src="/icon-03.svg"
              alt="loader"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="lg:w-full md:w-full">
            <h4 className="text-4xl text-blue-950 md:text-2xl sm:text-lg">Team Work</h4>
            <p>Teamwork fuels success. Together, we achieve more than we can alone. Embrace collaboration, harness collective strengths, and watch as we triumph as one cohesive team.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
