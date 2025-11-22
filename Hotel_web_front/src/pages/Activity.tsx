import { FaMountain, FaBicycle, FaUsers, FaBuilding, FaCamera, FaUtensilSpoon } from "react-icons/fa";

const Activity = () => {
  const activities = [
    {
      id: 1,
      title: "Hiking",
      description: "Explore the scenic hiking trails around Dhulikhel with breathtaking views of the Himalayas and lush green valleys.",
      icon: FaMountain,
      color: "from-blue-500 to-cyan-500",
      highlights: ["Mountain trails", "Nature views", "1-4 hours", "All levels"],
    },
    {
      id: 2,
      title: "Cycling",
      description: "Ride through picturesque villages and countryside on well-maintained cycling routes perfect for all experience levels.",
      icon: FaBicycle,
      color: "from-red-500 to-orange-500",
      highlights: ["Village routes", "Scenic roads", "2-6 hours", "Bikes provided"],
    },
    {
      id: 3,
      title: "Village Walk",
      description: "Take a leisurely walk through traditional Nepali villages, interact with locals, and experience authentic village life.",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      highlights: ["Local culture", "Community visit", "1-2 hours", "Guided tours"],
    },
    {
      id: 4,
      title: "Heritage Visit",
      description: "Discover historical temples, ancient architecture, and cultural landmarks dating back centuries in Dhulikhel.",
      icon: FaBuilding,
      color: "from-amber-500 to-yellow-500",
      highlights: ["Ancient temples", "Architecture", "2-3 hours", "Expert guides"],
    },
    {
      id: 5,
      title: "Photography Tour",
      description: "Capture stunning landscapes, wildlife, and cultural moments with our professional photography guides.",
      icon: FaCamera,
      color: "from-purple-500 to-pink-500",
      highlights: ["Scenic spots", "Golden hour", "2-4 hours", "Tips included"],
    },
    {
      id: 6,
      title: "Local Cuisine Tasting",
      description: "Taste authentic Nepali dishes and learn traditional cooking methods from local homestay owners.",
      icon: FaUtensilSpoon,
      color: "from-orange-500 to-red-500",
      highlights: ["Nepali food", "Cooking class", "2-3 hours", "Farm to table"],
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-green-50 py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Explore <span className="text-emerald-600">Activities</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover unforgettable experiences in the beautiful hills of Dhulikhel. From adventure to culture, we have something for everyone.
        </p>
      </div>

      {/* Activity Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={activity.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${activity.color}`} />

              {/* Icon Circle */}
              <div className="pt-8 px-6 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-full bg-linear-to-br ${activity.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="text-white text-3xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-20 leading-relaxed">
                  {activity.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {activity.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-2 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white bg-linear-to-r ${activity.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Learn More
                </button>
              </div>

              {/* Hover Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500" />
            </div>
          );
        })}
      </div>

      {/* Additional Info Section */}
      <div className="max-w-7xl mx-auto mt-20 bg-white rounded-2xl shadow-lg p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">6+</div>
            <p className="text-gray-600 font-semibold">Diverse Activities</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">1-6</div>
            <p className="text-gray-600 font-semibold">Hours Duration</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">All</div>
            <p className="text-gray-600 font-semibold">Skill Levels</p>
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="max-w-7xl mx-auto mt-16 bg-linear-to-r from-emerald-600 to-green-600 rounded-2xl shadow-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for an Adventure?</h2>
        <p className="text-lg mb-8 opacity-90">
          Book your favorite activity today and create unforgettable memories in Dhulikhel.
        </p>
        <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Activity;