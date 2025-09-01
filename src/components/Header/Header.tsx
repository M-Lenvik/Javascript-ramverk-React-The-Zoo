import { NavLink } from "react-router-dom";
import "./Header.scss";

const logoUrl = `${import.meta.env.BASE_URL}images/logo.png`;

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <NavLink
            to={"/"}
            className="header-link-logo"
            aria-label="Gå till startsidan"
          >
            <img
              src={logoUrl}
              alt="Cameleont-ikon"
              className="header-icon"
            />
          </NavLink>
          <nav className="header-nav">
            <ul>
              <li>
                <NavLink to={"/"}>The Zoo</NavLink>
              </li>
              <li>
                <NavLink to={"/zoo"}>Djuren</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>Om Oss</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
