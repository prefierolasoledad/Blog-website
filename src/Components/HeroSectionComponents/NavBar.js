import React from "react";
import './NavBar.css';

const NavBar= () =>{
    return (
        <nav className="navbar">
            <div className="navbar-title">MNTN</div>
            <ul className="navbar-links">
                <li><p>Equipment</p></li>
                <li><p>About us</p></li>
                <li><p>Blog</p></li>
            </ul>
        </nav>
    )
}

export default NavBar;