// import logoAppartement from "./accommodation-20-1.jpg";
import Banniere from "./Banniere";
import AppartmentList from "./table";

function Homepage() {
    return (
        <div className="Homepage">
            <div className="BanniereAccueil">
                <Banniere src="/images/img1.jpg" />
                <div className="ContainerAppartement">
                   <AppartmentList/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
