import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="border border-blue-600 container mx-auto my-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
