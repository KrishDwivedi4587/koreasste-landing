import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Lifestyle } from './pages/Lifestyle';
import { Beauwell } from './pages/Beauwell';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/beauwell" element={<Beauwell />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;