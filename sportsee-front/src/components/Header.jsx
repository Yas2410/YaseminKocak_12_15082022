import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/header.css";

function Header() {
  return (
    <section className="header-section">
      <a className="header-logo" href="/">
        <img
          className="sportsee-logo"
          src={logo}
          alt="Logo de la startup SportSee"
        />
      </a>
      <NavLink className="nav-link" to="/">
        Accueil
      </NavLink>
      <NavLink className="nav-link" to="/profile">
        Profil
      </NavLink>
      <NavLink className="nav-link" to="/settings">
        Réglages
      </NavLink>
      <NavLink className="nav-link" to="/community">
        Communauté
      </NavLink>
    </section>
  );
}

export default Header;
