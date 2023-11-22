"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton, CarDetails } from ".";
import { calculateCarRent } from "@/utils";
import { generateCarImageUrl } from "@/utils";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";



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
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);



  return (
    <motion.div key={make} className="car-card group"
      variants={item}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-30 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              height={20}
              width={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" height={20} width={20} alt="tire" />
            <p className="text-[14px]">{drive.toLocaleLowerCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" height={20} width={20} alt="steering wheel" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] dont-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default CarCard;
