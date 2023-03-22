import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LOGO.png"
import "../style/navigation/Navigation.css";

const Header = () => {
     
   

    return (
        <div className="navigation">
            <img src={Logo} alt="Logo Kasa" />
            <ul>
                <NavLink to="/">
                    <li className={({ isActive }) => isActive ? "active" : ""}>Accueil</li>
                </NavLink>

                <NavLink to="/about">
                <li className={({ isActive }) => isActive ? "active" : ""}>A propos</li>
                </NavLink>                            
            </ul>
        </div>
    );
};

export default Header;