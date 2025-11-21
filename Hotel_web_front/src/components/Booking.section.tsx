import { useState, useRef, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import type { RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookingSection = () => {
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState("bottom");

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const guestButtonRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const calendarButtonRef = useRef<HTMLButtonElement | null>(null);

  // 📌 Popup open/close logic with direction
  const toggleGuestPopup = () => {
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);

    if (!isGuestOpen && guestButtonRef.current) {
      const rect = guestButtonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setPopupPosition(spaceBelow < 250 && spaceAbove > spaceBelow ? "top" : "bottom");
    }
    setIsGuestOpen(!isGuestOpen);
  };

  const toggleCheckIn = () => {
    setIsGuestOpen(false);
    setIsCheckOutOpen(false);
    setIsCheckInOpen(!isCheckInOpen);
  };

  const toggleCheckOut = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(!isCheckOutOpen);
  };

  // 📌 Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        guestButtonRef.current &&
        !guestButtonRef.current.contains(target)
      ) {
        setIsGuestOpen(false);
      }

      if (
        calendarRef.current &&
        calendarButtonRef.current &&
        !calendarRef.current.contains(target) &&
        !calendarButtonRef.current.contains(target)
      ) {
        setIsCheckInOpen(false);
        setIsCheckOutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-[#f5f3ef] py-6 shadow-md border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-wide text-gray-700">
            BOOK ONLINE
          </h2>
        </div>

        {/* Booking Inputs */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">

          {/* ✅ Check-in */}
          <div className="relative">
            <button
              ref={calendarButtonRef}
              onClick={toggleCheckIn}
              className="bg-white px-4 py-2 rounded-md border border-gray-300 flex items-center justify-between shadow-sm w-60"
            >
              <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="font-semibold">{format(checkInDate, "dd/MM/yyyy")}</p>
              </div>
              <i className="fa-regular fa-calendar text-gray-500"></i>
            </button>

            {isCheckInOpen && (
              <div
                ref={calendarRef}
                className="absolute top-full mt-2 z-50 bg-white shadow-lg rounded-lg border border-gray-200 transform scale-95 opacity-0 animate-[fadeInScale_0.2s_ease-out_forwards]"
              >
                <DateRangePicker
                  ranges={[
                    {
                      startDate: checkInDate,
                      endDate: checkOutDate,
                      key: "selection",
                    },
                  ]}
                  onChange={(ranges: RangeKeyDict) => {
                    if (ranges.selection.startDate) setCheckInDate(ranges.selection.startDate);
                    if (ranges.selection.endDate) setCheckOutDate(ranges.selection.endDate);
                  }}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#16a34a"]}
                />
              </div>
            )}
          </div>

          {/* ✅ Check-out */}
          <div className="relative">
            <button
              onClick={toggleCheckOut}
              className="bg-white px-4 py-2 rounded-md border border-gray-300 flex items-center justify-between shadow-sm w-60"
            >
              <div>
                <p className="text-sm text-gray-600">Check-out</p>
                <p className="font-semibold">{format(checkOutDate, "dd/MM/yyyy")}</p>
              </div>
              <i className="fa-regular fa-calendar text-gray-500"></i>
            </button>

            {isCheckOutOpen && (
              <div
                ref={calendarRef}
                className="absolute top-full mt-2 z-50 bg-white shadow-lg rounded-lg border border-gray-200 transform scale-95 opacity-0 animate-[fadeInScale_0.2s_ease-out_forwards]"
              >
                <DateRangePicker
                  ranges={[
                    {
                      startDate: checkInDate,
                      endDate: checkOutDate,
                      key: "selection",
                    },
                  ]}
                  onChange={(ranges: RangeKeyDict) => {
                    if (ranges.selection.startDate) setCheckInDate(ranges.selection.startDate);
                    if (ranges.selection.endDate) setCheckOutDate(ranges.selection.endDate);
                  }}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#16a34a"]}
                />
              </div>
            )}
          </div>

          {/* ✅ Guests */}
          <div className="relative">
            <button
              ref={guestButtonRef}
              onClick={toggleGuestPopup}
              className="bg-white px-4 py-2 rounded-md border border-gray-300 flex items-center justify-between shadow-sm w-60 text-left"
            >
              <div>
                <p className="text-sm text-gray-600">Guests</p>
                <p className="font-semibold">
                  {adults} adults, {children} children
                </p>
              </div>
              <i className="fa-regular fa-user text-gray-500"></i>
            </button>

            {isGuestOpen && (
              <div
                ref={popupRef}
                className={`absolute z-50 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4 transform scale-95 opacity-0 animate-[fadeInScale_0.2s_ease-out_forwards] ${
                  popupPosition === "top"
                    ? "bottom-full mb-2 origin-bottom"
                    : "top-full mt-2 origin-top"
                }`}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Guests</h3>
                <div className="border-t border-gray-200 pt-3 space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Adults</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded border border-gray-400 hover:bg-gray-100 flex items-center justify-center text-lg"
                      >
                        –
                      </button>
                      <span>{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded border border-gray-400 hover:bg-gray-100 flex items-center justify-center text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Children</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded border border-gray-400 hover:bg-gray-100 flex items-center justify-center text-lg"
                      >
                        –
                      </button>
                      <span>{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded border border-gray-400 hover:bg-gray-100 flex items-center justify-center text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setIsGuestOpen(false)}
                      className="px-4 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white font-medium"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ✅ Find Room Button */}
          <button className="px-8 py-3 bg-[#A19780] hover:bg-[#8c836b] text-white font-semibold rounded-md shadow-md transition-all">
            FIND ROOM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
