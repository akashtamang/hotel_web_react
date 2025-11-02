
import logo from '../assets/logo/logo.png'

function Navbar(){
    return (

        <div>

             {/* Header */}
  <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50 shadow-lg shadow-black/5">
    <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5" />
    <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="w-10 h-10  rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-lg">
              <img src={logo} alt="logo" />
              </span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Activity
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
        {/* CTA Button & Mobile Menu */}
      
      </div>
      {/* Mobile Navigation */}
      <div id="mobile-menu" className="md:hidden hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-slide-down">
        <div className="px-4 py-6 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">Contact</a>
          <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  </header>


        </div>
    )
}
export default Navbar;