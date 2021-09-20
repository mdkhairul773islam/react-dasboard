import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <aside className="panel_aside">
            <div className="brand">
                <span className="brand_icon"><i className="icon ion-md-home"></i></span>
                <h3>Freelance It Lab</h3>
                <a href="#" id="panelClose_btn">
                    <i className="icon ion-ios-close io-36"></i>
                </a>
                <a href="#" id="panelOpen_btn">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <ul className="aside_nav">
                <li id="dashboard">
                    <Link to="/dashboard">
                        <i className="fas fa-tachometer-alt"></i>
                        <span className="menu_title">Dashboard</span>
                    </Link>
                </li>
                <li id="purchase" className="dropdown">
                    <a href="#">
                        <i className="fas fa-shopping-basket"></i>
                        <span className="menu_title">Purchase</span>
                        <span className="menu_arrow">
                            <i className="icon ion-ios-arrow-forward right"></i>
                            <i className="icon ion-ios-arrow-down down"></i>
                        </span>
                    </a>
                    <ul>
                        <li id="purchase_new"><Link to="/register">Purchase new</Link></li>
                        <li id="purchase_records"><Link to="/login" href="">Records</Link></li>
                    </ul>
                </li>

                <li id="pages" className="dropdown">
                    <a href="#">
                        <i className="fas fa-file-alt"></i>
                        <span className="menu_title">Pages</span>
                        <span className="menu_arrow">
                                <i className="icon ion-ios-arrow-forward right"></i>
                                <i className="icon ion-ios-arrow-down down"></i>
                            </span>
                    </a>
                    <ul>
                        <li id="terms"><a href="#">Terms and Condition</a></li>
                        <li id="privacy"><a href="#">Privacy policy</a></li>
                    </ul>
                </li>

                <li id="stock">
                    <a href="#">
                        <i className="fas fa-layer-group"></i>
                        <span className="menu_title">Stock</span>
                    </a>
                </li>

                <li id="sale" className="dropdown">
                    <a href="#">
                        <i className="fas fa-cart-arrow-down"></i>
                        <span className="menu_title">Sale</span>
                        <span className="menu_arrow">
                                <i className="icon ion-ios-arrow-forward right"></i>
                                <i className="icon ion-ios-arrow-down down"></i>
                            </span>
                    </a>
                    <ul>
                        <li id="sale_new"><a href="">Sale new</a></li>
                        <li id="sale_records"><a href="">Records</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;