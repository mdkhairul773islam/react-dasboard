import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
function SideBar(props) {
  const [menuOpen, setMenuOpen] = useState(props.menuOpen)

  useEffect(() => {
    var sidebar_nav = document.querySelectorAll(".aside_nav>li>a");
    if (sidebar_nav) {
      sidebar_nav.forEach((value) => {
        value.addEventListener('click', (event) => {
          if (event.target.closest('li').classList.contains('active')) {
            event.target.closest('li').classList.remove('active');
            if (event.target.nextElementSibling) {
              event.target.nextElementSibling.style.cssText = ``;
            }
          } else {
            sidebar_nav.forEach((value1) => {
              value1.parentElement.classList.remove('active');
              value1.parentElement.lastElementChild.style.cssText = ``;
            });
            event.target.closest('li').classList.add('active')
            if (event.target.nextElementSibling) {
              event.target.nextElementSibling.style.cssText = `height:${event.target.nextElementSibling.scrollHeight}px`;
            }
          }
        });
      });
    }
  }, [])


  const menuOpenFn = (e) => {
    setMenuOpen(e.currentTarget.dataset.id);
  }
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
          <li data-id="dashboard" className={`dropdown ${menuOpen === 'dashboard' ? 'active' : ''}`} onClick={menuOpenFn}>
            <Link to="/admin">
              <i className="fas fa-tachometer-alt"></i>
              <span className="menu_title">Dashboard</span>
            </Link>
          </li>
          <li data-id="business_type" className={`dropdown ${menuOpen === 'business_type' ? 'active' : ''}`} onClick={menuOpenFn}>
            <Link to="/business_type">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              <span className="menu_title">Business Type</span>
            </Link>
          </li>
          <li data-id="do_order" className={`dropdown ${menuOpen === 'do_order' ? 'active' : ''}`} onClick={menuOpenFn}>
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
                <Link to="/do-order/all">
                  All Order
                </Link>
              </li>
              <li id="purchase_records">
                <Link to="/do-order/pending-order">
                  Pending Order
                </Link>
              </li>
            </ul>
          </li>

          <li data-id="purchase" className={`dropdown ${menuOpen === 'purchase' ? 'active' : ''}`} onClick={menuOpenFn}>
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
                <Link to="/purchase/add">New Purchase</Link>
              </li>
              <li id="purchase_records">
                <Link to="/purchase/all">
                  All Purchase
                </Link>
              </li>
            </ul>
          </li>

          <li data-id="pages" className={`dropdown ${menuOpen === 'pages' ? 'active' : ''}`} onClick={menuOpenFn}>
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

          <li data-id="stock" className={`dropdown ${menuOpen === 'stock' ? 'active' : ''}`} onClick={menuOpenFn}>
            <Link to="#">
              <i className="fas fa-layer-group"></i>
              <span className="menu_title">Stock</span>
            </Link>
          </li>

          <li data-id="sale" className={`dropdown ${menuOpen === 'sale' ? 'active' : ''}`} onClick={menuOpenFn}>
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
      </Scrollbars>
    </aside>
  );
}

export default SideBar;
