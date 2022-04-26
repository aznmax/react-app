import logo from "./kasa.png"

function Header(){

    return(

            <div className="headerPart">
              <img src= {logo} alt="logo" />
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </div>

    )

}
export default Header;
