import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-serif text-2xl mb-6 font-bold">KOREASSTE</h3>
          <p className="text-gray-300 text-base leading-relaxed">
            Defining elegance through lifestyle and purity through wellness.
          </p>
          <Link to="/about" className="text-sm font-bold text-gray-400 hover:text-white mt-6 inline-block transition-colors uppercase tracking-wider">Read Our Story</Link>
        </div>
        <div>
          <h4 className="font-sans uppercase text-sm font-bold tracking-widest mb-6 text-gray-500">Brands</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><Link to="/lifestyle" className="hover:text-koreasste-gold transition-colors">Koreasste</Link></li>
            <li><Link to="/beauwell" className="hover:text-beauwell-sage transition-colors">BEAUWELL</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans uppercase text-sm font-bold tracking-widest mb-6 text-gray-500">Contact</h4>
          <Link to="/contact" className="text-base text-gray-300 hover:text-white transition-colors">
            Feel free to reach out to us!
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Koreasste. All rights reserved.
      </div>
    </footer>
  );
};