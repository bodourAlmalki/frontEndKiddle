import React from 'react';
import Footer from '../components/footer/Footer.js';
import HomePageComponent from '../components/HomePage/HomePage';
import Navbar from '../components/navBar/Navbar';
import NavbarMobile from '../components/navBar/NavbarMobile';
import Navbar_Youtube from '../components/navbar_Youtube/navbar_Youtube.jsx';

export default function HomePage() {
  return (
    <div>
      {/* <NavbarMobile /> */}
      {/* <Navbar/> */}
      <Navbar_Youtube />
      <HomePageComponent />
      <Footer />
    </div>
  );
}
