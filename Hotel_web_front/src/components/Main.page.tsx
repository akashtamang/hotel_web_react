

function MainPage() {
    return (
        <div>
            {/* Main Content (Demo) */}
            <main className="flex-1 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                        Beautiful Website
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Design
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 animate-fade-in max-w-2xl mx-auto">
                        This is a demo content area showcasing the modern header and footer design.
                        The header features glassmorphism effects, smooth animations, and responsive navigation.
                    </p>
                    <div className="animate-bounce-subtle">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default MainPage;