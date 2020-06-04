import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                    <h3 className="navbar-brand">Book Explorer</h3>
                    <Link to="/" className={location.pathname === "/" ? "nav-link:active" : "nav-link"}>
                        Home
                    </Link>
                    <Link to="/search" className={location.pathname === "/search" ? "nav-link:active" : "nav-link"}>
                        Search
                    </Link>
                    <Link to="/saved" className={location.pathname === "/saved" ? "nav-link:active" : "nav-link"}>
                        Saved
                    </Link>
            </nav>
        </div>
    );
}

export default Nav;



