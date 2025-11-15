import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import roomp1 from '../assets/picture/room4/pic_r4_2.jpg'
import roomp2 from '../assets/picture/other/r-7.jpg'
import roomp3 from '../assets/picture/other/pic_r5_1.jpg'

const BookingForm = () => {
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

    return (
        <div className="min-h-screen bg-linear-to-b from-sky-100 to-blue-300 flex justify-center py-10 px-4">
            
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl overflow-hidden">
                {/* Header Images */}
                <div className="flex justify-center space-x-6 bg-blue-50 py-6">
                    <img
                        src={roomp1}
                        className="rounded-sm h-30 w-auto shadow-md"
                    />
                    <img
                        src={roomp2}
                        className="rounded-sm h-30 w-auto shadow-md"
                    />
                    <img
                        src={roomp3}
                        className="rounded-sm h-30 w-auto shadow-md"
                    />
                </div>

                {/* Title */}
                <div className="text-center my-6">
                    <h1 className="text-2xl font-bold text-gray-800">Hotel Booking</h1>
                    <p className="text-gray-500 text-sm">
                        Experience something new every moment
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6 px-8 pb-10">
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
                            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option>Please Select</option>
                                <option>Single Room</option>
                                <option>Double Room</option>
                                <option>Family Suite</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                placeholder="e.g., 2"
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
