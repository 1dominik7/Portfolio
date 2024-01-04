import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Booking App",
        img: "./hotelbookingappImage.png",
        desc: "hotelbookingapp.shop is an online platform where hotels and other types of accommodations make their rooms available to travelling guests from all over the globe. The channel will also help to facilitate the resulting reservations.",
        tools: ["./reactIcon.png" , "./nodeIcon.png", "./scssIcon.png", "./mongodbIcon.png"],
        link: "https://hotelbookingapp.shop/"
    },
    {
        id: 2,
        title: "FoodOrder App",
        img: "./foodorderImage.png",
        desc: "FoodOrder app is a type of restaurant delivery/ takeout software that connects consumers with local restaurants , by providing a convenient way to order food that's delivered to their doorstep. Application also intended for smartphones.",
        tools: ["./nextjsImage.png",'./tailwindImg.png', "./postgreSQLImg.png", "./dockerImg.png"],
        link: "https://github.com/1dominik7/FoodOrderApp"
    },
    {
        id: 3,
        title: "Ecommerce App",
        img: "./amazonImg.png",
        desc: "An ecommerce app is a mobile application that allows users to browse and purchase products or services online. It includes features such as product listings, shopping cart functionality, payment processing, and order tracking. Users can conveniently shop and make purchases directly from their mobile devices, making it a popular choice for online shopping in today's digital age.",
        tools: ["./reactNativeImg.png",'./tailwindImg.png', "./nodeIcon.png", "./mongodbIcon.png"],
        link: "https://github.com/1dominik7/AmazonApp-ReactNative"
    },
    {
        id: 4,
        title: "MovieTicket App",
        img: "./movieImg.png",
        desc: "A movie ticket app is a convenient and user-friendly platform that allows users to browse and buy tickets for movies at their preferred theaters. It provides information about showtimes, seating availability, and upcoming releases, making it easy for users to plan their movie outings. With the option to choose seats and make online payments, the app streamlines the ticket purchasing process, saving time and effort. Overall, a movie ticket app enhances the movie-going experience by providing a hassle-free way to enjoy the latest films.",
        tools: ["./reactNativeImg.png"],
        link: "https://github.com/1dominik7/MovieApp-ReactNative"
    },
]

const Single = ({item}) => {
    
    const ref = useRef()
    
    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0,1], [-100,100])

    const handleClick = (item) =>{
        window.open(
            item,
            '_blank'
  );
    }

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="tools">
                        <h3>Tools Used:</h3>
                        <div className="icons">
                            {item.tools.map(item=>(
                                <img className="icon" key={item.id} src={item}/>
                            )) }
                        </div>
                    </div>
                    <button onClick={() => handleClick(item.link)}>See Demo</button>
                </motion.div>
            </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

     return(
        <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id}/>
        ))}
      </div>
     )
}

export default Portfolio