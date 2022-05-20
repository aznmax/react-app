import logo from "./kasa.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="headerPart">
            <Link to={"./"}>
                <img src={logo} alt="Logo" />
            </Link>
            <ul>
                <li className="item">
                    <Link to="/">Accueil</Link>{" "}
                </li>
                <li>
                    {" "}
                    <Link to="/about">A propos</Link>{" "}
                </li>
            </ul>
        </div>
    );
}
export default Header;
