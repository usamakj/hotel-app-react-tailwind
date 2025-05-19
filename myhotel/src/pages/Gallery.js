import React, { useState, useEffect } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/MyHeader.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  const galleryImages = [
   
    {
      src: "/images/02.jpg",
      alt: "Fine Dining Restaurant",
      category: "Dining"
    },
    {
      src: "/images/01.jpg",
      alt: "Premium Suite",
      category: "Rooms"
    },
    {
      src: "/images/03.jpg",
      alt: "Spa & Wellness Center",
      category: "Amenities"
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      alt: "Outdoor Pool",
      category: "Amenities"
    },
    {
      src: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac",
      alt: "Executive Lounge",
      category: "Common Areas"
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

  useEffect(() => {
    if (filter === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === filter));
    }
  }, [filter]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e, image) => {
    if (e.key === "Enter") {
      openModal(image);
    }
  };

  return (
    <section 
      id="gallery" 
      className="gallery-section py-5 bg-dark text-white"
      aria-labelledby="galleryHeading"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="galleryHeading" className="section-heading text-uppercase mb-3 fw-bold">
            Hotel Gallery
          </h2>
          <p className="lead text-muted">
            A glimpse of our beautiful and luxurious hotel spaces
          </p>
          
          {/* Filter buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`btn btn-sm ${filter === category ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter(category)}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="col-md-4 col-6">
              <div 
                className="gallery-item position-relative overflow-hidden rounded"
                tabIndex="0"
                onClick={() => openModal(image)}
                onKeyDown={(e) => handleKeyDown(e, image)}
                role="button"
                aria-label={`View ${image.alt} in larger size`}
              >
                <img
                  src={image.src}
                  className="img-fluid w-100 gallery-image"
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                  <FaSearchPlus className="zoom-icon" />
                  <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="modal-overlay show"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalImageTitle"
          >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="close-button" 
                onClick={closeModal}
                aria-label="Close image modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-image"
                id="modalImageTitle"
              />
              <div className="image-caption">
                <h5>{selectedImage.alt}</h5>
                <p className="text-muted">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;