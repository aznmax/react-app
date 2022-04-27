import photoBanniere from "./alberta-2297204_1920.jpg";

function Banniere() {
    return (
        <div className="customBanniere">
            <h1>Chez vous partout, et ailleurs</h1>
            <img src={photoBanniere} alt="" />
        </div>
    );
}

export default Banniere;
