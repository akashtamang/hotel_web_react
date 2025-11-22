import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png'

function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 w-full bg-green/80 backdrop-blur-lg border-b border-gray-200/50 z-50 shadow-lg shadow-black/5">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5" />
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Clickable to Home */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">
                  <img src={logo} alt="logo" />
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <a href="#about" onClick={closeMobileMenu} className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <Link to="/rooms" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group">
                Rooms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <a href="#gallery" onClick={closeMobileMenu} className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-slide-down">
              <div className="px-4 py-6 space-y-4">
                <Link to="/" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200">
                  Home
                </Link>
                <a href="#about" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200">
                  About
                </a>
                <Link to="/rooms" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200">
                  Rooms
                </Link>
                <a href="#gallery" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200">
                  Gallery
                </a>
                <a href="#contact" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;