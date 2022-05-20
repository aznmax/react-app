
import { Link } from "react-router-dom";
import Property from "./AppartmentPage";

function Homepage() {
    return (
        <div className="HomepageAppartement">
           
                    
        <Link to={"/AppartmentPage/:id"}>
          <Property/>
        </Link>
                
            
            </div>
        
    );
}

export default Homepage;