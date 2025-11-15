

import Footer from "../components/Footer";
import Gallery from "./Gallary";
import MainPage from "./Main.page";
import MiddlePage from "../components/Middle.page";
import Navbar from "../components/Navbar";
import Rooms from "./Rooms";

import HotelRoomCards from "./Services";


function HeroPage(){
    return (
        <div>
            <Navbar />
            <MainPage />            
            <MiddlePage />
            <HotelRoomCards />
            <Gallery />
            <Rooms />
            <Footer />

        </div>

    )
}

export default HeroPage;