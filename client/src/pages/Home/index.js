import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Home() {
    const location = useLocation();
    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="home-title">Welcome to Google Books!</h1>
                    <p>A place where you can search for the books that you love and save them.</p>
                    <Link to="/search" className={location.pathname === "/search" ? "nav-link:active" : "nav-link"}>
                        <button type="button" className="btn start-search">Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;



