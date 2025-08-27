import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="header-link-logo">
          <img
            src="/images/logo.png"
            alt="Cameleont-ikon"
            className="header-icon"
          />
        </NavLink>
        <nav className="header-nav">
          <NavLink to={"/"}>
            <h1>The Zoo</h1>
          </NavLink>
          <ul>
            <li>
              <NavLink to={"/"}>Start</NavLink>
            </li>
            <li>
              <NavLink to={"/zoo"}>Zoo</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
