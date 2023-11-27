import React from "react";
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route 
} from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import NotFound from "./Pages/NotFound";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Hosts/Dashboard";
import Income from "./Pages/Hosts/Income";
import HostVans from "./Pages/Hosts/HostVans";
import HostVanDetail from "./Pages/Hosts/HostVanDetail";
import HostVanInfo from "./Pages/Hosts/HostVanInfo";
import HostVanPricing from "./Pages/Hosts/HostVanPricing";
import HostVanPhotos from "./Pages/Hosts/HostVanPhotos";
import Reviews from "./Pages/Hosts/Reviews";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import "./server"
import "./styles.css"

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetail />}/>
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhotos/>}/>
              </Route>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}