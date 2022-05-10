import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">StocksMomo</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navitems">
              Home
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="navitems">
              Trending Stocks
            </Link>
          </li>
          <li>
            <Link to="/about" className="navitems">
              About
            </Link>
          </li>
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
}

export default Navbar;
