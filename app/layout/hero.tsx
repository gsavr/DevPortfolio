"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { NavBar } from "./nav-bar";
import Link from "next/link";

export const Hero: React.FC = () => {
  const [open, setOpen] = useState("closed");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset - starts when start of element meets top(start) of viewport - ends when end of element meets top(start) of viewport
    offset: ["start start", "end start"],
  });
  //add spring effect
  const scrollYspring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
    restDelta: 0.0001,
  });

  //checks scroll - at value 0 we want to be at 0%, at value 1, we want to be at 100%
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const navY = useTransform(scrollYspring, [0, 0.05], ["0%", "-200%"]);
  const boxesScale = useTransform(scrollYspring, [0, 1], ["100%", "0%"]);

  return (
    <>
      <div
        ref={ref}
        className="hero relative min-h-full w-screen overflow-hidden"
      >
        {/* background full image */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 bg-giodesk bg-cover bg-center"
        />
        {/* background w/o view */}
        <motion.div
          style={{ y: backgroundFrontY }}
          className="absolute inset-0 bg-giofront bg-cover bg-center "
        />
        {/* gradient for top of image - will not have parallax effect */}
        <div className="relative bottom-0 left-0 right-0 top-0 h-screen bg-gray-500/50 dark:from-gray-900/70  dark:to-gray-800/80">
          {/* navbar */}
          <motion.div
            style={{ y: navY }}
            className=" mx-auto  max-w-6xl px-6 pt-12"
          >
            <NavBar open={open} setOpen={setOpen} />
          </motion.div>
          {/* Welcome box */}
          <div
            className={`${
              open === "open" && "hidden"
            } container mx-auto flex h-[85vh] max-w-6xl flex-1 flex-col  items-center justify-center px-6 pb-12`}
          >
            {/* shrinking effect on scroll */}
            <motion.div
              style={{ scale: boxesScale }}
              className="group flex flex-1 flex-col items-center justify-center lg:flex-row lg:justify-between"
            >
              <motion.div
                initial={{ opacity: 0, x: "-35vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              >
                <Link
                  href="#about"
                  className="cursor-pointer"
                  aria-label="About me"
                >
                  <div
                    className={`-mt-20 max-w-2xl rounded border-2 bg-[#E0ECEF]/80 p-4 text-3xl uppercase text-primary shadow-2xl transition-all duration-200 hover:text-slate-400 dark:bg-[#63686A]/80  dark:hover:text-slate-500 md:m-16 md:mx-0 md:p-10 md:text-5xl md:leading-normal
                  `}
                  >
                    <p className="pb-3 text-2xl md:pb-6 md:text-5xl lg:pb-7">
                      Welcome {"</>"}
                    </p>
                    <p className="text-4xl text-primary  md:text-6xl ">
                      Giorgio Savron
                    </p>
                    <p>Full Stack Developer</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
