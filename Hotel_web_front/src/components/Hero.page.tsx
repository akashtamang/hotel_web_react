import Footer from "./Footer";
import MainPage from "./Main.page";
import MiddlePage from "./Middle.page";
import Navbar from "./Navbar";
import Rooms from "./Rooms";


function HeroPage(){
    return (
        <div>
            <Navbar />
            <MainPage />
            <MiddlePage />
            <Rooms />
            <Footer />

        </div>

    )
}

export default HeroPage;