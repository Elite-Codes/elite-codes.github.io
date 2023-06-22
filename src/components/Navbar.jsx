import React from "react";
import './Navbar.css'

export default function Navbar() {
    return(
        <nav>
            <div className="nav--logo"> <img src="./codeqube_logo.svg" alt="" /> </div>
            <div className="nav--list">
                <ul>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </nav>
    )
}