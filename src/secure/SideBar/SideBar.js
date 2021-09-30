import React from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <aside className="panel_aside">
      <div className="brand">
        <span className="brand_icon">
          <i className="icon ion-md-home"></i>
        </span>
        <h3>Point of sale</h3>
        <Link to="#" id="panelClose_btn" onClick={()=>props.asideToggle()}>
          <i className="icon ion-ios-close io-36"></i>
        </Link>
        <Link to="#" id="panelOpen_btn" onClick={()=>props.asideToggle()}>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <ul className="aside_nav">
        <li id="dashboard">
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i>
            <span className="menu_title">Dashboard</span>
          </Link>
        </li>
        <li id="purchase" className="dropdown">
          <Link to="#">
            <i className="fas fa-shopping-basket"></i>
            <span className="menu_title">Purchase</span>
            <span className="menu_arrow">
              <i className="icon ion-ios-arrow-forward right"></i>
              <i className="icon ion-ios-arrow-down down"></i>
            </span>
          </Link>
          <ul>
            <li id="purchase_new">
              <Link to="/register">Purchase new</Link>
            </li>
            <li id="purchase_records">
              <Link to="/login" href="">
                Records
              </Link>
            </li>
          </ul>
        </li>

        <li id="pages" className="dropdown">
          <Link to="#">
            <i className="fas fa-file-alt"></i>
            <span className="menu_title">Pages</span>
            <span className="menu_arrow">
              <i className="icon ion-ios-arrow-forward right"></i>
              <i className="icon ion-ios-arrow-down down"></i>
            </span>
          </Link>
          <ul>
            <li id="terms">
              <Link to="#">Terms and Condition</Link>
            </li>
            <li id="privacy">
              <Link to="#">Privacy policy</Link>
            </li>
          </ul>
        </li>

        <li id="stock">
          <Link to="#">
            <i className="fas fa-layer-group"></i>
            <span className="menu_title">Stock</span>
          </Link>
        </li>

        <li id="sale" className="dropdown">
          <Link to="#">
            <i className="fas fa-cart-arrow-down"></i>
            <span className="menu_title">Sale</span>
            <span className="menu_arrow">
              <i className="icon ion-ios-arrow-forward right"></i>
              <i className="icon ion-ios-arrow-down down"></i>
            </span>
          </Link>
          <ul>
            <li id="sale_new">
              <Link to="#">Sale new</Link>
            </li>
            <li id="sale_records">
              <Link to="#">Records</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
