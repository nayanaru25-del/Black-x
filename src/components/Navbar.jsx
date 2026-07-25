import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link
        to="/"
        onClick={closeMenu}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h2 className="logo">
          Black<span>X</span>
        </h2>
      </Link>

      {/* Navigation Links */}
      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" style={linkStyle} onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" style={linkStyle} onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/support" style={linkStyle} onClick={closeMenu}>
            Support
          </Link>
        </li>

        <li>
          <Link to="/contact" style={linkStyle} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <Link to="/mastercard">
          <button className="btn">Get Started</button>
        </Link>

        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;