import React from 'react';
import { Slideshow } from '../components/Slideshow';
import { SlideData } from '../types';

const lifestyleSlides: SlideData[] = [
  { id: 1, image: '/lifestyle/LandingImage.jpg', title: 'Elegant Evening', subtitle: 'Fashion Jewelry & Accessories' },
  { id: 2, image: '/lifestyle/ClothesHanger.jpg', title: 'Western Chic', subtitle: 'Modern Garments' },
  { id: 3, image: '/lifestyle/indiangarment.jpg', title: 'Traditional Grace', subtitle: 'Indian Heritage' },
];

const beauwellSlides: SlideData[] = [
  { id: 1, image: '/beauwell/SerenuPro.jpg', title: 'Pure Radiance', subtitle: 'Clinically Proven Skincare' },
  { id: 2, image: '/beauwell/nutritionimage.png', title: 'Inner Balance', subtitle: 'Nutritional Wellness' },
  { id: 3, image: '/beauwell/advancedformulations.jpg', title: 'Science of Beauty', subtitle: 'Award Winning Skincare Technology' },
];

export const Landing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full pt-20 lg:pt-0">
      
      {/* Lifestyle Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative border-b-4 lg:border-b-0 lg:border-r-4 border-white">
        <Slideshow 
          slides={lifestyleSlides} 
          id="lifestyle-slider"
          overlayTitle="KOREASSTE"
          ctaText="Explore Lifestyle"
          ctaLink="/lifestyle"
          theme="dark"
        />
      </div>

      {/* Beauwell Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative">
        <Slideshow 
          slides={beauwellSlides} 
          id="beauwell-slider"
          overlayTitle="BEAUWELL"
          ctaText="Explore BEAUWELL"
          ctaLink="/beauwell"
          theme="dark"
        />
      </div>

    </div>
  );
};