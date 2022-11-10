import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
    <ul className="ullist">
      <li><h1 className="shopname"> <Link to="/">Mini Ecommerce</Link></h1></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="orders">Orders</Link></li>
    </ul>

    </div>
  );
};

export default Navbar;