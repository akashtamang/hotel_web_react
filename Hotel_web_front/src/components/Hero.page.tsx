import Footer from "./Footer";
import Gallery from "./Gallary";
import MainPage from "./Main.page";
import MiddlePage from "./Middle.page";
import Navbar from "./Navbar";
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