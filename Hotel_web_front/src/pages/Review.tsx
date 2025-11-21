import { useState, useEffect, useMemo } from "react";
import type { FormEvent } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Review = {
  guestName: string;
  rating: number;
  comment: string;
  date?: string;
  img?: string;
  source?: string;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]); // Reviews fetched from backend
  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // For the slider
  const [activeSource, setActiveSource] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const websiteLabel = useMemo(
    () => (typeof window !== "undefined" ? window.location.hostname : "www.example.com"),
    []
  );

  const API_BASE_URL = "http://localhost:5000/api/reviews"; // Your backend API URL

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      const normalized: Review[] = Array.isArray(data)
        ? data.map((review) => ({
            ...review,
            source: review.source || "Direct",
          }))
        : [];
      setReviews(normalized);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // Display some dummy data in case of error
      setReviews([
        { guestName: "Dummy User 1", rating: 5, comment: "Could not fetch reviews. Here's a placeholder.", date: new Date().toISOString(), img: "https://i.pravatar.cc/150?img=1", source: "Direct" },
      ]);
    }
  };

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []); // [] means it runs only once when the component mounts

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          source: "Direct",
          // guestEmail (if you've added it to the Review Model)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review.');
      }

      // Clear the form after successful submission
      setFormData({ name: "", rating: 5, comment: "" });
      alert("Thank you! Your review has been submitted and is pending approval.");
      setIsFormOpen(false);

      // Re-fetch reviews to update the UI (if approved)
      // fetchReviews(); // You can uncomment this if you want to immediately show new reviews (even if not yet approved)

    } catch (error) {
      console.error('Error submitting review:', error);
      alert("An error occurred while submitting your review. Please try again.");
    }
  };

  // Navigation for the slider
  const sourceOptions = useMemo(() => {
    const uniqueSources = Array.from(new Set(reviews.map((review) => review.source || "Direct"))).filter(s => s !== "Direct");
    return uniqueSources; // do not include 'All' and filter out 'Direct' from the buttons
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    if (activeSource === "All") return reviews;
    return reviews.filter((review) => (review.source || "Direct") === activeSource);
  }, [activeSource, reviews]);

  useEffect(() => {
    setCurrentReviewIndex(0);
  }, [activeSource, filteredReviews.length]);

  const nextReview = () => {
    if (!filteredReviews.length) return;
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    if (!filteredReviews.length) return;
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleRatingClick = (value: number) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const currentReview = filteredReviews[currentReviewIndex] || {
    guestName: "No Reviews Yet",
    rating: 0,
    comment: "Be the first to leave a review!",
    date: "",
    img: "https://i.pravatar.cc/150?img=50", // Default image
    source: activeSource === "All" ? "Awaiting submissions" : activeSource,
  };

  const slidesPerView = 3;
  const visibleReviews = useMemo(() => {
    if (!filteredReviews.length) {
      return [currentReview];
    }
    const count = Math.min(slidesPerView, filteredReviews.length);
    return Array.from({ length: count }, (_, idx) => filteredReviews[(currentReviewIndex + idx) % filteredReviews.length]);
  }, [filteredReviews, currentReviewIndex, currentReview]);

  const totalPages = filteredReviews.length ? Math.ceil(filteredReviews.length / slidesPerView) : 1;
  const currentPage = filteredReviews.length ? Math.floor(currentReviewIndex / slidesPerView) % totalPages : 0;

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-yellow-300" : "text-gray-400 opacity-50"} />
    ));
  };

  return (
    <div className="min-h-screen bg-[#fdf5ee] py-16 px-4 flex flex-col items-center text-slate-900">
      <div className="text-center space-y-3 max-w-2xl">
        <p className="uppercase tracking-[0.3em] text-xs text-slate-400">Client Feedback & Testimonial</p>
        <h1 className="text-4xl font-semibold">
          Hear what our guests say <span className="text-amber-500">& feel</span>
        </h1>
        <p className="text-sm text-slate-500">
          Stories curated from Booking.com, Tripadvisor and those who booked directly with us.
        </p>
      </div>

      {/* Source Filter */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {sourceOptions.map((source) => (
          <button
            key={source}
            onClick={() => setActiveSource(source)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              activeSource === source
                ? "bg-slate-900 text-white font-semibold border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
            }`}
          >
            {source}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsFormOpen(true)}
        className="mt-8 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow-md transition"
      >
        Write a Review
      </button>

      {/* Review Card */}
      {/* Review Cards */}
      <div className="mt-12 w-full max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review, idx) => (
            <div
              key={`${review.guestName}-${idx}`}
              className="rounded-[28px] bg-white shadow-lg p-8 border border-white flex flex-col gap-6 relative"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md ${
                    ['bg-lime-500', 'bg-sky-500', 'bg-amber-500'][idx % 3]
                  }`}
                >
                  &ldquo;
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{review.guestName}</h3>
                  <p className="text-sm text-slate-500 capitalize">{review.source || "Direct guest"}</p>
                </div>
              </div>
              <div className="flex justify-start gap-1 text-amber-400 text-lg">
                {renderStars(review.rating)}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{review.comment}</p>
              <p className="text-xs text-slate-400">
                {review.date ? new Date(review.date).toLocaleDateString() : "Recent stay"}
              </p>
              <div className="absolute bottom-6 right-8 text-4xl text-slate-100">&rdquo;</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4 text-slate-500">
          <button
            onClick={prevReview}
            aria-label="Previous reviews"
            className="p-2 rounded-full border border-slate-200 hover:border-slate-500 hover:text-slate-800 transition"
          >
            <FaArrowLeft />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPage ? "bg-slate-900 w-6" : "bg-slate-300 w-2"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextReview}
            aria-label="Next reviews"
            className="p-2 rounded-full border border-slate-200 hover:border-slate-500 hover:text-slate-800 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        <p className="mt-6 text-center text-[11px] tracking-[0.4em] text-slate-400">{websiteLabel}</p>
      </div>

      {/* Write Review Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="w-full max-w-2xl bg-white text-slate-900 rounded-3xl p-6 shadow-2xl relative border border-slate-100">
            <button
              aria-label="Close review form"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              onClick={() => setIsFormOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Share Your Story</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300"
                placeholder="Your name"
              />
              <div>
                <p className="text-sm font-semibold text-slate-600 mb-2">Your rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRatingClick(value)}
                      className="focus:outline-none"
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                    >
                      <FaStar
                        className={`text-2xl transition-colors ${
                          value <= formData.rating ? "text-amber-400" : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 h-28 focus:ring-2 focus:ring-slate-300"
                placeholder="Write your experience..."
              />
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-slate-900 text-white hover:bg-slate-800 p-3 rounded-xl font-semibold">Submit Review</button>
                <button type="button" onClick={() => setFormData({ name: '', rating: 5, comment: '' })} className="px-4 py-3 border rounded-xl border-slate-200 text-slate-600">Clear</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}