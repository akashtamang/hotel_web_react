

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HeroPage from "./pages/Hero.page";
import RoomsPage from "./pages/Rooms.page";
import RoomDetailsPage from "./pages/RoomDetails";
import BookingForm from "./pages/Booking.form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { getRoomById } from "./data/rooms";

const BookingFormPage = () => {
  const { roomId } = useParams();
  const room = roomId ? getRoomById(Number(roomId)) : null;
  
  return (
    <>
      <Navbar />
      <BookingForm room={room || undefined} />
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:id" element={<RoomDetailsPage />} />
        <Route path="/booking" element={<BookingFormPage />} />
        <Route path="/booking/:roomId" element={<BookingFormPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;