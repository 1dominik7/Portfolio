import Sidebar from '../sidebar/Sidebar'
import './navbar..scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span
              initial={{opacity: 0, scale:0.5}}
              animate={{opacity: 1, scale:1}}
              transition={{duration: 0.5}}
            >
              Dominik Wicek
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/dominik.wicek.7" target='_blank'><img src="/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/dwicek/" target='_blank'><img src="/linkedIn.png" alt="" /></a>
                <a href="https://github.com/1dominik7" target='_blank'><img src="/github.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar