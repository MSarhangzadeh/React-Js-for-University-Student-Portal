import React, { useState, useEffect } from "react";

// fuck off mahyar u dont need to edit this
//dummy info
const slides = [
  {
    imgUrl: "src/assets/images/slider/01.png",
    title: "Vibrant Campus Life",
    description: "At University of Horizons, enjoy an inclusive and dynamic student experience.",
  },
  {
    imgUrl: "src/assets/images/slider/02.png",
    title: "World-Class Facilities",
    description: "Explore advanced labs and learning spaces at University of Horizons.",
  },
  {
    imgUrl: "src/assets/images/slider/01.png",
    title: "Global Opportunities",
    description: "Join international programs and grow your future at University of Horizons.",
  },
  {
    imgUrl: "src/assets/images/slider/02.png",
    title: "Innovation & Research",
    description: "Fuel your curiosity through groundbreaking research at University of Horizons.",
  },
];


const UniversitySlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="university-slider-section style-4 padding-tb">
      <div className="container">
        <div
          className="slider-wrapper text-center"
          style={{
            maxWidth: "700px",   
            margin: "0 auto",   
            width: "90%",        
          }}
        >
          <div className="slider-image mb-4">
            <img
              src={slides[current].imgUrl}
              alt={slides[current].title}
              style={{
                width: "100%",        
                maxHeight: "350px",   
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <h3 className="title">{slides[current].title}</h3>
          <p className="description">{slides[current].description}</p>
          <div className="slider-dots mt-3">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  margin: "0 5px",
                  borderRadius: "50%",
                  backgroundColor: index === current ? "#2d6cdf" : "#ccc",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySlider;