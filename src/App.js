import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Hosts/Dashboard";
import Income from "./Pages/Hosts/Income";
import Reviews from "./Pages/Hosts/Reviews";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import "./server"
import "./styles.css"

export default function App() {
  return (
    <BrowserRouter>     
      <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetail />}/>
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
          </Route>
      </Routes>
  </BrowserRouter>
  );
}

