import { NavLink } from "react-router-dom";

export const Header = () => {   
    return (
        <header>
            <p>Meny, finns i header componenten</p>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Start</NavLink></li>
                        <li><NavLink to={"/zoo"}>Zoo</NavLink></li>
                    </ul>
                </nav>
        </header>
    );
};