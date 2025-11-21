import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRoomById } from "../data/rooms";
import BookingForm from "./Booking.form";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const room = useMemo(() => {
    if (!id) return undefined;
    const numericId = Number(id);
    if (Number.isNaN(numericId)) return undefined;
    return getRoomById(numericId);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Room not found</h1>
        <p className="text-gray-600 max-w-md">
          The room you’re looking for doesn’t exist or has been moved. Please go back and browse available rooms.
        </p>
        <button
          onClick={() => navigate("/rooms")}
          className="rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
        >
          Back to rooms
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f3ef] min-h-screen pb-16">
      <section className="relative h-[420px]">
        <img src={room.images[0]} alt={room.name} className="absolute inset-0 h-full w-full object-cover brightness-75" />
        <div className="relative flex h-full flex-col justify-end px-6 pb-14 text-white lg:px-16">
          <p className="text-sm uppercase tracking-[0.4em] text-white/80">{room.slug.replace(/-/g, " ")}</p>
          <h1 className="mt-3 text-4xl font-serif md:text-5xl">{room.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-lg">
            <span className="rounded-full bg-white/15 px-4 py-2">{room.capacity}</span>
            <span className="rounded-full bg-white/15 px-4 py-2">{room.size}</span>
            <span className="rounded-full bg-white/15 px-4 py-2">{room.bedType}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-10 px-4 md:grid-cols-[3fr_2fr]">
        <article className="space-y-8 rounded-3xl bg-white p-8 shadow-lg shadow-emerald-50/70">
          <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{room.longDescription}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard label="Room size" value={room.size} />
            <InfoCard label="Capacity" value={room.capacity} />
            <InfoCard label="Bed type" value={room.bedType} />
            <InfoCard label="Best view" value={room.view} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Amenities</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {room.amenities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">House policies</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              {room.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-emerald-50/70">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Rate from</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{room.price}</p>
            <p className="mt-3 text-sm text-gray-500">Includes breakfast and local taxes.</p>

            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:bg-emerald-700"
              >
                Request booking
              </button>
              <button
                onClick={() => navigate(-1)}
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-700 hover:border-emerald-300"
              >
                Back
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-emerald-50/70">
            <h3 className="text-lg font-semibold text-gray-900">Gallery</h3>
            <div className="mt-4 grid gap-4">
              {room.images.map((img) => (
                <img key={img} src={img} alt={room.name} className="h-32 w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm 
          room={room} 
          onClose={() => setShowBookingForm(false)} 
          isModal={true}
        />
      )}
    </div>
  );
};

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5">
    <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{label}</p>
    <p className="mt-2 text-xl font-semibold text-gray-900">{value}</p>
  </div>
);

export default RoomDetailsPage;

