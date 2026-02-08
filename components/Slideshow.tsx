import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SlideData } from '../types';

interface SlideshowProps {
  slides: SlideData[];
  id: string; // unique id for independent control
  overlayTitle?: string;
  ctaText?: string;
  ctaLink?: string;
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

  const currentSlide = slides[currentIndex];
  const displayTitle = overlayTitle || currentSlide.title;

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
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" 
            />
            {/* Overlay Gradient - Darkened for white text legibility */}
            <div className={`absolute inset-0 ${
              theme === 'dark' 
                ? 'bg-gradient-to-t from-black/70 via-black/30 to-black/40' 
                : 'bg-gradient-to-t from-white/80 via-white/10 to-transparent'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center max-w-4xl">
            <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl mb-4 tracking-tight transition-all duration-700 ${
              theme === 'dark' ? 'text-white' : 'text-arhansiam-moss'
            }`}>
              {displayTitle}
            </h2>
            <p className={`font-sans text-sm md:text-base tracking-widest uppercase mb-8 font-medium leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
              theme === 'dark' ? 'text-white/90 drop-shadow-md' : 'text-arhansiam-clay'
            }`}>
              {currentSlide.subtitle}
            </p>
            
            {ctaText && ctaLink && (
              <Link 
                to={ctaLink}
                className={`
                    px-8 py-3 
                    border-2 transition-all duration-300
                    font-sans text-xs font-bold uppercase tracking-widest
                    ${theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-arhansiam-moss text-arhansiam-moss hover:bg-arhansiam-moss hover:text-white'}
                `}
              >
                {ctaText}
              </Link>
            )}
        </div>
      </div>

      {/* Manual Controls */}
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          theme === 'dark' ? 'bg-black/20 text-white hover:bg-white hover:text-black' : 'bg-white/50 text-arhansiam-moss hover:bg-arhansiam-moss hover:text-white'
        }`}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
        className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          theme === 'dark' ? 'bg-black/20 text-white hover:bg-white hover:text-black' : 'bg-white/50 text-arhansiam-moss hover:bg-arhansiam-moss hover:text-white'
        }`}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? (theme === 'dark' ? 'bg-white w-6' : 'bg-arhansiam-moss w-6')
                : (theme === 'dark' ? 'bg-white/30' : 'bg-arhansiam-moss/30')
            }`}
          />
        ))}
      </div>
    </div>
  );
};