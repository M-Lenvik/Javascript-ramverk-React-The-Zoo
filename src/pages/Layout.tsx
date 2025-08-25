import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return <>
        <header>
            <p>Meny, finns i layout.tsx</p>
                <nav>
                <ul>
                    <li><NavLink to={"/"}>Start</NavLink></li>
                    <li><NavLink to={"/zoo"}>Zoo</NavLink></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <h2>Outlet, presenteras i layout.tsx</h2>
            <Outlet/> {/* Här laddas alla sidor */}
        </main>
        <footer>
            <h4>Footer</h4>
            <p>&copy; 2025 The Zoo</p>
        </footer>
    </>
};