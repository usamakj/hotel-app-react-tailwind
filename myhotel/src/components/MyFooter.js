import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import '../MainSections.css'
const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-4">
            <h5 className="footer-heading mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <MdLocationOn className="me-2" />
                123 Luxury Avenue, Hospitality City
              </li>
              <li className="mb-3">
                <MdPhone className="me-2" />
                <a href="tel:+1234567890" className="text-white text-decoration-none">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <MdEmail className="me-2" />
                <a href="mailto:info@royalhotel.com" className="text-white text-decoration-none">
                  info@royalhotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="footer-heading mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#rooms" className="text-white text-decoration-none">Rooms & Suites</a></li>
              <li className="mb-2"><a href="#dining" className="text-white text-decoration-none">Dining</a></li>
              <li className="mb-2"><a href="#amenities" className="text-white text-decoration-none">Amenities</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="footer-heading mb-4">Connect With Us</h5>
            <div className="social-links mb-4">
              <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://tripadvisor.com" className="text-white" aria-label="TripAdvisor">
                <FaTripadvisor size={24} />
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="newsletter">
              <h6 className="mb-3">Subscribe to our newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  aria-label="Email for newsletter"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {currentYear} Royal Hotel. All Rights Reserved | 
              <a href="#privacy" className="text-white ms-2 text-decoration-none">Privacy Policy</a> | 
              <a href="#terms" className="text-white ms-2 text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;