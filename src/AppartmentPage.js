import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataPictureAppartment from "./DataPictureAppartment";

function Property() {
    const [location, setLocation] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const article = DataPictureAppartment.filter((logement) => logement.id === id)[0];
        console.log(article);
        setLocation(article);
    }, [id]);

    return (
        <div>
            <div>
                <main>
                    <div className="appart_info">
                        <img src={location.cover} alt="" />
                        <h1 className="title_appart">{location.title}</h1>
                        <h2 className="title_location">{location.location}</h2>
                    </div>
                </main>
                <div className="globalContainer">
                    <div className="all_information_description">
                    <div className="containerDescription">Description</div>
                    <div className="info_Description">
                        <p className="description_appart">{location.description}</p>
                    </div>
                    </div>
                    <div className="containerEquipment">Equipement</div>
                </div>
            </div>
        </div>
    );
}

export default Property;
