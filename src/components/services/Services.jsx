import { useRef } from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const variants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin: "-100px"} )

    const handleClick = () =>{
        window.location="/#Portfolio"

    }

  return (
    <motion.div 
        className='services' 
        variants={variants} 
        initial="initial" 
        ref={ref}
        animate="animate" 
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow 
            <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>Building brand awareness, distinguishing the brand from the competition through unique features that will attract the attention of a specific target group. Analyzing, researching the market and constantly listening to and responding to the needs of the community.</p>
                <button onClick={handleClick}>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Design</h2>
                <p>Designing websites and mobile applications with a visually attractive and easy-to-use interface. Paying special attention to the functioning of all elements on the website and the comfort of use. Creating projects primarily tailored to user requirements.</p>
                <button onClick={handleClick}>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Development</h2>
                <p>Building applications and websites using React, Nextjs, ReactNative, Nodejs. Creating concepts and new features, as well as software development. Keeping the code clean and understandable.</p>
                <button onClick={handleClick}>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services