import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
function SideBar(props) {
  const [menuOpen, setMenuOpen] = useState(props.menuOpen);

  useEffect(() => {
    var sidebar_nav = document.querySelectorAll(".aside_nav>li>a");
    if (sidebar_nav) {
      sidebar_nav.forEach((value) => {
        value.addEventListener("click", (event) => {
          if (event.target.closest("li").classList.contains("active")) {
            event.target.closest("li").classList.remove("active");
            if (event.target.nextElementSibling) {
              event.target.nextElementSibling.style.cssText = ``;
            }
          } else {
            sidebar_nav.forEach((value1) => {
              value1.parentElement.classList.remove("active");
              value1.parentElement.lastElementChild.style.cssText = ``;
            });
            event.target.closest("li").classList.add("active");
            if (event.target.nextElementSibling) {
              event.target.nextElementSibling.style.cssText = `height:${event.target.nextElementSibling.scrollHeight}px`;
            }
          }
        });
      });
    }
  }, []);

  const menuOpenFn = (e) => {
    setMenuOpen(e.currentTarget.dataset.id);
  };
  return (
    <aside className="panel_aside">
      <div className="brand">
        <span className="brand_icon">
          <i className="icon ion-md-home"></i>
        </span>
        <h3>Point of sale</h3>
        <Link to="#" id="panelClose_btn" onClick={() => props.asideToggle()}>
          <i className="icon ion-ios-close io-36"></i>
        </Link>
        <Link to="#" id="panelOpen_btn" onClick={() => props.asideToggle()}>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <Scrollbars style={{ height: "calc(100vh - 60px)" }} autoHide>
        <ul className="aside_nav">
          <li
            data-id="dashboard"
            className={`dropdown ${menuOpen === "dashboard" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="/admin">
              <i className="fas fa-tachometer-alt"></i>
              <span className="menu_title">Dashboard</span>
            </Link>
          </li>
          <li
            data-id="supplier"
            className={`dropdown ${menuOpen === "supplier" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-users"></i>
              <span className="menu_title">Supplier</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="/supplier/add">Add Supplier</Link>
              </li>
              <li>
                <Link to="/supplier/all">All Supplier</Link>
              </li>
              <li>
                <Link to="/supplier/add-transaction">Add Transaction</Link>
              </li>
              <li>
                <Link to="/supplier/transaction-histrory">All Transaction</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="product"
            className={`dropdown ${menuOpen === "product" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Product</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="/product/add">Add Product</Link>
              </li>
              <li>
                <Link to="/product/all">All Product</Link>
              </li>
              <li>
                <Link to="/product/category/">Category</Link>
              </li>
              <li>
                <Link to="/product/brand">Brand</Link>
              </li>
              <li>
                <Link to="/product/unit">Unit</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="business_type"
            className={`dropdown ${menuOpen === "business_type" ? "active" : ""
              }`}
            onClick={menuOpenFn}
          >
            <Link to="/business_type">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              <span className="menu_title">Business Type</span>
            </Link>
          </li>
          <li
            data-id="do_order"
            className={`dropdown ${menuOpen === "do_order" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-shopping-basket"></i>
              <span className="menu_title">DO Order</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li id="new_order">
                <Link to="/do-order/add">New Order</Link>
              </li>
              <li id="purchase_records">
                <Link to="/do-order/all">All Order</Link>
              </li>
              <li id="purchase_records">
                <Link to="/do-order/pending-order">Pending Order</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="purchase"
            className={`dropdown ${menuOpen === "purchase" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-shopping-basket"></i>
              <span className="menu_title">Purchase</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="/purchase/add">New Purchase</Link>
              </li>
              <li>
                <Link to="/purchase/all">All Purchase</Link>
              </li>
              <li>
                <Link to="#">Item Wise</Link>
              </li>
              <li>
                <Link to="#">Purchase Return</Link>
              </li>
              <li>
                <Link to="#">All Purchase Return</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="stock-transfer"
            className={`dropdown ${menuOpen === "stock-transfer" ? "active" : ""
              }`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-file-alt"></i>
              <span className="menu_title">Stock Transfer</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li id="terms">
                <Link to="#">Add Transfer</Link>
              </li>
              <li id="privacy">
                <Link to="#">All Transfer</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="stock"
            className={`dropdown ${menuOpen === "stock" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-layer-group"></i>
              <span className="menu_title">Stock</span>
            </Link>
          </li>

          <li
            data-id="damage-stock"
            className={`dropdown ${menuOpen === "damage-stock" ? "active" : ""
              }`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-layer-group"></i>
              <span className="menu_title">Damage Stock</span>
            </Link>
          </li>

          <li
            data-id="sale"
            className={`dropdown ${menuOpen === "sale" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Sale</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">Dealer Sale</Link>
              </li>
              <li>
                <Link to="#">Retail Sale</Link>
              </li>
              <li>
                <Link to="#">All Sale</Link>
              </li>
              <li>
                <Link to="#">Datewise Sale</Link>
              </li>
              <li>
                <Link to="#">SR Report</Link>
              </li>
              <li>
                <Link to="#">Sale Return</Link>
              </li>
              <li>
                <Link to="#">All Sale Return</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="damage-product"
            className={`dropdown ${menuOpen === "damage-product" ? "active" : ""
              }`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Damage Product</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">New Damage</Link>
              </li>
              <li>
                <Link to="#">All Damage</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="area"
            className={`dropdown ${menuOpen === "area" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Area</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">New Area</Link>
              </li>
              <li>
                <Link to="#">All Area</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="sr"
            className={`dropdown ${menuOpen === "sr" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">SR</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">New SR</Link>
              </li>
              <li>
                <Link to="#">All SR</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="party-sr"
            className={`dropdown ${menuOpen === "party-sr" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Party / SR</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">New Party / SR</Link>
              </li>
              <li>
                <Link to="#">All Party / SR</Link>
              </li>
              <li>
                <Link to="#">New Transaction</Link>
              </li>
              <li>
                <Link to="#">All Transaction</Link>
              </li>
            </ul>
          </li>

          <li
            data-id="due-list"
            className={`dropdown ${menuOpen === "due-list" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Due List</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">Cash Client Due</Link>
              </li>
              <li>
                <Link to="#">Due Collection List</Link>
              </li>
              <li>
                <Link to="#">Dealer Client Due</Link>
              </li>
              <li>
                <Link to="#">Company Due</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="free-product"
            className={`dropdown ${menuOpen === "free-product" ? "active" : ""
              }`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Free Product</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">New Product</Link>
              </li>
              <li>
                <Link to="#">All Product</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="ledger"
            className={`dropdown ${menuOpen === "ledger" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Ledger</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">Company Ledger</Link>
              </li>
              <li>
                <Link to="#">Party / SR ledger</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="report"
            className={`dropdown ${menuOpen === "report" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Report</span>
              <span className="menu_arrow">
                <i className="icon ion-ios-arrow-forward right"></i>
                <i className="icon ion-ios-arrow-down down"></i>
              </span>
            </Link>
            <ul>
              <li>
                <Link to="#">Purchase Report</Link>
              </li>
              <li>
                <Link to="#">Purchase Item Report</Link>
              </li>
              <li>
                <Link to="#">Sales Report</Link>
              </li>
              <li>
                <Link to="#">Sales Item Report</Link>
              </li>
              <li>
                <Link to="#">Cash Book</Link>
              </li>
            </ul>
          </li>
          <li
            data-id="privilege"
            className={`dropdown ${menuOpen === "privilege" ? "active" : ""}`}
            onClick={menuOpenFn}
          >
            <Link to="#">
              <i className="fas fa-cart-arrow-down"></i>
              <span className="menu_title">Privilege</span>
            </Link>
          </li>
        </ul>
      </Scrollbars>
    </aside>
  );
}

export default SideBar;
