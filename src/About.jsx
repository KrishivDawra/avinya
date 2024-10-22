import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Carousel } from "@material-tailwind/react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide

  const slides = [
    { src: './src/assets/slide-1.jpeg', alt: 'Description of Image 1' },
    { src: './src/assets/slide-2.jpeg', alt: 'Description of Image 2' },
    { src: './src/assets/slide-3.jpeg', alt: 'Description of Image 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide; loop back to the start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Move to the previous slide; loop back to the end
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(0); // Set back to the first slide for a smoother transition
      }, 500); // Delay for half a second
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <>
      <Header />
      <div className="relative w-full   mx-auto overflow-hidden ">
        {/* Slider Wrapper */}
        <div
          id="slider"
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }} // Slide transition
        >
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <img src={slide.src} alt={slide.alt} className="w-full" />
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
        >
           &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-black text-white p-2"
        >
          &#9654;
        </button>
      </div>
      <Footer/>
    </>
  );
}
