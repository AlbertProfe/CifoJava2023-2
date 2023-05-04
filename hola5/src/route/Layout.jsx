import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav style={{ backgroundColor: "#A0D0DF", padding: "20px" }}>
        <Link to="/">Home</Link>
        <span>{"  |  "}</span>
        <Link to="/people">People</Link>
        <span>{"  |  "}</span>
        <Link to="/personProfile">Person Profile</Link>
        <span>{"  |  "}</span>
        <Link to="/clock">Clock</Link>
        <span>{"  |  "}</span>
         <Link to="/apiRest">Api Rest</Link>
        <span>{"  |  "}</span>
         <Link to="/contact">Contact</Link>
        <span>{"  |  "}</span>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
}
