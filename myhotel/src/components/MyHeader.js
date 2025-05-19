import React, { useEffect, useState } from "react";
import "./MyHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation configuration
  const navLinks = [
    { id: 'services', text: 'Services', icon: 'fa-concierge-bell' },
    { id: 'gallery', text: 'Gallery', icon: 'fa-images' },
    { id: 'rooms', text: 'Rooms', icon: 'fa-bed' },
    { id: 'bookNow', text: 'Book Now', icon: 'fa-calendar-check' },
    { id: 'contact', text: 'Contact Us', icon: 'fa-envelope' }
  ];

  // Carousel configuration
  const carouselItems = [
    {
      image: "/images/01.jpg",
      alt: "Luxury Suite at Royal Hotel",
      title: "Luxury Suites",
      description: "Experience unparalleled comfort in our premium suites"
    },
    {
      image: "/images/02.jpg",
      alt: "Hotel Restaurant",
      title: "Gourmet Dining",
      description: "World-class cuisine prepared by our master chefs"
    },
    {
      image: "/images/03.jpg",
      alt: "Hotel Spa",
      title: "Spa & Wellness",
      description: "Rejuvenate your senses with our luxury spa treatments"
    }
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Initialize Bootstrap carousel
    const carousel = document.querySelector('#headerCarousel');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 5000,
        pause: "hover"
      });
    }

    // Handle scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Navigation Bar */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-shrink' : ''}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/myhotel">
            <div className="logo-icon-container me-2">
              <i className="fas fa-hotel text-primary fs-3"></i>
              <i className="fas fa-umbrella-beach text-warning fs-4 position-absolute" style={{ right: -5, bottom: -5 }}></i>
            </div>
            <span className="logo-text">
              <span className="fw-bold">Royal</span> Hotel
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                  >
                    <i className={`fas ${link.icon} me-2`}></i>{link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Carousel with Spinner Animation */}
      <div id="headerCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#headerCarousel"
              data-bs-slide-to={index}
              className={activeIndex === index ? 'active' : ''}
              aria-current={activeIndex === index}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="image-container">
                <img
                  src={item.image}
                  className="d-block w-100 rotating-image"
                  alt={item.alt}
                  style={{
                    transform: activeIndex === index ? 'rotate(0deg)' : 'rotate(5deg)',
                    opacity: activeIndex === index ? 1 : 0.7
                  }}
                />
              </div>
              <div className="carousel-caption">
                <h2 className="slide-in-top">{item.title}</h2>
                <p className="slide-in-left">{item.description}</p>
                <div className="hero-cta slide-in-bottom">
                  <a href="#bookNow" className="btn btn-primary me-2">
                    Book Now
                  </a>
                  <a href="#services" className="btn btn-outline-light">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#headerCarousel"
          data-bs-slide="prev"
          onClick={() => setActiveIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#headerCarousel"
          data-bs-slide="next"
          onClick={() => setActiveIndex(prev => (prev + 1) % carouselItems.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default MyHeader;