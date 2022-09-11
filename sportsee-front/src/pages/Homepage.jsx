import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import homepageLogo from "../assets/sportsee-icon.png";
import sportsee from "../assets/sportsee-txt.svg";
import "../styles/homepage.css";

function Homepage(props) {
  if (!props.mock) {
    return (
      <section className="banner">
        <div className="banner-logo">
          <img className="sportsee-banner" src={sportsee} alt="Sportsee logo" />
        </div>
        <div className="homepage">
          <Link className="user-profile" to="/12">
            <img
              className="homepage-logo"
              src={homepageLogo}
              alt="Sportsee logo"
            />
            Karl
          </Link>
          <Link className="user-profile" to="/18">
            <img
              className="homepage-logo"
              src={homepageLogo}
              alt="Sportsee logo"
            />
            Cécilia
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className="banner">
        <div className="banner-logo">
          <img className="sportsee-banner" src={sportsee} alt="Sportsee logo" />
        </div>
        <div className="homepage">
          <Link className="user-profile" to="/1">
            <img
              className="homepage-logo"
              src={homepageLogo}
              alt="Sportsee logo"
            />
            Mock_1
          </Link>
          <Link className="user-profile" to="/2">
            <img
              className="homepage-logo"
              src={homepageLogo}
              alt="Sportsee logo"
            />
            Mock_2
          </Link>
        </div>
      </section>
    );
  }
}

Homepage.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default Homepage;
