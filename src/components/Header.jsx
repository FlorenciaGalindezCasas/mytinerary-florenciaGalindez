import React from "react";
import { Link as Anchor, Link } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../store/actions/userActions.js";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((store) => store.userReducer.user);
  console.log(user);

  const defaultPhoto =
    "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest-300x300.png";

  const links = [
    { title: "Home", to: "/", id: 1 },
    { title: "Cities", to: "/cities", id: 2 },
  ];

  const handleLogout = () => {
    dispatch(user_logout())
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Cambia el estado para mostrar u ocultar el desplegable
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid logo">
          <a className="navbar-brand" href="/">
            MY TINERARY
            <img src="/paperplane.ico" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav col-2 anchor">
              {links.map((link) => (
                <Anchor className="link" key={link.title} to={link.to}>
                  {link.title}
                </Anchor>
              ))}
            </div>
            <div className="userprofile col-2">
              <button
                className={`profile ${showDropdown ? "show" : ""}`}
                onClick={toggleDropdown}
                aria-expanded={showDropdown}
              >
                <img src={user ? user.image : defaultPhoto} alt="User Image" />
              </button>
              <div
                className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                aria-labelledby="profileDropdown"
              >
                {user ? (
                  <button className="dropdown-item logout" onClick={handleLogout}>
                    <FaArrowRightFromBracket/>
                    Logout
                  </button>
                ) : (
                  <a href="/signin" className="dropdown-item login">
                    <FaRegUser />
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
