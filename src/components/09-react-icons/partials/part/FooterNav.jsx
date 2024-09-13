import React from "react";
import "./FooterNav.css";

function FooterNav() {
  return (
    <div className="footer-nav-container">
      <h3>Site Menus</h3>
      <ul className="footer-nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Podcast</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default FooterNav;
