import './navbar.css';
import React from 'react';
import logo from '../../Assets/logo.png';
import { MenuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import CoinCounter from '../CoinCounter/CoinCounter';
import { Link } from 'react-router-dom';

function NavbarMobile() {
  return (
    <header className="container-header-mobile-1">
      <nav className="NavbarItems-mobile">
        <div className="whole-logo">
          <img src={logo} alt=" this is the logo" className="kiddle-logo-mobile"></img>
        </div>
        <ul className="nav-menu-mobile">
          {MenuData.map((item, index) => {
            return (
              <div className="nav-item-mobile">
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
        <div className="btn-all-mobile">
        <Link to="/signup">
          <button className="btn-R-mobile">Register</button>
        </Link>
        <Link to="login">
          <button className="btn-R-mobile">Log In</button>
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
      </nav>
      
    </header>
  );
}
export default NavbarMobile;
