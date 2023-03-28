import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import "./footer.css"

const Footer = () => {
    return (
        <footer class="footer"  style={{
            // backgroundColor: "#edf2f8",
            backgroundColor: "#2c1e4a",
            color : "white"
          }} >
            <div class="footer-container">
                <div class="footer-icons">
                    <a href="https://github.com/9802HEMENSAN">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/hemensan-mahilange-4a9499242/">
                        <FaLinkedin />
                    </a>
                </div>
                <p class="footer-text">Copyright © 2023  Hemensan Mahilange</p>
            </div>
        </footer>


    );
};

export default Footer;
