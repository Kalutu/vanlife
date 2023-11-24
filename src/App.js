import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import "./styles.css"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
     
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
  </BrowserRouter>
  );
}

