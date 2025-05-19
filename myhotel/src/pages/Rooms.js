import React, { useState } from 'react';
import { FaBed, FaWifi, FaTv, FaCoffee, FaSwimmingPool, FaParking } from 'react-icons/fa';
import { MdAcUnit, MdRoomService, MdBeachAccess } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.min.css";
import '../MainSections.css'
const Rooms = () => {
  const [activeTab, setActiveTab] = useState('deluxe');

  const roomTypes = [
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      description: 'Spacious, well-furnished rooms with premium amenities for a comfortable stay.',
      price: '$199/night',
      size: '35 m²',
      capacity: '2 Adults',
      image: '/images/deluxe-room.jpg',
      features: [
        { icon: <FaBed />, text: 'King Size Bed' },
        { icon: <FaWifi />, text: 'Free WiFi' },
        { icon: <FaTv />, text: 'Smart TV' },
        { icon: <MdAcUnit />, text: 'Air Conditioning' },
        { icon: <FaCoffee />, text: 'Coffee Maker' },
        { icon: <MdRoomService />, text: '24/7 Room Service' }
      ]
    },
    {
      id: 'presidential',
      title: 'Presidential Suite',
      description: 'Ultimate luxury with private balcony, jacuzzi, and exclusive services.',
      price: '$499/night',
      size: '80 m²',
      capacity: '2 Adults + 2 Children',
      image: '/images/presidential-suite.jpg',
      features: [
        { icon: <FaBed />, text: 'Super King Bed' },
        { icon: <FaSwimmingPool />, text: 'Private Jacuzzi' },
        { icon: <MdBeachAccess />, text: 'Balcony View' },
        { icon: <FaParking />, text: 'Private Parking' },
        { icon: <MdRoomService />, text: 'Butler Service' },
        { icon: <FaCoffee />, text: 'Premium Minibar' }
      ]
    },
    {
      id: 'standard',
      title: 'Standard Room',
      description: 'Affordable yet comfortable rooms with all essential amenities.',
      price: '$129/night',
      size: '25 m²',
      capacity: '2 Adults',
      image: '/images/standard-room.jpg',
      features: [
        { icon: <FaBed />, text: 'Queen Size Bed' },
        { icon: <FaWifi />, text: 'Free WiFi' },
        { icon: <FaTv />, text: 'LED TV' },
        { icon: <MdAcUnit />, text: 'Air Conditioning' },
        { icon: <FaCoffee />, text: 'Tea/Coffee Maker' }
      ]
    }
  ];

  return (
    <section id="rooms" className="rooms-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase mb-3 fw-bold">Our Rooms & Suites</h2>
          <p className="lead text-muted">Experience comfort and luxury tailored to your needs</p>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <ul className="nav nav-pills justify-content-center">
              {roomTypes.map((room) => (
                <li key={room.id} className="nav-item">
                  <button
                    className={`nav-link ${activeTab === room.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(room.id)}
                  >
                    {room.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          {roomTypes.map((room) => (
            <div 
              key={room.id} 
              className={`room-card col-md-4 mb-4 ${activeTab === room.id ? '' : 'd-none d-md-block'}`}
            >
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={room.image} 
                  className="card-img-top room-image" 
                  alt={room.title} 
                />
                <div className="card-body">
                  <h4 className="card-title">{room.title}</h4>
                  <p className="card-text text-muted">{room.description}</p>
                  
                  <div className="room-features mb-3">
                    <ul className="list-unstyled">
                      {room.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <span className="feature-icon me-2">{feature.icon}</span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="room-meta d-flex justify-content-between mb-3">
                    <div>
                      <strong>Size:</strong> {room.size}
                    </div>
                    <div>
                      <strong>Capacity:</strong> {room.capacity}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-primary">{room.price}</h5>
                    <button className="btn btn-outline-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;   