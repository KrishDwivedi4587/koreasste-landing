import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BrandTheme } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLifestyle = location.pathname.includes('lifestyle');
  const isBeauwell = location.pathname.includes('beauwell');

  let navBg = 'bg-white/95 backdrop-blur-md border-b border-gray-100';
  let linkHover = 'hover:text-gray-600';
  let brandColor = 'text-gray-900';

  if (isLifestyle) {
    navBg = 'bg-[#ECEAE5]/95 backdrop-blur-md border-b border-stone-200';
    linkHover = 'hover:text-koreasste-gold';
    brandColor = 'text-koreasste-charcoal';
  } else if (isBeauwell) {
    navBg = 'bg-white/95 backdrop-blur-md border-b border-teal-50';
    linkHover = 'hover:text-beauwell-sage';
    brandColor = 'text-beauwell-slate';
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-full border border-gray-200 shadow-sm flex-shrink-0 transition-transform duration-300">
              <img 
                src="/lifestyle/KoreassteLogo.png" 
                alt="Koreasste Logo" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className={`text-2xl md:text-3xl font-serif tracking-[0.1em] font-bold ${brandColor} transition-colors`}>
              KOREASSTE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link to="/" className={`font-sans text-base font-medium tracking-widest uppercase transition-colors ${brandColor} ${linkHover}`}>
              Home
            </Link>
            <Link to="/about" className={`font-sans text-base font-medium tracking-widest uppercase transition-colors ${brandColor} ${linkHover}`}>
              About
            </Link>
            <Link to="/lifestyle" className={`font-sans text-base font-medium tracking-widest uppercase transition-colors ${brandColor} ${linkHover}`}>
              Lifestyle
            </Link>
            <Link to="/beauwell" className={`font-sans text-base font-medium tracking-widest uppercase transition-colors ${brandColor} ${linkHover}`}>
              Nu Skin
            </Link>
            <Link to="/contact" className={`font-sans text-base font-medium tracking-widest uppercase transition-colors ${brandColor} ${linkHover}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${brandColor} focus:outline-none`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium uppercase tracking-widest text-gray-800">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium uppercase tracking-widest text-gray-800">About</Link>
          <Link to="/lifestyle" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium uppercase tracking-widest text-gray-800">Lifestyle</Link>
          <Link to="/beauwell" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium uppercase tracking-widest text-gray-800">BEAUWELL</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium uppercase tracking-widest text-gray-800">Contact</Link>
        </div>
      </div>
    </nav>
  );
};