import DataPictureAppartment from "../DataPictureAppartment.json";
import { Link } from "react-router-dom";
import React from 'react'




const AppartmentList = () => {
    return (
        <div className="listAppartment">
            {DataPictureAppartment.map((infoAppartment) => (
                <div key={infoAppartment.id} className="appartmentPosition">       
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
