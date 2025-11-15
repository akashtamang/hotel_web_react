
import React, { useEffect, useState } from "react";


interface Photo {
  src: string;
  caption: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data: Photo[]) => setPhotos(data))
      .catch((err) => console.error("Error loading gallery:", err));
  }, []);

  const categories = ["All", "Room", "Nature", "Food", "People"];

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-green-50 py-16 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          📸 Our <span className="text-emerald-600">Photo Gallery</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Explore beautiful moments from our homestay and surroundings.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
              activeCategory === cat
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-emerald-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center text-base px-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-[90%]">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="rounded-lg w-full max-h-[80vh] object-contain shadow-2xl"
            />
            <p className="text-center text-white text-lg mt-4">
              {selectedImage.caption}
            </p>
            <button
              className="absolute top-2 right-2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-8 h-8 font-bold shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;


