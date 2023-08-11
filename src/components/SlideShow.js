import React, { useState, useEffect } from 'react';
import '../styles/slideshow.scss'; // Make sure to adjust the import path for your CSS file

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

    // Array of image URLs for the slides
    const slideImages = [
      'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExpZmUlMjBUcmFuc2l0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1464274582105-6b442eadde5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1491295314828-fb03946d9b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1566847936715-5e147ef9caec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1687360441348-1bb4a85824e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1550792404-f62d4ce3bb3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1435575709442-063fe08e935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1676629872240-8a123a83f0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2330&q=80',
        'https://images.unsplash.com/photo-1614138159368-242fb95e79e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        'https://media.istockphoto.com/id/1341484868/photo/son-holding-fathers-hand-at-the-hospital.webp?b=1&s=170667a&w=0&k=20&c=2vadwgOG6dVBzFC9yQj2S_6MGYrOuSZyzHLF1Q32h_k=',
        'https://images.unsplash.com/photo-1609852234838-147db6815968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1583334506779-8f63fae3d11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
        'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1507207908229-c59ddb730e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1620110488106-dad904f50930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80'

    ];

    const imageHeaders = [
            'Anxiety',
            'Depression',
            'Trauma',
            'Life Transitions',
            'Communication Skills​',
            'Family Conflict',
            'Parenting',
            'Boundaries',
            'Coaching',
            'Self-Improvement',
            'ADHD',
            'Grief & Loss',
            'Health Issues',
            'Burnout',
            'Addiction',
            'Self-Esteem',
            'Coping Skills',
            'Emotional Regulation',
            'Domestic Violence',
            'Interpersonal Relationships',
            'Academic Challenges',
            'Behavioral Issues',
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        // Calculate the next slide index, loop back to the beginning if needed
        const nextSlide = (currentSlide + 1) % slideImages.length;
        setCurrentSlide(nextSlide);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }, [currentSlide, slideImages.length]);


    const slideContainerStyle = {
        transform: `translateX(-${(currentSlide * 100)}%)`,
        transition: 'transform 0.5s ease-in-out',
      };

    return (
      <div className="slideshow-container">
        <div className="slide" style={slideContainerStyle}>
                {slideImages.map((image, index) => (
                <div
                key={index}
                className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})`, zIndex: {index} }}
                    >
                        <h1>{imageHeaders[index]}</h1>
                        </div>
          ))}
        </div>
        <div className="dots-container">
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