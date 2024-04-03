import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="loginLogoutBtn" onClick={
                () => {
                    btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                }}>
                {btnText}
            </button>
        </div>
    )
}

export default Header;