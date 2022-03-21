import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Stocks from "./components/Pages/Stocks";
import About from "./components/Pages/About";
import PageError from "./components/Pages/PageError";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;
