import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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