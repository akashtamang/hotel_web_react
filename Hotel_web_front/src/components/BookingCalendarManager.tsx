import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useMemo, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type Booking = {
  id: string;
  guestName: string;
  startDate: Date;
  endDate: Date;
  room: string;
  status: "confirmed" | "pending" | "blocked";
};

const sampleBookings: Booking[] = [
  {
    id: "BK-1023",
    guestName: "Amrita Gurung",
    startDate: addDays(new Date(), 2),
    endDate: addDays(new Date(), 5),
    room: "Tamang Heritage",
    status: "confirmed",
  },
  {
    id: "BK-1047",
    guestName: "James Carter",
    startDate: addDays(new Date(), 7),
    endDate: addDays(new Date(), 9),
    room: "Himalayan Breeze",
    status: "pending",
  },
  {
    id: "MT-ROOF",
    guestName: "Maintenance block",
    startDate: addDays(new Date(), 12),
    endDate: addDays(new Date(), 13),
    room: "Mountain View",
    status: "blocked",
  },
];

const statusStyles: Record<Booking["status"], string> = {
  confirmed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  pending: "bg-amber-50 text-amber-700 border-amber-100",
  blocked: "bg-rose-50 text-rose-700 border-rose-100",
};

const BookingCalendarManager = () => {
  const [selection, setSelection] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection",
  });

  const nights = useMemo(() => {
    if (!selection.startDate || !selection.endDate) return 0;
    return Math.max(1, differenceInCalendarDays(selection.endDate, selection.startDate));
  }, [selection.endDate, selection.startDate]);

  return (
    <section className="mx-auto mt-16 max-w-6xl rounded-3xl bg-white/80 p-8 shadow-xl shadow-emerald-50">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-600">Booking management</p>
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Plan stays and keep an eye on blocked dates
        </h2>
        <p className="text-gray-600 md:text-lg">
          Use the date-range calendar to pre-select availability, then review upcoming reservations or maintenance
          holds. This helps prevent double booking and keeps your team synced.
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-gray-100 bg-white/70 p-4">
          <DateRangePicker
            ranges={[selection]}
            onChange={(ranges) => setSelection(ranges.selection)}
            moveRangeOnFirstSelection={false}
            rangeColors={["#047857"]}
            months={2}
            direction="horizontal"
            minDate={new Date()}
          />

          <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-800">
            <p className="font-semibold">
              {format(selection.startDate, "dd MMM")} → {format(selection.endDate, "dd MMM yyyy")}
            </p>
            <p>{nights} night{nights > 1 ? "s" : ""} selected • drag on the calendar to adjust.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Upcoming stays</h3>
            <span className="text-sm text-gray-500">{sampleBookings.length} records</span>
          </div>
          <ul className="space-y-3">
            {sampleBookings.map((booking) => (
              <li
                key={booking.id}
                className={`rounded-2xl border px-4 py-3 text-sm shadow-sm ${statusStyles[booking.status]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{booking.room}</span>
                  <span className="text-xs tracking-wide uppercase">{booking.id}</span>
                </div>
                <p className="mt-1 text-gray-600">
                  {format(booking.startDate, "dd MMM")} – {format(booking.endDate, "dd MMM")}
                </p>
                <p className="text-gray-500">
                  {booking.guestName} • {booking.status === "blocked" ? "House use" : booking.status}
                </p>
              </li>
            ))}
          </ul>
          <p className="rounded-xl border border-dashed border-gray-200 bg-gray-50/70 px-4 py-3 text-xs text-gray-500">
            Tip: hook this widget to your backend booking API to show live availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendarManager;

