


import sunrise from "../assets/picture/other/sunrise.png";
import toast from "../assets/picture/other/toast.jpg";
import nature from "../assets/picture/other/nature.jpg";

const MiddlePage = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-b from-green-400 via-green-200 to-green-100 animate-gradient-move"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-lora font-bold text-[#2f402f] mb-8 drop-shadow-md">
          A Peaceful Escape in the Heart of Nature 
        </h2>

        <p className="text-gray-800 text-shado-sm text-lg md:text-xl leading-relaxed font-libre-baskerville mb-14">
          Bhattidanda Fresh & Natural Guesthouse/Homestay in Dhulikhel is a peaceful
          sanctuary surrounded by the Himalayas. More than just a stay, it
          offers a heartfelt connection to nature, culture, and community.
          Guests are welcomed like family, enjoy fresh organic meals from the
          garden, and experience authentic village life through local
          traditions, stories, and warm hospitality. Rebuilt with love after the
          earthquake, Bhattidanda stands as a symbol of resilience and harmony —
          a place where you find peace, joy, and a true sense of belonging.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[sunrise, toast, nature].map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <img src={img} alt="" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiddlePage;
