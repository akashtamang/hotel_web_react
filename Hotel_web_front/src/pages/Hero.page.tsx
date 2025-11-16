

import Footer from "../components/Footer";
import Gallery from "./Gallary";
import MainPage from "./Main.page";
import MiddlePage from "../components/Middle.page";
import Navbar from "../components/Navbar";
import Rooms from "./Rooms";

import HotelRoomCards from "./Services";
import HotelReviews from "./Review";


function HeroPage(){
    return (
        <div>
            <Navbar />
            <MainPage />            
            <MiddlePage />
            <HotelRoomCards />
            <Gallery />
            <Rooms />
            <HotelReviews />
            <Footer />

        </div>

    )
}

export default HeroPage;