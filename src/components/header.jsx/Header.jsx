import React from 'react'
import { Link as Anchor, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";



const Header = () => {
  let [show, setShow] = useState(true);

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" }
  ];

  const handleShowMenu = ()=> {
    setShow(false)
  }

  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid logo">
          <a class="navbar-brand" href="/">
            MY TINERARY
            <img src="./public/paperplane.ico" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse menu" id="navbarNavAltMarkup">
            <div class="navbar-nav col-2 links">
              {links.map((link) => (
                <Link key={link.title} to={link.to}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="col-2">
              {show ? (
                <button className="profile" onClick={handleShowMenu}>
                  <img src="./public/profile.png" />
                  You are not logged in. (Log in)
                </button>
              ) : (
                <button className="login" type="button">
                  <FaRegUser />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header