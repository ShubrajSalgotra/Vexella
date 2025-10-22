import React, { useState } from 'react';
import logo from '../assets/logo-without-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex items-center justify-between py-3">

          <a href="#home" className="flex items-center gap-3 min-w-0 group">
            <img
              src={logo}
              alt="Vexella Pharmaceuticals logo"
              className="h-10 md:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="whitespace-nowrap leading-none translate-y-[0.5px]">
              <span className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-900">
                Vexella
              </span>{' '}
              <span className="text-[20px] md:text-[22px] font-medium tracking-tight text-slate-600">
                Pharmaceuticals
              </span>
            </span>
          </a>


          <div className="hidden md:block h-6 w-px bg-slate-200/80 mx-6" />

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#product', label: 'Product' },
              { href: '#about', label: 'About' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative inline-block px-1 py-1 text-[15px] text-slate-700 hover:text-slate-900 transition-colors
                           after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:scale-x-0
                           after:bg-blue-600 after:transition-transform after:duration-300 hover:after:scale-x-100 origin-left"
              >
                {label}
              </a>
            ))}
          </div>


          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-slate-900">Home</a>
            <a href="#product" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-slate-900">Product</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-slate-900">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
