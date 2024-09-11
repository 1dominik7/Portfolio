import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MeowCase-Store",
    img: "./meow-Case.png",
    desc: "Create custom cases for your iPhone with our app! Easily upload your favorite photos, customize the design, and preview it in real-time. Personalize your case with text, colors, and patterns, and have it printed and delivered right to your door. Protect your phone in style!",
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
    title: "Podify",
    img: "./podify.png",
    desc: "Podify is a mobile application that allows you to listen to your favorite music. Discover your new favorite tracks and dive into a world of endless music with the Spotify app. Whether you're into chart-toppers or indie gems, we've got you covered. With personalized playlists, curated recommendations, and a vast library of songs, albums, and podcasts, there's something for every mood and moment. Plus, enjoy seamless integration across all your devices, so your music follows you wherever you go.",
    tools: [
      "./reactNativeImg.png",
      "./tsIcon.png",
      "./nodeIcon.png",
      "./mongodbIcon.png",
    ],
    link: "https://www.podify.shop/",
  },
  {
    id: 3,
    title: "AkRacing-demo",
    img: "./chair-Store.png",
    desc: "App is a full-featured eCommerce copy of AKRacing platform specializing in high-quality ergonomic chairs for gamers and professionals. It offers a seamless shopping experience where users can explore a wide range of chairs, filter by style, comfort level, or price, and view product details through rich media like images and 3D models.The app includes an admin panel for easy management, allowing admins to add new products, track inventory, manage orders, and view customer insights. Built for convenience, it streamlines the purchasing process while giving administrators full control over the store's operations in real-time.",
    tools: [
      "./vueLogo.png",
      "./nodeIcon.png",
      "./mongodbIcon.png",
    ],
    link: "https://akracingpage-vue.onrender.com/",
  },
  {
    id: 4,
    title: "RealEstate Website",
    img: "./realestate.png",
    desc: "Discover your dream home with our intuitive real estate app. Browse thousands of listings, from cozy apartments to luxurious estates, with ease. Our user-friendly interface allows you to filter by location, price, and amenities, ensuring you find the perfect property. With detailed property descriptions, HD photos, and virtual tours, you can explore homes from the comfort of your couch. Plus, stay updated on market trends and receive personalized recommendations tailored to your preferences. Whether you're buying, selling, or renting, our app streamlines the process, making your real estate journey seamless and stress-free.",
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
    id: 5,
    title: "Ecommerce App",
    img: "./amazonImg.png",
    desc: "An ecommerce app is a mobile application that allows users to browse and purchase products or services online. It includes features such as product listings, shopping cart functionality, payment processing, and order tracking. Users can conveniently shop and make purchases directly from their mobile devices, making it a popular choice for online shopping in today's digital age. App for IOS and Android.",
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
