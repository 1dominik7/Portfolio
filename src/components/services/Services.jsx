import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const experience = {
  title: "My experience",
  description:
    "Commercial experience up until July 2024 as IT specialist. In this role, I successfully applied my skills in real-world projects, contributing to both frontend and backend development. My hands-on experience has solidified my problem-solving abilities and reinforced my passion for continuous learning and growth in the tech industry.",
  items: [
    {
      company: "Weldon",
      position: "IT specialist",
      duration: "07.2024 - Present",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "I began my programming education in 2021 by immersing myself in online courses and tutorials. Through dedicated self-study, I gained a strong foundation in both frontend and backend technologies, continually expanding my knowledge and skills to stay current with industry trends. My hands-on approach to learning has equipped me with practical experience and a deep understanding of full-stack development.",
  items: [
    {
      institution: "studiuje.it",
      degree: "Basic of web development",
      duration: "2022",
    },
    {
      institution: "studiuje.it",
      degree: "Intermediate frontend",
      duration: "2022",
    },
    {
      institution: "studiuje.it",
      degree: "JavaScript from scratch",
      duration: "2022",
    },
    {
      institution: "udemy",
      degree: "Many completed courses on udemy",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Skilled in React, Vue, Node.js, React Native, Next.js, Nuxt.js. I bring a comprehensive full-stack expertise to both web and mobile development.",
  skillList: [
    {
      icon: "/reactIcon.png",
      name: "React",
    },
    {
      icon: "/reactNativeImg.png",
      name: "React Native",
    },
    {
      icon: "/nextjs.png",
      name: "Next.js",
    },
    {
      icon: "/vueLogo.png",
      name: "Vue",
    },
    {
      icon: "/nuxtLogo.png",
      name: "Nuxt.js",
    },
    {
      icon: "/nodeIcon.png",
      name: "Node.js",
    },
    {
      icon: "/sqlIcon.png",
      name: "Sql",
    },
    {
      icon: "/figmaIcon.jpg",
      name: "Figma",
    },
  ],
};

const aboutMe = {
  title: "About me",
  description:
    "I'm a hardworking and ambitious person, always driven by motivation to achieve my goals. In my spare time, I love staying active by doing sports, and I enjoy playing the guitar to unwind and express my creativity.",
  info: [
    {
      fileName: "Name",
      fieldValue: "Dominik Wicek",
    },
    {
      fileName: "Phone",
      fieldValue: "(+48) 665 394 902",
    },
    {
      fileName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fileName: "Nationality",
      fieldValue: "Polish",
    },
    {
      fileName: "Email",
      fieldValue: "dominik.wicek1@gmail.com",
    },
    {
      fileName: "Freelance",
      fieldValue: "Available",
    },
    {
      fileName: "Languages",
      fieldValue: "Polish, English",
    },
  ],
};

const Services = () => {
  const ref = useRef();
  const [selected, setSelected] = useState("experience");

  const isInView = useInView(ref, { margin: "-100px" });

  const handleClick = () => {
    window.location = "/#Portfolio";
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="leftSide" variants={variants}>
        <h1>Why hire me?</h1>
        <span>
          I'm a self-taught full-stack programmer who began their coding journey
          in 2021, driven by a passion for technology and a strong ability to
          learn independently. Equipped with up-to-date knowledge and
          problem-solving skills, they offer versatility in both frontend and
          backend development, bringing a fresh perspective and continuous
          learning mindset to any team.
        </span>
        <div className="selectContainer">
          <div
            className={`box ${selected === "experience" ? "selected" : ""}`}
            onClick={() => setSelected("experience")}
          >
            Experience
          </div>
          <div
            className={`box ${selected === "education" ? "selected" : ""}`}
            onClick={() => setSelected("education")}
          >
            Education
          </div>
          <div
            className={`box ${selected === "skills" ? "selected" : ""}`}
            onClick={() => setSelected("skills")}
          >
            Skills
          </div>
          <div
            className={`box ${selected === "aboutMe" ? "selected" : ""}`}
            onClick={() => setSelected("aboutMe")}
          >
            About me
          </div>
        </div>
      </motion.div>
      <motion.div className="rightSide" variants={variants}>
        {selected === "experience" && (
          <div className="rightSideDesc">
            <h2>{experience.title}</h2>
            <span className="descSpan">{experience.description}</span>
            <div className="expSkillsBoxes">
              {experience.items.map((item, index) => (
                <div className="expSkillsBox" key={index}>
                  <span className="boxSpan purple">{item.duration}</span>
                  <span className="boxMid">{item.position}</span>
                  <span className="boxBottom">
                    <b>•</b> {item.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        {selected === "education" && (
          <div className="rightSideDesc">
            <h2>{education.title}</h2>
            <span className="descSpan">{education.description}</span>
            <div className="educationBoxes">
              {education.items.map((item, index) => (
                <div className="educationBox" key={index}>
                  <span className="boxSpan purple">{item.duration}</span>
                  <span className="boxMid">{item.degree}</span>
                  <span className="boxBottom">
                    <b>•</b> {item.institution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        {selected === "skills" && (
          <div className="rightSideDesc">
            <h2>{skills.title}</h2>
            <span className="descSpan">{skills.description}</span>
            <div className="skillsBoxes">
              {skills.skillList.map((item, index) => (
                <div className="skillsBox" key={index}>
                  <img src={item.icon} alt={item.name} />
                  <span className="boxSpan">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {selected === "aboutMe" && (
          <div className="rightSideDesc">
            <h2>{aboutMe.title}</h2>
            <span className="descSpan">{aboutMe.description}</span>
            <div className="infoBoxes">
              {aboutMe.info.map((item, index) => (
                <div className="infoBox" key={index}>
                  <span className="infoSpan dark">{item.fileName}</span>
                  <span className="infoSpan">{item.fieldValue}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
