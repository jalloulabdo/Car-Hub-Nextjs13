"use client";

import Image from "next/image";
import { CustomButton } from ".";
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion";

const Hero = () => {

  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {

    handleScroll()
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setScrollPosition(true);
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <motion.h1 className="hero__title"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 3.0 }}
        >
          Finf, Book, or rent a car -- quickly and easily.
        </motion.h1>
        <motion.p className="hero__subtitle"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 4.2 }}
        >
          Streamline your car rental experience with our effortless booking
          process.{" "}
        </motion.p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div className="hero__image" 
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 2.2 }}>
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>
        <div className={`hero__image-overlay ${scrolled ? 'absolute' : ''} ${scrollPosition ? 'fixed' : ''}`} />
      </div>
    </div>
  );
};

export default Hero;
