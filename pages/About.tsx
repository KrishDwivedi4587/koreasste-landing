import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Helper component for scroll-reveal animations
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1, '0px 0px -50px 0px');

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero Header */}
      <div ref={heroRef} className="relative py-20 md:py-32 bg-gradient-to-b from-[#ECEAE5] to-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-serif text-5xl md:text-6xl text-koreasste-charcoal mb-6">
            Our Story
          </h1>
          <p className="font-sans text-base md:text-lg font-bold tracking-[0.2em] uppercase text-koreasste-gold leading-relaxed">
            Defining elegance through lifestyle &<br className="hidden md:block"/> purity through holistic wellness
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 md:py-32 px-6">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-10">The Vision</h2>
            <p className="text-gray-800 font-normal leading-loose text-xl mb-12 max-w-3xl mx-auto">
              Koreasste was born from a desire to bridge two essential aspects of modern living: the outward expression of style and the inner foundation of health. We believe that true luxury lies in the balance between how you present yourself to the world and how you nurture your body.
            </p>
            <div className="w-24 h-0.5 bg-koreasste-gold mx-auto"></div>
          </div>
        </FadeInSection>
      </section>

      {/* Dual Identity Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Lifestyle */}
                <FadeInSection>
                  <div className="relative group overflow-hidden shadow-lg">
                      <img 
                          src="/lifestyle/AboutImage.jpg" 
                          alt="Lifestyle Fashion" 
                          className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay="200ms">
                  <div className="md:pl-8 text-center md:text-left">
                      <h3 className="font-serif text-4xl text-koreasste-charcoal mb-6">Koreasste - Lifestyle</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          Our Lifestyle collection is a celebration of aesthetics. From the intricate details of traditional Indian garments to the sharp silhouettes of Western wear, and the subtle glimmer of fine jewelry. We curate pieces that empower you to express your unique identity with grace and confidence.
                      </p>
                      <p className="font-sans text-sm font-bold uppercase tracking-widest text-koreasste-gold">
                          Timeless • Elegant • Unique
                      </p>
                  </div>
                </FadeInSection>

                {/* Beauwell */}
                <FadeInSection>
                  <div className="md:pr-8 text-center md:text-left mt-12 md:mt-0">
                      <h3 className="font-serif text-4xl text-beauwell-slate mb-6">Koreasste - BEAUWELL</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          BEAUWELL represents our commitment to scientific wellness. Partnering with global leaders like NuSkin and PharmaNex, we bring you clinically proven skincare and nutritional solutions. We believe beauty is not just skin deep—it radiates from a healthy, nourished core.
                      </p>
                      <p className="font-sans text-sm font-bold uppercase tracking-widest text-beauwell-sage">
                          Scientific • Pure • Effective
                      </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay="200ms">
                  <div className="relative group overflow-hidden shadow-lg">
                      <img 
                          src="public/beauwell/AboutImage.jpg" 
                          alt="Wellness Science" 
                          className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </FadeInSection>

            </div>
        </div>
      </section>

      {/* Commitment/Closing */}
      <section className="py-28 text-center px-6">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl mb-8 text-gray-900">Our Commitment</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-12">
                  Whether you are choosing a statement necklace or a rejuvenating serum, our promise remains the same: uncompromising quality and a dedication to enhancing your life.
              </p>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};