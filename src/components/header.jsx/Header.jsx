import React from 'react'
import { Link as Anchor, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  let [show, setShow] = useState(true);

  const links = [
    { title: "Home", to: "/", id:1 },
    { title: "Cities", to: "/cities", id:2 }
  ];

  const handleShowMenu = ()=> {
    setShow(false)
  }

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
          <div className="collapse navbar-collapse menu" id="navbarNavAltMarkup">
            <div className="navbar-nav col-2 anchor">
              {links.map((link) => (
                <Anchor className='link' key={link.title} to={link.to}>
                  {link.title}
                </Anchor>
              ))}
            </div>
            <div className="profile col-2">
              {show ? (
                <button className="profile" onClick={handleShowMenu}>
                  <img src="/profile.png" />
                </button>
              ) : (
                <a href='/login'>
                  <button className="login" type="button">
                  <FaRegUser />
                  Login
                </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header