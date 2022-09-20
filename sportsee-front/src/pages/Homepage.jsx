import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import homepageLogo from "../assets/sportsee-icon.png";
import sportsee from "../assets/sportsee-txt.svg";
import "../styles/homepage.css";

/**
 * @description React component to render homepage with user's profiles
 * @param { {mock: Boolean} } props mock: Mocked data // API data
 * @property {function} Homepage
 * @returns { React.ReactElement } Homepage page
 */
function Homepage(props) {
  //Si les données appelées sont celles de l'API,
  //Je récupère alors les datas correspondantes
  if (!props.mock) {
    return (
      <section>
        <header className="banner">
          <img className="banner-logo" src={sportsee} alt="Sportsee logo" />
        </header>
        <div className="homepage">
          <div className="user-profile">
            <Link to="/user/12">
              <img
                className="homepage-logo"
                src={homepageLogo}
                alt="Sportsee logo"
              />
              <h3 className="homepage-userName">Karl</h3>
            </Link>
          </div>
          <div className="user-profile">
            <Link to="/user/18">
              <img
                className="homepage-logo"
                src={homepageLogo}
                alt="Sportsee logo"
              />
              <h3 className="homepage-userName">Cécilia</h3>
            </Link>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      // A l'inverse, si je ne fait pas appel à l'API,
      //Je retourne les données mockées (fichier mocked_data.json)
      <section>
        <header className="banner">
          <img className="banner-logo" src={sportsee} alt="Sportsee logo" />
        </header>
        <div className="homepage">
          <div className="user-profile">
            <Link to="/user/1">
              <img
                className="homepage-logo"
                src={homepageLogo}
                alt="Sportsee logo"
              />
              <h3 className="homepage-userName">Mock-1</h3>
            </Link>
          </div>
          <div className="user-profile">
            <Link to="/user/2">
              <img
                className="homepage-logo"
                src={homepageLogo}
                alt="Sportsee logo"
              />
              <h3 className="homepage-userName">Mock-2</h3>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

Homepage.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default Homepage;
