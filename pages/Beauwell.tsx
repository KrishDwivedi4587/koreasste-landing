import React, { useEffect } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skincare: Product[] = [
  { id: 's1', name: 'AgeLOC Transformation', category: 'Skincare', image: '/beauwell/AgeLOC.png', description: 'Premier anti-aging system by NuSkin.' },
  { id: 's2', name: 'LumiSpa iO', category: 'Skincare', image: '/beauwell/LumiSpaIO.jpg', description: 'Smart facial cleansing device for skin renewal.' },
  { id: 's3', name: 'Galvanic Spa', category: 'Skincare', image: '/beauwell/GlavanicSpa.jpg', description: 'Ultimate age-defying home spa system.' },
  { id: 's4', name: 'Prysm iO', category: 'Skincare', image: '/beauwell/PrysmIO.jpg', description: 'Cutting-edge tool that non-invasively measures skin carotenoid levels.' },
];

const nutrition: Product[] = [
  { id: 'n1', name: 'LifePak Elements', category: 'Nutrition', image: '/beauwell/LifePakElements.png', description: 'Prysm iO approved comprehensive multivitamin and mineral supplement.' },
  { id: 'n2', name: 'Optimum Omega', category: 'Nutrition', image: '/beauwell/OptimumOmega.png', description: 'Give your body the Omega-3 support it needs with Optimum Omega.' },
  { id: 'n3', name: 'TRME Meal Balance', category: 'Nutrition', image: '/beauwell/MeaBalance.png', description: 'Satisfying nutrition anytime with MEAL BALANCE.' },
  { id: 'n4', name: 'Complete TRME Range', category: 'Nutrition', image: '/beauwell/TRME.png', description: 'High Nutrition Weight Management Programme.' },
];

export const Beauwell: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: introRef, isVisible: introVisible } = useScrollReveal<HTMLDivElement>(0.2);
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden">
      
      {/* Hero Header */}
      <div ref={heroRef} className="bg-beauwell-ice py-24 text-center px-4 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#F0F9F9_0%,#fff_100%)] opacity-80"></div>
         <div className={`relative z-10 transition-all duration-1000 ease-out transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="font-serif text-5xl md:text-7xl text-beauwell-slate mb-6">
            BEAUWELL
            </h1>
            <p className={`font-sans text-lg font-medium tracking-widest uppercase text-beauwell-sage transition-all duration-1000 delay-300 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Science-Based Wellness & Skincare
            </p>
        </div>
      </div>

      <div ref={introRef} className={`max-w-4xl mx-auto px-6 py-16 text-center transition-all duration-1000 delay-500 transform ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
         <p className="text-gray-700 text-xl font-normal leading-relaxed">
           Discover our curated selection of premium wellness products. We proudly partner with global leaders 
           to bring you the finest in science and nature.
         </p>
         <div className={`h-0.5 bg-beauwell-sage mx-auto mt-8 transition-all duration-1000 delay-700 ${introVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}></div>
      </div>

      <ProductGrid 
        title="Skincare Products" 
        description="Innovative dermatological solutions manufactured by NuSkin."
        products={skincare}
        theme="beauwell"
      />

      <div className="bg-gradient-to-b from-white to-beauwell-ice py-6"></div>

      <ProductGrid 
        title="Nutritional Wellness" 
        description="Pharmaceutical grade supplements by PharmaNex for optimal health."
        products={nutrition}
        theme="beauwell"
      />
      
      {/* Clinical Trust Badge Section */}
      <div ref={badgesRef} className="bg-beauwell-slate text-white py-24 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
                { title: 'Science Backed', desc: 'Rigorous testing and research behind every product.' },
                { title: 'Premium Quality', desc: 'Sourced from the finest ingredients worldwide.' },
                { title: 'Holistic Approach', desc: 'Addressing beauty from the inside out.' }
            ].map((item, idx) => (
                <div 
                    key={idx}
                    className={`p-4 transition-all duration-700 ease-out transform ${badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: badgesVisible ? `${idx * 200}ms` : '0ms' }}
                >
                    <div className="text-4xl mb-6 text-beauwell-sage animate-pulse">✦</div>
                    <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                    <p className="text-base text-gray-200 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};