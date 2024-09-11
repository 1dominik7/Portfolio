import "./hero.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticleImage from "../particles/ParticleImage";
import { useState } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleClick = (item) => {
    window.location = item;
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DOMINIK WICEK</motion.h2>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Web Developer",
              1000,
              "Mobile Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => handleClick("/#Portfolio")}
            >
              Explore my work
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => handleClick("/#Contact")}
              className="contactButton"
            >
              {" "}
              <div className="emoji">🤙</div> Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="particle-container">
        <ParticleImage path="/stars.png"/>
      </div>
      <div className="imageContainer">
        <img src="/profile.png" alt="" className="image" />
      </div>
    </div>
  );
};

export default Hero;
