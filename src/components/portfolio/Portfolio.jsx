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
        title: "Ecommerce store",
        img: "./eShop.png",
        desc: "allinstore.pl, an online store is an ecommerce website or app where buyers can see a catalog of products or services and electronically purchase them. A typical representation of an online store is a brick-and-mortar retail business that also displays and sells its products on a website.",
        tools: ["./reactIcon.png", "./strapiIcon.png", "./scssIcon.png"],
        link: "https://allinstore.pl/"
    },
    {
        id: 3,
        title: "FoodOrder App",
        img: "./foodorderImage.png",
        desc: "FoodOrder app is a type of restaurant delivery/ takeout software that connects consumers with local restaurants , by providing a convenient way to order food that's delivered to their doorstep. Application also intended for smartphones.",
        tools: ["./nextjsImage.png",'./tailwindImg.png', "./postgreSQLImg.png", "./dockerImg.png"],
        link: "https://github.com/1dominik7/FoodOrderApp"
    },
    {
        id: 4,
        title: "Blog",
        img: "./blogImage.png",
        desc: "A blog presenting completed projects, with the opportunity to post new information from the IT world..",
        tools: ["./nextjsImage.png","./mongodbIcon.png"],
        link: "https://github.com/1dominik7/projects/tree/TodoApp/todolist"
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