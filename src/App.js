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
import Vans, {loader as vansLoader} from "./Pages/Vans/Vans";
import VanDetail,  {loader as vansDetailLoader} from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Hosts/Dashboard";
import Income from "./Pages/Hosts/Income";
import HostVans, {loader as hostVansLoader} from "./Pages/Hosts/HostVans";
import HostVanDetail, {loader as hostVansDetailLoader} from "./Pages/Hosts/HostVanDetail";
import HostVanInfo from "./Pages/Hosts/HostVanInfo";
import HostVanPricing from "./Pages/Hosts/HostVanPricing";
import HostVanPhotos from "./Pages/Hosts/HostVanPhotos";
import Reviews from "./Pages/Hosts/Reviews";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import Error from "./Components/Error";
import "./server"
import "./styles.css"

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} errorElement={<Error/>}/>
            <Route path="about" element={<About />}/>
            <Route path="login" element={<Login />}/>
            <Route 
              path="vans" 
              element={<Vans />} 
              loader={vansLoader}
            />
            <Route 
              path="vans/:id" 
              element={<VanDetail />}
              loader={vansDetailLoader}
            />
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route 
                path="vans" 
                element={<HostVans/>}
                loader={hostVansLoader}
              />
              <Route 
                path="vans/:id" 
                element={<HostVanDetail />}
                loader={hostVansDetailLoader}
              >
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