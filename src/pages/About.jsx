import React, { useEffect, useState } from 'react';
import About from '../components/About/About';
import Navbar_Youtube from '../components/navbar_Youtube/navbar_Youtube';
import Navbar from '../components/navBar/Navbar';
import Footer from '../components/footer/Footer';

export default function AboutPage() {
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
      {isMobile ? <Navbar_Youtube/> : <Navbar/>}
      <About />
      <Footer/>
    </div>
  );
}
