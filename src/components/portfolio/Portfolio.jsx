import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MeowCase-Store",
    img: "./meow-Case.png",
    desc: "MeowCase is an e-commerce platform developed using Next.js with TypeScript, leveraging the Kind library for user authentication and Neon for database management (a PostgreSQL platform). The app allows users to design and create custom cases for their iPhones, featuring the ability to upload images and personalize their cases. MeowCase provides a seamless shopping experience with secure authentication, fast performance, and an intuitive interface that makes it easy for users to create, preview, and order their custom cases directly from the app.",
    tools: [
      "./nextjs.png",
      "./tsIcon.png",
      "./prismaIconmodyfi.png",
      "./tailwindImg.png",
    ],
    link: "https://meow-case-store-nextjs.vercel.app/",
  },
  {
    id: 2,
    title: "RealEstate Website",
    img: "./realestate.png",
    desc: "The real estate app is built using React.js for the frontend and Node.js on the backend, with MongoDB as the database, managed through Prisma. It allows users to buy, sell, or rent houses and apartments. Users can browse listings, post their own offers, and communicate directly with other users or professional real estate agents through a built-in messaging system. The app is optimized for fast, seamless interactions and provides an intuitive platform for real-time communication, whether you're searching for a home or managing your listings.",
    tools: [
      "./reactIcon.png",
      "./prismaIconmodyfi.png",
      "./nodeIcon.png",
      "./mongodbIcon.png",
      "./socketIo.png",
    ],
    link: "https://www.realestate-web.shop/",
  },
  {
    id: 3,
    title: "AkRacing-demo",
    img: "./chair-Store.png",
    desc: "AkRacing-DemoPage is an e-commerce platform built with Vue.js on the frontend, Node.js on the backend, and MongoDB for the database. It replicates the AKRacing store, offering a seamless experience for purchasing professional gaming and office chairs. The platform includes an admin panel that allows administrators to manage the store effectively, with features to add new products, edit existing ones, and oversee inventory. Users can easily browse chair models, view detailed product specs, and securely complete purchases. The admin panel ensures that product management and updates are simple and efficient.",
    tools: ["./vueLogo.png", "./nodeIcon.png", "./mongodbIcon.png"],
    link: "https://akracingpage-vue.onrender.com/",
  },
  {
    id: 4,
    title: "Podify",
    img: "./podify.png",
    desc: "Podify is a music streaming app developed with React Native and TypeScript on the frontend, and Node.js with MongoDB on the backend. The app allows users to listen to their favorite tracks, create and manage personalized playlists, and add songs to their favorites. Users can also upload their own music and share it with others, creating a community-driven platform for discovering new music. With features similar to Spotify, Podify offers a smooth, user-friendly experience, allowing you to enjoy and share music anytime, anywhere.",
    tools: [
      "./reactNativeImg.png",
      "./tsIcon.png",
      "./nodeIcon.png",
      "./mongodbIcon.png",
    ],
    link: "https://www.podify.shop/",
  },
  {
    id: 5,
    title: "Ecommerce App",
    img: "./amazonImg.png",
    desc: "The E-commerce app is an online shopping platform similar to Amazon, developed with React Native on the frontend and Node.js on the backend, with MongoDB for database management. It allows users to browse and purchase a wide variety of products across different categories. The app provides a smooth and user-friendly experience, enabling users to search for items, add them to their cart, and complete transactions securely. With a vast product selection and efficient order management, the app offers a comprehensive solution for shopping online from anywhere, anytime.",
    tools: [
      "./reactNativeImg.png",
      "./tailwindImg.png",
      "./nodeIcon.png",
      "./mongodbIcon.png",
    ],
    link: "https://github.com/1dominik7/AmazonApp-ReactNative",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleClick = (item) => {
    window.open(item, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="tools">
              <h3>Tools Used:</h3>
              <div className="icons">
                {item.tools.map((item, index) => (
                  <img className="icon" key={index} src={item} />
                ))}
              </div>
            </div>
            <button onClick={() => handleClick(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
