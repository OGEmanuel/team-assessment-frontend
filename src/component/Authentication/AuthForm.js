import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import logo from '../../assets/logo.png';
import google from '../../assets/google-icon.png';
import password from '../../assets/password.svg';

const isNotEmpty = value => value.trim() !== '';
const validPassword = value => value.trim().length > 6;

function AuthForm() {
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
        className="link border border-primary-200 text-primary-200 gap-2 mb-14"
      >
        <img src={google} alt="google" className="w-6" />
        Sign in with Google
      </Link>
      <div className="flex gap-5 flex-1 text-text-300 text-lg mb-8">
        <hr className="hr-line" />
        OR
        <hr className="hr-line" />
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="font-medium">
            Full Name <span className="text-error font-normal">*</span>
            {nameInputHasError && (
              <p className="inline text-error text-xs">Name cannot be blank</p>
            )}
            <input
              className="input-box placeholder-text-200 placeholder:font-normal font-normal"
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
        <div className="mb-4">
          <label htmlFor="password" className="relative font-medium">
            Password <span className="text-error font-normal">*</span>
            {passwordInputHasError && (
              <p className="inline text-error text-xs">
                Password must be at least 7 characters long!
              </p>
            )}
            <input
              className="input-box relative font-normal"
              type={view ? 'text' : 'password'}
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <img
              src={password}
              alt=""
              onClick={viewPasswordHandler}
              className="absolute right-3.5 top-9"
            />
          </label>
        </div>
        <label className="flex gap-2 items-start mb-8">
          <input
            type="checkbox"
            onChange={checkedChangeHandler}
            required
            className="mt-1"
          />
          <p>
            I agree to the processing of my personal data (name and email) for
            the purpose of conducting the assessment. Read{' '}
            <Link to="/" className="text-primary-300">
              Privacy Policy
            </Link>{' '}
            to know more.
          </p>
        </label>
        <Link
          to={formIsValid ? 'dashboard' : '/'}
          className="link text-white bg-primary-300"
        >
          Sign In
        </Link>
      </form>
    </div>
  );
}

export default AuthForm;
