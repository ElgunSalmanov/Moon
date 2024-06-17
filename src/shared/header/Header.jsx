import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/moon-logo.svg";
import "./header.scss";

function Header() {
  return (
    <>
      <header id="header">
        <nav className="navigate">
          <img className="navigate-logo" src={logo} alt="logo" />
          <ul className="navigate-direction">
            <NavLink
              to="/where-to-buy"
              className={({ isActive }) =>
                `navigate-direction-link ${isActive ? "active" : ""}`
              }
            >
              Locations
            </NavLink>
            <NavLink to="/contact" className="navigate-direction-link">
              Contact
            </NavLink>
            <NavLink to="/login" className="navigate-direction-link">
              Login
            </NavLink>
            <Link to="/shop" className="navigate-direction-connect">
              <p className="navigate-direction-connect-content">
                Pre-Order Now
              </p>
              <p className="navigate-direction-connect-content-up">
                Pre-Order Now
              </p>
              <p className="navigate-direction-connect-inner"></p>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
