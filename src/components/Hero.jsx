import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { front } from "../assets/index";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const handleTwitterClick = () => {
  window.open("https://twitter.com/kay_yung1", "_blank");
};
const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/kenechukwu-agagwu/", "_blank");
};
const handleMediumClick = () => {
  window.open("https://medium.com/@kayyungx", "_blank");
};
const handleAngelistClick = () => {
  window.open("https://wellfound.com/u/kene-agagwu", "_blank");
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[135px] md:top-[100px] max-w-7xl mx-auto flex flex-row gap-5 items-start justify-center mt-[-2rem] md:mt-6`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-0`}>
            Hi, I'm <span className="text-[#915eff]">Kene</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100`}>
            I'm a fullstack developer and I develop beautiful user interfaces
            and fullstack web applications.
          </p>
        </div>
      </div>
      <div className="text-white text-[rem] w-full md:w-[45%] lg:w-[30%] flex justify-center md:justify-between  gap-6 items-center absolute top-[18rem] md:top-[22rem] flex-col md:flex-row">
        <div className="w-[8rem] h-[8rem] rounded-full relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FC466B] to-purple-800 rounded-full"></div>
          <div className="relative z-10 bg-gray-700 p-4 text-white text-center h-[7.5rem] w-[7.5rem] rounded-full flex items-center justify-center">
            <img src={front} alt="avatar" />
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl text-white">Lets Connect</h3>
          <div className="flex gap-3 mt-5 items-center justify-center">
            <TwitterIcon
              onClick={handleTwitterClick}
              sx={{
                cursor: "pointer",
              }}
            />
            <LinkedInIcon
              sx={{ cursor: "pointer" }}
              onClick={handleLinkedInClick}
            />
            <img
              src="https://img.icons8.com/ios-filled/50/null/medium-logo.png"
              className="bg-white w-5 h-5 cursor-pointer"
              onClick={handleMediumClick}
            />
            <img
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/null/external-angelist-website-for-startups-and-job-seekers-looking-to-work-at-startups-logo-bold-tal-revivo.png"
              className="bg-white w-5 h-5 cursor-pointer"
              onClick={handleAngelistClick}
            />
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute sm:bottom-[-1rem] bottom-[-1rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
