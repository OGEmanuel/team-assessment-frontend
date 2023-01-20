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
  } = useInput(isNotEmpty);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(validPassword);

  const checkedChangeHandler = e => {
    setChecked(e.target.checked);
  };

  const checkedIsValid = checked;

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid && checkedIsValid) {
    formIsValid = true;
  }

  const viewPasswordHandler = () => {
    setView(!view);
  };

  return (
    <div className="px-12 py-8">
      <img src={logo} alt="logo" className="mb-16" />
      <Link
        to="/"
        className="link border border-primary-200 text-primary-200 gap-2 mb-16"
      >
        <img src={google} alt="google" className="w-6" />
        Sign in with Google
      </Link>
      <div className="flex gap-5 flex-1 text-text-300 text-lg mb-8">
        <hr className="grow border-t border-shade" />
        OR
        <hr className="grow border-t border-shade" />
      </div>
      <form>
        <div>
          <label htmlFor="name" className="pb-4">
            Full Name <span className="text-error">*</span>
            {nameInputHasError && (
              <p className="inline text-error text-xs">Name cannot be blank</p>
            )}
            <input
              className="input-box"
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              placeholder="e.g Chukwuma Adekunle Ciroma"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password <span className="text-error">*</span>
            {passwordInputHasError && (
              <p className="inline text-error text-xs">
                Password must be at least 7 characters long!
              </p>
            )}
            <input
              className="input-box"
              type={view ? 'text' : 'password'}
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <img src={password} alt="" onClick={viewPasswordHandler} />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" onChange={checkedChangeHandler} required />
            <p>
              I agree to the processing of my personal data (name and email) for
              the purpose of conducting the assessment. Read{' '}
              <Link to="/">Privacy Policy</Link> to know more.
            </p>
          </label>
        </div>
        <Link to={formIsValid ? '/home' : '/'}>Sign In</Link>
      </form>
    </div>
  );
}

export default SignInForm;
