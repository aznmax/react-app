import DataPictureAppartment from "./DataPictureAppartment";
import { Link } from "react-router-dom";




const AppartmentList = () => {
    return (
        <div className="listAppartment">
            {DataPictureAppartment.map((infoAppartment) => (
                <div className="appartmentPosition">       
                    <Link to={`/AppartmentPage/${infoAppartment.id}`}>
                    <img src={infoAppartment.cover} alt="" />
                    <h2>{infoAppartment.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AppartmentList;
