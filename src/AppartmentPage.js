import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataPictureAppartment from "./DataPictureAppartment";
import star from "../src/media/star.svg";
import emptyStar from "../src/media/emptyStar.svg";

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
                        <div className="info_header">
                            <div className="flex_header">
                                <h1 className="title_appart">{location.title}</h1>
                                <div className="hostNameAndPic">
                                    <h3 className="nameHost">{location.host && location.host.name} </h3>
                                    <img className="hostPicture" src={location.host && location.host.picture} alt="" />
                                </div>
                            </div>
                            <h2 className="title_location">{location.location}</h2>
                        </div>
                    </div>
                </main>
                <div className="tags_appartments">
                    <span>{location.tags && location.tags[0]}</span>
                    <span>{location.tags && location.tags[1]}</span>
                    <span>{location.tags && location.tags[2]}</span>
                </div>
                <div className="starAppart">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={emptyStar} alt="" />
                    <img src={emptyStar} alt="" />
                </div>
                <div className="globalContainer">
                    <div className="all_information_description">
                        <div className="containerDescription">Description</div>
                        <div className="info_description">
                            <p className="description_appart">{location.description}</p>
                        </div>
                    </div>

                    <div className="info_equipment">
                        <div className="containerEquipment">Equipement</div>
                        <div className="flex_equip">
                            <ul>
                                <li>{location.equipments && location.equipments[0]}</li>
                                <li>{location.equipments && location.equipments[1]}</li>
                                <li>{location.equipments && location.equipments[2]}</li>
                                <li>{location.equipments && location.equipments[3]}</li>
                                <li>{location.equipments && location.equipments[4]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Property;
