import React, { useState } from 'react';
import './login.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';

function Login({ cancel }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        toast.error('Invalid email or password!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const decodedToken = jwt_decode(data.token);

      sessionStorage.setItem('_id', decodedToken.user_id);
      sessionStorage.setItem('role', decodedToken.role);
      window.location.href = '/courses';
    } catch (error) {
      toast.error('Invalid email or password!');
      console.error(error);
    }
  };

  const handleReg = () => {
    window.location.href = '/signup';
  };

  const cancelToggle = () => {
    cancel();
  };

  return (
    <>
      <ToastContainer />

      <div className="login-wrapper">
        <div className="login-r">
          <div className="login-card">
            <form className="login-form" onSubmit={handleSubmit}>
              <h1 className="h1-1">Login</h1>
              <span className="input-item">
                <i
                  id="user"
                  aria-hidden="true"
                  className="fa fa-user-circle"
                ></i>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{' '}
              </span>
              <span className="input-item">
                <i id="key" aria-hidden="true" className="fa fa-key"></i>
                <input
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  value={password}
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{' '}
              </span>
              <span onClick={togglePasswordVisibility}>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  type="button"
                  id="eye"
                ></i>
              </span>

              <button className="login-btn" value="login" type="submit">
                Submit
              </button>
              <p className="p">
                New here? <span onClick={handleReg}>Create an account</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
