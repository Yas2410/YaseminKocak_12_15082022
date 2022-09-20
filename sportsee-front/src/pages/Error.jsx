import { Link } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";
import "../styles/error.css";

/**
 * @description React component to render Error page when url is incorrect
 * @property {function} Error
 * @returns { React.ReactElement } Error page
 */

function Error() {
  return (
    <section>
      <header>
        <Header />
        <Aside />
      </header>
      <div className="error-section">
        <h1 className="error-main">Oups!</h1>
        <h2 className="error-txt">
          Une erreur est survenue ! Veuillez réessayer plus tard
        </h2>
        <Link className="home-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </section>
  );
}

export default Error;
