import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homebody">
      <h1 className="hometitle">Trading Redefined.</h1>
      <h2 className="hometitle2">
        Gain insight on what stocks are hot on the day!
      </h2>
      <Link to="/stocks" className="homebutton">
        Get Started ➤
      </Link>
    </div>
  );
}

export default Home;
