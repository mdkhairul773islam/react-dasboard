import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <ul>
      <li>
        <NavLink
          to="/purchase/add"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >Creat Now</NavLink>
      </li>
      <li>
        <NavLink
          to="/purchase/all"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >
          Purchase All
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
