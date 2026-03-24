import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    padding: "40px 20px",
    fontFamily: "'Poppins', sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
  };

  const logoStyle = {
    width: "200px", // bigger logo
    height: "auto",
    objectFit: "contain",
  };

  const linksStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  };

  const linkItemStyle = {
    color: "#f8fafc",
    textDecoration: "none",
    fontWeight: 500,
  };

  const socialStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "10px",
    fontSize: "20px",
  };

  const contactStyle = {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.8",
  };

  const contactIconStyle = {
    marginRight: "8px",
    color: "#38bdf8",
    verticalAlign: "middle",
  };

  const copyStyle = {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "30px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src="/images/footer/img1.png" alt="Techstota Logo" style={logoStyle} />
          </Link>
        </div>

        {/* Right side: Links + Social + Contact */}
        <div style={{ flex: 1 }}>
          {/* Navigation Links */}
          <div style={linksStyle}>
            <Link to="/" style={linkItemStyle}>Home</Link>
            <Link to="/about" style={linkItemStyle}>About</Link>
            <Link to="/services" style={linkItemStyle}>Services</Link>
            <Link to="/portfolio" style={linkItemStyle}>Portfolio</Link>
            <Link to="/contact" style={linkItemStyle}>Contact</Link>
          </div>

          {/* Social Icons */}
          <div style={socialStyle}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#f8fafc" }}><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#f8fafc" }}><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#f8fafc" }}><FaLinkedin /></a>
          </div>

          {/* Contact Info */}
          <div style={contactStyle}>
            <p>
              <FaEnvelope style={contactIconStyle} />
              <a href="mailto:info@techstotawebsite.com" style={{ color: "#cbd5e1", textDecoration: "none" }}>info@techstotawebsite.com</a>
            </p>
            <p>
              <FaPhone style={contactIconStyle} />
              <a href="tel:+1234567890" style={{ color: "#cbd5e1", textDecoration: "none" }}>+1 234 567 890</a>
            </p>
            <p>Address: 123 Tech Street, Genda Circle, Vadodara, Gujarat</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyStyle}>
        © 2026 Techstotawebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;