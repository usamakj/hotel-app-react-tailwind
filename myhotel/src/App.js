import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import BookNow from "./pages/BookNow";
import ContactUs from "./pages/ContactUs";
import "./MainSections.css";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollHandler />
      <Layout>
        <Routes>
          <Route path="/" element={
            <main>
              <section id="services"><Services /></section>
              <section id="gallery"><Gallery /></section>
              <section id="rooms"><Rooms /></section>
              <section id="bookNow"><BookNow /></section>
              <section id="contact"><ContactUs /></section>
            </main>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;