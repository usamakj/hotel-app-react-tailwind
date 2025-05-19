import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../MainSections.css';
const Services = () => {
    const services = [
        {
            title: "Room Service",
            description: "24/7 in-room dining service with a wide variety of food and beverages.",
            icon: "bi bi-cup-hot-fill"
        },
        {
            title: "Spa & Wellness",
            description: "Relax and rejuvenate with our world-class spa treatments and wellness programs.",
            icon: "bi bi-spa-fill"
        },
        {
            title: "Event Hosting",
            description: "Host your next event in our luxurious conference rooms and banquet halls.",
            icon: "bi bi-calendar-event-fill"
        }
    ];

    return (
        <section id="services" className="py-5 bg-light text-center" aria-labelledby="servicesHeading" role="region">
            <div className="container">
                <h2 id="servicesHeading" className="section-heading text-uppercase fw-bold mb-3">
                    Our Services
                </h2>
                <p className="lead text-muted mb-5">Experience the best services at Royal Hotel</p>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div 
                                className="card h-100 border-0 shadow-sm p-4 service-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="card-body">
                                    <i className={`${service.icon} fs-1 text-primary mb-3`} aria-hidden="true"></i>
                                    <h3 className="h4 mb-3">{service.title}</h3>
                                    <p className="text-muted mb-0">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;