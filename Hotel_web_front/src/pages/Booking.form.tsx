import { useState } from "react";
import type { FormEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { Room } from "../data/rooms";

import roomp1 from '../assets/picture/room4/pic_r4_2.jpg'
import roomp2 from '../assets/picture/other/r-7.jpg'
import roomp3 from '../assets/picture/other/pic_r5_1.jpg'

interface BookingFormProps {
  room?: Room | null;
  onClose?: () => void;
  isModal?: boolean;
}

const BookingForm = ({ room, onClose, isModal = false }: BookingFormProps) => {
    const [arrivalDate, setArrivalDate] = useState<Date | null >(new Date());
    const [departureDate, setDepartureDate] = useState<Date | null>(
        new Date(new Date().setDate(new Date().getDate() + 1))
    );
    const [openArrival, setOpenArrival] = useState(false);
    const [openDeparture, setOpenDeparture] = useState(false);

    const toggleArrival = () => {
        setOpenArrival(!openArrival);
        setOpenDeparture(false);
    };

    const toggleDeparture = () => {
        setOpenDeparture(!openDeparture);
        setOpenArrival(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Add booking submission logic
        alert("Booking request submitted! We'll contact you soon.");
        if (onClose) onClose();
    };

    const roomImages = room?.images || [roomp1, roomp2, roomp3];
    const roomName = room?.name || "Hotel Room";

    return (
        <div className={`${isModal ? 'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto' : 'min-h-screen bg-linear-to-b from-sky-100 to-blue-300 flex justify-center py-8 px-3'}`}>
            <div className={`bg-white shadow-2xl rounded-2xl w-full max-w-2xl overflow-hidden relative ${isModal ? 'my-8' : ''}`}>
                {isModal && onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-700 font-bold"
                    >
                        ✕
                    </button>
                )}
                {/* Header Images */}
                <div className="flex justify-center space-x-4 bg-blue-50 py-4 px-4">
                    {roomImages.slice(0, 3).map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${roomName} view ${idx + 1}`}
                            className="rounded-md h-24 w-24 shadow-md object-cover"
                        />
                    ))}
                </div>

                {/* Title */}
                <div className="text-center my-4 px-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        {room ? `Book ${room.name}` : "Hotel Booking"}
                    </h1>
                    <p className="text-gray-500 text-xs">
                        {room ? `Rate: ${room.price}` : "Experience something new every moment"}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 px-6 pb-8">
                    {/* Name */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Name
                            </label>
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                placeholder="ex: myname@example.com"
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Room Type & Guests */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Room Type
                            </label>
                            <select 
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                defaultValue={room?.name || ""}
                            >
                                <option value="">Please Select</option>
                                {room ? (
                                    <option value={room.name}>{room.name}</option>
                                ) : (
                                    <>
                                        <option>Single Room</option>
                                        <option>Double Room</option>
                                        <option>Family Suite</option>
                                    </>
                                )}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                placeholder={room?.capacity || "e.g., 2"}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Arrival & Departure */}
                    <div className="grid md:grid-cols-2 gap-4 relative">
                        {/* Arrival Date */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Arrival Date
                            </label>
                            <div
                                className="border rounded-md px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-blue-400"
                                onClick={toggleArrival}
                            >
                                <span>
                                    {arrivalDate ? arrivalDate.toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    }) : "Select Date"}
                                </span>
                                <i className="fa-regular fa-calendar text-gray-500"></i>
                            </div>
                            {openArrival && (
                                <div className="absolute mt-2 z-50 bg-white border shadow-lg rounded-lg">
                                    <DatePicker
                                        inline
                                        selected={arrivalDate}
                                        onChange={(date) => {
                                            setArrivalDate(date);
                                            setOpenArrival(false);
                                        }}
                                        minDate={new Date()}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Departure Date */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Departure Date
                            </label>
                            <div
                                className="border rounded-md px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-blue-400"
                                onClick={toggleDeparture}
                            >
                                <span>
                                    {departureDate ? departureDate.toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    }) : "Select Date"}
                                </span>
                                <i className="fa-regular fa-calendar text-gray-500"></i>
                            </div>
                            {openDeparture && (
                                <div className="absolute mt-2 z-50 bg-white border shadow-lg rounded-lg">
                                    <DatePicker
                                        inline
                                        selected={departureDate}
                                        onChange={(date) => {
                                            setDepartureDate(date);
                                            setOpenDeparture(false);
                                        }}
                                        minDate={arrivalDate || new Date()}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Free Pickup */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Pickup service on request
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input type="radio" name="pickup" className="mr-2" />
                                Yes Please! Pick me up on arrival
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="pickup" className="mr-2" />
                                No Thanks – I’ll make my own way
                            </label>
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Special Requests
                        </label>
                        <textarea
                            rows={3}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
