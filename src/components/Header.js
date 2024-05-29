import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    let [btnReact, setBtnReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Food Ordering Logo" />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login");
                    }}>{btnReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;