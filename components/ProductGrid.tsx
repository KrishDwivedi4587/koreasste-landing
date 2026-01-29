import React from 'react';
import { Product } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductGridProps {
  title: string;
  description?: string;
  products: Product[];
  theme: 'lifestyle' | 'beauwell';
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title, description, products, theme }) => {
  const isLifestyle = theme === 'lifestyle';
  const headingColor = isLifestyle ? 'text-koreasste-charcoal' : 'text-beauwell-slate';
  
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1, '0px 0px -50px 0px');

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className={`font-serif text-4xl md:text-5xl mb-6 ${headingColor}`}>
            {title}
          </h2>
          {description && (
            <p className="text-gray-700 font-sans text-lg leading-relaxed">
              {description}
            </p>
          )}
          <div className={`h-0.5 mx-auto mt-8 transition-all duration-1000 delay-500 ease-out ${isLifestyle ? 'bg-koreasste-gold' : 'bg-beauwell-sage'} ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div 
                key={product.id} 
                className="group cursor-pointer transition-all duration-700 ease-out"
                style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: isVisible ? `${150 + (index * 100)}ms` : '0ms'
                }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-sm bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <h3 className={`font-serif text-xl font-semibold mb-2 ${headingColor} group-hover:opacity-80 transition-opacity`}>
                {product.name}
              </h3>
              <p className="text-base text-gray-600 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};