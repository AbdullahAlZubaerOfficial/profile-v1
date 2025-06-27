import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
