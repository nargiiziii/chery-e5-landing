import React from "react";
import "./Header.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import cheryLogo from "../../assets/images/chery-logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-left">
          <img src={cheryLogo} alt="Chery logo" />
          <p>EN</p>
        </div>

        <ul>
          <li>Features</li>
          <li>Specification</li>
          <li>Benefit</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="nav-right">
          <p>SIGN IN</p>
          <button>
            <HiOutlineShoppingBag /> CART
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
