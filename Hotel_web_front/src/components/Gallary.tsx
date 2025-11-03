

// import React, { useState, useEffect } from 'react';
// import first from '../assets/picture/other/r-3.jpg';
// import second from '../assets/picture/other/pic_r5_1.jpg';
// import third from '../assets/picture/other/r-7.jpg';

// /**
//  * Gallery component
//  * - Responsive grid of thumbnails
//  * - Click thumbnail to open lightbox modal
//  * - Prev / Next / Close controls + keyboard navigation (Esc, ←, →)
//  *
//  * Add more images: import and push into `images` array below.
//  */

// const images = [
//     { id: 1, src: first, alt: 'Homestay view 1', caption: 'Garden view' },
//     { id: 2, src: second, alt: 'Homestay view 2', caption: 'Cozy room corner' },
//     { id: 3, src: third, alt: 'Homestay view 3', caption: 'Mountain view' },
//     // { id: 4, src: otherImage, alt: '...', caption: '...' }, // add more if needed
// ];

// const Gallery = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [current, setCurrent] = useState(0);

//     const openAt = (index) => {
//         setCurrent(index);
//         setIsOpen(true);
//     };

//     const close = () => setIsOpen(false);

//     const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
//     const next = () => setCurrent((c) => (c + 1) % images.length);

//     // Keyboard navigation
//     useEffect(() => {
//         const onKey = (e) => {
//             if (!isOpen) return;
//             if (e.key === 'Escape') close();
//             if (e.key === 'ArrowLeft') prev();
//             if (e.key === 'ArrowRight') next();
//         };
//         window.addEventListener('keydown', onKey);
//         return () => window.removeEventListener('keydown', onKey);
//     }, [isOpen]);

//     return (
//         <div className="min-h-screen bg-linear-to-b from-green-50 via-gray-100 to-gray-200 py-12 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
//                     Photo Gallery
//                 </h2>

//                 {/* Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {images.map((img, idx) => (
//                         <button
//                             key={img.id}
//                             onClick={() => openAt(idx)}
//                             className="group relative overflow-hidden rounded-lg shadow-sm focus:outline-none"
//                             aria-label={`Open image ${idx + 1}`}
//                         >
//                             <img
//                                 src={img.src}
//                                 alt={img.alt}
//                                 className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                                 loading="lazy"
//                             />
//                             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent text-white text-sm p-2 opacity-90">
//                                 {img.caption}
//                             </div>
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Lightbox Modal */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                     role="dialog"
//                     aria-modal="true"
//                 >
//                     {/* backdrop */}
//                     <div
//                         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                         onClick={close}
//                     />

//                     <div className="relative max-w-4xl w-full mx-auto">
//                         {/* Image container */}
//                         <div className="bg-white rounded-xl overflow-hidden shadow-xl">
//                             <div className="relative">
//                                 <img
//                                     src={images[current].src}
//                                     alt={images[current].alt}
//                                     className="w-full max-h-[70vh] object-contain bg-gray-100"
//                                 />

//                                 {/* Price / caption strip */}
//                                 <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent text-white p-4">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <div className="text-sm font-medium">
//                                                 {images[current].caption}
//                                             </div>
//                                             <div className="text-xs opacity-80">{`${current + 1} of ${images.length}`}</div>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <button
//                                                 onClick={prev}
//                                                 aria-label="Previous"
//                                                 className="bg-white/10 hover:bg-white/20 rounded-md p-2 text-white"
//                                             >
//                                                 ‹
//                                             </button>
//                                             <button
//                                                 onClick={next}
//                                                 aria-label="Next"
//                                                 className="bg-white/10 hover:bg-white/20 rounded-md p-2 text-white"
//                                             >
//                                                 ›
//                                             </button>
//                                             <button
//                                                 onClick={close}
//                                                 aria-label="Close"
//                                                 className="ml-2 bg-white/10 hover:bg-white/20 rounded-md p-2 text-white"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Thumbnails inside modal (optional) */}
//                             <div className="flex gap-2 p-3 overflow-x-auto bg-gray-50">
//                                 {images.map((img, i) => (
//                                     <button
//                                         key={img.id}
//                                         onClick={() => setCurrent(i)}
//                                         className={`flex-shrink-0 rounded-md overflow-hidden border ${i === current ? 'ring-2 ring-emerald-400' : 'border-gray-200'
//                                             }`}
//                                         aria-label={`Go to image ${i + 1}`}
//                                     >
//                                         <img
//                                             src={img.src}
//                                             alt={img.alt}
//                                             className="w-24 h-16 object-cover"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Gallery;


// import React, { useEffect, useState } from "react";

// interface Photo {
//   src: string;
//   caption: string;
// }

// const Gallery: React.FC = () => {
//   const [photos, setPhotos] = useState<Photo[]>([]);
//   const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

//   useEffect(() => {
//     fetch("/data/gallery.json")
//       .then((res) => res.json())
//       .then((data: Photo[]) => setPhotos(data))
//       .catch((err) => console.error("Error loading gallery:", err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 py-16 px-6">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 mb-3">
//           📸 Our <span className="text-emerald-600">Photo Gallery</span>
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Glimpses of our homestay, nature, and peaceful mountain life.
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//             onClick={() => setSelectedImage(photo)}
//           >
//             <img
//               src={photo.src}
//               alt={photo.caption}
//               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <p className="text-white text-center text-base px-2">
//                 {photo.caption}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-3xl w-[90%]">
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.caption}
//               className="rounded-lg w-full max-h-[80vh] object-contain shadow-2xl"
//             />
//             <p className="text-center text-white text-lg mt-4">
//               {selectedImage.caption}
//             </p>
//             <button
//               className="absolute top-2 right-2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-8 h-8 font-bold shadow-md"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 py-16 px-6">
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


