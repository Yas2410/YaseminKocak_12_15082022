import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-section">
      <a className="header-logo" href="/">
        <img
          className="sportsee-logo"
          src={logo}
          alt="Logo de la startup SportSee"
        />
      </a>
      <NavLink className="header-link" to="/">
        Accueil
      </NavLink>
      <NavLink className="header-link" to="/profile">
        Profil
      </NavLink>
      <NavLink className="header-link" to="/settings">
        Réglages
      </NavLink>
      <NavLink className="header-link" to="/community">
        Communauté
      </NavLink>
    </div>
  );
}

export default Header;
