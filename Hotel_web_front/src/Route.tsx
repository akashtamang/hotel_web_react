

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/Hero.page";



const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeroPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;