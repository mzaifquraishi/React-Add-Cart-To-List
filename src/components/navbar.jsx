import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Cart
        <span className="m-2"> {totalCounters}</span>
      </Link>
      <Link className="navbar-brand" to="/about">
        About Us
      </Link>
    </nav>
  );
};

export default Navbar;
