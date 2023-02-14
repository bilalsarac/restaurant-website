import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <footer>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>New York</li>
                            <li>Chicago</li>
                            <li>Los Angeles</li>
                            <li>Utah</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 9:30AM - 11:00PM</li>
                            <li>Fri: 4:00PM - 11:00PM</li>
                            <li>Sat - Sun: 7:30PM - 11:00PM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>96 Abafom Road, North Ridge - Accra</li>
                            <li>Tel: 0555 555 55 55</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
