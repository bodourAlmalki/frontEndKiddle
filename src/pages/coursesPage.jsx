import { useState, useEffect } from 'react';

import Courses from '../components/courses/courses';
import Footer from '../components/footer/Footer.js';
import Navbar from '../components/navBar/Navbar';
import Navbar_Youtube from '../components/navbar_Youtube/navbar_Youtube';

export default function Coursespage() {
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
      <Courses />
      <Footer />
    </div>
  );
}
