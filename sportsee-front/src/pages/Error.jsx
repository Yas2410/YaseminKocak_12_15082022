import { Link } from "react-router-dom";
import "../styles/error.css";

function Error() {
  return (
    <div className="error-section">
      <h1 className="error-main">Erreur</h1>
      <h2 className="error-txt">
        Une erreur est survenue ! Veuillez réessayer plus tard
      </h2>
      <Link className="home-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
