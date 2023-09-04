import React from 'react'
import { Link as Anchor, Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  const links = [
    { title: "Home", to: "/" },
    { title: "Account", to: "/account" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
  ];
  return (
    <footer>
      <div className="row">
        <div className="col-6 social">
          <a target="_blank" href="https://www.facebook.com/">
            <FaFacebookSquare size={30} />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="col-6 links">
          {links.map((link) => (
            <Link className='link' key={link.title} to={link.to}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer