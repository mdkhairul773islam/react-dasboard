import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <ul> 
      <li>
        <NavLink
          to="/do-order/add"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >Add New Order</NavLink>
      </li>
      <li>
        <NavLink
          to="/do-order/all"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >
          DO Order All
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
