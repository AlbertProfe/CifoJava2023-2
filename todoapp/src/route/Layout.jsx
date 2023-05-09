import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav style={{ backgroundColor: "#A0D0DF", padding: "20px" }}>
        <Link to="/">Home</Link>
        <span>{"  |  "}</span>
       
        <Link to="/todoapp">To Do App</Link>
        <span>{"  |  "}</span>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
}
