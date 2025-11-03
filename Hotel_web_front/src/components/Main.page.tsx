

import front from "../assets/picture/other/front.png";

function MainPage() {
  return (
    <div>
      {/* Hero / Main Section */}
      <main
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${front})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-lora font-bold text-white drop-shadow-lg animate-fade-in">
            Bhattidanda Fresh & Natural Homestay
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-white/90 font-libre-baskerville leading-relaxed animate-fade-in-up">
            Experience the warmth of Nepali hospitality amidst the serene hills of Dhulikhel 🌿
          </p>

          <button className="mt-10 px-8 py-3 text-lg md:text-xl rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            View Rooms & Availability
          </button>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
