import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import '../MainSections.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert(`Thank you ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section 
            id="contact" 
            className="contact-section py-5 bg-dark text-white position-relative"
            aria-labelledby="contactHeading"
        >
            <div className="container position-relative z-index-1">
                <div className="text-center mb-5">
                    <h2 
                        id="contactHeading" 
                        className="section-heading text-uppercase mb-3 fw-bold"
                    >
                        Contact Us
                    </h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <FaPaperPlane />
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="lead mb-4">
                        We'd love to hear from you! Feel free to reach out for inquiries or bookings.
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-lg-5">
                        <div className="contact-info bg-secondary p-4 rounded-3 h-100">
                            <h3 className="h4 mb-4">Contact Information</h3>
                            <ul className="list-unstyled">
                                <li className="mb-4 d-flex align-items-start">
                                    <div className="contact-icon me-3 mt-1">
                                        <FaEnvelope className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Email</h4>
                                        <a href="mailto:info@royalhotel.com" className="text-white">
                                            info@royalhotel.com
                                        </a>
                                    </div>
                                </li>
                                <li className="mb-4 d-flex align-items-start">
                                    <div className="contact-icon me-3 mt-1">
                                        <FaPhone className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Phone</h4>
                                        <a href="tel:+123456789" className="text-white">
                                            +123 456 789
                                        </a>
                                    </div>
                                </li>
                                <li className="mb-4 d-flex align-items-start">
                                    <div className="contact-icon me-3 mt-1">
                                        <FaMapMarkerAlt className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Address</h4>
                                        <p className="mb-0">123 Luxury Avenue, Hospitality City</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="contact-icon me-3 mt-1">
                                        <FaClock className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Opening Hours</h4>
                                        <p className="mb-0">24/7 Reception</p>
                                        <p className="mb-0">Restaurant: 7am - 11pm</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="contact-form bg-secondary p-4 rounded-3">
                            <h3 className="h4 mb-4">Send Us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-white"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark text-white"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea
                                        className="form-control bg-dark text-white"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-2">
                                    <FaPaperPlane className="me-2" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="text-muted mb-0">
                        We typically respond within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;