import { NavLink } from "react-router-dom";
import LOGO from "../../logo/LOGO.svg";
import "./Header.sass";

function Header() {
  return (
    <nav>
      <img src={LOGO} className="App-logo" alt="logo" />
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "banner__navlink--underline" : "banner__navlink"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "banner__navlink--underline" : "banner__navlink"
          }
        >
          À propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
