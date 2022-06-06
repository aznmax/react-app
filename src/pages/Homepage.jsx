// import logoAppartement from "./accommodation-20-1.jpg";
// import Banniere from "../components/Banniere";
import AppartmentHome from "../components/AppartmentHomepage";
import TexteBanniereAccueil from "../components/TexteBanniereAccueil";
// import Falaise from "../media/Montagnes.png";


// import AppartmentPage  from "./AppartmentPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <div className="Banner">
            <div className="BanniereAccueil">
                {/* <Banniere src={Falaise} /> */}
                <TexteBanniereAccueil/>
            </div>
            </div>
                <div className="ContainerAppartement">
                    
                        <AppartmentHome />
                    
                </div>
    
        </div>
    );
}



export default Homepage;
