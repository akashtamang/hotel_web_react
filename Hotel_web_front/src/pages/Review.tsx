import { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]); // Reviews fetched from backend
  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // For the slider

  const API_BASE_URL = "http://localhost:5000/api/reviews"; // Your backend API URL

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // Display some dummy data in case of error
      setReviews([
        { guestName: "Dummy User 1", rating: 5, comment: "Could not fetch reviews. Here's a placeholder.", date: new Date().toISOString(), img: "https://i.pravatar.cc/150?img=1" },
      ]);
    }
  };

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []); // [] means it runs only once when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      alert("Please fill in your name and comment.");
      return;
    }

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guestName: formData.name,
          rating: formData.rating,
          comment: formData.comment,
          // guestEmail (if you've added it to the Review Model)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review.');
      }

      // Clear the form after successful submission
      setFormData({ name: "", rating: 5, comment: "" });
      alert("Thank you! Your review has been submitted and is pending approval.");

      // Re-fetch reviews to update the UI (if approved)
      // fetchReviews(); // You can uncomment this if you want to immediately show new reviews (even if not yet approved)

    } catch (error) {
      console.error('Error submitting review:', error);
      alert("An error occurred while submitting your review. Please try again.");
    }
  };

  // Navigation for the slider
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex] || {
    guestName: "No Reviews Yet",
    rating: 0,
    comment: "Be the first to leave a review!",
    date: "",
    img: "https://i.pravatar.cc/150?img=50" // Default image
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-yellow-300" : "text-gray-400 opacity-50"} />
    ));
  };

  return (
    <div className="min-h-screen bg-[url('/images/hotel-bg.jpg')] bg-cover bg-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white mb-10">
          <h1 className="text-5xl font-serif font-semibold drop-shadow-lg">Enjoyed by Many</h1>
          <p className="mt-3 text-lg opacity-90">Real Stories, Real Comfort – Hear from Guests</p>
          <div className="w-40 h-[2px] bg-white/80 mt-4 mx-auto"></div>
        </div>

        {/* Write Review Section */}
        <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-6 mb-12 shadow-lg border border-white/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-amber-400"
              placeholder="Your name"
            />
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              className="w-full p-3 rounded-xl border"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>{r} Stars</option>
              ))}
            </select>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full p-3 rounded-xl border h-28"
              placeholder="Write your experience..."
            />
            <div className="flex gap-4">
              <button type="submit" className="flex-1 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-xl font-semibold">Submit Review</button>
              <button type="button" onClick={() => setFormData({ name: '', rating: 5, comment: '' })} className="px-4 py-3 border rounded-xl">Clear</button>
            </div>
          </form>
        </div>

        {/* Review Slider Section */}
        <div className="relative mt-16 flex items-center justify-center">

          {/* Left Navigation (hidden on small screens) */}
          <div className="w-72 h-80 mx-4 rounded-3xl bg-white/15 backdrop-blur-lg p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] hidden md:flex flex-col justify-between items-center">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">
              {renderStars(currentReview.rating)}
            </div>
            <p className="mt-12 text-white/80 text-sm">
              Overall Rating
            </p>
            <div className="mt-16 flex justify-center">
              <FaArrowLeft onClick={prevReview} className="text-4xl text-yellow-300/90 bg-white/20 rounded-full p-3 cursor-pointer" />
            </div>
          </div>

          {/* Center Main Review */}
          <div className="w-[650px] mx-4 rounded-3xl bg-white/20 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(0,0,0,0.35)]">

            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">{currentReview.guestName}</h2>
                <p className="text-white/70 text-sm">
                  {currentReview.date ? new Date(currentReview.date).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div className="flex items-center gap-1 text-yellow-300 text-xl">
                {renderStars(currentReview.rating)}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mt-6">
              <img
                src={currentReview.img || "https://i.pravatar.cc/150?img=50"} // Default if img is not from backend
                alt={currentReview.guestName}
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl"
              />
            </div>

            {/* Review Text */}
            <p className="text-white/90 text-center mt-6 leading-relaxed">
              {currentReview.comment}
            </p>
          </div>

          {/* Right Navigation (hidden on small screens) */}
          <div className="w-72 h-80 mx-4 rounded-3xl bg-white/15 backdrop-blur-lg p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] hidden md:flex flex-col justify-between items-center">
            <h2 className="text-xl text-white font-semibold">Proceed</h2>
            <p className="text-sm text-white/70">View next review</p>
            <div className="mt-8 flex justify-center">
              <FaArrowRight onClick={nextReview} className="text-4xl text-yellow-300/90 bg-white/20 rounded-full p-3 cursor-pointer" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}