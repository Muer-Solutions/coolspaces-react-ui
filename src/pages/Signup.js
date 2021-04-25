import React, { useState } from 'react'
import PersonalDetails from '../components/registerForm/PersonalDetails'
import UserDetails from '../components/registerForm/UserDetails'
import {motion} from 'framer-motion'

const Signup = () => {

    const [step, setStep] = useState(0)
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: ''
    })

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = input => e => {
        setUser({...user, [input]: e.target.value})
    }

    const {firstName, lastName, email, gender, phoneNumber} = user
    const values = {firstName, lastName, email, gender, phoneNumber}

    switch (step) {
        case 0:
            return (
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}} 
                >
                    <UserDetails
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                    />
                </motion.div>
            )
        case 1: 
            return (
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}} 
                >
                    <PersonalDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        values={values}
                    />
                </motion.div>
            )
    
        default:
            break;
    }
}

export default Signup
