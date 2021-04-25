import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CircleLoader from 'react-spinners/CircleLoader'
import {motion} from 'framer-motion'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const triggerLoader = () => {
        setTimeout(() => {
            setLoading(!loading)
          }, 3000)
    }
    

    useEffect(() => {
      triggerLoader()
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps


    const loader =  (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
            <CircleLoader loading={loading} size={80} color={`#003049`}/>
        </div>
    )

    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}} 
        >
            {loading ? loader : (
                <>
                    <Sidebar isOpen={isOpen} toggle={toggle}/>
                    <Navbar toggle={toggle}/>
                    <HeroSection />
                </>
            )}
        </motion.div>
    )
}

export default Home
