import React, { useEffect } from 'react';
import { Slideshow } from '../components/Slideshow';
import { SlideData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Utensils, HeartPulse, Scale } from 'lucide-react';

const recipeSlides: SlideData[] = [
  { id: 1, image: '/nutrition/RedSalad.png', title: 'Red Bean Salad Bowl', subtitle: 'A vibrant, protein-rich blend of kidney beans, fresh vegetables, and herbs.' },
  { id: 2, image: '/nutrition/CornTofu.png', title: 'Corn Tofu Salad', subtitle: 'Crunchy corn and silky tofu tossed with fresh, zesty greens.' },
  { id: 3, image: '/nutrition/ChickpeaSalad.png', title: 'Chickpeas Pomegranate Salad', subtitle: 'Sweet and savory chickpeas mixed with bursting pomegranate and herbs.' },
  { id: 4, image: '/nutrition/EggAvacado.png', title: 'Boiled Eggs Avocado Salad', subtitle: 'Creamy avocado paired with protein-packed boiled eggs and fresh seasoning.' },
];

export const ArhanSiam: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: introRef, isVisible: introVisible } = useScrollReveal<HTMLDivElement>(0.2);
  const { ref: sliderSectionRef, isVisible: sliderSectionVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: dietRef, isVisible: dietVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div className="bg-[#FDF8F3] min-h-screen pt-20 overflow-x-hidden">
      
      {/* Hero Header */}
      <div ref={heroRef} className="bg-white py-24 text-center px-4 relative overflow-hidden border-b border-orange-50">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#FFF9F2_0%,#fff_100%)] opacity-70"></div>
         <div className={`relative z-10 transition-all duration-1000 ease-out transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="font-serif text-5xl md:text-7xl text-arhansiam-moss mb-6">
            NUTRIFORM
            </h1>
            <p className={`font-sans text-lg font-medium tracking-widest uppercase text-arhansiam-clay transition-all duration-1000 delay-300 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Nourishment • Balance • Vitality
            </p>
        </div>
      </div>

      <div ref={introRef} className={`max-w-4xl mx-auto px-6 py-16 text-center transition-all duration-1000 delay-500 transform ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
         <p className="text-gray-700 text-xl font-normal leading-relaxed">
           NutriForm bridges the gap between culinary delight and physiological health. We curate recipes and diets designed to fuel your journey toward peak vitality.
         </p>
         <div className={`h-0.5 bg-arhansiam-clay mx-auto mt-8 transition-all duration-1000 delay-700 ${introVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}></div>
      </div>

      {/* Aesthetic Image Showcase Slider */}
      <section ref={sliderSectionRef} className={`py-12 transition-all duration-1000 transform ${sliderSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-arhansiam-moss mb-3">Nutritious Recipes</h2>
            <p className="text-gray-500 font-sans tracking-wide text-sm md:text-base">Signature meals crafted with clinical precision and gastronomic soul.</p>
        </div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative border border-white/50">
            <Slideshow 
              slides={recipeSlides} 
              id="arhansiam-recipe-slider"
              theme="dark"
            />
          </div>
        </div>
      </section>

      {/* Diet Plans Section */}
      <section ref={dietRef} className="py-24 px-6 bg-arhansiam-moss text-white overflow-hidden mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Dietary Foundations</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Scientifically structured protocols to optimize your body's natural processes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white/5 p-10 rounded-lg border border-white/10 transition-all duration-1000 transform ${dietVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
               <div className="flex items-center space-x-4 mb-6">
                 <div className="p-3 bg-arhansiam-clay/20 rounded-full text-arhansiam-clay">
                   <HeartPulse size={28} />
                 </div>
                 <h3 className="font-serif text-3xl">Anti-Inflammatory Protocol</h3>
               </div>
               <p className="text-gray-300 leading-loose mb-8">
                 Focusing on omega-rich fats, phytonutrients, and gut-health staples to reduce systemic stress and enhance recovery.
               </p>
               <ul className="space-y-4 text-sm font-sans uppercase tracking-widest text-arhansiam-clay font-bold">
                 <li>• Zero Processed Sugars</li>
                 <li>• High Antioxidant Load</li>
                 <li>• Gut-Biome Support</li>
               </ul>
            </div>

            <div className={`bg-white/5 p-10 rounded-lg border border-white/10 transition-all duration-1000 delay-200 transform ${dietVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
               <div className="flex items-center space-x-4 mb-6">
                 <div className="p-3 bg-arhansiam-clay/20 rounded-full text-arhansiam-clay">
                   <Scale size={28} />
                 </div>
                 <h3 className="font-serif text-3xl">Metabolic Reset Plan</h3>
               </div>
               <p className="text-gray-300 leading-loose mb-8">
                 A 21-day cycle designed to rebalance insulin sensitivity and optimize fat oxidation through intermittent nutritional windows.
               </p>
               <ul className="space-y-4 text-sm font-sans uppercase tracking-widest text-arhansiam-clay font-bold">
                 <li>• Circadian Timing</li>
                 <li>• Macronutrient Cycling</li>
                 <li>• Pure Hydration focus</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Utensils className="w-12 h-12 text-arhansiam-clay mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-4xl mb-8 text-arhansiam-moss">Nourishment as Art</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            "Your diet is a bank account. Good food choices are good investments." We believe that the ingredients you choose today become the cells that sustain you tomorrow.
          </p>
        </div>
      </section>

    </div>
  );
};