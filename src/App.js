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
import Dashboard, {loader as dashboardLoader} from "./Pages/Hosts/Dashboard";
import Income from "./Pages/Hosts/Income";
import HostVans, {loader as hostVansLoader} from "./Pages/Hosts/HostVans";
import HostVanDetail, {loader as hostVansDetailLoader} from "./Pages/Hosts/HostVanDetail";
import HostVanInfo from "./Pages/Hosts/HostVanInfo";
import HostVanPricing from "./Pages/Hosts/HostVanPricing";
import HostVanPhotos from "./Pages/Hosts/HostVanPhotos";
import Reviews from "./Pages/Hosts/Reviews";
import Login, {loader as loginLoader, action as loginAction} from "./Pages/Login";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import Error from "./Components/Error";
import { requireAuth } from "./utils";
import "./server"
import "./styles.css"

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route 
        path="vans/:id" 
        element={<VanDetail />} 
        errorElement={<Error />}
        loader={vansDetailLoader}
      />
  
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ))
  
  return (
    <RouterProvider router={router}/>
  );
}