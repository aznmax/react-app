import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <div className="error_page">
                <div className="error">
                    <h1 className="error404">404</h1>
                    <h2 className="catchPhrase">Oups! La page que vous demandez n'existe pas</h2>
                    <Link to="/">
                        <p className="backHomePage">Retour sur la page d'accueil</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;
