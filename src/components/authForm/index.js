import React, { useState } from 'react';
import {
  LoginCard,
  LoginWrapper,
  NavLogo,
  LoginFooter,
} from './authFormElement';
import '../../App.css';

const AuthForm = ({ nextStep, handleChange, values }) => {

  const [errors, setErrors] = useState('');

  const next = (e) => {
    e.preventDefault();

    if (values.email === '') {
      setErrors('Email is required');
    } else if (!values.email.includes('.') && !values.email.includes('@')) {
      setErrors("Email is invalid!")
    } else {
      setErrors('')
      nextStep();
    }
  };

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
          <p>Sign in with your email address to continue</p>

          <input
            className={errors && 'bg-red'}
            type='email'
            placeholder='Enter your email address'
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
                left: '70px',
              }}
            >
              {errors}
            </p>
          )}

          <button type='submit' onClick={next}>
            Next
          </button>
          <span>
            New to cool-spaces? <a href='/register'>create an account</a>
          </span>
        </LoginCard>
      </LoginWrapper>
      <LoginFooter>
        <p>@ 2020 Cool-space</p>
        <p>Privacy Policy | Terms of Use</p>
      </LoginFooter>
    </>
  );
};

export default AuthForm;
