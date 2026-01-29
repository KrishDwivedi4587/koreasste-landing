import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SlideData } from '../types';

interface SlideshowProps {
  slides: SlideData[];
  id: string; // unique id for independent control
  overlayTitle: string;
  ctaText: string;
  ctaLink: string;
  theme: 'dark' | 'light';
}

export const Slideshow: React.FC<SlideshowProps> = ({ 
  slides, 
  id, 
  overlayTitle, 
  ctaText, 
  ctaLink,
  theme 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover" 
            />
            {/* Dark Overlay for text readability */}
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-white/10'}`}></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
            <h2 className={`font-serif text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {overlayTitle}
            </h2>
            <p className={`font-sans text-lg md:text-xl tracking-widest uppercase mb-10 font-medium ${theme === 'dark' ? 'text-gray-100 drop-shadow-md' : 'text-gray-900'}`}>
            {slides[currentIndex].subtitle}
            </p>
            
            <Link 
            to={ctaLink}
            className={`
                px-10 py-4 
                border-2 transition-all duration-300
                font-sans text-sm font-bold uppercase tracking-widest
                ${theme === 'dark' 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}
            `}
            >
            {ctaText}
            </Link>
        </div>
      </div>

      {/* Manual Controls */}
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-black/30 text-white hover:bg-black/50' : 'bg-white/30 text-black hover:bg-white/50'}`}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-black/30 text-white hover:bg-black/50' : 'bg-white/30 text-black hover:bg-white/50'}`}
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? (theme === 'dark' ? 'bg-white w-8' : 'bg-gray-900 w-8')
                : (theme === 'dark' ? 'bg-white/50' : 'bg-gray-900/30')
            }`}
          />
        ))}
      </div>
    </div>
  );
};