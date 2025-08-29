import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
        <NavLink to={"/"} className="header-link-logo">
          <img
            src="/images/logo.png"
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
