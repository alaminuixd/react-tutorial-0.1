import React from "react";
import SocialBar from "./part/SocialBar";
import TopNavBar from "./part/TopNavBar";

function Header() {
  return (
    <header className="topHeader">
      <SocialBar />
      <TopNavBar />
    </header>
  );
}

export default Header;
