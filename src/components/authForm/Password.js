import React, { useState } from 'react'
import { LoginCard, LoginWrapper, NavLogo, LoginFooter } from './authFormElement'

const Password = ({prevStep, handleChange, values}) => {

    const [errors, setErrors] = useState('');

    // const prev = e => {
    //     e.preventDefault()
    //     prevStep()
    // }

    const handleSubmit = e => {
        e.preventDefault()

        if (values.password === '') {
          setErrors('Password is required');
        } else {
          setErrors('')
          console.log(values)
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
  
            <h3>Welcome Back</h3>
            <p>Please enter your password to sign in</p>
  
            <input
              className={errors && "bg-red"}
              placeholder='Enter password'
              onChange={handleChange('password')}
              value={values.password}
              type="password"
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
                  left: '70px',
                }}
              >
                {errors}
              </p>
            )}

            <button type='submit' onClick={handleSubmit}>Sign in</button>
            {/* <button type='submit' onClick={prev}>Back</button> */}
            <span><a href="#">forgot password?</a></span>
          </LoginCard>
        </LoginWrapper>
        <LoginFooter>
          <p>@ 2020 Cool-space</p>
          <p>Privacy Policy | Terms of Use</p>
        </LoginFooter>
      </>
    )
}

export default Password
