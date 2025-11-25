import { useParams, useNavigate } from "react-router-dom";
import { FaMountain, FaBicycle, FaUsers, FaBuilding, FaCamera, FaUtensilSpoon, FaArrowLeft, FaClock, FaMapPin } from "react-icons/fa";

interface ActivityDetails {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType;
  color: string;
  duration: string;
  groupSize: string;
  location: string;
  price: string;
}

const ActivityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const activities: Record<number, ActivityDetails> = {
    1: {
      id: 1,
      title: "Hiking",
      description: "Explore the scenic hiking trails around Dhulikhel with breathtaking views of the Himalayas and lush green valleys.",
      icon: FaMountain,
      color: "from-blue-500 to-cyan-500",
      duration: "1-4 hours",
      groupSize: "2-8 people",
      location: "Dhulikhel Hills & Surrounding Areas",
      price: "$25-40 per person",
    },
    2: {
      id: 2,
      title: "Cycling",
      description: "Ride through picturesque villages and countryside on well-maintained cycling routes perfect for all experience levels.",
      icon: FaBicycle,
      color: "from-red-500 to-orange-500",
      duration: "2-6 hours",
      groupSize: "1-10 people",
      location: "Dhulikhel & Village Routes",
      price: "$30-50 per person",
    },
    3: {
      id: 3,
      title: "Village Walk",
      description: "Take a leisurely walk through traditional Nepali villages, interact with locals, and experience authentic village life.",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      duration: "1-2 hours",
      groupSize: "2-6 people",
      location: "Nearby Villages",
      price: "$15-25 per person",
    },
    4: {
      id: 4,
      title: "Heritage Visit",
      description: "Discover historical temples, ancient architecture, and cultural landmarks dating back centuries in Dhulikhel.",
      icon: FaBuilding,
      color: "from-amber-500 to-yellow-500",
      duration: "2-3 hours",
      groupSize: "1-8 people",
      location: "Dhulikhel Historic Sites",
      price: "$20-35 per person",
    },
    5: {
      id: 5,
      title: "Photography Tour",
      description: "Capture stunning landscapes, wildlife, and cultural moments with our professional photography guides.",
      icon: FaCamera,
      color: "from-purple-500 to-pink-500",
      duration: "2-4 hours",
      groupSize: "1-6 people",
      location: "Best scenic spots around Dhulikhel",
      price: "$40-60 per person",
    },
    6: {
      id: 6,
      title: "Local Cuisine Tasting",
      description: "Taste authentic Nepali dishes and learn traditional cooking methods from local homestay owners.",
      icon: FaUtensilSpoon,
      color: "from-orange-500 to-red-500",
      duration: "2-3 hours",
      groupSize: "1-4 people",
      location: "Homestay Kitchen",
      price: "$25-40 per person",
    },
  };

  const activity = activities[Number(id)];

  if (!activity) {
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Activity Not Found</h1>
          <button
            onClick={() => navigate("/activity")}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-green-50 py-12 px-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header with Icon and Color */}
        <div className={`bg-linear-to-r ${activity.color} h-40 flex items-center justify-center`}>
          <div className="text-6xl text-white">
            {activity.icon === FaMountain && <FaMountain />}
            {activity.icon === FaBicycle && <FaBicycle />}
            {activity.icon === FaUsers && <FaUsers />}
            {activity.icon === FaBuilding && <FaBuilding />}
            {activity.icon === FaCamera && <FaCamera />}
            {activity.icon === FaUtensilSpoon && <FaUtensilSpoon />}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{activity.title}</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{activity.description}</p>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <FaClock size={18} /> Duration
              </div>
              <p className="text-gray-700 font-semibold">{activity.duration}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <FaUsers size={18} /> Group Size
              </div>
              <p className="text-gray-700 font-semibold">{activity.groupSize}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <FaMapPin size={18} /> Location
              </div>
              <p className="text-gray-700 font-semibold">{activity.location}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="text-emerald-600 font-bold mb-2">💰 Price</div>
              <p className="text-gray-700 font-semibold">{activity.price}</p>
            </div>
          </div>

          {/* Booking Button */}
          <button
            className={`w-full py-4 px-6 rounded-lg font-bold text-white bg-linear-to-r ${activity.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
