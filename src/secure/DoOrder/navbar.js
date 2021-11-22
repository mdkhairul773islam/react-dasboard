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
        >
          New Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/do-order/all"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >
          All Order
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/do-order/pending-order"
          className={isActive =>
            (isActive ? "active" : "")
          }
        >
          Pending Order
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
