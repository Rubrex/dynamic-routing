import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import Shop from "./Shop/Shop";
import Orders from "./Orders/Orders";
import Help from "./Help/Help";
import Home from "./Home/Home";

const Main = () => {
  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/orders", element: <Orders /> },
    { path: "/help", element: <Help /> },
  ]);
  return (
    <div className="container mx-auto mt-10">
      <RouterProvider router={routers} />
    </div>
  );
};

export default Main;
