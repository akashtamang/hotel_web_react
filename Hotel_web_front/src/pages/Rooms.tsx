



import { useNavigate } from "react-router-dom";
import { rooms as roomsData } from "../data/rooms";

const HotelRoomCards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-emerald-600">Homestay/Guesthouse Rooms</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1 rounded-lg shadow-md text-sm font-semibold">
                  {room.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-gray-700">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 min-h-12 line-clamp-2 hover:line-clamp-none">
                  {room.description}
                </p>
                <button
                  onClick={() => navigate(`/rooms/${room.id}`)}
                  className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRoomCards;
