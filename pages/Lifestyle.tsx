import React, { useEffect } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const fashionJewelry: Product[] = [
  { id: 'j1', name: 'Amethyst Stud Earrings', category: 'Jewelry', image: 'public/lifestyle/Earrings.jpg', description: 'Raw purple stones in golden settings' },
  { id: 'j2', name: 'Statement Necklace', category: 'Jewelry', image: 'public/lifestyle/FullSet.jpg', description: 'A bold statement piece for evening wear.' },
  { id: 'j3', name: 'Minimalist Cuff', category: 'Jewelry', image: 'public/lifestyle/bracelet.jpeg', description: 'Sleek geometric design for everyday elegance.' },
  { id: 'j4', name: 'Vibrant Full Sets', category: 'Jewelry', image: 'public/lifestyle/TiffanyBlue.jpg', description: 'Exquisite Full Sets to steal the evening spotlight.' },
];

const accessories: Product[] = [
  { id: 'a1', name: 'Cashmere Fringe Scarf', category: 'Accessories', image: 'public/lifestyle/FringedScarf.jpg', description: 'Luxurious camel cashmere wrap with elegant fringed edges.' },
  { id: 'a2', name: 'Leather Clutch', category: 'Accessories', image: 'public/lifestyle/LeatherClutch.png', description: 'Vegetable black leather with gold hardware.' },
  { id: 'a3', name: 'Cashmere Wrap', category: 'Accessories', image: 'public/lifestyle/CashmereWrap.jpg', description: 'Soft, warm, and incredibly light.' },
  { id: 'a4', name: 'Statement Belt', category: 'Accessories', image: 'public/lifestyle/StatementBelt.jpg', description: 'An eye catching piece to complement your outfit.' },
];


const indianWear: Product[] = [
  { id: 'i1', name: 'Embroidered Saree', category: 'Indian', image: 'public/lifestyle/EmbroideredSaree.jpg', description: 'Hand-loomed with zari borders.' },
  { id: 'i2', name: 'Anarkali Suit', category: 'Indian', image: 'public/lifestyle/AnarkaliSuit.jpg', description: 'Flowing silhouette with intricate thread work.' },
  { id: 'i3', name: 'Fusion Kurti', category: 'Indian', image: 'public/lifestyle/FusionKurti.jpg', description: 'Modern cut suitable for office or casual outings.' },
  { id: 'i4', name: 'Bridal Lehenga', category: 'Indian', image: 'public/lifestyle/BridalLehenga.jpg', description: 'Heavy embroidery for the special day.' },
];


const westernWear: Product[] = [
  { id: 'w1', name: 'Linen Summer Blazer', category: 'Western', image: 'public/lifestyle/LinenSummerBlazer.jpg', description: 'Breathable fabric perfect for warm days.' },
  { id: 'w2', name: 'Tailored Trousers', category: 'Western', image: 'public/lifestyle/TailoredTrousers.jpg', description: 'High-waisted cut with a modern silhouette.' },
  { id: 'w3', name: 'Evening Gown', category: 'Western', image: 'public/lifestyle/EveningGown.jpg', description: 'Floor-length dress in midnight blue.' },
  { id: 'w4', name: 'Structured Coat', category: 'Western', image: 'public/lifestyle/StructuredCoat.jpg', description: 'Wool blend coat for winter elegance.' },
];



export const Lifestyle: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: sepRef, isVisible: sepVisible } = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div className="bg-[#ECEAE5] min-h-screen pt-20 overflow-x-hidden">
      
      {/* Hero Header */}
      <div ref={heroRef} className="bg-white py-24 text-center px-4 shadow-sm relative overflow-hidden">
        {/* Background decorative element */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f6f1] opacity-50`}></div>
        
        <div className={`relative z-10 transition-all duration-1000 ease-out transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-serif text-5xl md:text-7xl text-koreasste-charcoal mb-6">
            Lifestyle
          </h1>
          <p className={`font-sans text-lg font-medium tracking-widest uppercase text-koreasste-gold transition-all duration-1000 delay-300 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Curated Fashion & Timeless Elegance
          </p>
        </div>

      </div>

      <ProductGrid 
        title="Fashion Jewelry" 
        description="Exquisite pieces designed to accentuate your natural beauty."
        products={fashionJewelry}
        theme="lifestyle"
      />

      <div ref={sepRef} className="max-w-7xl mx-auto px-6 py-12">
        <div className={`h-px bg-stone-300 w-full transition-all duration-1000 delay-500 transform ${sepVisible ? 'scale-x-100 opacity-50' : 'scale-x-0 opacity-0'}`}></div>

      </div>

      <ProductGrid 
        title="Accessories" 
        description="The finishing touches that define your personal style."
        products={accessories}
        theme="lifestyle"
      />

      <div className="bg-white py-16 my-8 shadow-sm">
        <ProductGrid 
          title="Indian Garments" 
          description="Celebrating heritage with intricate craftsmanship."
          products={indianWear}
          theme="lifestyle"
        />

      </div>

      <ProductGrid 
        title="Western Wear" 
        description="Modern silhouettes meeting classic tailoring."
        products={westernWear}
        theme="lifestyle"
      />

    </div>
  );
};
