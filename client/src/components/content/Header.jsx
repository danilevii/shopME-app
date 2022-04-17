import React from "react";
import Navbar from "./Navbar";
import "../styles/Header/Header.css";
import sellbanner from "../../images/sellbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header__img-container">
        <img className="header__banner" src={sellbanner} alt="sellBanner" />
      </div>
      <h1 className="header__title">
        Sell on shopME with no prior selling experience.
      </h1>
      <div className="header__button-container">
        <button className="header__button"><Link className="header__link" to='/create-listing'>Create a Listing</Link></button>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
