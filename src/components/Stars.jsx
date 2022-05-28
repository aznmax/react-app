import StarSolid from "../media/star-solid.svg"
import StarEmpty from "../media/star-empty.svg"


export default function Stars(props) {

    return (
        <div className="stars-content">
            
            {Array.from({length: 5 } , (item, itemKey) => itemKey < props.star ? <img key={itemKey} src={StarSolid} alt="star svg" className="starsolid" /> : <img key={itemKey} src={StarEmpty} alt="star svg" className="starsempty" />)}
        </div>

        
    )

}