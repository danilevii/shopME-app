import React from "react";
import { Link } from "react-router-dom";
import { FaCarAlt, FaCartArrowDown, FaCartPlus, FaPersonBooth, FaSearch, FaUser } from "react-icons/fa";
import "../styles/Navbar/Navbar.css";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const isLoggedIn = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
          
      } catch (error) {
          
      }
    };
  });

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">shopME</div>

        <div className="navbar__searchWrapper">
          <div className="navbar__search-container">
            <input
              className="navbar__searchInput"
              type="text"
              placeholder="Search for items..."
              name="search"
            />
            <FaSearch className="navbar__searchIcon" />
          </div>
        </div>

        <div className="navbar__sign">
          <button className="navbar__register-button">
              {localStorage.getItem("authToken") ? <FaCartArrowDown style={{ borderRadius: "50%" }} /> : <Link className="navbar__link" to="/register">
              Sign Up
            </Link>}
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
