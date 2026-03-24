import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/images/header/image.png" alt="Techstota Logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;