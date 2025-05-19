import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../MainSections.css';

const BookNow = () => {
    return (
        <section 
            id="bookNow" 
            className="book-now-section py-5 bg-primary text-white text-center"
            aria-labelledby="bookNowHeading"
            role="region"
        >
            <div className="container">
                <h2 
                    id="bookNowHeading" 
                    className="section-heading mb-4 text-uppercase fw-bold"
                >
                    Book Your Stay Now
                </h2>
                <p className="lead mb-5">
                    Experience luxury and comfort at our premier hotel
                </p>
                <button
                    onClick={() => {
                        // Smooth scroll to contact section or could be replaced with a modal trigger
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-reservation btn-light btn-lg px-5 py-3 text-uppercase fw-bold rounded-1"
                    aria-label="Navigate to contact section to make a reservation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Click to book your stay"
                >
                    Make a Reservation
                </button>
            </div>
        </section>
    );
};

export default BookNow;