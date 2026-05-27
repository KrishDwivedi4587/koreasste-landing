import React from 'react';
import { Slideshow } from '../components/Slideshow';
import { SlideData } from '../types';

const lifestyleSlides: SlideData[] = [
  { id: 1, image: '/lifestyle/LandingImage.jpg', title: 'Elegant Evening', subtitle: 'Fashion Jewelry' },
  { id: 2, image: '/lifestyle/StatementBelt.jpg', title: 'Accessories', subtitle: 'Accessorize to Style' },
  { id: 3, image: '/lifestyle/indiangarment.jpg', title: 'Traditional Grace', subtitle: 'Indian Heritage' },
];

const beauwellSlides: SlideData[] = [
  { id: 1, image: '/beauwell/SerenuPro.jpg', title: 'Pure Radiance', subtitle: 'Presents: Clinically Proven Skincare' },
  { id: 2, image: '/beauwell/nutritionlanding.jpg', title: 'Inner Balance', subtitle: 'Presents: Nutritional Wellness' },
  { id: 3, image: '/beauwell/advancedformulations.jpg', title: 'Science of Beauty', subtitle: 'Presents: Award Winning Skincare Technology' },
];

const arhansiamSlides: SlideData[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800&h=1200', title: '', subtitle: 'Nutritious Recipes' },
  { id: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800&h=1200', title: '', subtitle: 'Cleansing Blends' },
  { id: 3, image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800&h=1200', title: '', subtitle: 'Dietary Foundations' },
];

export const Landing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-24 lg:mt-0 min-h-[calc(100svh-6rem)] lg:h-screen overflow-visible lg:overflow-hidden">
      
      {/* Lifestyle Section */}
      <div className="w-full lg:w-1/3 h-[calc((100svh-6rem)/3)] lg:h-full relative border-b lg:border-b-0 lg:border-r border-white/20">
        <Slideshow 
          slides={lifestyleSlides} 
          id="lifestyle-slider"
          overlayTitle="LIFESTYLE"
          ctaText="Explore Lifestyle"
          ctaLink="/lifestyle"
          theme="dark"
        />
      </div>

      {/* Beauwell Section */}
      <div className="w-full lg:w-1/3 h-[calc((100svh-6rem)/3)] lg:h-full relative border-b lg:border-b-0 lg:border-r border-white/20">
        <Slideshow 
          slides={beauwellSlides} 
          id="beauwell-slider"
          overlayTitle="BEAUWELL"
          ctaText="Explore NuSkin & PharmaNex"
          ctaLink="/beauwell"
          theme="dark"
        />
      </div>

      {/* ArhanSiam Section */}
      <div className="w-full lg:w-1/3 h-[calc((100svh-6rem)/3)] lg:h-full relative">
        <Slideshow 
          slides={arhansiamSlides} 
          id="arhansiam-slider"
          overlayTitle="NUTRIFORM"
          ctaText="Explore NutriForm"
          ctaLink="/arhansiam"
          theme="dark"
        />
      </div>

    </div>
  );
};
