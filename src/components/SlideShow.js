import React, { useState, useEffect } from 'react';
import '../styles/slideshow.scss'; // Make sure to adjust the import path for your CSS file
import TestPic from '../images/ownerProfile.JPG';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next slide index
      const nextSlide = (currentSlide + 1) % 22;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Array of image URLs for the slides
  const slideImages = [
    TestPic,
    'https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW54aWV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80'
    // ... add more image URLs
  ];

  return (
    <div className="slideshow-container">
      <div className="slide">
        {/* Render slides using an array of images */}
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`slide-item ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="dots-container">
        {/* Render the navigation dots */}
        {slideImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
