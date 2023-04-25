import React from 'react'
import '../styles/Footer.css'
import LogoNavBar from "../assets/LogoNavBar.svg"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
<div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={LogoNavBar} alt="logofooter" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>The exclusive streaming service that offers a diverse collection of Tunisian movies.
            <br></br>Try it now for the ultimate streaming experience.</span>

          <span>all rights reserved © 2023</span>
        </div>
        <div className="
        footer-section-columns">
          <span>Developped by: </span>
          <span>Melek Majdoub</span>
          <span>Oumaima zayene</span>
          <span>Emira Gribaa</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer