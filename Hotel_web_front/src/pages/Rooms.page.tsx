import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingSection from "../components/Booking.section";
import BookingCalendarManager from "../components/BookingCalendarManager";
import Rooms from "./Rooms";

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-emerald-100">
      <Navbar />

      <main className="pt-24">
        <section className="mx-auto max-w-5xl px-6 py-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600">Stay with us</p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900 md:text-5xl">
            Rooms designed for slow mornings & mountain views
          </h1>
          <p className="mt-6 text-gray-600 md:text-lg">
            Choose from heritage family suites, breezy balcony rooms, or rooftop retreats. Each space
            blends Tamang craftsmanship with the comfort of modern amenities.
          </p>
        </section>

        <section className="px-6">
          <BookingSection />
          <BookingCalendarManager />
          <Rooms />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoomsPage;

