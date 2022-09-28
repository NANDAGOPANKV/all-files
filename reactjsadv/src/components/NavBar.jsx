import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        height: "30px",
      }}
      className="na"
    >
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/form">Form</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}
