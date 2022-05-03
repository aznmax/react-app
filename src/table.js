import Data from "./Data";

const AppartmentList = () => {
    return (
        <div className="list">
            {Data.map(appartements => (
                <div className="appartmentPosition">
                    <img src={appartements.cover} alt="" />
                    <h2>{appartements.title}</h2>
                </div>
            ))}
           
        </div>
    );
};

export default AppartmentList;
