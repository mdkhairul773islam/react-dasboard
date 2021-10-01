import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authentication/actionCreator";

function TopHeader(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const handlelogout = () => {
    dispatch(logOut());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <nav className="main_nav">
      <ul className="function_menu">
        <li className="user_dropdown">
          <Link to="#" onClick={() => props.asideToggle()}>
            <i className="icon ion-ios-menu io-23"></i>
          </Link>
        </li>
      </ul>

      <ul className="user_menu">
        <li className="user_dropdown">
          <Link to="#" className="menu-button">
            <i className="icon ion-ios-mail io-21"></i>
          </Link>
          <ul className="sub_menu">
            <li className="head">
              <Link to="#">
                <h6>You have 2 Message</h6>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>Awesome aminmate.css</span>
                <small>10 minit ago</small>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>Awesome aminmate.css</span>
                <small>10 minit ago</small>
              </Link>
            </li>
          </ul>
        </li>

        <li className="user_dropdown">
          <Link to="#" className="menu-button">
            <img
              src={require("../../dist/images/user/02.png").default}
              alt=""
            />
          </Link>
          <ul className="sub_menu">
            <li className="head">
              <Link to="#">
                <h6>Username</h6>
                <small>Supperadmin</small>
              </Link>
            </li>
            <li>
              <Link to="#">Settings</Link>
            </li>
            <li>
              <Link to="#">Profile</Link>
            </li>
            <li>
              <Link to="#" onClick={handlelogout}>
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default TopHeader;
