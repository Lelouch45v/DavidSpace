"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";


const HeroContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            David R. Fajardo
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          and Software development, Ui and Ux Designer. Check out my projects and skills.
        </motion.p>

        <motion.button
          variants={slideInFromLeft(1)}
          onClick={toggleModal}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Click To know More!
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full h-full"
          onClick={toggleModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-lg shadow-lg text-center border border-[6px] border-[#8E53E9] max-w-full max-h-[80vh] sm:max-w-[82.0625rem] sm:max-h-[46.1875rem] flex flex-col relative"
            style={{ backgroundColor: '#010013' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Profile Image */}
              <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0">
                <img
                  src="/Profile.png"
                  alt="Profile"
                  className="w-full max-w-sm object-cover rounded-lg"
                />
              </div>

              <div className="flex-grow flex flex-col justify-start items-start p-4 bg-[#141825] rounded-lg shadow-lg">
                {/* Name at the Top */}
                <h1 className="text-4xl text-white font-bold mb-2">
                  David R. Fajardo
                </h1>

                {/* Title */}
                <p className="text-base text-gray-400 mb-6">
                  Full Stack Software Engineer
                </p>

               {/* About Me Section */}
                <h1 className="text-xl text-white font-bold mt-4">
                  About Me
                </h1>
                <p className="text-sm text-gray-400 mt-2">
                  I am a Full Stack Software Engineer with experience in website and software development, 
                  as well as UI and UX design. I am currently still studying but have a passion for creating 
                  systems that can make a positive impact on society. Always eager to learn and grow, I aim to 
                  contribute to meaningful projects that solve real-world challenges.
                </p>

                {/* Download Resume Button */}
                <div className="absolute bottom-10 flex justify-between w-full px-4">
                  {/* Download Resume (PDF) - Left */}
                  <a
                    href="/Resume_David.pdf"
                    download
                    className="py-2 px-6 bg-[#8E53E9] text-white rounded-lg text-center"
                  >
                    Download Resume (PDF)
                  </a>
                </div>

               
              </div>

            </div>
          </motion.div>
        </div>
      )}



    </motion.div>
  );
};

export default HeroContent;
