import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/moon-logo.svg";
import menu from "../../assets/icon/menu.svg";
import "./header.scss";

function Header() {
  const location = useLocation();
  const [style, setStyle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname !== "/") setStyle(true);
    else setStyle(false);
  }, [location]);

  return (
    <>
      <header
        id="header"
        style={{
          background: style ? "#f6f5f4" : "transparent",
        }}
      >
        <nav className="navigate">
          <Link to="/">
            <img src={logo} alt="moon logo" className="navigate-logo" />
          </Link>
          <ul
            className="navigate-direction"
            onClick={handleMenu}
            style={{
              top: menuOpen ? "7%" : "-10%",
            }}
          >
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
          <img
            src={menu}
            alt="menu"
            className="navigate-menu"
            onClick={handleMenu}
          />
        </nav>
      </header>
    </>
  );
}

export default Header;
