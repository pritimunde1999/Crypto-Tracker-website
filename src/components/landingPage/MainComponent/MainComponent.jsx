import React from 'react'
import "./MainComponent.css"
import Button from '../../common/Button/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { RWebShare } from "react-web-share";

const MainComponent = () => {
  return (
    <div className='main-comp'>
        <div className='left-comp'>
           <motion.h1 
           className='track-crypto-heading'
           initial={{opacity:0, y:50}}
           animate={{opacity:1, y:0}}
           transition={{duration:0.5}}
           >
            Track Crypto
           </motion.h1>
           <motion.h1 className='real-time-heading'
           initial={{opacity:0, y:50}}
           animate={{opacity:1, y:0}}
           transition={{duration:0.5, delay:0.5}}
           >
            Real Time.
            </motion.h1>
           <motion.p className='info'
           initial={{opacity:0, y:50}}
           animate={{opacity:1, y:0}}
           transition={{duration:0.5, delay:1}}
           >
            Track crypto through a public api in real time.Visit the dashboard to do so!
            </motion.p>
           <motion.div 
           className='buttons'
           initial={{opacity:0, x:50}}
           animate={{opacity:1, x:0}}
           transition={{duration:0.5, delay:1.5}}
           >
           <NavLink to='/dashboard'>
              <Button text="Dashboard"/>
           </NavLink>
           <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
           </motion.div>
        </div>
        <div className='phone'>
           <motion.img 
           src={iphone} 
           className='iphone'
           initial={{y:-10}}
           animate={{y:10}}
           transition={{
            type:'smooth',
            repeatType:'mirror',
            duration:2,
            repeat:Infinity

           }}
           />
           <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default MainComponent