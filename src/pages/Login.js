import React, { useState } from 'react'
import AuthForm from '../components/authForm'
import {motion} from 'framer-motion'
import Password from '../components/authForm/Password'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [step, setStep] = useState(1)

    // method to handle going to the next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // method to handle going back one step
    const prevStep = () => {
        setStep(step - 1)
    }

    // method to handle changing of form fields
    const handleChange = input => e => {
        setUser({...user,[input]: e.target.value})
    }

    // destructure the values from state

    const {email, password} = user
    const values = {email, password}

   switch (step) {
       case 1:
           return (
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
            >
               <AuthForm 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
               />
            </motion.div>
           )
        case 2: 
            return (
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}} 
                >
                    <Password 
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

export default Login
