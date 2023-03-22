import React from 'react';
import "../style/home/Footer.css"
import Logo from "../assets/images/LOGO.svg"

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-box">
                <img src={Logo} alt="Logo Kasa" />
                    <p>© 2020 Kasa. All rights reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;