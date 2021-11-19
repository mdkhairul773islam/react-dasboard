import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <ul>
      <li>
        <Link to="/purchase/add">Creat Now</Link>
      </li>
      <li>
        <Link to="/purchase/all" className="active">
          Purchase All
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
