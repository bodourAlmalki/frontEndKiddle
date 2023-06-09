import { useState } from 'react';
import './navbarYoutube.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { MenuData } from '../navBar/MenuData.jsx';

const Navbar_Youtube = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: '100%' }}>
      <nav className="nav">
        <div
          className="d-flex justify-content-between ml-100 burger-menu"
          onClick={updateMenu}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="whole-logo_1">
          <Link to="/">
            <img
              src={logo}
              alt=" this is the logo"
              className="kiddle-logo-mobile"
            ></img>
          </Link>
        </div>
      </nav>

      <div className={menu_class}>
        <ul className="nav-menu-mobile-1">
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
          <Link to="/login">
            <button className="btn-R-mobile">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Youtube;
