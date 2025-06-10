import React from 'react';
import "./Footer.css"
import email from "../../assets/email.jfif"
import instragam from "../../assets/instragam.webp"



const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <a 
            href="https://www.instagram.com/emmanailsstudiio96?igsh=MTF3dWlhZGhyMGlybw==" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={instragam} 
              alt="Instagram" 
              className="footer-icon" 
            />
          </a>
          <a 
            href="mailto:emmacorona@nailstudio96.com" 
            className="footer-email"
          >
            <img 
              src={email} 
              alt="Email" 
              className="footer-icon" 
            /> 
            emmacorona@nailstudio96.com
          </a>
        </div>
      </footer>
    );
  }

export default Footer;