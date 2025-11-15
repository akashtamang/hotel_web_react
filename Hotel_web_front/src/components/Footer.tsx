import logo from "../assets/logo/logo.png";

function Footer() {
    return (
        <footer className="bg-linear-to-br from-emerald-950 via-emerald-900 to-stone-900 text-gray-200 relative overflow-hidden">
            {/* soft overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">

                    {/* Logo & About */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img src={logo} alt="Bhattidanda Logo" className="w-24 rounded-xl shadow-lg" />
                            <h2 className="text-2xl font-semibold tracking-wide text-amber-300">
                                Bhattidanda Fresh & Natural Homestay
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed max-w-md">
                            Nestled in the serene hills of Dhulikhel, Bhattidanda Homestay offers
                            an authentic Nepali experience — where nature, culture, and warm hospitality
                            meet to create unforgettable memories.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4 border-b border-amber-400 w-fit pb-1">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Rooms & Stay</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4 border-b border-amber-400 w-fit pb-1">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Dhulikhel, Kavre, Nepal</li>
                            <li>📞 +977 9841XXXXXX</li>
                            <li>✉️ info@bhattidandahomestay.com</li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-5">
                            <a href="#" className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69..." />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569..." /> 
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-amber-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Bhattidanda Fresh & Natural Homestay. All Rights Reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with
                        <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4..." />
                        </svg>
                        in Dhulikhel, Nepal 🌄
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
