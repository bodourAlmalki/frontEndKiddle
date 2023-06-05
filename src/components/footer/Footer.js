import React from 'react';
import logo from '../../Assets/logo.png';
import './FooterStyles.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img className="logo-Footer mb-0" src={logo} alt="this is logo"></img>
          </span>
        </h3>

        <p className="footer-links">
          <a href="/" className={location.pathname === '/' ? 'f-active' : ''}>
            Home
          </a>
          <a
            href="/cources"
            className={location.pathname === '/cources' ? 'f-active' : ''}
          >
            Courses
          </a>{' '}
          <a
            href="/about"
            className={location.pathname === '/about' ? 'f-active' : ''}
          >
            About
          </a>{' '}
      
        </p>

        <p className="footer-company-name"> Bodour Almalki © 2023</p>
      </div>

      <div className="footer-center">
        <div className="willhide">
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Kiddle</span>
          </p>
        </div>

        <div className="willhide">
          <i className="fa fa-phone"></i>
          <p>+961 81219803</p>
        </div>

        <div className="willhide">
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:bodouralmalki11@gmail.com">
              bodouralmalki11@gmail.com
            </a>
          </p>
        </div>
        <div className="inf-links">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Kiddle</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+961 76 482 098</p>
          </div>

          <div className='email'>
            <i className="fa fa-envelope"></i>
            <p>
              <a classsname="" href="mailto:bodouralmalki11@gmail.com">
                bodouralmalki11@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          {/* <span s>About the company</span> */}
          <p style={{marginTop:'10px' }}>&copy; 2023 Kiddle - Coding Website. All rights reserved.</p>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
