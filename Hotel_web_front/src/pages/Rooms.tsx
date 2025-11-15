



import first from '../assets/picture/other/r-3.jpg';
import second from '../assets/picture/other/pic_r5_1.jpg';
import third from '../assets/picture/other/r-7.jpg';

const HotelRoomCards = () => {
  const rooms = [
    {
      id: 1,
      image: first,
      price: '$89 / night',
      title: 'Tamang Heritage Room',
      description:
        'The Tamang people often enjoy living together in groups, and even within families, they prefer to stay in the same room. That’s why this room is named “Tamang Heritage Room.” It is a spacious family room that can comfortably accommodate at least four people.',
    },
    {
      id: 2,
      image: second,
      price: '$129 / night',
      title: 'Himalayan Breeze Room',
      description:
        'During winter, you can feel the cool Himalayan breeze right from the balcony, where you can also enjoy a direct view of the mountains. The room features a comfortable king-size bed, an attached bathroom, and a spacious sofa for relaxation.',
    },
    {
      id: 3,
      image: third,
      price: '$159 / night',
      title: 'Mountain View Room',
      description: 'The Mountain View Room is a unique rooftop space with breathtaking 360° Himalayan views.Guests can enjoy both sunrise and sunset from the open terrace.The room has an external bathroom and can comfortably accommodate up to 3 people.Perfect for a serene and memorable getaway.'
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-emerald-600">Homestay/Guesthouse Rooms</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1 rounded-lg shadow-md text-sm font-semibold">
                  {room.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-gray-700">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 min-h-12 line-clamp-2 hover:line-clamp-none">
                  {room.description}
                </p>
                <button className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
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
