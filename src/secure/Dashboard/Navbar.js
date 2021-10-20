import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <ul>
      <li>
        <Link to="#">Creat Now</Link>
      </li>
      <li>
        <Link to="#" className="active">
          Purchase All
        </Link>
      </li>
      <li>
        <Link to="#">Nav Three</Link>
      </li>
      <li>
        <Link to="#">Nav Four</Link>
      </li>
    </ul>
  );
}

export default Navbar;
