import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "./Hamburger";

function Navbar() {
  const [click, setClick] = useState(false);

  const hamBurgerClickHandler = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">StocksMomo</h1>
      <ul
        className={click ? "navbar-click" : "navbar links"}
        onClick={() => setClick(false)}
      >
        <li className="link">
          <Link to="/" className={click ? "navitems-mobile" : "navitems"}>
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/stocks" className={click ? "navitems-mobile" : "navitems"}>
            Trending Stocks
          </Link>
        </li>
        <li className="link">
          <Link to="/about" className={click ? "navitems-mobile" : "navitems"}>
            About
          </Link>
        </li>
      </ul>
      <div onClick={hamBurgerClickHandler}>
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
