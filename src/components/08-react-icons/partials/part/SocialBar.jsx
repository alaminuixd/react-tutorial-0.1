import React from "react";
import "./SocialBar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialBar() {
  return (
    <div className="social-bar">
      <ul className="social-icons container">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </div>
  );
}

export default SocialBar;
