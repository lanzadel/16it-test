import { render } from "@testing-library/react";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="logo" src="./images/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
