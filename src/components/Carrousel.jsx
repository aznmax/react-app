import { useState} from "react";
import previousArrow from "../media/chevron-left.svg"
import nextArrow from "../media/chevron-right.svg"



function Carrousel(props) {

    let [currentSlide, setCurrentSlide] = useState(0)

    const prevPicture = () => {
        setCurrentSlide(currentSlide = currentSlide - 1)
        
        
        if (currentSlide < 0) {
            setCurrentSlide(props.img.length - 1)
            return
        }
    }

    const nextPicture = () => {
        console.log(currentSlide, props.img.length);
        setCurrentSlide(currentSlide = currentSlide + 1)
        
        if (currentSlide + 1 > props.img.length) {
            setCurrentSlide(0)
        }
    }

return (
        <div className="carrousel">

            <img className="picture" src={props.img && props.img[currentSlide]} alt="firstPicture" />

            <div className="carrousel-options">

                <p className="carrousel-state">{(currentSlide) ? currentSlide + 1 : 1}/{props.img && props.img.length}</p>

                <button className={`carrousel-prev ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={prevPicture}>
                    <img src={previousArrow} alt="chevronleft" />
                </button>

                <button className={`carrousel-next ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={nextPicture}>
                    <img src={nextArrow} className="colorwhite" alt="chevronright"></img>
                </button>

            </div>

        </div>
    )

}

export default Carrousel