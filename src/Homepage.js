// import logoAppartement from "./accommodation-20-1.jpg";
import Banniere from "./Banniere";
import AppartmentHome from "./AppartmentHomepage";
import TexteBanniereAccueil from "./TexteBanniereAccueil";
import { Link } from "react-router-dom";
// import AppartmentPage  from "./AppartmentPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <div className="BanniereAccueil">
                <TexteBanniereAccueil />
                <div className="ContainerAppartement">
                    <Link to="/AppartmentPage">
                        <AppartmentHome />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
