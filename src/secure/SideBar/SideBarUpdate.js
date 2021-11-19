import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

import { Scrollbars } from "react-custom-scrollbars";
import { Navigation } from "react-minimal-side-navigation";
import sideBarItem from "./sideBarItem";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function SideBar(props) {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => { }, []);
  return (
    <aside className="panel_aside" id="panel_aside">
      <div className="brand">
        <span className="brand_icon">
          <i className="icon ion-md-home"></i>
        </span>
        <h3>Point of Sale</h3>
        <Link to="#" id="panelClose_btn" onClick={() => props.asideToggle()}>
          <i className="icon ion-ios-close io-36"></i>
        </Link>
        <Link to="#" id="panelOpen_btn" onClick={() => props.asideToggle()}>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <Scrollbars style={{ height: "100vh" }} autoHide>
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={sideBarItem}
        />
      </Scrollbars>
    </aside>
  );
}

export default SideBar;
