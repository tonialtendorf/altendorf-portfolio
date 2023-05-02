import React from 'react';
import './FooterStyle.css'
import {FaLinkedin, FaTwitter, FaGit} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                      <div className="social">
                        <a href="https://www.linkedin.com/in/tonivohnoutka/">
                        <FaLinkedin size={30} style={{color:"#AC3B61", marginRight: "1rem"}} /></a>

                        <a href="https://twitter.com/">
                        <FaTwitter size={30} style={{color:"#AC3B61", marginRight: "1rem"}} /></a>

                        <a href="https://github.com/tonialtendorf">
                        <FaGit size={30} style={{color:"#AC3B61", marginRight: "1rem"}} /></a>
                    </div>
            </div>
        </div>
    )
}

export default Footer;
