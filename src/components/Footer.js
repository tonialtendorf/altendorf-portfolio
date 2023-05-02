import React from 'react';
import './FooterStyle.css'
import {FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                      <div className="social">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                        <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </div>
            </div>
        </div>
    )
}

export default Footer;

{/* <a href= 'https://www.linkedin.com/in/tonivohnoutka/' target="_blank" rel="LinkedIn">LinkedIn</a>
            <a href= 'https://github.com/tonialtendorf' target="_blank" rel="LinkedIn">Github</a>
            <a href= 'https://twitter.com/' target="_blank" rel="LinkedIn">Twitter</a>
            <p>&copy; Toni Altendorf | 2023</p> */}