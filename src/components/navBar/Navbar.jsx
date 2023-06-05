import './navbar.css';
import React from 'react';
import logo from '../../Assets/logo.png';
import { MenuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import CoinCounter from '../CoinCounter/CoinCounter';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="container-header-1">
      <nav className="NavbarItems">
        <Link to="/">
          {' '}
          <img src={logo} alt=" this is the logo" className="kiddle-logo"></img>
        </Link>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <div className="nav-item">
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
      <div className="btn-all">
        <Link to="/signup">
          <button className="btn-R">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn-R">Log In</button>
        </Link>
        {/* <div className="div-coin-1">
          <FontAwesomeIcon
            icon={faCircleDollarToSlot}
            flip
            size="sm"
            className="icon-flip"
          />

          <CoinCounter />
        </div> */}
      </div>
    </header>
  );
}
export default Navbar;
