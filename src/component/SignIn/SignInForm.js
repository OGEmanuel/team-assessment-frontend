import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import logo from '../../assets/logo.png';
import google from '../../assets/google-icon.png';
import password from '../../assets/password.svg';

const isNotEmpty = value => value.trim() !== '';
const validPassword = value => value.trim().length > 6;

function SignInForm() {
  const [view, setView] = useState(false);
  const [checked, setChecked] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    // reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    // reset: resetPasswordInput,
  } = useInput(validPassword);

  const checkedChangeHandler = e => {
    setChecked(e.target.checked);
  };

  const checkedIsValid = checked;

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid && checkedIsValid) {
    formIsValid = true;
  }

  //   const navigate = useNavigate();

  const viewPasswordHandler = () => {
    setView(!view);
  };

  //   const submitHandler = e => {
  //     e.preventDefault();

  //     if (!formIsValid) return;

  //     navigate('/home/dashboard');

  //     resetNameInput();
  //     resetPasswordInput();
  //   };

  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <Link to="/">
          <img src={google} alt="google" />
          Sign in with Google
        </Link>
        <div>
          <hr />
          OR
          <hr />
        </div>
        <form>
          <label htmlFor="name">
            Full Name <span>*</span>
            {nameInputHasError && <p>Name cannot be blank</p>}
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              placeholder="e.g Chukwuma Adekunle Ciroma"
              required
            />
          </label>
          <label htmlFor="password">
            Password <span>*</span>
            {passwordInputHasError && (
              <p>Password must be at least 7 characters long!</p>
            )}
            <input
              type={view ? 'text' : 'password'}
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <img src={password} alt="" onClick={viewPasswordHandler} />
          </label>
          <div>
            <label htmlFor="">
              <input type="checkbox" onChange={checkedChangeHandler} required />
              <p>
                I agree to the processing of my personal data (name and email)
                for the purpose of conducting the assessment. Read{' '}
                <Link to="/">Privacy Policy</Link> to know more.
              </p>
            </label>
          </div>
          <Link to={formIsValid ? '/home' : '/'}>Sign In</Link>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
