import Banniere from "./Banniere";
import TextAbout from "./TextAbout";

console.log();

function pageAbout() {
    return (
        <div>
            <div className="BanniereAbout">
                <Banniere src="/images/img2.jpg" />

                <div className="BlocAbout">
                    <TextAbout txt={"Fiabilité"} />
                    <i className="chevronDown"></i>
                </div>

                <div className="BlocAbout2">
                    <TextAbout txt={"Respect"} />
                </div>
                <div className="TextAbout2">
                    <TextAbout
                        txt={
                            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre problème"
                        }
                    />
                </div>
                <div className="BlocAbout3">
                    <TextAbout txt={"Responsabilité"} />
                </div>
            </div>
        </div>
    );
}

export default pageAbout;
