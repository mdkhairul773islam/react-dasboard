import React from "react";

function Navbar(props) {
  return (
    <ul>
      <li>
        <a href="">Creat Now</a>
      </li>
      <li>
        <a href="" className="active">
          Purchase All
        </a>
      </li>
      <li>
        <a href="">Nav Three</a>
      </li>
      <li>
        <a href="">Nav Four</a>
      </li>
    </ul>
  );
}

export default Navbar;
