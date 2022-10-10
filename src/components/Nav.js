import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://i.pinimg.com/736x/2f/7f/dc/2f7fdcc294c90e1a98cc32e813f1723b.jpg"
          alt="logo"
        />
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToembG52beaW5VYQN53BEYviAeFVAyMZu4DA&usqp=CAU"
          alt="logo"
        />
        <h2>
          4<span>PF</span> G-<span>Store</span>
        </h2>
      </div>

      <div className="nav-links">
        <NavLink to={"/"} exact="true">
          Home
        </NavLink>
        <NavLink to={"/new"} exact="true">
          New Grocery
        </NavLink>
        <NavLink to={"/saved-grocery"} exact="true">
          Saved Groceries
        </NavLink>
      </div>
    </div>
  );
}
export default Nav;