import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h2 className="logo">
          Black<span>X</span>
        </h2>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>

        <li>
          <Link to="/support" style={linkStyle}>
            Support
          </Link>
        </li>

        <li>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
      </ul>

      <Link to="/mastercard">
        <button className="btn">Get Started</button>
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;