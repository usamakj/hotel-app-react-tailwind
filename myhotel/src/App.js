import React, { useEffect } from 'react';
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import BookNow from "./pages/BookNow";
import ContactUs from "./pages/ContactUs";
import "./MainSections.css";

const App = () => {
  useEffect(() => {
    // Smooth scrolling function
    const handleSmoothScroll = (e) => {
      // Only handle clicks on anchor tags with hash
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without page reload
          if (window.history.pushState) {
            window.history.pushState(null, null, targetId);
          } else {
            window.location.hash = targetId;
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleSmoothScroll);

    // Handle initial hash if present
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: 'auto'
        });
      }
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <Layout>
      <main>
        <section id="services" className="section-padding"><Services /></section>
        <section id="gallery" className="section-padding"><Gallery /></section>
        <section id="rooms" className="section-padding"><Rooms /></section>
        <section id="bookNow" className="section-padding"><BookNow /></section>
        <section id="contact" className="section-padding"><ContactUs /></section>
      </main>
    </Layout>
  );
};

export default App;