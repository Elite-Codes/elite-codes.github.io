import React from "react";
import './Navbar.css'

export default function Navbar() {
    return(
        <header>
        <nav>
            <div className="nav--logo"> <img src="./codeqube_logo.svg" alt="" /> </div>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services <span className="dropper"><img src="./services drop.svg" alt="" /></span></a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
        </nav>
        </header>
    )
}