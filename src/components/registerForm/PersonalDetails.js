import React, { useState } from 'react'
import { LoginCard, LoginFooter, LoginWrapper, NavLogo } from './RegisterElements'

const PersonalDetails = ({nextStep, prevStep, handleChange, values}) => {

    const [errors, setErrors] = useState({})

    const prev = e => {
        e.preventDefault()
        prevStep()
    }

    const handleSubmit = e => {
        e.preventDefault()
        let errorz = {}

        if (values.firstName === "") {
          errorz.firstName = "First Name is required"
        } 
         
        if (values.lastName === "") {
          errorz.lastName = "Last Name is required"
        } 
        
        if (values.phoneNumber === "") {
          errorz.phoneNumber = "Phone number is required "
        }
        
        if (values.gender === "") {
          errorz.gender = "Gender is required"
        } else {

          console.log(values)
        }

        setErrors(errorz)

    }

    console.log(errors)

    return (
        <>
        <LoginWrapper>
          <LoginCard>
            <NavLogo to='/'>
              C
              <span style={{ fontFamily: 'Russ One', color: '#C1121F' }}>oo</span>
              l-S<span style={{ fontFamily: 'Ruthie' }}>p</span>ace
            </NavLogo>
  
            <h3>Sign up with us</h3>
            <p>We will need some information from you to continue.</p>

            <div>
               <div>
                <input
                className={errors.firstName && "bg-red"}
                type="text"
                placeholder='First Name'
                onChange={handleChange('firstName')}
                value={values.firstName}
                />
                {errors.firstName && (
                  <p
                    style={{
                      color: 'red',
                      margin: '0',
                      marginTop: '.3rem',
                      marginBottom: '.5rem',
                      fontSize: '.7rem',
                      position: 'relative',
                      left: '0',
                    }}
                  >
                    {errors.firstName}
                  </p>
                )}
                </div>

                <div>    
                  <input
                  className={errors.lastName && "bg-red"}
                  type="text"
                  placeholder='Last Name'
                  onChange={handleChange('lastName')}
                  value={values.lastName}
                  />
                  {errors.lastName && (
                    <p
                      style={{
                        color: 'red',
                        margin: '0',
                        marginTop: '.3rem',
                        marginBottom: '.5rem',
                        fontSize: '.7rem',
                        position: 'relative',
                        left: '2px',
                      }}
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>

            </div>
            
            
            <input
              className={errors.phoneNumber && "bg-red"}
              type="text"
              placeholder='phone number'
              onChange={handleChange('phoneNumber')}
              value={values.phoneNumber}
            />
             {errors.phoneNumber && (
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
                    {errors.phoneNumber}
                  </p>
                )}

            <select name="gender" id="gender" className={errors.gender && "bg-red"} value={values.gender} onChange={handleChange('gender')}>
              <option value="Male">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
             {errors.gender && (
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
                    {errors.gender}
                  </p>
                )}

            <button type='submit' onClick={handleSubmit}>Sign up</button>
            <button type='submit' onClick={prev}>Back</button>
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

export default PersonalDetails
