import React, { useState } from 'react'
import { LoginCard, LoginFooter, LoginWrapper, NavLogo } from './RegisterElements'

const UserDetails = ({handleChange, nextStep, values}) => {

    const [errors, setErrors] = useState('')

    const next = e => {
        e.preventDefault()

        if(values.email === "") {
          setErrors("Email is required")
        } else if (!values.email.includes('.') && !values.email.includes('@')) {
          setErrors("Email is invalid!")
        } else {
          setErrors("")
          nextStep()
        }
    }


    return (
        <>
        <LoginWrapper>
          <LoginCard>
            <NavLogo to='/'>
              C
              <span style={{ fontFamily: 'Russ One', color: '#C1121F' }}>oo</span>
              l-S<span style={{ fontFamily: 'Ruthie' }}>p</span>ace
            </NavLogo>
  
            <h3>Lets get started</h3>
            <p>Enter your email address to continue.</p>
  
            <input
              className={errors && "bg-red"}
              type="email"
              placeholder='Email address'
              onChange={handleChange('email')}
              value={values.email}
            />
            {errors && (
              <p
                style={{
                  color: 'red',
                  margin: '0',
                  marginTop: '.3rem',
                  marginBottom: '.5rem',
                  fontSize: '.7rem',
                  position: 'relative',
                  left: '75px',
                }}
              >
                {errors}
              </p>
            )}


            <button type='submit' onClick={next}>Next</button>
            <span>Already have an account? <a href="/login">sign in</a></span>
          </LoginCard>
        </LoginWrapper>
        <LoginFooter>
          <p>@ 2020 Cool-space</p>
          <p>Privacy Policy | Terms of Use</p>
        </LoginFooter>
      </>
    )
}

export default UserDetails
