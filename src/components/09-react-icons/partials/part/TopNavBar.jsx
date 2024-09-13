import React from "react";
import "./TopNavBar.css";

function TopNavBar() {
  return (
    <nav>
      <div className="container top-nav-bar">
        <h1>
          <a href="#">Company Logo</a>
        </h1>
        <ul className="top-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Podcust</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavBar;
