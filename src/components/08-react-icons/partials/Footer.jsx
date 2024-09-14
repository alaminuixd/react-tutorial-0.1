import React from "react";
import FooterNav from "./part/FooterNav";
import FooterSolutions from "./part/FooterSolutions";
import FooterEvent from "./part/FooterEvent";
// import CSS
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-group1 container">
        <FooterNav />
        <FooterSolutions />
        <FooterEvent />
      </div>
      <div className="footer-group2">
        <p>
          &copy; 2020-2024 | All right reserved | <a href="#">Privacy Ploicy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
