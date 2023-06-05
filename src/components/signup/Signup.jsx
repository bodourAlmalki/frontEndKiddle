import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Signup({ hello }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName + lastName + email + password);
    try {
      const response = await axios.post('http://localhost:5000/user/', {
        firstName,
        lastName,
        email,
        password,
      });

      const data = await response.data;
      // sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('_id', data._id);
      // sessionStorage.setItem('role', data.role);
      console.log(response.data);
      toast.success('Account created successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.href = '/courses';
    } catch (error) {
      console.error(error);
      toast.error('Error!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleReg = () => {
    window.location.href = '/login';
  };

  const cancelToggle = () => {
    window.location.href = '/';
  };

  return (
    <>
      <ToastContainer />
      <div className="login-wrapper">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="h1-1">Register</h1>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              value={password}
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span onClick={togglePasswordVisibility}>
              <i
                className="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye-sign"
              ></i>
            </span>
            <Link to="/courses">
              <button
                className="login-btn-1"
                value="SignUp"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </Link>
            <p className="p">
              <p onClick={handleReg}>Return to login?</p>
              <span>
                <p onClick={cancelToggle}>Cancel</p>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
