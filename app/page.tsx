"use client";

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore, Features, Shape, ContactForm } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { motion, Variants } from "framer-motion";


const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const title = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const text = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const search = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      easing: 'cubic-bezier(0.6, 0.01, 0.88, 0.99)',
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const card = {
  show: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
  }
};
export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });


      setAllCars(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [limit, model, fuel, manufacturer, year]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <motion.div className="mt-12 padding-x padding-y maw-with bg-slate-50" id="discover"
        variants={container}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <div className="home__text-container">
          <motion.h1 className="text-4xl font-extrabold" variants={title}> Car Catalogue</motion.h1>
          <motion.p variants={text}>Explore the cars you might like </motion.p>
        </div>
        <motion.div className="home__filters" variants={container}
            initial="hidden"
            whileInView="show"
            exit="exit">
          <SearchBar setManufacturer={setManufacturer}   setModel={setModel} variants={search} />
          <motion.div className="home__filter-container"
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="exit">
            <CustomFilter  title="fuel" options={fuels} setFilter={setFuel}  variants={search} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
              variants={search}
            />
          </motion.div>
        </motion.div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper" 
           
            >
              {allCars?.map((car, index) => (
                <CarCard  key={index} car={car}  />
              ))
              }
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                ></Image>
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </motion.div>
      <Shape />
      <ContactForm />
    </main>
  );
}
