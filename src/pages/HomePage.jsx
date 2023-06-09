import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer.js';
import HomePageComponent from '../components/HomePage/HomePage';
import Navbar from '../components/navBar/Navbar';
import NavbarMobile from '../components/navBar/NavbarMobile';
import Navbar_Youtube from '../components/navbar_Youtube/navbar_Youtube.jsx';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div>
      {isMobile ? <Navbar_Youtube /> : <Navbar />}
      <HomePageComponent />
      <Footer />
    </div>
  );
}